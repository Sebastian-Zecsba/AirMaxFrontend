import { ProductsRespondeAdmin } from "@/schemas"
import { isValidPage } from "@/utils"
import { redirect } from "next/navigation"
import ProductsTable from "../../../components/product/ProductsTable"
import Pagination from "../../../components/ui/Pagination"
import Headings from "../../../components/ui/Headings"
import Link from "next/link"
import Spinner from "../../../components/ui/Spinner"

async function getProducts(take: number, skip: number) {
    const url = `${process.env.API_URL}/products?take=${take}&skip=${skip}`
    const req = await fetch(url)
    const response = await req.json()
    const data = ProductsRespondeAdmin.parse(response)
    return {
      products: data.products,
      total: data.total
    }
}

type SearchParams = Promise<{page: string}>

export default async function ProductPage({searchParams} : {searchParams: SearchParams}) {

    const { page } = await searchParams
    if(!isValidPage(+page)) redirect('/admin/products?page=1')
      
    const productsPerPage = 8
    const skip = (+page - 1) * productsPerPage

    const {products, total} = await getProducts(productsPerPage, Number(skip))

    const totalPages = total > 0 ? Math.ceil(total / productsPerPage) : 1
    if(+page > totalPages) redirect('/admin/products?page=1')

  return (
    <div className="lg:w-[85%] sm:w-[100%] m-auto">

      <div className="flex justify-between items-center flex-row-reverse">
        <Link 
          href='/admin/products/new'
          className="color-blue text-white p-2 rounded"
        >
          Agregar Producto
        </Link>
      
        <Headings>Administar productos</Headings>
      </div>

      {products.length === 0 ? (
        <div className="flex justify-center items-center h-[500px]">
          <p className="font-bold text-2xl">Aun no has agregado productos</p>
        </div>
       ) : 
        <ProductsTable 
          products={products}
        />
      }

      <Pagination 
        page={+page}
        totalPages={totalPages}
        baseUrl={'/admin/products'}
      />

    </div>
  )
}

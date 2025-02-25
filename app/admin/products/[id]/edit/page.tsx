import { ProductSchema } from "@/schemas"
import Link from "next/link"
import { notFound } from "next/navigation"
import Headings from "../../../../../components/ui/Headings"
import EditProductForm from "../../../../../components/product/EditProductForm"
import ProductForm from "../../../../../components/product/ProductForm"

async function  getProducts(id: string) {
    const url = `${process.env.API_URL}/products/${id}`
    const req = await fetch(url)
    const json = await req.json()
    if(!req.ok){
        notFound()
    }
    const product = ProductSchema.parse(json)
    return product
}

type Params = Promise<{id: string}>

export default async function EditProductPage({params} : {params: Params}) {

    const { id } = await params;
    const product = await getProducts(id)

  return (
    <div className="lg:w-[85%] sm:w-[100%] m-auto p-5">
        <Link
            href='/admin/products?page=1'
            className="rounded bg-green-400 font-bold py-2 px-10"
        >Volver</Link>

        <Headings> Editar Producto: {product.name}</Headings>

        <EditProductForm> 
            <ProductForm 
              product={product}
            />
        </EditProductForm>

    </div>
  )
}

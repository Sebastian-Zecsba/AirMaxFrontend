import { CategorySchema, ProductSchema } from "@/schemas"
import Link from "next/link"
import { notFound } from "next/navigation"
import Headings from "../../../../../components/ui/Headings"
import EditProductForm from "../../../../../components/product/EditProductForm"
import ProductForm from "../../../../../components/product/ProductForm"
import CategoryForm from "../../../../../components/categorias/CategoryForm"
import EditCategoryForm from "../../../../../components/categorias/EditCategoryForm"

async function  getCategoires(id: string) {
    const url = `${process.env.API_URL}/categories/${id}`
    const req = await fetch(url)
    const json = await req.json()
    if(!req.ok){
        notFound()
    }
    const product = CategorySchema.parse(json)
    return product
}

type Params = Promise<{id: string}>

export default async function EditCategoryPage({params} : {params: Params}) {

    const { id } = await params;
    const category = await getCategoires(id)

  return (
    <div className="lg:w-[85%] sm:w-[100%] m-auto p-5">
        <Link
            href='/admin/categories'
            className="rounded bg-green-400 font-bold py-2 px-10"
        >Volver</Link>

        <Headings> Editar Categoria: {category.name}</Headings>

        <EditCategoryForm>
            <CategoryForm 
              category={category}
            />
        </EditCategoryForm>


    </div>
  )
}

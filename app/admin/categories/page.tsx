import Link from "next/link";
import Headings from "../../../components/ui/Headings";
import CategoryTable from "../../../components/categorias/CategoryTable";

async function getCategories() {
  const url = `${process.env.API_URL}/categories`
  const req = await fetch(url, { cache: 'no-cache'})
  const json = await req.json()
  return json
}


export default async function NewCategory() {

  const categories = await getCategories()

  return (
    <div className="lg:w-[85%] sm:w-[100%] m-auto">
      <div className="flex justify-between items-center flex-row-reverse">
        <Link 
          href='/admin/categories/new'
          className="color-blue text-white p-2 rounded"
        >
          Agregar Categoria
        </Link>
      
        <Headings>Administar Categorias</Headings>
      </div>
      {categories.length === 0 ? (
        <div className="flex justify-center items-center h-[500px]">
         <p className="font-bold text-2xl">Aun no has agregado categorias</p>
        </div>
      ) : (
        <CategoryTable 
          categories={categories}
        />
      )}
    </div>
  )
}

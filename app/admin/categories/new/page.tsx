import Link from "next/link";
import Headings from "../../../../components/ui/Headings";
import AddCategoryForm from "../../../../components/categorias/AddCategoryForm";
import CategoryForm from "../../../../components/categorias/CategoryForm";


export default async function page() {

  

  return (
    <div className="lg:w-[85%] sm:w-[100%] m-auto p-5">
      <div className="flex justify-between items-center flex-row-reverse">
          <Link 
              href='/admin/categories'
              className="color-blue text-white p-2 rounded"
          >
              Volver
          </Link>
          
          <Headings>Nueva Categoria</Headings>
      </div>

      <AddCategoryForm>
        <CategoryForm />
      </AddCategoryForm>
    </div>
  )
}

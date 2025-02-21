import { Category } from "@/schemas";
import { revalidatePath } from "next/cache";

export default function DeleteCategoryForm({categoryId} : {categoryId: Category['id']}) {

  const handleDelete = async () => {
    'use server'
    const url = `${process.env.API_URL}/categories/${categoryId}`
    const req = await fetch(url, {
      method: 'DELETE'
    })
    await req.json()
    revalidatePath('/admin/categories')
  }

  return (
    <form
       action={handleDelete}
    >
      <input 
            type="submit"
            className="text-red-500 hover:text-red-800 cursor-pointer" 
            value='Eliminar'
        />
    </form>
  )
}

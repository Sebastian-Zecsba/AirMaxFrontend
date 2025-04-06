'use client'

import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { addCategory } from "../../actions/add-category-action"
import { toast } from "react-toastify"

export default function AddCategoryForm({children} : {children: React.ReactNode}) {

  const router = useRouter()
  const [ state, dispatch ] = useActionState(addCategory, {
      errors: [],
      success: ''
  })

  useEffect(() => {
    if(state.errors){
        state.errors.forEach(error => toast.error(error))
    }
    if(state.success){
        toast.success(state.success)
        router.push('/admin/categories')
    }
}, [state])

  return (
    <form
        className="space-y-5"
        action={dispatch}
    >
        {children}
        <input 
            type="submit"
            className="roudned bg-green-400 font-bold py-2 w-full cursor-pointer" 
            value="Agregar Producto"
        />
    </form>
  )
}

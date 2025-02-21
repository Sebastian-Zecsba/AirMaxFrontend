'use client'

import { useParams, useRouter } from "next/navigation"
import { updateCategory } from "../../actions/updated-category-action"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"


export default function EditCategoryForm({children} : {children: React.ReactNode}){

    const router = useRouter()
    const { id } = useParams<{id: string}>()

    const updateCategoryWithId = updateCategory.bind(null, +id)
    const [ state, dispatch ] = useActionState(updateCategoryWithId, {
        errors: [],
        success: ''
    })

    useEffect(() => {
        if(state.errors){
            state.errors.forEach(error => toast.error(error))
        }
        if(state.success){
            toast.success(state.success)
            router.push('/admin/products')
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
                value="Guardar Cambios"
            />
        </form>
      )
}
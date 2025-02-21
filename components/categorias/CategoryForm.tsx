import { Category } from '@/schemas'
import React from 'react'

export default function CategoryForm({category} : {category?: Category}) {
  return (
    <div className="space-y-2 ">
        <label
        htmlFor="name"
        className="block"
        >Nombre Categoria</label>
        <input
        id="name"
        type="text"
        placeholder="Nombre Categoria"
        className="border border-gray-300 w-full p-2"
        name="name"
        defaultValue={category?.name}
        />
    </div>
  )
}

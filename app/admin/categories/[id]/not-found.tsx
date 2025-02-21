import React from 'react'
import Headings from '../../../../components/ui/Headings'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='text-center '>
        <Headings>Categoria no encontrada</Headings>
        <p>Tal vez quieras volver a {' '}<Link className='text-green-400' href='/admin/categories'> Categorias</Link> </p>
    </div>
  )
}

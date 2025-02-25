import Link from 'next/link'
import React from 'react'
import Headings from '../../../../components/ui/Headings'
import AddProductForm from '../../../../components/product/AddProductForm'
import ProductForm from '../../../../components/product/ProductForm'

export default function page() {
  return (
    <div className="lg:w-[85%] sm:w-[100%] m-auto p-5">
        <div className="flex justify-between items-center flex-row-reverse">
            <Link 
                href='/admin/products?page=1'
                className="color-blue text-white p-2 rounded"
            >
                Volver
            </Link>
            
            <Headings>Nuevo Producto</Headings>
        </div>

        <AddProductForm>
          <ProductForm />
        </AddProductForm>

    </div>
  )
}

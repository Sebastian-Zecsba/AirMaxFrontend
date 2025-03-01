import { formatCurrency, getImagePath } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import DeleteProductForm from "./DeleteProductForm"
import ShowMainProduct from "./ShowMainProduct"

async function getCategories() {
    const url = `${process.env.API_URL}/categories`
    const req = await fetch(url)
    const json = await req.json()
    return json
}

export default async function ProductsTable({products} : {products: any[]}) {
    const categories = await getCategories()
    console.log(products)
    return (
      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="mt-8 flow-root ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 p-10 ">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Imagen
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Producto
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Categoria
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Precio
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map(product => (
                      <tr key={product.id} className="hover:bg-gray-300">
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Image 
                                src={getImagePath(product.images[0])}
                                alt={`${product.name} Air Max Pneumatic`}
                                width={120}
                                height={120}
                                priority
                            />
                        </td>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {product.name}
                        </td>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {categories.find((c: any) => c.id === product.categoryId)?.name || "Sin categoría"}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                            {formatCurrency(product.price)}
                        </td>
                        <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 ">
                          <div className='flex gap-5 justify-end items-center p-4'>
                            <ShowMainProduct 
                                productId={product.id}
                            />

                            <Link
                                href={`/admin/products/${product.id}/edit`}
                                className="text-indigo-600 hover:bg-indigo-800 hover:text-white p-2 rounded-[3px]"
                            >Editar <span className="sr-only">{product.name}</span></Link>

                            <DeleteProductForm 
                              productId={product.id}
                            />
                          </div>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
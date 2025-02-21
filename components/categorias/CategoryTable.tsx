import { formatCurrency } from "@/utils"
import Image from "next/image"
import Link from "next/link"
import DeleteCategoryForm from "./DeleteCategoryForm"

export default function CategoryTable({categories} : {categories: any[]}) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 mt-10">
        <div className="mt-8 flow-root ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 p-5 ">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Name
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {categories.map(category => (
                      <tr key={category.id} className="hover:bg-gray-300">
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                          {category.name}
                        </td>

                        <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0 ">
                          <div className='flex gap-5 justify-end items-center p-4'>
                            <Link
                                href={`/admin/categories/${category.id}/edit`}
                                className="text-indigo-600 hover:bg-indigo-800 hover:text-white p-2 rounded-[3px]"
                            >Editar <span className="sr-only">{category.name}</span></Link>

                            <DeleteCategoryForm 
                              categoryId={category.id}
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
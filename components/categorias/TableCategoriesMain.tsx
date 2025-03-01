'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatCurrency, getImagePath, isValidPage } from "@/utils"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import Spinner from "../ui/Spinner"
import Pagination from "../ui/Pagination"

export default function CategoriesContent() {
  const [categories, setCategories] = useState<any[]>([])
  const [categoryId, setCategoryId] = useState<string | undefined>("all")
  const [products, setProducts] = useState<any[]>([]) 
  const [total, setTotal] = useState<number>(0)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  const router = useRouter()
  const searchParams = useSearchParams()
  const pageParam = searchParams.get('page')
  const currentPage = Number(pageParam) || 1

  if (!isValidPage(currentPage)) {
    redirect('/categories?page=1')
  }

  const productsPerPage = 8
  const skip = (currentPage - 1) * productsPerPage


  useEffect(() => {
    const getCategories = async () => {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`
        const req = await fetch(url)
        const json = await req.json()
        setCategories(json)
      } catch (error) {
        console.error('Error al obtener categorías:', error)
      }
    }
    getCategories()
  }, [])

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        const url =
          categoryId === "all"
            ? `${process.env.NEXT_PUBLIC_API_URL}/products?take=${productsPerPage}&skip=${skip}&search=${search}`
            : `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`
        const req = await fetch(url)
        const json = await req.json()

        setTotal(json.total)
        setProducts(json.products || [])
      } catch (error) {
        console.error('Error al obtener productos:', error)
      }finally{
        setLoading(false)
      }
    }
    getProducts()
  }, [categoryId, skip, search])

  const totalPages = Math.ceil(total / productsPerPage)
  return (
    <div className="lg:w-[85%] sm:w-[100%] mx-auto my-8 ">
      <div className="flex flex-wrap gap-3 sm:justify-between justify-center  w-[85%] m-auto">
        <select
          onChange={(e) => setCategoryId(e.target.value)}
          value={categoryId}
          className="w-60 border rounded-2xl p-2"
        >
          <option value="all">Todos</option>
          {categories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
  
        {categoryId === 'all' && (
          <form className="flex">
            <input 
              type="text" 
              value={search} 
              onChange={e => {
                setSearch(e.target.value)
                router.push(`/categories?page=1&search=${encodeURIComponent(e.target.value)}`);
              }} 
              className="color-blue opacity-40 text-white p-3 rounded-l-lg placeholder:text-white"
              placeholder="Buscar..."
            />
            <div className="color-blue p-3 rounded-r-lg">
              <Image 
                src='/Search.png'
                alt="Buscar Air Max Pneumatic"
                width={30}
                height={30}
              />
            </div>
          </form>
        )}
      </div>
  
      {loading ? (
        <div className="flex justify-center items-center h-[500px]">
          <Spinner />
        </div>
      ) : (
        <>
          {products.length > 0 ? (
            <div>
              <section className="flex justify-center items-center mt-10 flex-wrap gap-5 lg:gap-9 ">
                {products.map((product: any) => {
                  const categoryName =
                    categoryId !== "all"
                      ? categories.find((cat: any) => cat.id === Number(categoryId))?.name || "Sin categoría"
                      : product.category?.name || "Sin categoría"
  
                  return (
                    <Link href={`/products/${product.id}`} key={product.id}>
                      <div className="flex flex-col items-center w-72 lg:w-80 min-h-96 px-4 color-blue rounded-2xl">
                      <div className="bg-white relative w-72 h-72 lg:w-80 lg:h-80 opacity-80">
                        <Image
                          src={getImagePath(product.images[0])}
                          alt={`${product.name} Air Max Pneumatic`}
                          fill
                          className="object-cover object-center rounded-t-2xl"
                        />
                      </div>

                        <div className="p-5 flex flex-col justify-between items-start w-full flex-1">
                          <div>
                            <h1 className="text-white font-medium mb-2 text-xl">
                              {product.name}
                            </h1>
                            {/* <p className="text-white my-1">
                              Precio: <span className="font-bold">${formatCurrency(product.price)}</span>
                            </p> */}
                            <p className="text-white line-clamp-3">{product.description}</p>
                          </div>
                          <p className="text-white mt-4"> Categoria: <span className="font-bold">{categoryName}</span></p>
                        </div>
                      </div>
                    </Link>

                  )
                })}
              </section>
            </div>
          ) : (
            <p className="text-center mt-10 text-black">No se encontraron productos.</p>
          )}
        </>
      )}
  
      {categoryId === 'all' && !loading && (
        <Pagination 
          page={currentPage}
          totalPages={totalPages}
          baseUrl={'/categories'}
        />
      )}
      
    </div>
  )  
}

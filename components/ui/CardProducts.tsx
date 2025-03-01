import { formatCurrency, getImagePath } from "@/utils";
import Image from "next/image";
import Link from "next/link";

async function getProducts() {
    const url = `${process.env.API_URL}/products`
    const req = await fetch(url, {cache: 'no-store'})
    const json = await req.json()
    return json
}

export default async function CardProducts() {

    const { products } = await getProducts()
    const productsFiltered = products?.filter((product : any) => product.show == true)
    console.log(productsFiltered)

  return (
    <section className="flex justify-center items-center mt-20 flex-wrap gap-5 lg:gap-9 ">
        {productsFiltered.map((product : any) => (
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
                <p className="text-white mt-4">Categoria: <span className="font-bold">{product.category.name}</span></p>
              </div>
            </div>
          </Link>
        ))}
    </section>
  )
}

import { ProduchsResponsechema } from "@/schemas"
import { formatCurrency, getImagePath } from "@/utils"
import Image from "next/image"
import Link from "next/link"

type Params = { productId: string }

async function getProductById(id: number) {
  const url = `${process.env.API_URL}/products/${id}`
  const req = await fetch(url)
  const data = await req.json() 
  const json = ProduchsResponsechema.parse(data) 
  return json
}

async function getProducts(categoryId: number) {
  const url = `${process.env.API_URL}/categories/${categoryId}`
  const req = await fetch(url)
  const data = await req.json() 
  return data
}

export default async function Page({ params }: { params: Params }) {
  const { productId } = params
  const product = await getProductById(+productId)
  const productsRelated = await getProducts(product.categoryId)

  const relatedProducts = productsRelated.products.filter((p: any) => p.id !== product.id)

  const shuffledRelatedProducts = [...relatedProducts].sort(() => Math.random() - 0.5)
  const maxToShow = 4
  const relatedProductsToShow = shuffledRelatedProducts.slice(0, maxToShow)
  
  return (
    <main className="lg:w-[85%] w-full mx-auto py-8 flex flex-col gap-8">

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_2fr] w-[80%] m-auto">

        <div className="flex flex-col gap-4 ">
          <h1 className="text-3xl text-center sm:text-left font-bold">{product.name}</h1>
          <Image
             src={getImagePath(product.image)}
             alt={`${product.name} Air Max Pneumatic`}
            className="color-blue rounded-2xl m-auto sm:m-0"
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col gap-4 justify-center px-4">
          <p className="text-lg">{product.description}</p>
          <p className="text-lg">Precio: <span className="font-bold">${formatCurrency(product.price)}</span></p>
          <p className="text-lg">Categoria: <span className="font-bold">{productsRelated.name}</span></p>
          <a
            href="https://wa.link/kn6qml"
            className="bg-green-500 flex p-2 items-center gap-2 rounded-xl cursor-pointer text-white text-lg w-max"
            target="_blank"
          >
            <Image
              src="/whatsappWhite.png"
              alt="Air Max"
              width={30}
              height={30}
            />
            Información o soporte
          </a>
        </div>
      </div>

      <section className="mt-8 mx-auto ">
        <h2 className="text-2xl font-bold mb-4 text-center sm:text-left m-4">
          Productos Similares
        </h2>
        <div className="flex flex-wrap gap-5 justify-center sm:justify-start m-4">
          {relatedProductsToShow.map((relatedProduct: any) => (
            <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id}>
              <div className="flex flex-col items-center w-72 lg:w-80 min-h-72 px-4 color-blue rounded-2xl">
                <div className="bg-white w-72 lg:w-80 opacity-80">
                  <Image
                    src={getImagePath(relatedProduct.image)}
                    alt={`${relatedProduct.name} Air Max Pneumatic`}
                    width={200}
                    height={200}
                    className="m-auto"
                  />
                </div>
                <div className="p-5 flex flex-col items-start w-full">
                  <div className="flex flex-col justify-between w-full">
                    <h3 className="text-white font-medium mb-2 text-xl">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-white">
                      Precio: <span className="font-bold">
                        ${formatCurrency(relatedProduct.price)}
                      </span>
                    </p>
                  </div>
                  <p className="text-white line-clamp-3">{relatedProduct.description}</p>
                  <p className="text-white mt-4">{productsRelated.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

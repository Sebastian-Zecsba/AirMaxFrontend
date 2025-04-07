import { Product } from "@/schemas"
import UploadProductImage from "./UploadProductImage"

async function getCategories() {
    const url = `${process.env.API_URL}/categories`
    const req = await fetch(url, { cache: 'no-cache'})
    const json = await req.json()
    return json
}

export default async function ProductForm({product} : {product?: Product}) {

    const categories = await getCategories()

  return (
      <>
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block"
          >Nombre Producto</label>
          <input
            id="name"
            type="text"
            placeholder="Nombre Producto"
            className="border border-gray-300 w-full p-2"
            name="name"
            defaultValue={product?.name}
          />
        </div>
  
        <div className="space-y-2 ">
          <label
            htmlFor="price"
            className="block"
          >Precio</label>
          <input
            id="price"
            type="number"
            placeholder="Precio Producto"
            className="border border-gray-300 w-full p-2"
            name="price"
            min={0}
            defaultValue={product?.price}
          />
        </div>
  
        <div className="space-y-2 ">
          <label
            htmlFor="description"
            className="block"
          >Descripción</label>
          <input
            id="description"
            type="text"
            placeholder="Descripcion"
            className="border border-gray-300 w-full p-2"
            name="description"
            min={0}
            defaultValue={product?.description}
          />
        </div>
  
        <div className="space-y-2 ">
          <label
            htmlFor="categoryId"
            className="block"
          >Categoría</label>
          <select
            id="categoryId"
            className="border border-gray-300 w-full p-2 bg-white"
            name="categoryId" 
            defaultValue={product?.categoryId}
          >
            <option value="">Seleccionar Categoría</option>
                {categories.map((category: any) => (
                    <option key={category.id} value={category.id}> {category.name} </option>
                ))}
          </select>
        </div>

        <UploadProductImage 
          currentImage={product?.images}
        />
      </>
  )
}

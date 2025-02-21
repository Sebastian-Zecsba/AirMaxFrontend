"use client"
import { useState, useEffect } from "react"

export default function ShowMainProduct({ productId }: { productId: string }) {
  const [show, setShow] = useState(false)

  // Al montar el componente, se obtiene el estado real del producto
  useEffect(() => {
    async function fetchProduct() {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`;
      const res = await fetch(url);
      if (res.ok) {
         const product = await res.json();
         setShow(product.show);
      } else {
         console.error("Error al obtener el producto");
      }
    }
    fetchProduct();
  }, [productId]);

  async function handleShow() {
    const newShow = !show; 
    const url = `${process.env.NEXT_PUBLIC_API_URL}/products/updatedShow/${productId}`;
    const req = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ show: newShow })
    });

    if (req.ok) {
      console.log("Actualización exitosa:", newShow);
      setShow(newShow);
    } else {
      console.error("Error al actualizar el producto");
    }
  }

  return (
    <form>
      {show
        ? (<input onClick={handleShow} className="cursor-pointer color-blue text-white p-2 rounded " value="Mostrando" type="button" />)
        : (<input onClick={handleShow} className="cursor-pointer hover:bg-blue-400 p-2 rounded" value="Mostrar" type="button" />)
      }
    </form>
  )
}

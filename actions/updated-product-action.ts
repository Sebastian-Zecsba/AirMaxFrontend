"use server"

import { ErrorResponseSchema, Product, ProductFormSchema } from "@/schemas"

type ActionStateType = {
    errors: string[],
    success: string
}

export async function updatedProduct(productId: Product['id'], prevState: ActionStateType, formData: FormData) {

    const images = [];
    for (let i = 0; i < 3; i++) {
        const img = formData.get(`images[${i}]`);
        if (img) images.push(img);
    }

    const product = ProductFormSchema.safeParse({
        name: formData.get('name'),
        price: Number(formData.get('price')), // Convertimos a número
        images: images, // Ahora es un arreglo
        show: formData.get('show') ? formData.get('show') === "true" : false,
        description: formData.get('description'),
        categoryId: formData.get('categoryId')
    });

    if(!product.success){
        return {
            errors: product.error.issues.map(issue => issue.message),
            success: ''
        }
    }

    const url = `${process.env.API_URL}/products/${productId}`
    const req = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product.data)
    })

    const json = await req.json()

    if(!req.ok){
        const errors = ErrorResponseSchema.parse(json)
        return { 
            errors: errors.message.map(issue => issue),
            success: '' 
        }
    }
    
    return {
        errors: [],
        success: 'Producto Editado Correctamente'
    }
}
import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.string(),
  description: z.string(),
  show: z.boolean(),
  price: z.coerce.number(),
  categoryId: z.number(),
});

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const CategoryWithProductsResponseSchema = CategorySchema.extend({
  products: z.array(ProductSchema)
})

export const ProductsRespondeAdmin = z.object({
  products: z.array(ProductSchema),
  total: z.number()
})

export const ErrorResponseSchema = z.object({
  message: z.array(z.string()),
  error: z.string(),
  statusCode: z.number()
})

export const ProductFormSchema = z.object({
  name: z.string()
          .min(1, {message: 'El Nombre del Producto no puede ir vacio'}),
  description: z.string()
          .min(1, {message: 'La descripcion del Producto no puede ir vacio'}),
  image: z.string({message: 'La imagen es obligatoria'}),
  show: z.boolean(),
  price: z.coerce.number({message: 'Precio no válido'})
          .min(1, {message: 'El Precio debe ser mayor a 0'}),
  categoryId: z.coerce.number({message: 'La Categoria no es válida'})
})

export const CategoryFormSchema = z.object({
  name: z.string()
          .min(1, {message: 'El nombre de la categoria no puede ir vacia'})
})

export const ProduchsResponsechema = ProductSchema

export type CategoryWithProducts = z.infer<typeof CategoryWithProductsResponseSchema>
export type Product = z.infer<typeof ProductSchema>
export type Category = z.infer<typeof CategorySchema>


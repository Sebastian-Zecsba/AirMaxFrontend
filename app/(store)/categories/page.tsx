'use client'
import { Suspense } from "react"
import CategoriesContent from "../../../components/categorias/TableCategoriesMain"
import Spinner from "../../../components/ui/Spinner"

export default function Categories() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-[500px]"><Spinner /></div>}>
      <CategoriesContent />
    </Suspense>
  )
}
'use client'
import type { Product } from '@/redux/features/products/productSlice'

interface IProductDescriptionProps {
  selectedProduct: Product | null
}

export default function ProductDescription({ selectedProduct }: IProductDescriptionProps) {
  if (!selectedProduct) return null
  return (
    <div className="max-[900px]:max-w-[600px] mx-auto ">
      <div className="">{selectedProduct.fullDescription}</div>
      <div className="text-sm xl:text-lg mt-3 mb-3">
        <span className=" font-bold">Inhaltstoffe: </span>
        <span>{selectedProduct.composition}</span>
      </div>
      <span className="text-gray-500 font-light text-[13px] xl:text-lg leading-relaxed mt-3">
        Unser handgemachtes Naturseifenstück wird ausschließlich aus hochwertigen pflanzlichen Ölen
        und reinen ätherischen Ölen hergestellt.
      </span>
    </div>
  )
}

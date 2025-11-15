'use client'
import type { Product } from '@/redux/features/products/productSlice'

interface IProductInfoProps {
  selectedProduct: Product | null
}

export default function ProductInfo({ selectedProduct }: IProductInfoProps) {
  if (!selectedProduct) return null
  return (
    <div>
      <h3 className="font-extrabold mb-1 text-3xl  xl:mb-2 xl:text-5xl">
        {selectedProduct?.title}
      </h3>
      <p className="text-sm mb-2 xl:mb-4 xl:text-lg">{selectedProduct?.shortDescription}</p>

      <div className="flex gap-2 mb-2 xl:mb-4">
        <p className="font-bold text-sm xl:text-lg">Duft:</p>
        <p className="text-sm xl:text-lg">zarter Duft frisch geschnittener Rosen</p>
        <p className="text-sm xl:text-lg">{selectedProduct?.aromas}</p>
      </div>
    </div>
  )
}

'use client'
import { Button } from '@/components/ui/button'
import { addItemToCart } from '@/redux/features/cart/cartSlice'
import type { Product } from '@/redux/features/products/productSlice'
import { useAppDispatch } from '@/redux/hooks'

import Image from 'next/image'

interface IProductSizeSelectorProps {
  selectedProduct: Product | null
}

const sizes = ['M', 'L', 'XL', 'XXL']

export default function ProductSizeSelector({ selectedProduct }: IProductSizeSelectorProps) {
  if (!selectedProduct) return null
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    if (!selectedProduct) return

    dispatch(
      addItemToCart({
        id: selectedProduct.id,
        title: selectedProduct.title,
        shotDescription: selectedProduct.shortDescription,
        price: selectedProduct.price,
        imageUrl: selectedProduct.imageUrls[0],
        size: selectedProduct.size,
        quantity: 1,
      }),
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold ">GRÖSSE WÄHLEN</p>
      <div className="flex flex-col gap-2 xl:gap-3">
        <div className="flex gap-1 xl:gap-3">
          {sizes.map((size) => {
            const isActive = selectedProduct?.size === size
            return (
              <div
                key={size}
                className={`w-[70px] h-[60px] xl:w-[90px] xl:h-[75px] border border-gray-500 flex flex-col items-center justify-center rounded-md transition-all duration-200
                        ${isActive ? 'bg-black text-[#be9f4b]' : 'bg-white text-black'}
                      `}
              >
                <span className="font-bold">{selectedProduct?.price ?? '-'} €</span>
                <p className="text-xl xl:text-2x1 font-extrabold">{size}</p>
              </div>
            )
          })}
        </div>
        <span className="max-[900px]:hidden ml-auto text-2xl xl:text-3xl font-extrabold">
          {selectedProduct?.price} €
        </span>
        <Button
          onClick={handleAddToCart}
          className="max-[900px]:hidden h-10 xl:h-12 bg-black  text-[#be9f4b] font-bold hover:bg-[#be9f4b] hover:text-black transition-colors"
        >
          JETZT BESTELLEN
        </Button>
        <div className="flex gap-1 justify-center max-[900px]:hidden">
          <Image src="/Mastercard.svg" width={37} height={25} alt="mastercard_icon" />
          <Image src="/visa.svg" width={37} height={25} alt="visa_icon" />
          <Image src="/PayPal.svg" width={37} height={25} alt="Paypal_icon" />
        </div>
      </div>
    </div>
  )
}

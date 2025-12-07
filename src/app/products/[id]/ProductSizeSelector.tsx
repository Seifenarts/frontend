'use client'
import { Button } from '@/components/ui/button'
import { addItemToCart } from '@/redux/features/cart/cartSlice'
import type { Product } from '@/redux/features/products/productSlice'
import { useAppDispatch } from '@/redux/hooks'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface IProductSizeSelectorProps {
  selectedProduct: Product | null
}

const sizes = ['M', 'L', 'XL', 'XXL']

export default function ProductSizeSelector({ selectedProduct }: IProductSizeSelectorProps) {
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState(false)
  if (!selectedProduct) return null

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

    setModal(true)
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
          className="max-[900px]:hidden h-10 xl:h-12 bg-black  text-[#be9f4b] font-bold hover:bg-[#be9f4b] hover:text-black active:bg-[#a8893f] active:text-black transition-colors"
        >
          JETZT BESTELLEN
        </Button>
        {modal && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setModal(false)}
          >
            <div
              className="bg-white rounded-xl p-6 w-[300px] text-center flex flex-col gap-4 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xl font-bold">Zum Warenkorb gehen?</p>

              <div className="flex flex-col gap-2">
                <Link href="/cart">
                  <Button className="w-full bg-black text-[#be9f4b] hover:bg-[#be9f4b] hover:text-black">
                    Ja
                  </Button>
                </Link>

                <Button
                  onClick={() => setModal(false)}
                  className="w-full bg-gray-200 text-black hover:bg-gray-300"
                >
                  Weiter einkaufen
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-1 justify-center max-[900px]:hidden">
          <Image src="/Mastercard.svg" width={37} height={25} alt="mastercard_icon" />
          <Image src="/visa.svg" width={37} height={25} alt="visa_icon" />
          <Image src="/PayPal.svg" width={37} height={25} alt="Paypal_icon" />
        </div>
      </div>
    </div>
  )
}

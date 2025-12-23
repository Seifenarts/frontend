'use client'

import { Button } from '@/components/ui/button'
import { addItemToCart } from '@/redux/features/cart/cartSlice'
import type { Product } from '@/redux/features/products/productSlice'
import { useAppDispatch } from '@/redux/hooks'
import Link from 'next/link'
import { useState } from 'react'

interface IBuyButtonProps {
  selectedProduct: Product | null
  variant: 'mobile' | 'desktop'
}

export default function BuyButton({ selectedProduct, variant }: IBuyButtonProps) {
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
        deliveryPrice: selectedProduct.deliveryPrice,
        quantity: 1,
        stockStatus: selectedProduct.stockStatus,
      }),
    )

    setModal(true)
  }

  const desktop =
    ' max-[900px]:hidden h-10 xl:h-12 bg-black  text-[#be9f4b] font-bold hover:bg-[#be9f4b] hover:text-black active:bg-[#a8893f] active:text-black transition-colors'

  const mobile =
    'flex-1 h-full text-xl ml-4 flex items-center justify-center bg-black text-[#be9f4b] font-bold hover:bg-[#be9f4b]  hover:text-black transition-colors'

  const classes = variant === 'mobile' ? mobile : desktop

  return (
    <>
      <Button onClick={handleAddToCart} className={classes}>
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
    </>
  )
}

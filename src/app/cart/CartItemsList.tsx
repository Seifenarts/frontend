'use client'

import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@/components/custom-ui/button'
import type { RootState } from '@/redux/store'

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  selectTotalPrice,
} from '@/redux/features/cart/cartSlice'
import { useFormContext } from 'react-hook-form'

export default function CartItemsList({
  formRef,
}: {
  formRef: React.RefObject<HTMLFormElement | null>
}) {
  const items = useSelector((state: RootState) => state.cart.items)
  const totalPrice = useSelector(selectTotalPrice)
  const dispatch = useDispatch()

  return (
    <div className="w-full max-w-[480px] bg-white rounded-xl shadow p-6 flex flex-col gap-6">
      {/* Items list */}
      <div
        className={`flex flex-col gap-8 ${
          items.length > 3 ? 'max-h-[350px] overflow-y-auto pr-2' : ''
        }`}
      >
        {items.length === 0 && <p className="text-gray-600 text-center">Der Warenkorb ist leer</p>}

        {items.map((item) => (
          <div key={item.id} className="flex gap-4 w-full">
            {/* Image */}
            <Image
              src={item.imageUrl}
              width={110}
              height={110}
              alt={item.title}
              className="rounded-lg object-cover"
            />

            {/* Right content */}
            <div className="flex flex-col justify-between flex-1">
              <div className="flex">
                {/* Title */}
                <div>
                  <p className="text-lg font-bold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.shotDescription}</p>
                </div>
                {/* Delete */}
                <div className="pr-5">
                  <button onClick={() => dispatch(removeItem({ id: item.id }))}>x</button>
                </div>
              </div>

              {/* Quantity + Price */}
              <div className="flex items-center justify-between mx-4">
                {/* Size*/}
                <div>
                  <p className="text-4xl font-bold">{item.size}</p>
                </div>

                {/* Quantity */}
                <div className="flex items-center  gap-2 ">
                  <button
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                    className="border px-2 rounded text-lg"
                  >
                    –
                  </button>

                  <p className="font-semibold">{item.quantity}</p>

                  <button
                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                    className="border px-2 rounded text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className="font-bold text-[18px]">{item.price * item.quantity} €</p>

                  <p className="text-xs text-gray-600">inkl. Versand</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-300" />

      {/* Total */}
      <div className="flex justify-end gap-12 text-lg font-bold">
        <span>Gesamt:</span>
        <span>{totalPrice} €</span>
      </div>

      {/* Checkout button */}
      <Button
        onClick={() => formRef.current?.requestSubmit()}
        className="h-12 bg-black text-[#be9f4b] font-bold hover:bg-[#be9f4b] hover:text-black transition-colors mt-2"
      >
        WEITER ZU KASSE
      </Button>

      {/* Payments icons */}
      <div className="flex justify-center gap-3">
        <Image src="/Mastercard.svg" width={37} height={25} alt="Mastercard" />
        <Image src="/visa.svg" width={37} height={25} alt="Visa" />
        <Image src="/PayPal.svg" width={40} height={25} alt="PayPal" />
      </div>
    </div>
  )
}

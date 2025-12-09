'use client'
import type { Product } from '@/redux/features/products/productSlice'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import BuyButton from './BuyButton'

interface IMobileBuyPanelProps {
  selectedProduct: Product | null
}

const paymentIcons = ['/Mastercard.svg', '/visa.svg', '/PayPal.svg']

export default function MobileBuyPanel({ selectedProduct }: IMobileBuyPanelProps) {
  if (!selectedProduct) return null
  return (
    <div
      className="
    hidden
    max-[900px]:flex
    max-[900px]:sticky
    max-[900px]:bottom-0
    max-[900px]:w-full
    max-[900px]:h-[70px]
    max-[900px]:bg-white
    max-[900px]:border-t max-[900px]:border-gray-300
    max-[900px]:shadow-[0_-2px_6px_rgba(0,0,0,0.1)]
    max-[900px]:items-center
    max-[900px]:justify-between
    max-[900px]:pl-4
    max-[900px]:z-50
  "
    >
      <div className="flex flex-col gap-1 justify-center">
        {paymentIcons.map((src, i) => (
          <Image key={i} src={src} width={25} height={15} alt="payment_icon" />
        ))}
      </div>

      <div className="font-bold flex flex-col items-center mx-4">
        <span className="text-3xl leading-none">{selectedProduct?.size}</span>
        <span className="text-2xl leading-none">{selectedProduct?.price ?? '-'}€</span>
      </div>
      <BuyButton selectedProduct={selectedProduct} variant="mobile" />
    </div>
  )
}

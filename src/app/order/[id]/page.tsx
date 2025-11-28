'use client'

import { useParams } from 'next/navigation'
import CartForm from './сartForm'
import CartItemsList from './cartItemsList'

export default function OrderPage() {
  const params = useParams<{ id: string }>()
  const id = params?.id

  return (
    <div className="flex justify-center items-center mt-5">
      <CartForm />
      <CartItemsList />
    </div>
  )
}

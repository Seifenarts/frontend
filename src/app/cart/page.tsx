'use client'

import CartItemsList from './CartItemsList'
import CartForm from './CartForm'

export default function OrderPage() {
  return (
    <div className="flex justify-center items mt-12">
      <CartForm />
      <CartItemsList />
    </div>
  )
}

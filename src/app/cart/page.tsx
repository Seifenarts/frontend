'use client'

import CartItemsList from './cartItemsList'
import CartForm from './cartForm'

export default function OrderPage() {
  return (
    <div className="flex justify-center items mt-12">
      <CartForm />
      <CartItemsList />
    </div>
  )
}

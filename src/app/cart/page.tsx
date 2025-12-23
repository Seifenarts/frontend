'use client'

import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Schema, FormData } from './orderForm.schema'
import CartForm from './CartForm'
import CartItemsList from './CartItemsList'
import { zodResolver } from '@hookform/resolvers/zod'
import { createOrder } from '@/redux/features/cart/cartAction'
import { useRef, useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { useRouter } from 'next/navigation'
import type { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

export default function OrderPage() {
  const items = useSelector((state: RootState) => state.cart.items)
  const dispatch = useAppDispatch()
  const formRef = useRef<HTMLFormElement>(null)
  const madeToOrder = items.some((item) => !item.stockStatus)

  const form = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      deliveryMethod: 'delivery',
      country: 'Deutschland',
    },
  })

  const deliveryMethod = form.watch('deliveryMethod')
  const router = useRouter()
  const onSubmit = async (values: FormData) => {
    const result = await dispatch(createOrder(values))

    if (createOrder.fulfilled.match(result)) {
      router.push('/payment')
    }
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center mt-4  md:mt-12 md:flex-row">
          <CartForm madeToOrder={madeToOrder} />
          <CartItemsList
            formRef={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            deliveryMethod={deliveryMethod}
          />
        </div>
      </form>
    </Form>
  )
}

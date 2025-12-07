'use client'

import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Schema, FormData } from './orderForm.schema'
import CartForm from './CartForm'
import CartItemsList from './CartItemsList'
import { zodResolver } from '@hookform/resolvers/zod'
import { createOrder } from '@/redux/features/cart/cartAction'
import { useRef } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { useRouter } from 'next/navigation'

export default function OrderPage() {
  const dispatch = useAppDispatch()
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: {
      deliveryMethod: 'delivery',
      country: 'Deutschland',
    },
  })

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
        <div className="flex justify-center items-center mt-12">
          <CartForm />
          <CartItemsList formRef={formRef} />
        </div>
      </form>
    </Form>
  )
}

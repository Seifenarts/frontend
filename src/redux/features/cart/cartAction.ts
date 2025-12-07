import type { RootState } from '@/redux/store'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface CustomerFormValues {
  firstName: string
  lastName: string
  street: string
  houseNumber: string
  city: string
  zipCode: string
  country: string
  email: string
  phone?: string
  deliveryMethod: 'delivery' | 'pickup'
}

export const createOrder = createAsyncThunk<
  { id: number },
  CustomerFormValues,
  { rejectValue: string; state: RootState }
>('order/createOrder', async (formValues, { getState, rejectWithValue }) => {
  const cartItems = getState().cart.items
  const userId = 1 /*getState().user.id ?? 'quest'*/
  const products = cartItems.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }))
  const customer = {
    ...formValues,
  }

  const body = {
    products,
    customer,
    userId,
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    return rejectWithValue('Order failed')
  }

  return await response.json()
})

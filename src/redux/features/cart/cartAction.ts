import { api } from '@/redux/axios'
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
  try {
    const cartItems = getState().cart.items

    const products = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }))

    const body = {
      products,
      customer: formValues,
      userId: 1,
    }

    const response = await api.post('/order', body)

    return response.data
  } catch (err) {
    console.error(err)
    return rejectWithValue('Order failed')
  }
})

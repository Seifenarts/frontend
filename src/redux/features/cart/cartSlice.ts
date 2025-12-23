import type { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createOrder } from './cartAction'

export interface CartItem {
  id: number
  title: string
  shotDescription: string
  price: number
  imageUrl: string
  size: string
  quantity: number
  deliveryPrice: number
  stockStatus: boolean
}

export interface CartState {
  items: CartItem[]
  orderId: number | null
  isLoading: boolean
  error: string | null
}

const initialState: CartState = {
  items: [],
  orderId: null,
  isLoading: false,
  error: null,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartFromStorage(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload
    },
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload

      const existing = state.items.find(
        (item) => item.id === newItem.id && item.size === newItem.size,
      )

      if (existing) {
        existing.quantity += newItem.quantity
      } else {
        state.items.push(newItem)
      }
    },

    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) item.quantity += 1
    },

    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item && item.quantity > 1) item.quantity -= 1
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((i) => !(i.id === action.payload.id))
    },

    clearCart: (state) => {
      state.items = []
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.orderId = action.payload.id
        state.items = []
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload ?? 'Unknown error'
      })
  },
})

export const {
  setCartFromStorage,
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions

export const selectTotalPrice = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

export default cartSlice.reducer

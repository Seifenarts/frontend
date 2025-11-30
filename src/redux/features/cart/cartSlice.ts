import type { RootState } from '@/redux/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  title: string
  shotDescription: string
  price: number
  imageUrl: string
  size: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

const loadCartFromLocalStorage = (): CartItem[] => {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem('cart')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
}

const saveToLocalStorage = (items: CartItem[]) => {
  if (typeof window != 'undefined') {
    localStorage.setItem('cart', JSON.stringify(items))
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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

      saveToLocalStorage(state.items)
    },

    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) item.quantity += 1
      saveToLocalStorage(state.items)
    },

    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item && item.quantity > 1) item.quantity -= 1
      saveToLocalStorage(state.items)
    },

    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((i) => !(i.id === action.payload.id))
      saveToLocalStorage(state.items)
    },

    clearCart: (state) => {
      state.items = []
      saveToLocalStorage([])
    },
  },
})

export const { addItemToCart, increaseQuantity, decreaseQuantity, removeItem, clearCart } =
  cartSlice.actions

export const selectTotalPrice = (state: RootState) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

export default cartSlice

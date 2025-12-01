import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import productSlice from './features/products/productSlice'

import cartSlice from './features/cart/cartSlice'
import recommendedSlice from './features/products/recommendedSlice'

export const store = configureStore({
  reducer: {
    products: productSlice,
    recommendedProducts: recommendedSlice,
    cart: cartSlice,
  },
})

if (typeof window !== 'undefined') {
  store.subscribe(() => {
    const { cart } = store.getState()
    localStorage.setItem('cart', JSON.stringify(cart.items))
  })
}

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThink<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

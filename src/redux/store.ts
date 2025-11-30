import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import productSlice from './features/products/productSlice'
import { recommendedSlice } from './features/products/recommendedSlice'
import cartSlice from './features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    recommendedProducts: recommendedSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThink<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

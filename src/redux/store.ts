import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import productSlice from './features/products/productSlice'
import { recommendedSlice } from './features/products/recommendedSlice'

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    recommendedProducts: recommendedSlice.reducer,
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

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loadProducts } from './productAction'

export interface Product {
  id: number
  title: string
  price: number
  size: string
  deliveryPrice: number
  shortDescription: string
  fullDescription: string
  composition: string
  aromas: string[]
  imageUrls: string[]
}

export interface ProductResponse {
  content: Product[]
  number: number
  totalPages: number
  totalElements: number
}

export interface ProductState {
  items: Product[]
  isLoading: boolean
  error: string | null
  page: number
  totalPages: number
  totalElements: number
}

const initialState: ProductState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 0,
  totalElements: 0,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.items = []
      state.page = 1
      state.totalPages = 0
      state.totalElements = 0
      state.error = null
      state.isLoading = false
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loadProducts.fulfilled, (state, action: PayloadAction<ProductResponse>) => {
        state.isLoading = false
        state.items = action.payload.content
        state.page = action.payload.number + 1
        state.totalPages = action.payload.totalPages
        state.totalElements = action.payload.totalElements
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false
        state.items = []
        state.error = action.payload ?? 'Unknown error'
      })
  },
})

export const { clearProducts, setPage } = productSlice.actions
export default productSlice

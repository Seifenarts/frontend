import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { findProduct, loadProducts, loadRecommendedProducts } from './productAction'

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
  stockStatus: boolean
}

export interface ProductResponse {
  content: Product[]
  number: number
  totalPages: number
  totalElements: number
}

export interface ProductState {
  items: Product[]
  recommendedItems: Product[]
  isLoading: boolean
  error: string | null
  page: number
  totalPages: number
  totalElements: number
  selectedProduct: Product | null
}

const initialState: ProductState = {
  items: [],
  recommendedItems: [],
  isLoading: true,
  error: null,
  page: 0,
  totalPages: 0,
  totalElements: 0,
  selectedProduct: null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.items = []
      state.page = 0
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
        state.page = action.payload.number
        state.totalPages = action.payload.totalPages
        state.totalElements = action.payload.totalElements
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.isLoading = false
        state.items = []
        state.error = action.payload ?? 'Unknown error'
      })
      .addCase(findProduct.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(findProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.isLoading = false
        state.selectedProduct = action.payload
      })
      .addCase(findProduct.rejected, (state, action) => {
        state.isLoading = false
        state.items = []
        state.error = action.payload ?? 'Unknown error'
      })
      .addCase(loadRecommendedProducts.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loadRecommendedProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false
        state.recommendedItems = action.payload
      })
      .addCase(loadRecommendedProducts.rejected, (state, action) => {
        state.isLoading = false
        state.recommendedItems = []
        state.error = action.payload ?? 'Unknown error'
      })
  },
})

export const { clearProducts, setPage } = productSlice.actions
export default productSlice.reducer

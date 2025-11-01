import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadRecommendedProducts } from "./productAction";
import type { Product } from "./productSlice";

interface RecommendedState {
  recommendedItems: Product[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RecommendedState = {
  recommendedItems: [],
  isLoading: false,
  error: null,
};

export const recommendedSlice = createSlice({
  name: "recommendedProducts",
  initialState,
  reducers: {
    clearRecommended: (state) => {
      state.recommendedItems = [];
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRecommendedProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        loadRecommendedProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.isLoading = false;
          state.recommendedItems = action.payload;
        }
      )
      .addCase(loadRecommendedProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.recommendedItems = [];
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const { clearRecommended } = recommendedSlice.actions;
export default recommendedSlice.reducer;

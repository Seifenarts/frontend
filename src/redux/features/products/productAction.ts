import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/redux/axios";
import type { ProductResponse } from "./productSlice";

export const loadProducts = createAsyncThunk<
  ProductResponse,
  { page?: number; size?: number },
  { rejectValue: string }
>(
  "product/loadProducts",
  async ({ page = 0, size = 9 }, { rejectWithValue }) => {
    try {
      const response = await api.get<ProductResponse>(
        `/products/all?page=${page}&size=${size}`
      );
      return response.data;
    } catch (err: any) {
      console.error(err);
      const message =
        err.response?.data?.message || err.message || "Failed to load products";
      return rejectWithValue(message);
    }
  }
);

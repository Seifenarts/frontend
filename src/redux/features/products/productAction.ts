/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/redux/axios";
import { type ProductResponse, type Product } from "./productSlice";

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

export const findProduct = createAsyncThunk<
  Product,
  { id: number },
  { rejectValue: string }
>("product/findProduct", async ({ id }, { rejectWithValue }) => {
  try {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  } catch (err: any) {
    console.error(err);
    const message =
      err.response?.data?.message || err.message || "Failed to load product";
    return rejectWithValue(message);
  }
});

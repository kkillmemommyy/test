import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoutes } from "../../../routers/apiRouter";
import { IProductsState, IProductsResponse, IApiData, TProduct } from "./types";

import { normalizeData } from "../../../utils/normalizeData";

export const fetchProducts = createAsyncThunk<IProductsResponse<TProduct>, number>(
  "products/fetchProducts",
  async (skip = 0) => {
    const { data } = await axios.get<IProductsResponse<IApiData>>(apiRoutes.products(), {
      params: {
        limit: 40,
        skip,
      },
    });
    data.products = normalizeData(data.products);
    return data;
  }
);

const initialState: IProductsState = {
  entities: [],
  isLoading: false,
  error: null,
  total: 0,
  limit: 0,
  skip: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { products, limit, skip, total } = action.payload;
        Object.assign(state, {
          entities: products,
          limit,
          skip,
          total,
          isLoading: false,
        });
      })
      .addCase(fetchProducts.rejected, (state, { error }) => {
        Object.assign(state, { isLoading: false, error: error.message });
      });
  },
});

export const productsReducer = productsSlice.reducer;

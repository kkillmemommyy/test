import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCartState } from './types';
import { TProduct } from '../productsSlice/types';

const initialState: TCartState = {
  entities: {},
  totalCount: 0,
  ids: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<TProduct>) => {
      const currentProduct = state.entities[payload.id];
      if (currentProduct) {
        currentProduct.count += 1;
      } else {
        state.entities[payload.id] = { ...payload, count: 1 };
        state.ids.push(payload.id);
      }
      state.totalCount += 1;
    },
    increaseProductCount: (state, { payload: { id } }: PayloadAction<{ id: number }>) => {
      const product = state.entities[id];
      product.count += 1;
      state.totalCount += 1;
    },
    decreaseProductCount: (state, { payload: { id } }: PayloadAction<{ id: number }>) => {
      const product = state.entities[id];
      if (product.count === 1) {
        state.ids = state.ids.filter((i) => i !== id);
        delete state.entities[id];
      } else {
        state.entities[id].count -= 1;
      }
      state.totalCount -= 1;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, increaseProductCount, decreaseProductCount } = cartSlice.actions;

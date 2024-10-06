import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/productsSlice/productsSlice';
import { cartReducer } from './slices/cartSlice/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

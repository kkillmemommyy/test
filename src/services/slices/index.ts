import { cartReducer } from './cartSlice';
import { productsReducer } from './productsSlice';
import { walletReducer } from './walletSlice';

export default {
  cart: cartReducer,
  products: productsReducer,
  wallet: walletReducer,
};

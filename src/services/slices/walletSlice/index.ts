import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TWalletState, TCurrency } from './types';

const initialState: TWalletState = {
  coin: 7500,
  dollar: 10000,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    debit: (state, { payload }: PayloadAction<{ currency: TCurrency; amount: number }>) => {
      const { currency, amount } = payload;
      const currentAmount = state[currency];
      if (currentAmount - amount >= 0) {
        state[currency] = state[currency] - amount;
      }
    },
  },
});

export const walletReducer = walletSlice.reducer;
export const { debit } = walletSlice.actions;

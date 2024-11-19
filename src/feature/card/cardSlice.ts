import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CardState {
  listProducts: any[];
  feeShip: string;
}

// Define the initial state using that type
const initialState: CardState = {
  listProducts: [],
  feeShip: '0',
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.listProducts = action.payload;
    },
    setFeeShip: (state, action: PayloadAction<string>) => {
      state.feeShip = action.payload;
    },
  },
});

export const { setProducts, setFeeShip } = cardSlice.actions;

export default cardSlice.reducer;

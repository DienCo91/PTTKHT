import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CardState {
  listProducts: any[];
}

// Define the initial state using that type
const initialState: CardState = {
  listProducts: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any[]>) => {
      state.listProducts = action.payload;
    },
  },
});

export const { setProducts } = cardSlice.actions;

export default cardSlice.reducer;

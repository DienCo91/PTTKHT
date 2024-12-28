import { Product } from '@/util/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface INotice {
  id: string;
  status: string;
  date: string;
  color: string;
  name: string;
}

export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  notice: INotice[];
  card: Product[];
}
// Define a type for the slice state
interface UserState {
  user: null | User;
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

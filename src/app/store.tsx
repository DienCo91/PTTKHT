import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../feature/card/cardSlice';
import userReducer from '../feature/user/userSlice';

export const store = configureStore({
  reducer: {
    card: cardReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

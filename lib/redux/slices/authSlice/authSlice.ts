// authSlice.ts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
  uid?: string | null;
  email?: string | null;
}

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    }
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
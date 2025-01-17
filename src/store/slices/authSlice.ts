"use client";
import { UserType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  user: UserType | null;
  token: string;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  user: null,
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { setAuth, setLogout } = authSlice.actions;
export default authSlice.reducer;

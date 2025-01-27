"use client";
import { UserType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  user: UserType | null;
  isLoggedIn: boolean;
};

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
    },
    setLogout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const { setAuth, setLogout, setUser } = authSlice.actions;
export default authSlice.reducer;

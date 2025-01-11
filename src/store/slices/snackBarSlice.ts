"use client";

import { createSlice } from "@reduxjs/toolkit";

type SnackBarState = {
  message: string;
  isOpen: boolean;
};

const initialState: SnackBarState = {
  message: "",
  isOpen: false,
};

const snackBarSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setSnackBar: (state, action) => {
      state.message = action.payload.message;
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const { setSnackBar } = snackBarSlice.actions;
export default snackBarSlice.reducer;

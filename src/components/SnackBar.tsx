"use client";
import {
  getSnackBarIsOpen,
  getSnackBarMessage,
} from "@/store/selector/snackBarSelector";
import { setSnackBar } from "@/store/slices/snackBarSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Snackbar = () => {
  const message = useSelector(getSnackBarMessage);
  const isOpen = useSelector(getSnackBarIsOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(setSnackBar({ message: "", isOpen: false }));
      }, 3000);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
      <span>{message}</span>
      <button
        className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
        onClick={() => {}}
      >
        ✖️
      </button>
    </div>
  );
};

export default Snackbar;

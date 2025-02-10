"use client";
import React, { useEffect } from "react";
import api from "@/utils/api";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/authSlice";
import { setSnackBar } from "@/store/slices/snackBarSlice";

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getMe(token);
    }
  }, []);

  const getMe = async (token: string) => {
    try {
      const response = await api.post(
        "/auth/me",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.user) {
        dispatch(
          setUser({
            user: response.data.user,
          })
        );
      }
    } catch (error) {
      const errorMessage =
        // @ts-expect-error fix for now
        error.response?.data?.message || "An unexpected error occurred";
    }
  };

  return <>{children}</>;
};

export default AuthProvider;

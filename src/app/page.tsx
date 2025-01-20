"use client";
import React from "react";
import { getIsLoggedIn } from "@/store/selector/authSelector";
import { useSelector } from "react-redux";
import Link from "next/link";

const page = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className="min-h-screen h-80 bg-gray-50 flex flex-col justify-center py-40 sm:px-6 lg:px-8 px-6">
      <div>
        {isLoggedIn ? (
          <Link
            href={"/post"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Crear Post
          </Link>
        ) : (
          <p>Please log in to see the button.</p>
        )}
      </div>
    </div>
  );
};

export default page;

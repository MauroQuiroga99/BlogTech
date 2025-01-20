"use client";
import Error from "@/components/validation/Error";
import { getToken } from "@/store/selector/authSelector";
import { setSnackBar } from "@/store/slices/snackBarSlice";
import { PostForm } from "@/types";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostForm>();
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const router = useRouter();

  const createPost = async (data: PostForm) => {
    console.log(data);

    if (!token) {
      dispatch(
        setSnackBar({
          message: "You need to be logged in to create a post",
          isOpen: true,
        })
      );
      router.push("/auth/login");
      return;
    }

    try {
      const response = await api.post("/posts", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      dispatch(
        setSnackBar({ message: "Post created successfully", isOpen: true })
      );
      router.push("/");
    } catch (error) {
      const errorMessage =
        // @ts-expect-error fix for now
        error.response?.data?.message || "An unexpected error occurred";
      dispatch(setSnackBar({ message: errorMessage, isOpen: true }));
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-lg mt-24 w-full bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Create a New Post
          </h1>
          <form onSubmit={handleSubmit(createPost)}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter the post title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("title", { required: "El campo está vacio" })}
              />
              {errors.title && (
                <Error> {errors.title?.message as string} </Error>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Content
              </label>

              <textarea
                id="content"
                placeholder="Write your post content here"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("content", { required: "El campo está vacío" })}
              />
              {errors.content && (
                <Error>{errors.content?.message as string}</Error>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Status
              </label>

              <select
                id="status"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("status", {
                  required: "Selecciona un estado válido",
                })}
              >
                <option value="">Seleccione una opción</option>
                <option value="published">Publicado</option>
                <option value="draft">Borrador</option>
              </select>

              {errors.status && (
                <Error>{errors.status?.message as string}</Error>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

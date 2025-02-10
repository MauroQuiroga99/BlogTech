"use client";
import api from "@/utils/api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PostType } from "@/types"; // Importa el tipo

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<PostType | null>(null); // Tipado correcto

  useEffect(() => {
    if (id) fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await api.get<PostType>(`/posts/${id}`);
      console.log(response);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  return (
    <div className="flex pt-24 items-center justify-center min-h-screen gap-8 mt-5 bg-gray-100">
      <div className="max-w-[1200px] gap-4 flex flex-col justify-center items-center mb-8 p-4">
        <h1 className="text-3xl font-bold">{post?.title}</h1>
        <p className="text-gray-600 mt-2 text-justify">{post?.content}</p>
        <div className="self-start">
          <p className="text-sm text-gray-500 mt-4">{`By ${post?.name}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPage;

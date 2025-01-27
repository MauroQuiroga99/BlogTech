"use client";
import { getIsLoggedIn } from "@/store/selector/authSelector";
import { PostType } from "@/types";
import api from "@/utils/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

const BlogFeed = () => {
  const [lastPosts, setLastPosts] = useState<PostType | null>(null);
  const [postsHome, setPostsHome] = useState<PostType[]>([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await api.get("/posts");
      const latestPost = response.data[0];
      const otherPosts = response.data.slice(1);
      setPostsHome(otherPosts);
      setLastPosts(latestPost);
      console.log("Latest Post:", latestPost);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className="flex pt-24 items-center min-h-screen flex-col gap-8 mt-5">
      <div className="max-w-[1200px] gap-4 flex flex-col md:flex-row items-center h-auto p-2 w-full ">
        <div className="flex-col justify-around items-center w-full h-full">
          <h1 className="font-semibold text-4xl"> Bienvenido a Blogtech</h1>
          <p className="text-base w-full md:w-3/4">
            En un mundo donde la tecnología avanza a la velocidad de la luz,
            estar al tanto de las últimas innovaciones no es una opción, es una
            necesidad. Aquí, en nuestro blog, encontrarás un espacio dedicado a
            explorar las tendencias más emocionantes, los gadgets más
            innovadores y las noticias que están definiendo el futuro digital.
          </p>
        </div>
        {isLoggedIn ? (
          <Link
            href={"/post"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm text-center w-32 py-2 px-4 rounded-full"
          >
            Crear Post
          </Link>
        ) : (
          ""
        )}
      </div>

      <div className="flex max-w-[1200px]  justify-center p-2  gap-8 flex-col md:flex-row w-full">
        <div className="flex h-auto w-full ">
          <div className="flex gap-4 flex-col justify-start items-center h-full w-full">
            <img
              src="https://img.freepik.com/foto-gratis/oficinistas-trabajando-juntos-como-equipo_23-2149310892.jpg"
              className="w-full h-[311px] object-cover rounded-2xl"
            />
            <h1 className="text-3xl font-medium  text-left">
              {lastPosts?.title}
            </h1>
            <p className="text-sm font-medium w-full text-left line-clamp-3 overflow-hidden relative">
              {lastPosts?.content}
              <span className="absolute rounded-2xl bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent"></span>
            </p>

            <div className="flex flex-row justify-between w-full items-end ">
              <div className="flex flex-row ">
                <div className="flex  justify-center items-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    className="w-10 h-10 object-cover rounded-full justify-start"
                  />
                </div>

                <h2 className=" text-gray-600 ml-2 text-xl font-medium mt-6">
                  {`By ${lastPosts?.name}`}
                </h2>
              </div>
            </div>
            <div className="w-full mt-1 bg-slate-400 h-[1px] "></div>
          </div>
        </div>

        <div className="flex h-auto w-full flex-col gap-8 max-h-[540px] overflow-y-scroll">
          {postsHome.map((post) => (
            <div key={post.id}>
              <BlogCard posts={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFeed;

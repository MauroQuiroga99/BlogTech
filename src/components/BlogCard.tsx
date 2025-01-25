"use client";
import { PostType } from "@/types";
import React from "react";

type BlogCardProps = {
  posts: PostType;
};

const BlogCard = ({ posts }: BlogCardProps) => {
  return (
    <div>
      <div className="flex flex-row gap-4 ">
        <img
          src="https://yamefui.com/wp-content/uploads/2023/08/xxx-1080-%C3%97-1080-px-7.png"
          alt=""
          className="w-36 h-36 object-cover rounded-2xl"
        />

        <div className=" flex flex-col justify-between  ">
          <h2 className="text-xl font-medium ">{posts.title} </h2>
          <div className="flex justify-between items-center ">
            <div className="flex flex-row justify-center items-center  ">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                className="w-8 h-8 object-cover rounded-full justify-start"
              />
              <h2 className=" text-gray-600 ml-2 text-base font-normal">{`By ${posts?.name}`}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-1 bg-slate-400 h-[0.5px]"></div>
    </div>
  );
};

export default BlogCard;

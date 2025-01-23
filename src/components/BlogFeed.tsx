"use client";
import { getIsLoggedIn } from "@/store/selector/authSelector";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const BlogFeed = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className="flex pt-24 items-center min-h-screen flex-col gap-8 mt-5">
      <div className="max-w-[1200px] gap-4 flex flex-col md:flex-row items-center h-auto p-2 w-full ">
        <div className="flex-col justify-around items-center w-full h-full">
          <h1 className="font-semibold text-4xl">Our Recent Blog Entries</h1>
          <p className="text-base w-full md:w-3/4">
            Si hay errores en la consola (por ejemplo, problemas con rutas,
            props no definidas, o fallos en el árbol de React), corrígelos
            primero. A menudo, los errores silenciosos pueden impedir que un
            componente se renderice.
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
              Unveiling the Latest in Electronic Gadgets and Innovations
            </h1>
            <p className=" text-sm font-medium w-full text-left">
              the curve with our comprehensive guide to the latest electronic
              gadgets and groundbreaking innovations. From cutting-edge
              smartphones
            </p>

            <div className="flex flex-row justify-between w-full items-end ">
              <div className="flex flex-row ">
                <div className="flex  justify-center items-center">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    className="w-10 h-10 object-cover rounded-full justify-start"
                  />
                </div>

                <h2 className=" text-gray-600 ml-2 text-xl font-medium mt-2">
                  By Cosme Fulanito
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full flex-col gap-8 ">
          <div className="flex flex-row gap-4  ">
            <img
              src="https://yamefui.com/wp-content/uploads/2023/08/xxx-1080-%C3%97-1080-px-7.png"
              alt=""
              className="w-40 h-36 object-cover rounded-2xl"
            />

            <div className=" flex flex-col justify-between  ">
              <h2 className="text-2xl font-medium ">
                Discover the Newest Electronic Gadgets and Innovations
              </h2>
              <div className="flex justify-between items-center ">
                <div className="flex flex-row justify-center items-center  ">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    className="w-8 h-8 object-cover rounded-full justify-start"
                  />
                  <h2 className=" text-gray-600 ml-2 text-base font-normal">
                    By Cosme Fulanito
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-slate-400 h-[0.5px]   "></div>
          <div className="flex flex-row gap-4 ">
            <img
              src="https://yamefui.com/wp-content/uploads/2023/08/xxx-1080-%C3%97-1080-px-7.png"
              alt=""
              className="w-40 h-36 object-cover rounded-2xl"
            />

            <div className=" flex flex-col justify-between  ">
              <h2 className="text-2xl font-medium ">
                Discover the Newest Electronic Gadgets and Innovations
              </h2>
              <div className="flex justify-between items-center ">
                <div className="flex flex-row justify-center items-center  ">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    className="w-8 h-8 object-cover rounded-full justify-start"
                  />
                  <h2 className=" text-gray-600 ml-2 text-base font-normal">
                    By Cosme Fulanito
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-slate-400 h-[0.5px]   "></div>
          <div className="flex flex-row gap-4 ">
            <img
              src="https://yamefui.com/wp-content/uploads/2023/08/xxx-1080-%C3%97-1080-px-7.png"
              alt=""
              className="w-40 h-36 object-cover rounded-2xl"
            />

            <div className=" flex flex-col justify-between  ">
              <h2 className="text-2xl font-medium ">
                Discover the Newest Electronic Gadgets and Innovations
              </h2>
              <div className="flex justify-between items-center ">
                <div className="flex flex-row justify-center items-center  ">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    className="w-8 h-8 object-cover rounded-full justify-start"
                  />
                  <h2 className=" text-gray-600 ml-2 text-base font-normal">
                    By Cosme Fulanito
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-slate-400 h-[0.5px]   "></div>
        </div>
      </div>
    </div>
  );
};

export default BlogFeed;

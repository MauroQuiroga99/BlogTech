"use client";
import { getIsLoggedIn, getUser } from "@/store/selector/authSelector";
import { setLogout } from "@/store/slices/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const dispacth = useDispatch();
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispacth(setLogout());
    router.push("/auth/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(user);

  return (
    <div>
      <div className="fixed z-10  top-0 left-0 w-full h-[90px] p-5 flex justify-center bg-white">
        <div className="flex w-[1000px] justify-between items-center">
          <h1 className="text-[26px] font-bold">BLOGTECH</h1>
          <div className="hidden lg:flex">
            <ul className="flex gap-6 mx-10 items-center">
              <li>
                <a
                  className="text-base tracking-wider leading-4 font-medium text-gray-800 not-italic hover:text-blue-800 transition-colors"
                  href=""
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-base tracking-wider leading-4 font-medium text-gray-800 not-italic hover:text-blue-800 transition-colors"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-base tracking-wider leading-4 font-medium text-gray-800 not-italic hover:text-blue-800 transition-colors"
                  href=""
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-base tracking-wider leading-4 font-medium text-gray-800 not-italic hover:text-blue-800 transition-colors"
                  href=""
                >
                  Blog Feed
                </a>
              </li>
              <li>
                {isLoggedIn ? (
                  <>
                    <span className="text-base uppercase  tracking-wider leading-4 font-semibold text-gray-800 not-italic m-4">
                      {user?.name}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="text-sm px-7 py-3 tracking-wider leading-4 font-bold uppercase text-black not-italic border-2 border-black hover:bg-blue-800 hover:text-white"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/auth/login"
                    className="text-sm px-7 py-3 tracking-wider leading-4 font-bold uppercase text-black not-italic border-2 border-black hover:bg-blue-800 hover:text-white"
                  >
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="relative flex-row gap-4 lg:hidden">
            <button
              onClick={toggleMenu}
              ref={buttonRef}
              className="mr-4 text-2xl w-7"
            >
              <img src="/icon/nav-bar.svg" alt="" />
            </button>

            {menuOpen && (
              <ul
                ref={menuRef}
                className="fixed top-0 left-0 z-50 w-44 flex flex-col gap-6 items-start bg-white p-5 shadow-md"
              >
                <li>
                  <a
                    className="text-base tracking-wider leading-4 font-medium text-gray-800 not-italic hover:text-blue-800 transition-colors"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-base tracking-wider leading-4 font-medium text-gray-800 not-italic hover:text-blue-800 transition-colors"
                    href=""
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-base tracking-wider leading-4 font-medium text-gray-800 not-italic hover:text-blue-800 transition-colors"
                    href=""
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-base tracking-wider leading-4 font-medium text-gray-800 not-italic hover:text-blue-800 transition-colors"
                    href=""
                  >
                    Blog Feed
                  </a>
                </li>
                {
                  <li>
                    {isLoggedIn ? (
                      <>
                        <span className="text-xs uppercase tracking-wider leading-4 font-semibold text-gray-800 not-italic">
                          {user?.name}
                        </span>
                        <button
                          onClick={handleLogout}
                          className="text-sm mt-3 px-7 py-3 tracking-wider leading-4 font-bold uppercase text-black not-italic border-2 border-black hover:bg-blue-800 hover:text-white"
                        >
                          Log Out
                        </button>
                      </>
                    ) : (
                      <Link
                        href={"/auth/login"}
                        className="text-sm px-7 py-3 tracking-wider leading-4 font-bold uppercase text-black not-italic border-2 border-black hover:bg-blue-800 hover:text-white"
                      >
                        Sign In
                      </Link>
                    )}
                  </li>
                }
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

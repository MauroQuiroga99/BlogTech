"use client";
import Error from "@/components/validation/Error";
import { getIsLoggedIn } from "@/store/selector/authSelector";
import { setAuth } from "@/store/slices/authSlice";
import { setSnackBar } from "@/store/slices/snackBarSlice";
import { LoginForm } from "@/types";
import api from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  const loginUser = async (data: LoginForm) => {
    try {
      const response = await api.post("/auth/login", data, {
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${data.token}`, para proteger rutas hacer esto en la ruta por ejemplo para createPost
        },
      });

      if (response.data.user) {
        dispatch(
          setAuth({
            user: response.data.user,
            token: response.data.token,
          })
        );
        dispatch(
          setSnackBar({ message: "Logged in successfully!", isOpen: true })
        );

        router.push("/");
      }
    } catch (error) {
      const errorMessage =
        // @ts-expect-error fix for now
        error.response?.data?.message || "An unexpected error occurred";
      dispatch(setSnackBar({ message: errorMessage, isOpen: true }));
    }
  };

  return (
    <div className="min-h-screen h-80 bg-gray-100 flex flex-col justify-center py-40 sm:px-6 lg:px-8 px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <h1 className="mx-auto text-center h-10 w-auto text-xl font-bold">
            BLOGTECH
          </h1>
          <h2 className="mt-2 text-center text-2xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-800  max-w">
            Or{" "}
            <Link
              href="/auth/register"
              className="font-medium text-gray-800 hover:text-blue-800  focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              create a new account
            </Link>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(loginUser)} noValidate action="">
              <div>
                <label
                  htmlFor="email_or_username"
                  className="block text-sm font-medium leading-5 text-gray-800"
                >
                  Email address or User Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email_or_username"
                    type="text"
                    placeholder="user@example.com"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    {...register("email_or_username", {
                      required: "El campo está vacio",
                    })}
                  />
                  {errors.email_or_username && (
                    <Error>{errors.email_or_username?.message as string}</Error>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-800"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    {...register("password", {
                      required: "El campo está vacio",
                    })}
                  />
                  {errors.password && (
                    <Error>{errors.password?.message as string}</Error>
                  )}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember"
                    type="checkbox"
                    value="1"
                    className="form-checkbox h-4 w-4 text-blue-800 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-800"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-5">
                  <a
                    href="#"
                    className="font-medium text-blue-900 hover:text-blue-800 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
                  >
                    Sign in
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

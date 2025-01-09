"use client";
import Error from "@/components/validation/Error";
import { RegisterForm } from "@/types";
import api from "@/utils/api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterForm>();
  const password = watch("password");

  const router = useRouter();

  const createUser = async (data: RegisterForm) => {
    const response = await api.post("http://localhost:3000/api/register", data);
    if (response.data === 200) {
      console.log(response.data);
      router.push(""); //la ruta que me lleve al login
    } else {
      console.log("error en registro");
      router.push("/auth/register");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-40 sm:px-6 lg:px-8 px-6 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div>
          <h1 className="mx-auto text-center h-10 w-auto text-xl font-bold">
            BLOGTECH
          </h1>
          <h2 className="mt-2 text-center text-2xl leading-9 font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-800  max-w">
            Or{" "}
            <a
              href="/auth/login"
              className="font-medium text-gray-800 hover:text-blue-800 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              login to your account
            </a>
          </p>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(createUser)} noValidate action="">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-5 text-gray-800"
                >
                  Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    {...register("name", {
                      required: "El campo está vacio",
                    })}
                  />
                  {errors.name && (
                    <Error>{errors.name?.message as string}</Error>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-800"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    placeholder="user@example.com"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    {...register("email", {
                      required: "El campo Email está vacio",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email No Válido",
                      },
                    })}
                  />
                  {errors.email && (
                    <Error>{errors.email?.message as string}</Error>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-5 text-gray-800"
                >
                  Username
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="username"
                    type="text"
                    placeholder="john"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    {...register("username", {
                      required: "El campo Username está vacio",
                    })}
                  />
                  {errors.username && (
                    <Error>{errors.username?.message as string}</Error>
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
                      required: "El campo Password está vacio",
                    })}
                  />
                  {errors.password && (
                    <Error>{errors.password?.message as string}</Error>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium leading-5 text-gray-800"
                >
                  Confirm Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password_confirmation"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-800 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    {...register("password_confirmation", {
                      required: "El campo Confirm Password está vacio",
                      validate: (value) =>
                        value === password || "Las contraseñas no coinciden",
                    })}
                  />
                  {errors.password_confirmation && (
                    <Error>
                      {errors.password_confirmation?.message as string}
                    </Error>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
                  >
                    Create account
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

export default Register;

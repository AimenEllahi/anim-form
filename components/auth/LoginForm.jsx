import React from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push("/register");
  };

  return (
    <div className="flex h-screen w-screen relative">
      <div className="w-1/2 h-full hidden md:block">
        <img
          src="/login.webp"
          alt="Login"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-1/2 h-full bg-black opacity-10"></div>
      </div>
      <div className="md:w-1/2 w-[100vw] flex items-center justify-center p-8  text-white bg-black">
        <div className="w-96">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold mb-2">Login</h2>
            <p className="text-white text-sm mb-6 flex justify-center items-center">
              Log in to your account to continue
            </p>
          </div>
          <form
            id="loginForm"
            action="/login"
            method="post"
            className="space-y-6"
          >
            <div>
              <label htmlFor="username" className="block text-md text-white">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
                className="w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-md text-white">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Login
            </button>
            <p className="text-sm mt-4">
              No account yet?{" "}
              <span
                className="text-white hover:text-green-300 cursor-pointer"
                onClick={handleSignupClick}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

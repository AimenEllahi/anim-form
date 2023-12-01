import React from "react";
import { useRouter } from "next/navigation";
// import { Input } from "../ui/input";

export default function Login() {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push("/register");
  };

  return (
    <div className='w-screen'>
      <div className='max-w-lg mx-auto mt-10 p-8 bg-[#4a4848] text-white rounded-md shadow-md'>
        {/* <Input /> */}
        <h2 className='text-2xl mb-4'>Login</h2>
        <form
          id='loginForm'
          action='/login'
          method='post'
          className='space-y-4'
        >
          <div>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-gray-300'
            >
              Username:
            </label>
            <input
              type='text'
              id='username'
              name='username'
              required
              className='w-full px-4 py-2 rounded-md bg-white text-gray-500 focus:outline-none focus:border-blue-500'
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-300'
            >
              Password:
            </label>
            <input
              type='password'
              id='password'
              name='password'
              required
              className='w-full px-4 py-2 rounded-md bg-gray-white text-gray-500 focus:outline-none focus:border-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-[#2ecc71] text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'
          >
            Login
          </button>
          <p className='text-sm'>
            No account yet?{" "}
            <span
              className='text-blue-500 hover:cursor-pointer'
              onClick={handleSignupClick}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

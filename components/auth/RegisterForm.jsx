import React from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleSigninClick = () => {
    router.push("/login");
  };

  return (
    <div className='w-screen'>
      <div className='max-w-lg mx-auto p-8 bg-[#4a4848] text-white rounded-md shadow-md'>
        <h2 className='text-2xl mb-4'>Register</h2>
        <form
          id='registerForm'
          action='/signup'
          method='post'
          className='space-y-4'
        >
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-300'
            >
              Email:
            </label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Enter your email'
              required
              className='w-full px-4 py-2 rounded-md bg-white text-gray-500 focus:outline-none focus:border-blue-500'
            />
          </div>
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
              placeholder='Choose a username'
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
              placeholder='Enter your password'
              required
              className='w-full px-4 py-2 rounded-md bg-white text-gray-500 focus:outline-none focus:border-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-[#2ecc71] text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'
          >
            Signup
          </button>
          <p className='text-sm'>
            If you already have an account, please{" "}
            <span
              className='text-blue-500 hover:cursor-pointer'
              onClick={handleSigninClick}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

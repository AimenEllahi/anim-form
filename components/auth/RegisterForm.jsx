import React from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleSigninClick = () => {
    router.push("/login");
  };

  return (
    <div className='flex h-screen w-screen relative'>
      <div className='w-1/2 h-full hidden md:block'>
        <img
          src='/auth.jpg'
          alt='Register'
          className='w-full h-full object-cover'
        />
        <div className='absolute top-0 left-0 w-1/2 h-full bg-black opacity-10'></div>
      </div>
      <div className='md:w-1/2 w-[100vw] flex items-center bg-black justify-center p-8 text-white relative z-10'>
        <div className='w-96'>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='text-3xl font-bold mb-2'>Sign Up</h2>
            <p className='text-white text-sm mb-6 text-center'>
              Create a new account to get started
            </p>
          </div>
          <form
            id='registerForm'
            action='/signup'
            method='post'
            className='space-y-6'
          >
            <div>
              <label htmlFor='email' className='block text-md text-white'>
                Email:
              </label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='Enter your email'
                required
                className='w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:border-blue-500'
              />
            </div>
            <div>
              <label htmlFor='username' className='block text-md text-white'>
                Username:
              </label>
              <input
                type='text'
                id='username'
                name='username'
                placeholder='Choose a username'
                required
                className='w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:border-blue-500'
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-md text-white'>
                Password:
              </label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Enter your password'
                required
                className='w-full px-3 py-2 rounded-md bg-white text-black focus:outline-none focus:border-blue-500'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none'
            >
              Signup
            </button>
            <p className='text-sm mt-4'>
              If you already have an account, please{" "}
              <span
                className='text-white hover:text-green-300 cursor-pointer'
                onClick={handleSigninClick}
              >
                Sign in
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

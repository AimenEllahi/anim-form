"use client";
import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import EnableSound from "../Modal";
import Link from "next/link";
import Accounts from "../Accounts";
import useAudio from "@/utils/useAudio";
const Navbar = () => {
  const [playing, setPlaying] = useAudio("/Audio/ambient.mp3");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='flex z-10 absolute top-0 left-0 w-screen h-[10vh] bg-transparent items-center justify-between'>
      <EnableSound setPlaying={setPlaying} />

      {isLoggedIn && (
        <div className='flex items-center justify-between w-full space-x-4'>
          <Link href='/' className='cursor-pointer hover:bg-transparent'>
            <img src='/Logo/white.png' alt='Logo' className='h-16 w-16' />
          </Link>

          <div className='flex items-center space-x-4'>
            <div
              onClick={() => {
                setPlaying(!playing);
              }}
              className='rounded-full bg-white p-2 cursor-pointer'
            >
              {!playing ? (
                <VolumeX size={20} color='black' />
              ) : (
                <Volume2 size={20} />
              )}
            </div>

            <Accounts />

            <Link
              to='/register'
              className='cursor-pointer text-white hover:text-white hover:bg-transparent focus:text-white'
            >
              Logout
            </Link>
          </div>
        </div>
      )}

      {!isLoggedIn && (
        <div className='flex items-center justify-between w-full space-x-4'>
          <Link href='/' className='cursor-pointer hover:bg-transparent'>
            <img src='/Logo/white.png' alt='Logo' className='h-16 w-16' />
          </Link>
          <div className='flex items-center space-x-4 pr-2'>
            <Link
              href='/login'
              className='cursor-pointer text-white hover:text-white hover:bg-transparent  focus:text-white'
            >
              Login
            </Link>
            <Link
              href='/register'
              className='cursor-pointer text-white hover:text-white hover:bg-transparent  focus:text-white'
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

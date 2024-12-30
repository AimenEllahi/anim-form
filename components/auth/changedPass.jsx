"use client";
import React from "react";
import CustomButton from "../ui/custom-button";
import { useRouter } from "next/navigation";

export default function changedPass({ dictionary }) {
  const router = useRouter();
  const handleSignIn = () => {
    router.push("/auth/sign-in");
  };

  return (
    <div className=' text-white h-[278px] w-[345px] flex text-center flex-col justify-between items-center gap-8 z-[10] '>
      <img
        src='/images/auth/Shield.png'
        title='Shield Icon'
        alt='Sucessfully changed password icon, a metal shield'
        className='w-[128px]   object-contain icon-glow'
      />
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='running-text-large'>{dictionary.title}</h1>
      </div>

      <div className='w-full flex flex-col gap-4'>
        <CustomButton
          onClick={handleSignIn}
          variant={"primary"}
          className={"w-full font-bold"}
        >
          {dictionary.signIn}{" "}
          <img
            src='/Icons/ArrowRight.svg'
            title='Sign in icon'
            alt='sign in button'
            className='h-5 w-5'
          />
        </CustomButton>
      </div>
    </div>
  );
}

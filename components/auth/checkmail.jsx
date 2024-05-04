"use client";
import React from "react";
import CustomButton from "../ui/custom-button";
import Link from "next/link";

export default function checkmail({ handleResend, isLoading }) {
  return (
    <div className=' text-white h-[278px] w-[345px] flex text-center flex-col justify-between items-center gap-8  '>
      <img src='/Icons/plane.png' alt='' className='w-[171px] object-contain' />
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='running-text-large'>Check your E-Mails</h1>
        <span className='text-gray2 running-text-small'>
          We have sent you a link to reset your password by E-Mail. You may need
          to check your spam folder.
        </span>
      </div>

      <div className='w-full flex flex-col gap-4'>
        <CustomButton
          onClick={handleResend}
          disabled={isLoading}
          variant={"primary"}
          className={"w-full font-bold"}
        >
          RESEND LINK
        </CustomButton>
        <Link href={"/auth/sign-up"} className='running-text-small'>
          Back to sign up
        </Link>
      </div>
    </div>
  );
}

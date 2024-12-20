"use client";
import React from "react";
import CustomButton from "../ui/custom-button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const _text =
  " We have sent you a link to reset your password by E-Mail. You may need to check your spam folder.";

export default function Checkmail({
  handleResend,
  isLoading,
  subtext = _text,
}) {
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");
  const id = searchParams.get("id");
  // console.log(subtext);
  return (
    <div className='  z-10 relative text-white h-[278px] w-[345px] flex text-center flex-col justify-between items-center gap-8  '>
      <img
        src='/images/auth/Paper-plane.png'
        title='Paper plane'
        alt='Paper airplane in very old classical style, icon to check your emails'
        className='w-[215px] object-contain icon-glow'
      />
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='running-text-large'>Check your E-Mails</h1>
        <span className='text-gray2 running-text-small'>{subtext}</span>
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
        <Link
          href={
            "/auth/sign-in" +
            (redirect ? `?redirect=${redirect}&&id=${id}` : "")
          }
          className='running-text-small'
        >
          Back to sign up
        </Link>
      </div>
    </div>
  );
}

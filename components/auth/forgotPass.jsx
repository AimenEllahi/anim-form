"use client";
import React, { useState } from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomButton from "@/components/ui/custom-button";
import { validateEmail } from "@/lib/helpers";
import Link from "next/link";
export default function forgotPass() {
  const [email, setEmail] = useState("");

  return (
    <div className=' text-white h-auto w-[345px]  flex flex-col justify-between items-start gap-8'>
      <div className='flex flex-col gap-4'>
        <h1 className='running-text-large'>Forgot password?</h1>
        <span className='running-text-small text-gray2'>
          Enter your E-Mail address to reset your password. You may need to
          check your spam folder.
        </span>
      </div>
      <div className='flex flex-col gap-6 w-full'>
        <CustomInput
          placeholder='E-MAIL'
          onChange={(value) => setEmail(value)}
          value={email}
        />
        <div className='w-full flex flex-col gap-4 '>
          <CustomButton
            disabled={!validateEmail(email)}
            variant={"primary"}
            className={"w-full font-bold"}
          >
            RESET PASSWORD
          </CustomButton>
          <Link href='/' className='running-text-small'>
            I do not have access to my E-Mail address
          </Link>
        </div>
      </div>
    </div>
  );
}

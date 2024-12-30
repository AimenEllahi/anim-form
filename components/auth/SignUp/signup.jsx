"use client";
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const INITIAL_USER = {
  username: "",
  email: "",
  name: "",
  surname: "",
  password: "",
};
export default function signup({ dictionary }) {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState(INITIAL_USER);
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");
  const id = searchParams.get("id");
  const reset = () => {
    setUser(INITIAL_USER);
  };

  return (
    <div
      className={`text-white w-[345px] h-full flex flex-col justify-center items-start gap-8  z-[10]
            ${step === 1 ? "h-full gap-4" : "h-full gap-0 py-20"}`}
      suppressHydrationWarning
    >
      <div className=' flex-col gap-4 hidden md:flex'>
        <h1 className='headline-3 '>{dictionary.signUp}</h1>
        <span className='text-gray2 running-text-small '>
          {dictionary.alreadyHaveAnAccount}{" "}
          <Link
            className='text-white'
            href={
              "/auth/sign-in" +
              (redirect ? `?redirect=${redirect}&&id=${id}` : "")
            }
          >
            {dictionary.signIn}
          </Link>
        </span>
      </div>
      {step == 1 && (
        <Step1
          dictionary={dictionary}
          setStep={setStep}
          user={user}
          setUser={setUser}
        />
      )}
      {step == 2 && (
        <Step2
          dictionary={dictionary}
          setStep={setStep}
          user={user}
          setUser={setUser}
          reset={reset}
        />
      )}
    </div>
  );
}

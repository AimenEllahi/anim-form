import React from "react";
import ForgotPass from "@/components/auth/forgotPass";
import dynamic from "next/dynamic";
import { getDictionary } from "../../dictionaries";
export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className='bg-russianViolet bg-gradient w-full h-screen flex justify-center items-center'>
      <ForgotPass dictionary={dict.auth.forgetPass} />
    </div>
  );
}

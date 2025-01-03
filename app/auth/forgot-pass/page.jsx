import React from "react";
import ForgotPass from "@/components/auth/forgotPass";

export default async function page({ params }) {

  return (
    <div className='bg-russianViolet bg-gradient w-full h-screen flex justify-center items-center'>
      <ForgotPass  />
    </div>
  );
}

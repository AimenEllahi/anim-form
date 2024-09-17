import React, { Suspense } from "react";
import Signin from "@/components/auth/SignIn/signin";

export default function page() {
  return (
    <div className='  w-screen h-full md:h-screen flex justify-center items-center'>
      <Suspense>
        <Signin />
      </Suspense>
    </div>
  );
}

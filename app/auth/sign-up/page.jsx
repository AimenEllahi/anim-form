import React, { Suspense } from "react";
import Signup from "@/components/auth/SignUp/signup";

export default function page() {
  return (
    <div className='w-screen h-full  md:min-h-screen flex  justify-center items-center '>
      <Suspense>
        <Signup />
      </Suspense>
    </div>
  );
}

import React, { Suspense } from "react";
import Signin from "@/components/auth/SignIn/signin";

export default async function page({ params }) {
 
  return (
    <div className='  w-full h-full md:h-screen flex justify-center items-center'>
      <Suspense>
        <Signin  />
      </Suspense>
    </div>
  );
}

import React, { Suspense } from "react";
import Signup from "@/components/auth/SignUp/signup";
export default async function page({ params }) {
 
  return (
    <div className='w-full h-full  md:min-h-screen flex  justify-center items-center '>
      <Suspense>
        <Signup />
      </Suspense>
    </div>
  );
}

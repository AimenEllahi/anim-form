import React, { Suspense } from "react";
import NewPass from "@/components/auth/newPass";

export default async function page({ params }) {
 
  return (
    <div className='bg-russianViolet bg-gradient w-full h-screen flex justify-center items-center'>
      <Suspense fallback={null}>
        <NewPass  />
      </Suspense>
    </div>
  );
}

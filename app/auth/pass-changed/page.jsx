import React from "react";
import ChangedPass from "@/components/auth/changedPass";

export default async function page({ params }) {
  
  return (
    <div className='bg-russianViolet bg-gradient w-full h-screen flex justify-center items-center'>
      <ChangedPass />
    </div>
  );
}

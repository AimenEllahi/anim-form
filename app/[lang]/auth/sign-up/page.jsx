import React, { Suspense } from "react";
import Signup from "@/components/auth/SignUp/signup";
import { getDictionary } from "../../dictionaries";
export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className='w-full h-full  md:min-h-screen flex  justify-center items-center '>
      <Suspense>
        <Signup dictionary={dict.auth.signUp} />
      </Suspense>
    </div>
  );
}

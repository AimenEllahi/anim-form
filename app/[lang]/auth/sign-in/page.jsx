import React, { Suspense } from "react";
import Signin from "@/components/auth/SignIn/signin";
import { getDictionary } from "../../dictionaries";

export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return (
    <div className='  w-full h-full md:h-screen flex justify-center items-center'>
      <Suspense>
        <Signin dictionary={dict.auth.signIn} />
      </Suspense>
    </div>
  );
}

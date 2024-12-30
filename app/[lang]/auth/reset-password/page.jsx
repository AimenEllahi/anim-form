import React, { Suspense } from "react";
import NewPass from "@/components/auth/newPass";
import { getDictionary } from "../../dictionaries";
export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className='bg-russianViolet bg-gradient w-full h-screen flex justify-center items-center'>
      <Suspense fallback={null}>
        <NewPass dictionary={dict.auth.newPass} />
      </Suspense>
    </div>
  );
}

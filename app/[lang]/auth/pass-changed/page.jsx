import React from "react";
import ChangedPass from "@/components/auth/changedPass";
import { getDictionary } from "../../dictionaries";
export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return (
    <div className='bg-russianViolet bg-gradient w-full h-screen flex justify-center items-center'>
      <ChangedPass dictionary={dict.auth.passwordChanged} />
    </div>
  );
}

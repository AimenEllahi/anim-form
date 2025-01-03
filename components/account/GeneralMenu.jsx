import React from "react";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import CustomButton from "../ui/custom-button";
import { useRouter } from "next/navigation";
import Login from "@/components/ui/Icons/Login";

import SignUp from "@/components/ui/Icons/SignUp";
export default function GeneralMenu({ setOpen }) {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
    setOpen(false);
  };
  return (
    <DropdownMenuContent className='bg-transparent uppercase flex flex-col mt-4 p-2 !px-[9px]  w-[192px] border border-white/10 z-[21] bg-blur menu-shadow text-white running-text-mono rounded-[16px] !gap-y-2'>
      <CustomButton withIcon onClick={() => handleRedirect("/auth/sign-in")}>
        <Login className='h-5 w-5  opacity-70 fill-white' />
        Sign In
      </CustomButton>
      <CustomButton
        variant={"subtle"}
        withIcon
        onClick={() => handleRedirect("/auth/sign-up")}
      >
        <SignUp className='h-5 w-5   fill-white' />
        Sign Up
      </CustomButton>
    </DropdownMenuContent>
  );
}

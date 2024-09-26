import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import CustomButton from "../ui/custom-button";
import CustomMenuItem from "../ui/custom-menu-item";
import { useRouter } from "next/navigation";
import Login from "@/components/ui/Icons/Login";
import Discover from "@/components/ui/Icons/Discover";
export default function GeneralMenu({ setOpen }) {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
    setOpen(false);
  };
  return (
    <DropdownMenuContent className='bg-transparent uppercase flex flex-col mt-4 p-2 !px-[9px]  border border-white/10 z-[21] bg-blur menu-shadow text-white running-text-mono rounded-[16px] !gap-y-2'>
      <CustomButton withIcon onClick={() => handleRedirect("/auth/sign-in")}>
        <Login className='h-5 w-5  opacity-70 fill-white' />
        SIGN IN
      </CustomButton>

      <DropdownMenuItem
        onClick={() => handleRedirect("/character/my-characters")}
        className='flex !p-0  !my-0 w-full focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'
      >
        <CustomMenuItem>
          <img
            src='/Icons/UserCircle.svg'
            alt='Button to get to My Characters page'
            className='h-5 w-5  opacity-70'
          />
          <span>My characters</span>
        </CustomMenuItem>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}

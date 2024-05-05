import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import CustomButton from "../ui/custom-button";
import CustomMenuItem from "../ui/custom-menu-item";
export default function GeneralMenu() {
  return (
    <DropdownMenuContent className='bg-transparent uppercase flex flex-col mt-4 p-2 !px-[9px]  border border-white/10 z-[10] bg-blur menu-shadow text-white running-text-mono rounded-[16px]'>
      <CustomButton withIcon variant='primary'>
        <img src='/Icons/Login.svg' alt='logo' className='h-[15px] w-[15px] ' />
        SIGN IN
      </CustomButton>

      <DropdownMenuItem className='flex gap-2  focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
        <CustomMenuItem>
          <img
            src='/Icons/UserCircle.svg'
            alt=''
            className='h-5 w-5 invert opacity-70'
          />
          <span>My characters</span>
        </CustomMenuItem>
      </DropdownMenuItem>
      <DropdownMenuItem className='flex gap-2  focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
        <CustomMenuItem>
          <img
            src='/Icons/ImageLibrary.svg'
            alt=''
            className='h-5 w-5 invert opacity-70'
          />
          <span>Saved images</span>
        </CustomMenuItem>
      </DropdownMenuItem>
      <DropdownMenuItem className='flex gap-2  focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
        <CustomMenuItem>
          <img
            src='/Icons/Campaign.svg'
            alt=''
            className='h-5 w-5 invert opacity-70'
          />
          <span>My campaigns</span>
        </CustomMenuItem>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}

import React from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import CustomMenuItem from "../ui/custom-menu-item";
import useUserStore from "@/utils/userStore";
import CustomIcontext from "@/components/ui/custom-icontext";
import Cookie from "universal-cookie";
import { useRouter } from "next/navigation";
import Discover from "@/components/ui/Icons/Discover";
export default function SignedInUserMenu() {
  const router = useRouter();
  const { user, setUser } = useUserStore();

  const cookies = new Cookie();
  const handleLogout = () => {
    console.log("Logging out");
    setUser(null);
    cookies.set("token", null, { path: "/" });
  };

  const handleRedirect = (path) => {
    router.push(path);
  };
  return (
    <DropdownMenuContent className='uppercase flex flex-col mt-4 bg-white/10 !px-0 py-2 border border-white/10 z-[10] bg-blur menu-shadow text-white running-text-mono rounded-[16px] mr-5'>
      <div className='gap-5 px-6 py-4 pb-3 flex flex-col'>
        <div className='flex flex-col gap-2'>
          <span className=' headline-4'>{user.username}</span>
          <span className='running-text-small lowercase text-gray2'>
            {user?.email}
          </span>
        </div>
        <div className='flex gap-5'>
          <CustomIcontext>
            <img
              src='/gems/Mythic.webp'
              alt=''
              className='h-[18px] object-contain '
            />
            {user.blueCredits}
          </CustomIcontext>
          <CustomIcontext>
            <img
              src='/gems/Legendary.webp'
              alt=''
              className='h-[18px] object-contain '
            />
            {user.yellowCredits}
          </CustomIcontext>
        </div>
      </div>

      <hr className='w-full border-white/5 my-2' />
      <div className='w-full px-2 gap-2 flex flex-col'>
        <DropdownMenuItem className='flex !p-0 gap-2 w-full focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
          <CustomMenuItem onClick={() => handleRedirect("/discover")}>
            <Discover className='h-5 w-5  opacity-70 fill-white' />
            <span>Discover</span>
          </CustomMenuItem>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex !p-0 gap-2 w-full focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
          <CustomMenuItem
            onClick={() => handleRedirect("/character/my-characters")}
          >
            <img
              src='/Icons/UserCircle.svg'
              alt=''
              className='h-5 w-5  opacity-70'
            />
            <span>My characters</span>
          </CustomMenuItem>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleRedirect("/my-account/gallery")}
          className='flex gap-2 !p-0   focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'
        >
          <CustomMenuItem>
            <img
              src='/Icons/ImageLibrary.svg'
              alt=''
              className='h-5 w-5  opacity-70'
            />
            <span>My images</span>
          </CustomMenuItem>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex gap-2 !p-0   focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
          <CustomMenuItem
            onClick={() => handleRedirect("/campaign/my-campaigns")}
          >
            <img
              src='/Icons/Campaign.svg'
              alt=''
              className='h-5 w-5  opacity-70'
            />
            <span>My campaigns</span>
          </CustomMenuItem>
        </DropdownMenuItem>
        <DropdownMenuItem className='flex gap-2 !p-0   focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
          <CustomMenuItem
            onClick={() => handleRedirect("/campaign/my-campaigns/favorites")}
          >
            <img
              src='/Icons/StarFilled.svg'
              alt=''
              className='h-5 w-5  opacity-70'
            />
            <span>Favorites</span>
          </CustomMenuItem>
        </DropdownMenuItem>
      </div>
      <hr className='w-full border-white/5 my-2' />
      <div className='w-full px-2 gap-2 flex flex-col'>
        {/* <DropdownMenuItem className='flex gap-2 !p-0   focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
          <CustomMenuItem>
            <img
              src='/Icons/Settings.svg'
              alt=''
              className='h-5 w-5  opacity-70'
            />
            <span>Account Settings</span>
          </CustomMenuItem>
        </DropdownMenuItem> */}
        <DropdownMenuItem className='flex gap-2 !p-0   focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
          <CustomMenuItem onClick={handleLogout}>
            <img
              src='/Icons/Logout.svg'
              alt=''
              className='h-5 w-5  opacity-70'
            />
            <span>Logout</span>
          </CustomMenuItem>
        </DropdownMenuItem>
      </div>
    </DropdownMenuContent>
  );
}

import React, { useEffect } from "react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import CustomMenuItem from "../ui/custom-menu-item";
import useUserStore from "@/utils/userStore";
import CustomIcontext from "@/components/ui/custom-icontext";
import Cookie from "universal-cookie";
import { useRouter } from "next/navigation";

import Support from "@/components/ui/Icons/Support";
import Adventure from "../ui/Icons/Adventure";
import Achievement from "../ui/Icons/Achievement";
import Emblem from "../ui/Icons/Emblem";
import { getUserAchievements } from "@/actions/achievement";
export default function SignedInUserMenu({ open }) {
  const router = useRouter();
  const { user, setUser, rank, title, updateTitle, updateRank } =
    useUserStore();

  const cookies = new Cookie();
  const handleLogout = () => {
    cookies.set("token", "", { path: "/" });
    setUser(null);
    window.location.reload();
  };

  const handleRedirect = (path) => {
    router.push(path);
  };

  const handleGetUserAchievements = async () => {
    try {
      console.log("Getting user achievements");
      const userAchievements = await getUserAchievements(user.token);
      updateTitle(userAchievements.title);
      updateRank(userAchievements.rank);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(open);
  useEffect(() => {
    console.log("Checking user achievements");
    if (user?.token && (!rank || !title)) {
      handleGetUserAchievements();
    }
  }, [open]);
  return (
    <DropdownMenuContent className='min-w-[250px] uppercase flex flex-col mt-4 bg-white/10 !px-0 py-2 border border-white/10 z-[21] bg-blur menu-shadow text-white running-text-mono rounded-[16px] '>
      <div className='gap-2 px-6 py-4 pb-3 flex flex-col'>
        <div className='flex flex-col gap-2'>
          <span className=' headline-4'>{user.username}</span>
        </div>
        <div className='flex gap-2 items-center'>
          <img
            src={`https://dzjg7lvewk7ln.cloudfront.net/rank-images/${rank}.webp`}
            alt=''
            className='size-6 rounded-full'
          />
          <span className='running-text-mono uppercase text-sandyOrange'>
            the {title}
          </span>
        </div>
      </div>

      <div className='w-full px-2 gap-2 flex flex-col '>
        <DropdownMenuItem className=' flex !p-0 gap-2 w-full focus:bg-transparent focus:text-white  transition-all duration-300 ease-linear cursor-pointer'>
          <CustomMenuItem onClick={() => handleRedirect("/emblems-titles")}>
            <Emblem className='h-5 w-5 fill-white opacity-70' />
            <span>Emblems & Titles</span>
          </CustomMenuItem>
        </DropdownMenuItem>
      </div>

      <hr className='w-full border-white/5 my-2' />
      <div className='w-full px-2 gap-2 flex flex-col'>
        <CustomMenuItem
          onClick={() => handleRedirect("/character/my-characters")}
        >
          <Adventure className='h-5 w-5 fill-white opacity-70' />
          <span>My Adventurers</span>
        </CustomMenuItem>
        <CustomMenuItem onClick={() => handleRedirect("/my-account/gallery")}>
          <img
            src='/Icons/ImageLibrary.svg'
            title='My Image Gallery'
            alt='Private image gallery of the user'
            className='h-5 w-5  opacity-70'
          />
          <span>My images</span>
        </CustomMenuItem>

        <CustomMenuItem
          onClick={() => handleRedirect("/campaign/my-campaigns")}
        >
          <img
            src='/Icons/Campaign.svg'
            title='Campaigns'
            alt='user generated campaigns'
            className='h-5 w-5  opacity-70'
          />
          <span>My campaigns</span>
        </CustomMenuItem>

        <CustomMenuItem
          onClick={() => handleRedirect("/campaign/my-campaigns/favorites")}
        >
          <img
            src='/Icons/StarFilled.svg'
            title='Star Icon'
            alt='Icon to get to favourite  Campaigns page'
            className='h-5 w-5  opacity-70'
          />
          <span>Favorites</span>
        </CustomMenuItem>
      </div>
      <hr className='w-full border-white/5 my-2' />
      <div className='w-full px-2 gap-2 flex flex-col'>
        <CustomMenuItem onClick={() => handleRedirect("/my-account/settings")}>
          <img
            src='/Icons/Settings.svg'
            title='Settings icon'
            alt='Button to get to the account settings'
            className='h-5 w-5  opacity-70'
          />
          <span>Account Settings</span>
        </CustomMenuItem>

        <CustomMenuItem onClick={() => handleRedirect("/pricing")}>
          <Support className='h-5 w-5 fill-white opacity-70' />
          <span>Support Us</span>
        </CustomMenuItem>

        <CustomMenuItem onClick={handleLogout}>
          <img
            src='/Icons/Logout.svg'
            title='Logout Icon'
            alt='Logout button'
            className='h-5 w-5  opacity-70'
          />
          <span>Logout</span>
        </CustomMenuItem>
      </div>
    </DropdownMenuContent>
  );
}

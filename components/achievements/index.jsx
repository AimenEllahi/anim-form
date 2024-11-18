import React, { useEffect, useState, useRef } from "react";

import Emblems from "./Emblems";
import CustomButton from "@/components/ui/custom-button";
import Play from "@/components/ui/Icons/Play";
import Edit from "@/components/ui/Icons/Edit";
// import Avatar from "./create-avatar/avatar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CustomIconbutton from "@/components/ui/custom-iconbutton";
import SoundButton from "@/components/ui/Shared/SoundButton";
import Delete from "@/components/ui/Icons/Delete";
import useUserStore from "@/utils/userStore";
import { cn } from "@/lib/utils";
import DeleteCharacter from "@/components/ui/Shared/Dialogue/DeleteCharacter";
import useCustomToast from "@/hooks/useCustomToast";
import { deleteCharacter, getCharacter } from "@/actions/character";
import Loader from "@/components/ui/Loader";
import useGameStore from "@/utils/gameStore";
import GuestUser from "@/components/ui/Shared/Dialogue/GuestUser";
import Switch from "./Switch";
import Titles from "./Titles";
import Achieve from "./Achieve";

export default function Index({ userAchievements, achievements }) {
  const [selectedTab, setSelectedTab] = useState("emblems");
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useUserStore();

  const containerRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      ref={containerRef}
      className='h-full min-h-full w-full pt-[160px] px-5 pb-32 md:pt-[120px] md:pb-[104px] md:px-12 flex flex-col gap-[24px] relative z-10'
    >
      <GuestUser />
      <div className='hidden md:flex  items-start justify-start md:justify-between  gap-1 md:gap-[32px]  '>
        <div className='w-full z-10  flex justify-between items-center'>
          <div className='z-10 h-20 w-2/4 flex justify-start items-start md:items-center gap-1 md:gap-5 flex-col md:flex-row'>
            <div className='w-20 h-20  rounded-full '>
              <img
                src='/achievements/adept.png'
                alt=''
                className='w-full h-full object-cover rounded-full'
              />
            </div>
            <div className='flex flex-col  h-full'>
              <span className=' text-sandyOrange running-text-mono  uppercase'>
                {userAchievements.rank}
              </span>
              <span className='text-white headline-3'>{user.username}</span>
              <span className='text-gray2 headline-3 running-text-mono uppercase'>
                Archievement Rank {userAchievements.level}
              </span>
            </div>
          </div>
          <div className='z-10 text-sandyOrange w-2/4 h-20  flex flex-col gap-5 justify-start items-start '>
            <div className='w-full flex  justify-between items-center'>
              <span className='text-[#FFB371] flex gap-2 uppercase running-text-mono'>
                Total Trophies{" "}
                <img src='/achievements/icons/trophy.png' alt='' />{" "}
                {userAchievements.achievements.length}
              </span>
              <span className='text-[#FFB371] flex gap-2 uppercase running-text-mono'>
                {" "}
                <img src='/achievements/icons/trophy.png' alt='' />{" "}
                {userAchievements.achievements.length}/40
              </span>
            </div>
            <div className='w-full bg-white/[15%] rounded-full h-2'>
              <div
                style={{
                  width: `${
                    (userAchievements.achievements.length / 40) * 100
                  }%`,
                }}
                className={
                  "h-2 rounded-full bg-gradient-to-r from-[#FFB371] to-[#F8D8BB] "
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Switch selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "emblems" && (
        <div className=' h-full w-full flex flex-col lg:flex-row'>
          <div className='w-full '>
            <Emblems />
          </div>
        </div>
      )}
      {selectedTab === "titles" && (
        <Titles userPokals={userAchievements.pokal} />
      )}{" "}
      {selectedTab === "achievements" && (
        <Achieve
          userAchievements={userAchievements}
          achievements={achievements}
        />
      )}
      <div className='md:hidden z-[10] flex items-center justify-between bg-blur-bottom-menu fixed bottom-0 w-screen left-0 p-5 '>
        <div className='flex items-center gap-4'>
          <SoundButton />
          <CustomIconbutton
          // onClick={() => {
          //   setOpen(true);
          //   router.push(pathname);
          // }}
          >
            <Edit fill='white' className='h-5 w-5  ' />
          </CustomIconbutton>
        </div>
        <CustomButton
          disabled={isLoading}
          //   onClick={handlePlayWithCharacter}
          variant={"primary"}
        >
          <Play className='h-5 w-5 opacity-70' />
          Play Now
        </CustomButton>
      </div>
    </div>
  );
}

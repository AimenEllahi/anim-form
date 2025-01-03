import React, { useEffect, useState, useRef } from "react";

import Emblems from "./Emblems";
import CustomButton from "@/components/ui/custom-button";
import Play from "@/components/ui/Icons/Play";
import Edit from "@/components/ui/Icons/Edit";
import CustomIconbutton from "@/components/ui/custom-iconbutton";
import SoundButton from "@/components/ui/Shared/SoundButton";
import useUserStore from "@/utils/userStore";

import GuestUser from "@/components/ui/Shared/Dialogue/GuestUser";
import Switch from "./Switch";
import Titles from "./Titles";
import Achieve from "./Achieve";
import { LEVELS } from "./Titles";
import General from "../ui/Shared/TabBar/general";
import AchievementV2 from "../ui/Icons/AchievementV2";

export default function Index({ userAchievements, achievements }) {
  const [selectedTab, setSelectedTab] = useState("emblems");

  const { user, rank, title, updateLevel } = useUserStore();

  const containerRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updateLevel(userAchievements.level);
  }, [userAchievements]);
  let nextLevelToAchieve = LEVELS.find(
    (level) => userAchievements.pokal < level.pokalsRequired
  );

  //check if user has reached last level
  if (!nextLevelToAchieve) {
    nextLevelToAchieve = LEVELS[LEVELS.length - 1];
  }

  return (
    <div
      ref={containerRef}
      className='h-full min-h-full w-full pt-[188px]  pb-32 md:pt-[120px]  md:pb-[104px]  flex flex-col gap-[24px] relative z-10'
    >
      <GuestUser />
      {/* desktop */}
      <div className='hidden md:flex  h-fit items-start justify-start md:justify-between gap-1 md:gap-[32px] px-12'>
        <div className='w-full z-10 h-fit  flex justify-between items-center'>
          <div className='z-10 h-full w-2/4 flex justify-start items-start md:items-center gap-1 md:gap-5 flex-col md:flex-row'>
            <img
              src={`https://dzjg7lvewk7ln.cloudfront.net/rank-images/${rank}.webp`}
              alt=''
              className='size-20 object-cover rounded-full'
            />

            <div className='flex flex-col gap-1  h-full'>
              <span className=' text-sandyOrange running-text-mono  uppercase'>
                {title}
              </span>
              <span className='text-white headline-3 capitalize'>
                {user.username}
              </span>
              <span className='text-gray2 headline-3 running-text-mono uppercase'>
                Archievement Rank {userAchievements.level}
              </span>
            </div>
          </div>
          <div className='z-10 text-sandyOrange w-2/4 h-20  flex flex-col gap-5 justify-start items-start '>
            <div className='w-full flex  justify-between items-center'>
              <span className='text-[#FFB371] flex gap-2 uppercase items-center running-text-mono'>
                Total Pokals <AchievementV2 className='h-5 w-5 ' />{" "}
                {userAchievements.pokal}
              </span>
              <span className='text-[#FFB371] flex gap-2 items-center uppercase running-text-mono'>
                {" "}
                <AchievementV2 className='h-5 w-5 ' /> {userAchievements.pokal}/
                {nextLevelToAchieve.pokalsRequired}
              </span>
            </div>
            <div className='w-full bg-white/[15%] rounded-full h-2'>
              <div
                style={{
                  width: `${
                    (userAchievements.pokal /
                      nextLevelToAchieve.pokalsRequired) *
                    100
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
      {/* mobile */}
      <div className='md:hidden flex items-start justify-start md:justify-between gap-1 md:gap-[32px] px-5   '>
        <div className='w-full z-10 flex flex-col gap-6 justify-between items-center'>
          <div className='z-10 text-sandyOrange w-full h-12  flex flex-col gap-5 justify-start items-start '>
            <div className='w-full flex  justify-between items-center'>
              <span className='text-[#FFB371] items-center flex gap-2 uppercase running-text-mono'>
                Total Pokals <AchievementV2 /> {userAchievements.pokal}
              </span>
              <span className='text-[#FFB371] items-center flex gap-2 uppercase running-text-mono'>
                {" "}
                <AchievementV2 /> {userAchievements.pokal}/
                {nextLevelToAchieve.pokalsRequired}
              </span>
            </div>
            <div className='w-full bg-white/[15%] rounded-full h-2'>
              <div
                style={{
                  width: `${
                    (userAchievements.pokal /
                      nextLevelToAchieve.pokalsRequired) *
                    100
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
        <div className=' h-full w-full flex flex-col lg:flex-row px-5 md:px-12'>
          <div className='w-full '>
            <Emblems userPokals={userAchievements.pokal} />
          </div>
        </div>
      )}
      {selectedTab === "titles" && (
        <div className='px-5 md:px-12 '>
          <Titles userPokals={userAchievements.pokal} />
        </div>
      )}{" "}
      {selectedTab === "achievements" && (
        <Achieve
          userAchievements={userAchievements}
          achievements={achievements}
        />
      )}
      <General showSearch={false} />
    </div>
  );
}

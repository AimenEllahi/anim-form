import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useUserStore from "@/utils/userStore";
import Info from "@/components/ui/Icons/Info";
import { cn } from "@/lib/utils";
import Loader from "@/components/ui/Loader";
import CustomButton from "@/components/ui/custom-button";
import CampaignAdd from "@/components/ui/Icons/CampaignAdd";

import { extractSection } from "@/lib/Helpers/shared";

const ProfileButtons = dynamic(() =>
  import("@/components/character/myCharacter/character-sheet/profile-buttons", {
    ssr: false,
  })
);

export default function characterInfo({
  character,
  currentPortrait,
  loadingAvatar,
}) {
  const { user } = useUserStore();

  return (
    <div className=' w-[345px] h-auto p-4 border border-white/10 bg-white/10 rounded-[16px] overflow-hidden flex flex-col justify-start'>
      <div className=''>
        <div className='h-auto w-full relative flex flex-col gap-4'>
          {loadingAvatar && (
            <Loader
              text='Weaving illusions...'
              className='absolute top-0 left-0 w-full h-full bg-blur flex items-center justify-center'
            />
          )}
          <div className='flex justify-between'>
            <span className='running-text-large'>Character portrait</span>
            <img src='/Icons/Info-button.svg' alt='' />
          </div>
          <img
            src={
              currentPortrait ||
              "/images/CreateCharacter/CharacterName/CharacterName.png"
            }
            alt='custom character portrait'
            title='Custom Character Portrait'
            className=' w-full object-contain aspect-square rounded-[10px] '
          />
          <CustomButton variant={"primary"} withIcon>
            <CampaignAdd className={cn("h-4 w-4 fill-russianViolet")} />
            change character potrait
          </CustomButton>
          {/* <div
            className={cn(
              "absolute bottom-0 left-0 w-full bg-sandyOrange gap-2 py-4 pe-6 ps-5 flex items-center justify-center text-black",
              user?.token && "opacity-0 pointer-events-none"
            )}
          >
            <Info className="w-4 h-4" fill="#000" />{" "}
            <span className="description text-russianViolet uppercase">
              Sign up to change character portrait
            </span>
          </div> */}
        </div>
        {/* <div className="flex flex-col p-5 pt-6 gap-4">
          <div className=" flex justify-between items-center">
            <span className=" headline-4 text-white ">
              {character?.personal?.name}
            </span>
            <img
              src={`https://dzjg7lvewk7ln.cloudfront.net/class/${character?.personal?.class
                .toLowerCase()
                .replaceAll(" ", "-")}.webp`}
              className="rounded-full h-[32px] w-[32px]"
              title="Characters Class"
              alt="class of the Character"
            />
          </div>
          <div className="flex flex-col running-text-mono">
            <span className="text-white ">LEVEL {character.value.level}</span>
            <span className=" text-irisPurpleLight uppercase">
              {character?.personal?.race}{" "}
              <span className=" text-sandyOrange uppercase">
                {character?.personal?.class}
              </span>
            </span>
          </div>
        </div> */}
      </div>
      {/* <ProfileButtons character={character} /> */}
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";

import CustomIconbutton from "@/components/ui/custom-iconbutton";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";
import Add from "@/components/ui/Icons/Add";
import CampaignAdd from "@/components/ui/Icons/CampaignAdd";
import AddUser from "@/components/ui/Icons/AddUser";
import { cn } from "@/lib/utils";
import SoundButton from "@/components/ui/Shared/SoundButton";
import Play from "@/components/ui/Icons/Play";
import useGameStore from "@/utils/gameStore";

export default function GameTabbar({ className }) {
  const router = useRouter();
  const { setStartNewGame } = useGameStore();
  const [showButtons, setShowButtons] = useState(false);

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <div
      className={cn(
        "z-[20]  text-white fixed bottom-0 left-0 bg-blur-bottom-menu w-full flex p-5  justify-center items-center  md:hidden ",
        className
      )}
    >
      <div className='flex flex-col items-center gap-4 w-full relative '>
        <hr
          className={cn(
            "w-9 border-[1px] rounded-sm border-gray1 text-gray1",
            !showButtons && "hidden"
          )}
        />
        <div
          className={cn(
            "border w-full flex flex-col btns-menu border-white/10 bg-white/10 rounded-[16px] gap-2 py-2 px-5",
            !showButtons && "hidden"
          )}
        >
          <div>
            <CustomButton
              onClick={() => handleRedirect("/character/create")}
              variant={"subtle"}
            >
              <AddUser className='h-5 w-5 fill-white opacity-70' />
              Create Character
            </CustomButton>
          </div>
          <div>
            <CustomButton
              onClick={() => handleRedirect("/campaign/create")}
              variant={"subtle"}
            >
              <CampaignAdd className='h-5 w-5 fill-white opacity-70' />
              Create Campaign
            </CustomButton>
          </div>
        </div>

        <div className='flex justify-between items-center w-full '>
          <div className='flex items-center gap-5'>
            <SoundButton />
            <CustomIconbutton onClick={() => setShowButtons((prev) => !prev)}>
              <Add className='h-5 w-5 fill-white' />
            </CustomIconbutton>
          </div>
          <CustomButton
            onClick={() => setStartNewGame(true)}
            variant={"primary"}
            withIcon={true}
            className={""}
          >
            <Play className='h-5 w-5 fill-russianViolet ' />
            Start New Game
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

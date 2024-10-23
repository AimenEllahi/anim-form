"use client ";
import React, { useState } from "react";
import CampaignAdd from "@/components/ui/Icons/CampaignAdd";
import Card from "../Step2/Card";
import Adventure from "@/components/ui/Icons/Adventure";
import useGameStore from "@/utils/gameStore";

export default function Step3() {
  const { currentCharacter, currentCampaign } = useGameStore();

  return (
    <div className=' h-full md:h-[483px] overflow-auto hide-scrollbar pt-5 px-5'>
      <div className='grid grid-cols-8 gap-4   '>
        {/* Left Section: Campaign Details */}
        <div className=' flex flex-col gap-3 col-span-8 md:col-span-5 pb-5 order-last md:order-first '>
          <div className='uppercase flex gap-2 items-center '>
            {/* <img src="/icons/Swords.svg" alt="Swords Icon" /> */}
            <CampaignAdd className={"fill-gray2 h-5 w-5"} />
            <h3 className='running-text-mono text-gray2'>Campaign</h3>
          </div>
          <div className='bg-white/[8%] border border-white/10 p-4 rounded-[10px] flex flex-col gap-3'>
            <p className='text-white running-text-large'>
              {currentCampaign?.title}
            </p>
            <p className='text-gray2 running-text'>
              {currentCampaign?.adventure.plot}
            </p>
          </div>
        </div>

        {/* Right Section: Character Details */}
        <div className='flex flex-col gap-3 col-span-8 md:col-span-3 order-first md:order-last'>
          <div className='uppercase flex gap-2 items-center'>
            <Adventure className={"fill-gray2 h-5 w-5"} />
            <h3 className='running-text-mono text-gray2'>Characters</h3>
          </div>
          <div className='space-y-2'>
            <Card character={currentCharacter} summary={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

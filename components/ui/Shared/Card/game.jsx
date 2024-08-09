"use client";
import React, { useState } from "react";
import Button from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";

import Continue from "@/components/ui/Icons/Continue";
import RecentlyPlayed from "../../Icons/RecentlyPlayed";
import moment from "moment";

export default function GameCard({ game, className }) {
  const router = useRouter();

  const handleRedirect = (event) => {
    router.push(`game/play?id=${game.game._id}`);
  };

  return (
    <div
      className={cn(
        "rounded-[16px] cursor-pointer bg-white/[8%] hover:bg-white/10   h-full group hover:!shadow-custom-1 min-w-[292px] w-[292px] max-w-[292px] ease-animate  overflow-hidden md:min-w-[345px] md:w-[345px]  border-white/[8%] border hover:border-white/20 running-text-mono   ",
        className
      )}
    >
      <div className='w-full h-full flex flex-col    '>
        <div className='relative '>
          <img
            onClick={handleRedirect}
            src={game.campaign?.worldMapUrl || "/images/Header.webp"}
            alt=''
            className='h-[248px] w-full object-cover'
          />
        </div>
        <div
          onClick={handleRedirect}
          className='  flex flex-col h-full justify-between flex-1 p-5 gap-2 '
        >
          <div className='flex items-center gap-3'>
            {" "}
            <img
              src={`https://dndai-images.s3.eu-central-1.amazonaws.com/class/${game.character?.class
                .toLowerCase()
                .replaceAll(" ", "-")}.webp`}
              className='rounded-full h-8 w-8'
            />
            <span className='running-text-mono uppercase text-gray2 '>
              {game.character?.name}
            </span>
          </div>

          <div className='  flex flex-col justify-around '>
            <span className='mb-2 h-9 overflow-hidden  md:h-12 ellipsis  headline-4 text-white break-words whitespace-pre-line '>
              {game.campaign?.title}
            </span>
          </div>
          <div
            className={cn(
              "flex justify-between items-center gap-5 mt-auto  text-white"
            )}
          >
            <div className='flex items-center gap-x-1 running-text-mono uppercase text-[14px] '>
              <RecentlyPlayed className='h-5 w-5 fill-white opacity-70 prevent-redirect' />
              {moment(game.game.updatedAt).fromNow()}
            </div>
            <Button onClick={redirect} withIcon className='prevent-redirect'>
              <Continue className='h-5 w-5 fill-white opacity-70 prevent-redirect' />
              <span className='prevent-redirect'>Continue</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

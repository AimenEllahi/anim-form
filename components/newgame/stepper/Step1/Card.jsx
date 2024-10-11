import React from "react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useGameStore from "@/utils/gameStore";

export default function Card({ campaign }) {
  const { currentCampaign, setCurrentCampaign } = useGameStore();
  return (
    <div
      onClick={() => {
        setCurrentCampaign(campaign);
      }}
      className={cn(
        "border group border-white/[8%] bg-white/[8%] p-2 pe-4 flex justify-between rounded-[10px] cursor-pointer transition-all duration-300 ease-in-out overflow-visible",
        currentCampaign?._id === campaign?._id
          ? "bg-[#8F91FF33] border-[#8F91FF] shadow-[0_0_30px_0_rgba(127,126,252,0.3)]"
          : "hover:bg-white/10 hover:border-white/20 "
      )}
    >
      <div className='flex justify-start items-center gap-3'>
        <img
          src={campaign?.worldMapUrl || "/images/Header.webp"}
          alt='Campaign'
          className='h-14 w-14 rounded-[6px]'
        />
        {/* Left section for title and description */}
        <div className='flex flex-col'>
          <h3 className='running-text text-white'>{campaign.title}</h3>
          <p className='text-gray2 running-text-small'>
            {campaign.plot.slice(0, 80)}...
          </p>
        </div>
      </div>
      {/* Right section for any actions or details */}

      <Popover>
        <PopoverTrigger>
          <div
            className={cn(
              "flex items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
            )}
          >
            <div className='h-9 w-9 rounded-full bg-white/[8%] border border-white/[8%] flex justify-center items-center'>
              <img src='/icons/toolip.svg' alt='Info' className='h-4 w-4' />
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className='!min-w-[512px]'>
          <div className='flex flex-col gap-3'>
            <span className='running-text'>{campaign.title}</span>
            <span className='running-text-small'>{campaign.plot}</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

import React from "react";
import { cn } from "@/lib/utils";
import moment from "moment";

export default function OptionCard({
  imageSrc,
  title,
  desc,
  isSelected,
  onClick,
  isCompleted,
  selectedTab, // Add this prop to handle "Public Games"
  characterName,
  campaignName,
  updatedAt,
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "border p-2 flex justify-between rounded-[16px] cursor-pointer transition-all duration-300 ease-in-out overflow-visible",
        {
          // Initial state for "Public Games"
          "bg-[#FFB37114] border-[#FFB37114]":
            selectedTab === "publicGames" && !isSelected,

          // Initial state for "In Progress" and "Completed"
          "bg-[#05D38114] border-white/10":
            !isSelected && isCompleted && selectedTab !== "publicGames",
          "bg-white/[8%] border-white/10":
            !isSelected && !isCompleted && selectedTab !== "publicGames",

          // Selected state for "Public Games"
          "bg-[#FFB37133] border-[1px] border-[#FFB371] shadow-[0_0_30px_0_rgba(255,179,113,0.3)]":
            selectedTab === "publicGames" && isSelected,

          // Selected state for "In Progress" and "Completed"
          "bg-successGreen/20 border-[1px] border-successGreen shadow-[0_0_30px_0_rgba(5,211,129,0.3)]":
            isSelected && isCompleted && selectedTab !== "publicGames",
          "bg-irisPurpleLight/20 border border-irisPurpleLight shadow-[0_0_20px_0_rgba(143,145,255,0.3)]":
            isSelected && !isCompleted && selectedTab !== "publicGames",
        },
        {
          // Hover state for "Public Games"
          "hover:bg-[#FFB37133] hover:border-[1px] hover:border-[#FFB371] hover:shadow-[0_0_30px_0_rgba(255,179,113,0.3)]":
            selectedTab === "publicGames",

          // Hover state for "In Progress" and "Completed"
          "hover:bg-white/10 hover:border-[1px] hover:border-white/20 ":
            !isCompleted && selectedTab !== "publicGames" && !isSelected,
          "hover:bg-successGreen/10 hover:border-[1px] hover:border-successGreen/20 ":
            isCompleted && selectedTab !== "publicGames" && !isSelected,
        }
      )}
    >
      <div className='flex gap-3  items-center w-full'>
        <img
          src={imageSrc}
          alt={title}
          className='w-14 h-14 rounded-[6px] object-contain'
        />
        <div className='flex flex-col justify-center gap-1.5  items-start'>
          <span className='running-text max-h-10 overflow-hidden'>
            {campaignName}, {characterName}
          </span>
          <span className='text-gray2 description uppercase text'>
            Played {moment(updatedAt).fromNow()}
          </span>
        </div>
      </div>

      <img
        src='/Icons/DownArrow.svg'
        alt=''
        className={cn(
          "mr-4 transform hidden md:block -rotate-90 opacity-0 transition-opacity duration-200 ease-in-out",
          { "opacity-100": isSelected }
        )}
      />
    </div>
  );
}

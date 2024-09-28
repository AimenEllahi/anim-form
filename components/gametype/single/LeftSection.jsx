"use client";
import CustomButton from "@/components/ui/custom-button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Sort from "@/components/ui/Icons/Sort";
import SearchInput from "@/components/ui/search-input";
import React, { useState } from "react";
import OptionCard from "./OptionCard";

export default function LeftSection({
  selectedTab,
  games,
  selectedGame,
  setSelectedGame,
}) {
  return (
    <div className='h-full md:p-4 flex flex-col gap-4 '>
      <div className=' flex gap-4'>
        <SearchInput
          //   query={query}
          //   setQuery={setQuery}
          placeholder='Search'
          className={"w-full "}
        />
        <CustomButton className={"h-full"}>
          <img src='/Icons/Sort.svg' alt='' />
          newest to oldest
          <img src='/Icons/DownArrow.svg' alt='' />
        </CustomButton>
      </div>
      <div className='flex flex-col gap-3 h-[65vh] overflow-auto hide-scrollbar'>
        {games.map((option, index) => (
          <OptionCard
            key={index}
            imageSrc={option.campaign.worldMapUrl}
            characterName={option.character.name}
            campaignName={option.campaign.title}
            updatedAt={option.game.updatedAt}
            isSelected={selectedGame?.game._id === option.game._id}
            onClick={() => setSelectedGame(option)}
            isCompleted={selectedTab === "completed"} // Pass down the tab state
            selectedTab={selectedTab} // Pass down the selectedTab for correct styling
          />
        ))}
      </div>
    </div>
  );
}

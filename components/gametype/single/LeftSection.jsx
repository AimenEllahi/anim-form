"use client";
import CustomButton from "@/components/ui/custom-button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Sort from "@/components/ui/Icons/Sort";
import SearchInput from "@/components/ui/search-input";
import React, { useEffect, useState } from "react";
import OptionCard from "./OptionCard";
import CustomDropdown from "@/components/ui/custom-dropdown";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import { cn } from "@/lib/utils";
export default function LeftSection({
  selectedTab,
  games,
  selectedGame,
  setSelectedGame,
}) {
  const { isMobile } = useDeviceDetect();
  const [query, setQuery] = useState();
  const [sortBy, setSortBy] = useState("Newest to Oldest");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const detectClickOutside = (e) => {
    if (e.target.classList.contains("search-input")) {
      return;
    }
    setIsSearchOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", detectClickOutside);

    return () => {
      document.removeEventListener("click", detectClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className='h-full md:p-4 !pb-0 flex flex-col gap-4  w-full '>
      <div
        className={cn(
          " flex gap-4 flex-row-reverse md:flex-row transition-all duration-[1500ms] ease-in-out items-center",
          isSearchOpen && "gap-0 md:gap-4"
        )}
      >
        <SearchInput
          query={query}
          onClick={() => setIsSearchOpen(true)}
          setQuery={setQuery}
          placeholder={isMobile ? "" : "Search"}
          className={cn(
            "w-12 md:w-full search-input transition-all duration-1000 ease-in-out",
            isSearchOpen && "w-full"
          )}
          inputClassName={cn("ps-0 md:ps-[38px]", isSearchOpen && "ps-[38px]")}
        />

        <CustomDropdown
          options={["Newest to Oldest", "Oldest To Newest", "Turns Played"]}
          selectedOption={sortBy}
          setSelectedOption={setSortBy}
          className={cn(
            "w-full md:w-fit transition-all duration-1000 ease-in-out",
            isSearchOpen &&
              "w-0 opacity-0 pointer-events-none md:w-fit md:pointer-events-auto md:opacity-100"
          )}
          placeholder={"Sort By"}
        />
      </div>
      <div className='flex flex-col gap-3 h-full  overflow-y-auto hide-scrollbar pb-52 md:pb-0  '>
        {games
          .filter(({ campaign, character }) => {
            if (!query) return true;
            return (
              campaign.title.toLowerCase().includes(query.toLowerCase()) ||
              character.name.toLowerCase().includes(query.toLowerCase())
            );
          })
          .sort((a, b) => {
            if (sortBy === "Newest to Oldest") {
              return new Date(b.game.updatedAt) - new Date(a.game.updatedAt);
            } else if (sortBy === "Oldest To Newest") {
              return new Date(a.game.updatedAt) - new Date(b.game.updatedAt);
            } else {
              return b.game.__v - a.game.__v;
            }
          })
          .map((option, index) => (
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

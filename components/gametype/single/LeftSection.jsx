"use client";

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
  dictionary,
}) {
  const SORTING_OPTIONS = {
    "Newest to Oldest": dictionary.newestToOldest,
    "Oldest To Newest": dictionary.oldestToNewest,
    "Turns Played": dictionary.turnsPlayed,
  };
  const { isMobile } = useDeviceDetect();
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest to Oldest");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const detectClickOutside = (e) => {
    if (query || e.target.classList.contains("search-input")) {
      return;
    }

    setIsSearchOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", detectClickOutside);

    return () => {
      document.removeEventListener("click", detectClickOutside);
    };
  }, [isSearchOpen, query]);

  return (
    <div
      className={cn(
        "h-full md:p-5 !pb-0 flex flex-col gap-5  w-full  ",
        isMobile && "overflow-y-auto overflow-x-hidden hide-scrollbar pt-1.5"
      )}
    >
      <div
        className={cn(
          " flex gap-4 flex-row-reverse md:flex-row   transition-all duration-300 ease-in-out items-start justify-start",
          isSearchOpen && "gap-0 md:gap-4"
        )}
      >
        <SearchInput
          query={query}
          isSearchOpen={isSearchOpen}
          triggerOnBlur={setIsSearchOpen}
          onClick={() => setIsSearchOpen(true)}
          setQuery={setQuery}
          placeholder={isMobile ? "" : dictionary.search}
          className={cn(
            "md:w-full  search-input transition-all   duration-[1000ms] h-12 ease-in-out",
            isSearchOpen && "w-full"
          )}
          inputClassName={cn(
            "ps-0 pe-0 w-12  md:w-full md:ps-[38px] transition-all duration-300 ease-in-out",
            isSearchOpen && "ps-[38px] w-full "
          )}
        />

        <CustomDropdown
          options={Object.entries(SORTING_OPTIONS).map(([key, value]) => value)}
          selectedOption={SORTING_OPTIONS[sortBy]}
          setSelectedOption={(option) =>
            setSortBy(
              Object.keys(SORTING_OPTIONS).find(
                (key) => SORTING_OPTIONS[key] === option
              )
            )
          }
          className={cn(
            "w-full md:w-fit transition-all duration-[1000ms] ease-in-out",
            isSearchOpen &&
              "w-0 opacity-0 pointer-events-none md:w-fit md:pointer-events-auto md:opacity-100"
          )}
          placeholder={dictionary.sortBy}
        />
      </div>
      <div
        className={cn(
          "flex flex-col gap-4 h-full  pb-52 md:pb-5  ",
          !isMobile && "overflow-y-auto overflow-x-hidden hide-scrollbar"
        )}
      >
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
              dictionary={dictionary}
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

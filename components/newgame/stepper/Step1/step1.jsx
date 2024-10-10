"use client";
import React, { useState } from "react";
import SearchInput from "@/components/ui/search-input";
import CustomDropdown from "@/components/ui/custom-dropdown";
import CustomButton from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import Card from "./Card";

export default function Step1() {
  const cards = [
    {
      title: "Echoes of the Forgotten",
      description:
        "In the ancient land of Eldoria, a long-lost prophecy whispers of forgotten relics...",
    },
    {
      title: "Campaign Name",
      description:
        "In the ancient land of Eldoria, a long-lost prophecy whispers of forgotten relics...",
    },
    {
      title: "Echoes of the Forgotten",
      description:
        "In the ancient land of Eldoria, a long-lost prophecy whispers of forgotten relics...",
    },
    {
      title: "Campaign Name",
      description:
        "In the ancient land of Eldoria, a long-lost prophecy whispers of forgotten relics...",
    },

    {
      title: "Echoes of the Forgotten",
      description:
        "In the ancient land of Eldoria, a long-lost prophecy whispers of forgotten relics...",
    },
    {
      title: "Campaign Name",
      description:
        "In the ancient land of Eldoria, a long-lost prophecy whispers of forgotten relics...",
    },
  ];
  const { isMobile } = useDeviceDetect();
  const [query, setQuery] = useState();
  const [sortBy, setSortBy] = useState("Newest to Oldest");
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };
  return (
    <div className="step1-container flex flex-col gap-4">
      <div
        className={cn(
          " flex gap-4 flex-row-reverse md:flex-row   transition-all duration-300 ease-in-out items-start justify-start"
        )}
      >
        <SearchInput
          query={query}
          // clearInputTrigger={isSearchOpen}
          // onClick={() => setIsSearchOpen(true)}
          setQuery={setQuery}
          placeholder={isMobile ? "" : "Search"}
          className={cn(
            "md:w-full  search-input transition-all origin-right  duration-[1000ms] h-10 ease-in-out"
          )}
          inputClassName={cn(
            "ps-0 w-12  md:w-full md:ps-[38px] origin-right transition-all duration-300 ease-in-out"
          )}
        />

        <CustomDropdown
          options={["Newest to Oldest", "Oldest To Newest", "Turns Played"]}
          className={cn(
            "w-full md:w-fit transition-all duration-[1000ms] ease-in-out !h-10"
          )}
          placeholder={"Sort By"}
        />
      </div>
      <div className="space-y-4 h-[300px] overflow-auto hide-scrollbar">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            selected={selectedCard === index}
            onSelect={() => handleCardSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

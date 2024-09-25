"use client";
import CustomButton from "@/components/ui/custom-button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Sort from "@/components/ui/Icons/Sort";
import SearchInput from "@/components/ui/search-input";
import React, { useState } from "react";
import OptionCard from "./OptionCard";

export default function LeftSection() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const options = [
    {
      imageSrc: "/images/Header.png",
      title: "Campaign name, Character name",
      desc: "Played 31 minutes ago",
    },
    {
      imageSrc: "/images/Header.png",
      title: "Campaign name, Character name",
      desc: "Played 31 minutes ago",
    },
    {
      imageSrc: "/images/Header.png",
      title: "Campaign name, Character name",
      desc: "Played 31 minutes ago",
    },
    {
      imageSrc: "/images/Header.png",
      title: "Campaign name, Character name",
      desc: "Played 31 minutes ago",
    },
  ];
  return (
    <div className="h-full p-4 flex flex-col gap-4 ">
      <div className=" flex gap-4">
        <SearchInput
          //   query={query}
          //   setQuery={setQuery}
          placeholder="Search"
          className={"w-full "}
        />
        <CustomButton className={"h-full"}>
          <img src="/Icons/Sort.svg" alt="" />
          newest to oldest
          <img src="/Icons/DownArrow.svg" alt="" />
        </CustomButton>
      </div>
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <OptionCard
            key={index}
            imageSrc={option.imageSrc}
            title={option.title}
            desc={option.desc}
            isSelected={selectedCardIndex === index}
            onClick={() => setSelectedCardIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

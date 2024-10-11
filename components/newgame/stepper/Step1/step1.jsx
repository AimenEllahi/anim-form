"use client";
import React, { useState } from "react";
import SearchInput from "@/components/ui/search-input";
import CustomDropdown from "@/components/ui/custom-dropdown";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import Card from "./Card";

const sortOptions = [
  "newest to oldest",
  "oldest to newest",
  "most liked",
  "most played",
  "most starred",
];
export default function Step1({ setQuery, query, campaigns, sort, setSort }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { isMobile } = useDeviceDetect();

  return (
    <div className=' flex flex-col  pt-5'>
      <div
        className={cn(
          " flex gap-4 px-5 flex-row-reverse md:flex-row   transition-all duration-300 ease-in-out items-center justify-start"
        )}
      >
        <SearchInput
          query={query}
          // clearInputTrigger={isSearchOpen}
          // onClick={() => setIsSearchOpen(true)}
          setQuery={setQuery}
          placeholder={isMobile ? "" : "Search"}
          className={cn(
            " h-12 md:w-full  search-input transition-all origin-right  duration-[1000ms] ease-in-out"
          )}
          inputClassName={cn(
            "ps-0 w-12  md:w-full md:ps-[38px] origin-right transition-all duration-300 ease-in-out"
          )}
        />

        <CustomDropdown
          placeholder={"Sort by"}
          options={sortOptions}
          selectedOption={sort.replaceAll("-", " ")}
          setSelectedOption={(_sort) => {
            setSort(_sort.replaceAll(" ", "-"));
          }}
          className={cn(
            "w-full md:w-fit transition-all duration-[1000ms] ease-in-out "
          )}
        />
      </div>
      <div className='space-y-4 h-[300px] overflow-auto hide-scrollbar p-5 '>
        {campaigns.map((campaign, index) => (
          <Card key={index} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}

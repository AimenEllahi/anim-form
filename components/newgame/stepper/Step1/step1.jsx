"use client";
import React, { useState, useEffect } from "react";
import SearchInput from "@/components/ui/search-input";
import CustomDropdown from "@/components/ui/custom-dropdown";
import { cn } from "@/lib/utils";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import Card from "./Card";
import { useDebounce } from "@/hooks/useDebounce";

const sortOptions = [
  "newest to oldest",
  "oldest to newest",
  "most liked",
  "most played",
  "most starred",
];
export default function Step1({ setQuery, query, campaigns, sort, setSort }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [_query, _setQuery] = useState("");
  const debouncedQuery = useDebounce(_query, 500);
  const { isMobile } = useDeviceDetect();

  const detectClickOutside = (e) => {
    if (_query) return;
    if (e.target.classList.contains("search-input")) {
      return;
    }

    setIsSearchOpen(false);
  };

  useEffect(() => {
    setQuery(debouncedQuery);
  }, [debouncedQuery]);

  useEffect(() => {
    document.addEventListener("click", detectClickOutside);

    return () => {
      document.removeEventListener("click", detectClickOutside);
    };
  }, [isSearchOpen, _query]);

  return (
    <div className=' flex flex-col gap-5 pt-5 max-h-auto md:h-[483px] md:max-h-[483px]  overflow-auto '>
      <div
        className={cn(
          " flex gap-4 px-5 flex-row-reverse md:flex-row   transition-all duration-300 ease-in-out items-center justify-start",
          isSearchOpen && "gap-0 md:gap-4"
        )}
      >
        <SearchInput
          query={_query}
          isSearchOpen={isSearchOpen}
          triggerOnBlur={setIsSearchOpen}
          onClick={() => setIsSearchOpen(true)}
          setQuery={_setQuery}
          placeholder={isMobile ? "" : "Search"}
          className={cn(
            " search-input transition-all duration-300 h-12 ease-in-out md:w-full",
            isSearchOpen && "w-full"
          )}
          inputClassName={cn(
            "ps-0 w-12 search-input md:w-full md:ps-[38px] border-gray2",
            isSearchOpen && "ps-[38px] w-full"
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
            "w-full md:w-fit transition-all duration-[1000ms] ease-in-out ",
            isSearchOpen &&
              "w-0 opacity-0 pointer-events-none md:w-fit md:pointer-events-auto md:opacity-100"
          )}
        />
      </div>
      <div className='space-y-4 h-full md:h-auto overflow-auto hide-scrollbar p-5 pt-0 '>
        {campaigns.map((campaign, index) => (
          <Card key={index} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}

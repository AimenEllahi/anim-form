import React, { useState, useEffect } from "react";
import CampaignCarousel from "@/components/ui/Shared/Carousel/campaign";
import CustomButton from "../custom-button";
import ArrowRight from "../Icons/ArrowRight";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Shared/Card/campaign";
import CustomDropdown from "../custom-dropdown";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import SearchInput from "@/components/ui/search-input";
import { cn } from "@/lib/utils";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import { twMerge } from "tailwind-merge";

export default function row({
  text,
  icon,
  campaigns,
  showMore,
  handleUpdateCampaigns,
  loadingCampaigns,
  onClickShowMore,
  isPublicCampaign,
  setQueryProp,
  dictionary,
}) {
  const sortOptions = {
    "newest to oldest": dictionary.newestToOldest,
    "oldest to newest": dictionary.oldestToNewest,
    "most liked": dictionary.mostLiked,
    "most played": dictionary.mostPlayed,
    "most starred": dictionary.mostStarred,
  };
  const { isMobile } = useDeviceDetect();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "newest-to-oldest";
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const detectClickOutside = (e) => {
    if (query) return;
    if (e.target.classList.contains("search-input")) {
      return;
    }

    setIsSearchOpen(false);
  };

  useEffect(() => {
    if (!isPublicCampaign) return;

    setQueryProp(debouncedQuery);
  }, [debouncedQuery]);

  useEffect(() => {
    document.addEventListener("click", detectClickOutside);

    return () => {
      document.removeEventListener("click", detectClickOutside);
    };
  }, [isSearchOpen, query]);
  return (
    <div
      className={twMerge(
        "flex flex-col  z-[10] px-5 lg:px-12 ",
        isPublicCampaign && "public-campaigns"
      )}
    >
      <div className='flex items-start md:items-end  justify-start md:justify-between w-full flex-col md:flex-row gap-5 md:gap-0'>
        <div className='flex  text-gray2 running-text-mono uppercase gap-2 items-center'>
          {icon}
          {text}
        </div>
        {isPublicCampaign && (
          <div
            className={cn(
              "flex gap-4  items-center  w-full md:w-fit flex-row-reverse  transition-all duration-500 ease-in-out",
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
                " search-input transition-all duration-300 h-12 ease-in-out md:w-full",
                isSearchOpen && "w-full"
              )}
              inputClassName={cn(
                "ps-0 w-12 md:w-full md:ps-[38px] border-gray2",
                isSearchOpen && "ps-[38px] w-full"
              )}
            />
            <CustomDropdown
              className={cn(
                "w-full md:w-fit transition-all duration-300 ease-in-out",
                isSearchOpen &&
                  "w-0 opacity-0 pointer-events-none md:w-fit md:pointer-events-auto md:opacity-100"
              )}
              placeholder={dictionary.sortBy}
              options={Object.entries(sortOptions).map(([key, value]) => value)}
              selectedOption={sortOptions[sort]}
              setSelectedOption={(_sort) => {
                const selectedOption = Object.keys(sortOptions).find(
                  (key) => sortOptions[key] === _sort
                );
                const url = `${pathname}?sort=${selectedOption.replaceAll(
                  " ",
                  "-"
                )}`;
                router.push(url);
              }}
            />
          </div>
        )}
      </div>

      <div className='w-full text-white  z-[9] grid grid-cols-12 lg:grid-cols-12 gap-4 pt-4'>
        {campaigns.map((campaign, i) => (
          <div
            key={i}
            className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3  w-full min-w-full max-w-full'
          >
            <Card
              handleUpdateCampaigns={handleUpdateCampaigns}
              campaign={campaign}
              className={"!w-full !min-w-full"}
            />
          </div>
        ))}
      </div>

      {showMore && campaigns.length >= 6 && (
        <CustomButton
          withIcon={true}
          variant={"primary"}
          disabled={loadingCampaigns}
          className={"max-w-fit mx-auto mt-8"}
          onClick={onClickShowMore}
        >
          {dictionary.showMore}{" "}
          <ArrowRight className='h-5 w-5 fill-russianViolet' />
        </CustomButton>
      )}
    </div>
  );
}

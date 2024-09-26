import React from "react";
import CampaignCarousel from "@/components/ui/Shared/Carousel/campaign";
import CustomButton from "../custom-button";
import ArrowRight from "../Icons/ArrowRight";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Shared/Card/campaign";

// import { useRouter } from "next/router";
export default function row({
  text,
  icon,
  campaigns,
  showMore,
  isGame,
  games,
  handleUpdateCampaigns,
}) {
  const router = useRouter();
  return (
    <div className='flex flex-col gap-4 z-[10] px-5 lg:px-12'>
      <div className='flex  text-gray2 running-text-mono uppercase gap-2 items-center'>
        {icon}
        {text}
      </div>
      <div className='w-full text-white  z-[9] grid grid-cols-12 lg:grid-cols-12 gap-4 pt-9 md:pt-8'>
        {campaigns.map((campaign, i) => (
          <div
            key={i}
            className='col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3  w-full min-w-full max-w-full'
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
          className={"max-w-fit mx-auto mt-8"}
          onClick={() => router.push("/campaign/public")}
        >
          Show More <ArrowRight className='h-5 w-5 fill-russianViolet' />
        </CustomButton>
      )}
    </div>
  );
}

"use client";
import React from "react";
import Card from "@/components/ui/Shared/Card/campaign";

import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";
import _ from "lodash";
import GeneralTabbar from "@/components/ui/Shared/TabBar/general";
export default function index({ campaigns, setCampaigns }) {
  const router = useRouter();

  //handle redirection
  const handleRedirect = (path) => {
    router.push(path);
  };

  const handleUpdateCampaigns = (campaign) => {
    let _campaigns = campaigns.filter((c) => c._id !== campaign._id);
    _campaigns.push(campaign);
    _campaigns = _.sortBy(_campaigns, ["createdAt"]);
    setCampaigns(_campaigns);
  };

  return (
    <div
      className='min-h-screen relative h-full w-full flex flex-col pt-[118px] md:pt-[128spx] px-5 lg:px-12 pb-32 md:pb-64 '
      suppressHydrationWarning
    >
      <div className='flex flex-col gap-2.5 '>
        <div className='text-center flex justify-between text-white headline-3 z-[10] '>
          {/* desktop */}
          <span className='headline-3 z-[10] hidden md:block  '>
            My campaigns
            <span className='text-gray2 ms-3 md:ms-4 font-roboto-mono transform translate-up text-[17px] md:text-[24px] translate-y-[-15px] md:translate-y-[-20px]'>
              ({campaigns.length})
            </span>
          </span>

          <CustomButton
            className={"hidden md:flex"}
            onClick={() => handleRedirect("/campaign/create")}
            withIcon
          >
            <img
              src='/Icons/Campaign.svg'
              className='h-5 w-5 fill-white opacity-70'
            />
            <span>Create Campaign</span>
          </CustomButton>
        </div>
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
      <GeneralTabbar showSearch={false} />
    </div>
  );
}

import React, { useEffect } from "react";
import Row from "@/components/ui/Shared/DiscoverRow";
import Star from "@/components/ui/Icons/Star";
import World from "@/components/ui/Icons/World";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import _ from "lodash";
export default function index({
  popular,
  mostLiked,
  setCampaigns,
  setPopularCampaigns,
}) {
  const handleUpdateMostLikedCampaigns = (campaign) => {
    let _campaigns = mostLiked.filter((c) => c._id !== campaign._id);
    _campaigns.push(campaign);
    _campaigns = _.sortBy(_campaigns, ["createdAt"]);
    setCampaigns(_campaigns);
  };

  const handleUpdatePublicCampaigns = (campaign) => {
    let _campaigns = popular.filter((c) => c._id !== campaign._id);
    _campaigns.push(campaign);
    _campaigns = _.sortBy(_campaigns, ["createdAt"]);
    setPopularCampaigns(_campaigns);
  };

  return (
    <div className=' py-[9rem] w-full h-full relative text-white  '>
      <span className='headline-3 !z-[20] px-5 md:px-12 hidden md:block'>
        Discover Campaigns
      </span>
      <div className='flex flex-col h-full gap-16 w-full mt-5 md:mt-9'>
        <Row
          text={"Community Favorites"}
          campaigns={mostLiked}
          handleUpdateCampaigns={handleUpdateMostLikedCampaigns}
          icon={<Star isfilled={"true"} className='h-5 w-5 fill-gray2' />}
        />
        <Row
          text={"Public games"}
          handleUpdateCampaigns={handleUpdatePublicCampaigns}
          campaigns={popular}
          icon={<World className='h-5 w-5 fill-gray2' />}
          showMore={true}
        />
      </div>
    </div>
  );
}

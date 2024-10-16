import React, { useEffect } from "react";
import Row from "@/components/ui/Shared/DiscoverRow";
import Star from "@/components/ui/Icons/Star";
import World from "@/components/ui/Icons/World";

import _ from "lodash";
import GameTabbar from "@/components/ui/Shared/TabBar/games";
export default function index({
  popular,
  mostLiked,
  setCampaigns,
  setPopularCampaigns,
  showMoreCampaigns,
  loadingCampaigns,
  setLimit,
  setQuery,
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

  const onClickShowMore = () => {
    setLimit((prev) => prev + 12);
  };

  return (
    <div className=' py-[108px] md:py-[9rem] w-full h-full relative text-white  '>
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
          text={"Public Campaigns"}
          handleUpdateCampaigns={handleUpdatePublicCampaigns}
          campaigns={popular}
          sort={true}
          isPublicCampaign={true}
          icon={<World className='h-5 w-5 fill-gray2' />}
          onClickShowMore={onClickShowMore}
          showMore={showMoreCampaigns}
          disabled={loadingCampaigns}
          setQueryProp={setQuery}
        />
      </div>
      <GameTabbar />
    </div>
  );
}

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
  sort,
}) {
  const handleUpdateMostLikedCampaigns = (campaign) => {
    let _campaigns = mostLiked.filter((c) => c._id !== campaign._id);
    _campaigns.push(campaign);
    _campaigns = _.sortBy(_campaigns, ["createdAt"]);
    setCampaigns(_campaigns);
  };

  console.log(popular);

  const handleUpdatePublicCampaigns = (campaign) => {
    // Filter out the campaign to be updated and add the new/updated campaign
    let _campaigns = popular.filter((c) => c._id !== campaign._id);
    _campaigns.push(campaign);
    console.log(campaign);

    // Handle sorting based on the selected criteria
    if (sort === "newest-to-oldest") {
      _campaigns = _campaigns.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt) // Sort by newest first
      );
    } else if (sort === "oldest-to-newest") {
      _campaigns = _campaigns.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt) // Sort by oldest first
      );
    } else if (sort === "most-liked") {
      _campaigns = _campaigns.sort(
        (a, b) => b.analytics.likes.length - a.analytics.likes.length // Sort by most likes
      );
    } else if (sort === "most-played") {
      _campaigns = _campaigns.sort(
        (a, b) => b.analytics.plays.length - a.analytics.plays.length // Sort by most plays
      );
    } else if (sort === "most-starred") {
      _campaigns = _campaigns.sort(
        (a, b) => b.analytics.stars.length - a.analytics.stars.length // Sort by most stars
      );
    }

    // Update the popular campaigns with the newly sorted array
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

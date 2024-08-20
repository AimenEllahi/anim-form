"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "@/components/ui/custom-button";
import { getMostLikedCampaigns } from "@/actions/campaigns";
import CampaignCarousel from "@/components/ui/Shared/Carousel/campaign";
import { useRouter } from "next/navigation";
import useCustomToast from "@/hooks/useCustomToast";
export default function CampaignSection() {
  const [campaigns, setCampaigns] = useState([]);
  const { invokeToast } = useCustomToast();
  const router = useRouter();
  const handleGetCampaigns = async () => {
    try {
      const response = await getMostLikedCampaigns();
     // console.log("response", response);
      setCampaigns(response.campaigns);
    } catch (error) {
      console.error("Error:", error);
      invokeToast(
        error?.response?.data?.error || "Error fetching campaigns",
        "Error"
      );
    }
  };

  const handleRedirect = () => {
    router.push("/discover");
  };

  useEffect(() => {
    handleGetCampaigns();
  }, []);

  return (
    <>
      <div className='max-w-screen h-full flex flex-col justify-center items-center pb-32 text-white '>
        <h1 className='headline-1 text-center w-full px-5 md:px-12 uppercase z-10 '>
          Forge your destiny and choose your campaign!
        </h1>
        <CampaignCarousel isLanding campaigns={campaigns} />

        <CustomButton onClick={handleRedirect} className={"mt-8"}>
          All Campaigns
        </CustomButton>
      </div>
    </>
  );
}

import React from "react";
import CustomButton from "@/components/ui/custom-button";
import CampaignAdd from "../../Icons/CampaignAdd";
import { useRouter } from "next/navigation";
export default function Campaign() {
  const router = useRouter();
  return (
    <div className='fixed z-10 h-screen w-full mx-auto max-w-[1536px] flex-col text-center flex items-center justify-center gap-8 text-white'>
      <span className='headline-3 w-4/5 md:w-full'>
        Forge your destiny <br />
        and create{" "}
        <span className='text-irisPurpleLight'> your first campaign!</span>
      </span>
      <CustomButton
        onClick={() => router.push("/campaign/create")}
        withIcon={true}
      >
        <CampaignAdd className='h-5 w-5 fill-white opacity-70' />
        Create Campaign
      </CustomButton>
    </div>
  );
}

import React from "react";
import CustomButton from "@/components/ui/custom-button";
import AppearanceIcon from "@/components/ui/Icons/Appearance";
import { cn } from "@/lib/utils";

export default function Switch({ selectedTab, setSelectedTab }) {
  return (
    <div className='flex w-full z-[10]'>
      <div className=' w-full overflow-x-scroll hide-scrollbar flex p-2 gap-2 md:bg-white/[8%] rounded-[16px] md:border border-white/10'>
        {/* Appearance Tab */}
        <CustomButton
          withIcon
          className={cn(
            selectedTab === "appearance"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white"
              : "text-gray2 border-transparent bg-transparent hover:border"
          )}
          onClick={() => setSelectedTab("appearance")}
        >
          <AppearanceIcon
            className={cn(
              "h-5 w-5",
              selectedTab === "appearance" ? "fill-russianViolet" : "fill-gray2"
            )}
          />
          Appearance
        </CustomButton>

        {/* Companions Tab */}
        <CustomButton
          withIcon
          className={cn(
            selectedTab === "companions"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white"
              : "text-gray2 border-transparent bg-transparent hover:border"
          )}
          onClick={() => setSelectedTab("companions")}
        >
          <img
            src='/Icons/Companions.svg'
            className={cn(
              "h-5 w-5",
              selectedTab === "companions" ? "fill-russianViolet" : "fill-gray2"
            )}
          />
          Companions
        </CustomButton>

        {/* Abilities Tab */}
        <CustomButton
          withIcon
          className={cn(
            selectedTab === "abilities"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white"
              : "text-gray2 border-transparent bg-transparent hover:border"
          )}
          onClick={() => setSelectedTab("abilities")}
        >
          <img
            src='/Icons/Abilities.svg'
            className={cn(
              "h-5 w-5",
              selectedTab === "abilities" ? "fill-russianViolet" : "fill-gray2"
            )}
          />
          Abilities
        </CustomButton>

        {/* Inventory Tab */}
        <CustomButton
          withIcon
          className={cn(
            selectedTab === "inventory"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white"
              : "text-gray2 border-transparent bg-transparent hover:border"
          )}
          onClick={() => setSelectedTab("inventory")}
        >
          <img
            src='/Icons/Inventory.svg'
            className={cn(
              "h-5 w-5",
              selectedTab === "inventory" ? "fill-russianViolet" : "fill-gray2"
            )}
          />
          Inventory
        </CustomButton>
      </div>
    </div>
  );
}

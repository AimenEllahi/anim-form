import React from "react";
import CustomButton from "@/components/ui/custom-button";
import AppearanceIcon from "@/components/ui/Icons/Appearance";
import { cn } from "@/lib/utils";
import Companions from "@/components/ui/Icons/Companions";
import Abilities from "@/components/ui/Icons/Abilities";
import Inventory from "@/components/ui/Icons/Inventory";
import Achievement from "../ui/Icons/Achievement";
import Emblems from "../ui/Icons/Emblems";
import Titles from "../ui/Icons/Titles";

export default function Switch({ selectedTab, setSelectedTab }) {
  return (
    <div className="flex w-full z-[20]">
      <div className=" w-full md:w-fit overflow-x-scroll hide-scrollbar flex md:p-2 gap-2 md:bg-white/[8%] md:rounded-[16px] md:border border-white/10">
        {/* Emblems Tab */}
        <CustomButton
          withIcon
          className={cn(
            "active:bg-white",
            selectedTab === "emblems"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white md:hover:bg-white "
              : "text-gray2 border-transparent bg-transparent md:hover:border "
          )}
          onClick={() => setSelectedTab("emblems")}
        >
          <Emblems
            className={cn(
              "h-5 w-5",
              selectedTab === "emblems" ? "fill-russianViolet" : "fill-gray2"
            )}
          />
          Emblems
        </CustomButton>

        {/* Titles Tab */}
        <CustomButton
          withIcon
          className={cn(
            "active:bg-white",
            selectedTab === "titles"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white md:hover:bg-white"
              : "text-gray2 border-transparent bg-transparent md:hover:border"
          )}
          onClick={() => setSelectedTab("titles")}
        >
          <Titles
            className={cn(
              "h-5 w-5",
              selectedTab === "titles" ? "fill-russianViolet" : "fill-gray2"
            )}
          />
          Titles
        </CustomButton>

        {/* Achievements Tab */}
        <CustomButton
          withIcon
          className={cn(
            "active:bg-white",
            selectedTab === "achievements"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white md:hover:bg-white"
              : "text-gray2 border-transparent bg-transparent md:hover:border"
          )}
          onClick={() => setSelectedTab("achievements")}
        >
          <Achievement
            className={cn(
              "h-5 w-5",
              selectedTab === "achievements"
                ? "fill-russianViolet"
                : "fill-gray2"
            )}
          />
          Achievements
        </CustomButton>
      </div>
    </div>
  );
}

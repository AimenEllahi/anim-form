import React from "react";
import CustomButton from "../custom-button";
import Progress from "../Icons/Progress";
import Completed from "../Icons/Completed";
import Globe from "../Icons/Globe";
import { cn } from "@/lib/utils";

export default function Switch({ selectedTab, setSelectedTab, gameType }) {
  return (
    <div
      className={cn(
        gameType === "multiPlayer" ? "flex z-[10]" : "flex w-full z-[10] "
      )}
    >
      <div className='flex p-2 gap-2 bg-white/[8%] rounded-[16px] border border-white/10 '>
        {/* In Progress Tab */}
        <CustomButton
          withIcon
          className={
            selectedTab === "inProgress"
              ? "text-russianViolet !border !border-red/10 bg-white hover:bg-white "
              : "text-gray2 border-transparent bg-transparent hover:border  "
          }
          onClick={() => setSelectedTab("inProgress")}
        >
          <Progress
            className={`h-5 w-5 ${
              selectedTab === "inProgress" ? "fill-russianViolet" : "fill-gray2"
            }`}
          />
          In Progress
        </CustomButton>

        {/* Public Games Tab (only for multiplayer) */}
        {gameType === "multiPlayer" && (
          <CustomButton
            withIcon
            variant={selectedTab === "publicGames" ? "primary" : "secondary"}
            className={
              selectedTab === "publicGames"
                ? "text-russianViolet border-[1px] border-white/10"
                : "text-[#05D381] border-none bg-transparent hover:bg-transparent"
            }
            onClick={() => setSelectedTab("publicGames")}
          >
            <Globe
              className={`h-5 w-5 ${
                selectedTab === "publicGames"
                  ? "fill-russianViolet"
                  : "fill-[#05D381]"
              }`}
            />
            Public Games
          </CustomButton>
        )}

        {/* Completed Tab */}
        <CustomButton
          withIcon
          className={
            selectedTab === "completed"
              ? "text-russianViolet !border !border-white/10 bg-white hover:bg-white "
              : "text-[#05D381] border-transparent bg-transparent hover:border  "
          }
          onClick={() => setSelectedTab("completed")}
        >
          <Completed
            className={`h-5 w-5 ${
              selectedTab === "completed"
                ? "fill-russianViolet"
                : "fill-[#05D381]"
            }`}
          />
          Completed
        </CustomButton>
      </div>
    </div>
  );
}

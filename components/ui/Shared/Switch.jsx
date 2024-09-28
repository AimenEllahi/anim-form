import React from "react";
import CustomButton from "../custom-button";
import Progress from "../Icons/Progress";
import Completed from "../Icons/Completed";
import Globe from "../Icons/Globe";

export default function Switch({ selectedTab, setSelectedTab, gameType }) {
  return (
    <div
      className={
        gameType === "multiPlayer" ? "flex z-[10]" : "flex z-[10] px-20"
      }
    >
      <div className="flex p-2 bg-white/[8%] rounded-[16px]">
        {/* In Progress Tab */}
        <CustomButton
          withIcon
          variant={selectedTab === "inProgress" ? "primary" : "secondary"}
          className={
            selectedTab === "inProgress"
              ? "text-russianViolet"
              : "text-[#05D381] border-none bg-transparent hover:bg-transparent"
          }
          onClick={() => setSelectedTab("inProgress")}
        >
          <Progress
            className={`h-5 w-5 ${
              selectedTab === "inProgress"
                ? "fill-russianViolet"
                : "fill-[#05D381]"
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
                ? "text-russianViolet"
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
          variant={selectedTab === "completed" ? "primary" : "secondary"}
          className={
            selectedTab === "completed"
              ? "text-russianViolet"
              : "text-[#05D381] border-none bg-transparent hover:bg-transparent"
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

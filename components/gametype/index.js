"use client";
import React, { useState } from "react";
import CustomButton from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";
import Switch from "../ui/Shared/Switch";
import LeftSection from "./single/LeftSection";
import RightSection from "./single/RightSection";

export default function Index({ gameType }) {
  const [selectedTab, setSelectedTab] = useState("inProgress");

  return (
    <div className="h-screen z-[10] w-full flex flex-col px-6 lg:px-12">
      {/* Title Section */}
      <div
        className={`flex flex-col md:flex-row gap-2.5 ${
          gameType === "multiPlayer"
            ? "md:flex-col justify-start items-start"
            : ""
        }`}
      >
        <h1 className="text-center hidden md:flex justify-start text-white headline-3 z-[10]">
          {gameType === "multiPlayer"
            ? "Games"
            : selectedTab === "inProgress"
            ? "Games in Progress"
            : selectedTab === "publicGames"
            ? "Public Games"
            : "Completed Games"}
        </h1>

        {/* Switch Buttons */}
        <div className={gameType === "multiPlayer" ? "mt-2" : ""}>
          <Switch
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            gameType={gameType} // Pass game type here
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="md:flex border text-white bg-white/[8%] rounded-[16px] border-white/10 h-full justify-end items-end my-6 hidden w-full">
        <div className="w-1/2 h-full border-r border-white/[8%]">
          <LeftSection selectedTab={selectedTab} />
        </div>
        <div className="w-1/2 h-full">
          <RightSection selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
}

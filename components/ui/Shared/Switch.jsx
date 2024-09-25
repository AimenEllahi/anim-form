"use client";
import React, { useState } from "react";
import CustomTab from "../custom-tab";
import Progress from "../Icons/Progress";
import CustomButton from "../custom-button";
import Completed from "../Icons/Completed";

export default function Switch() {
  const [selectedTab, setSelectedTab] = useState("inProgress");

  return (
    <div className="flex z-[10] px-20">
      <div className="flex p-2 bg-white/[8%] rounded-[16px]">
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

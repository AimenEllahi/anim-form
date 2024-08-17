"use client";
import React from "react";
import CustomButton from "../ui/custom-button";
import Support from "./forms/support";
import Feedback from "./forms/feedback";
import Bug from "./forms/bug";

export default function index() {
  return (
    <div className="h-full text-white w-full flex flex-col pt-[154px] md:pt-[128px] px-5 lg:px-12 pb-32">
      <div className="flex flex-col w-full gap-10 z-[10]">
        <div className="flex  justify-between text-white  w-full md:w-auto">
          <span className="headline-3 z-[10] hidden md:block ">Contact</span>
        </div>
        <div className=" text-white capitalize md:w-[490px] w-full flex  flex-col gap-12 justify-center items-center self-center ">
          <div className="flex flex-col gap-5  ">
            <span className="running-text-large">Reason for your request</span>
            <div className="flex gap-4 flex-wrap ">
              <CustomButton
                className={"rounded-full focus:bg-white focus:text-black "}
              >
                Support Request
              </CustomButton>
              <CustomButton
                className={"rounded-full focus:bg-white focus:text-black "}
              >
                feedback
              </CustomButton>
              <CustomButton
                className={"rounded-full focus:bg-white focus:text-black "}
              >
                report a bug
              </CustomButton>
            </div>
          </div>
          {/* <Support /> */}
          <Feedback />
          {/* <Bug /> */}
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import CustomButton from "../ui/custom-button";
import User from "../ui/Icons/User";
import Section from "@/components/account-setting/sections/sections";
import Payment from "./sections/payment";

export default function Index() {
  return (
    <div className="h-full text-white w-full flex flex-col pt-[154px] md:pt-[128px] px-5 lg:px-12 pb-32">
      <div className="flex flex-col w-full gap-2.5">
        <div className="flex justify-between text-white z-[10] w-full md:w-auto">
          <span className="headline-3 z-[10] hidden md:block ">
            Account settings
          </span>
        </div>

        <div className="w-full my-4 z-[9] flex">
          <div className="w-1/5  flex flex-col gap-3">
            <CustomButton
              withIcon={true}
              className={
                "hidden md:flex justify-start  hover:border-white focus:border-white focus:bg-white/[8%] hover:bg-white/[8%] bg-transparent"
              }
            >
              <User className="h-5 w-5 opacity-70 fill-white" />
              Create character
            </CustomButton>

            <CustomButton
              withIcon={true}
              className={
                "hidden md:flex justify-start  hover:border-white focus:border-white focus:bg-white/[8%] hover:bg-white/[8%] bg-transparent"
              }
            >
              <User className="h-5 w-5 opacity-70 fill-white " />
              PAYMENT
            </CustomButton>
          </div>

          {/* <Section /> */}
          <Payment />
        </div>
      </div>
    </div>
  );
}

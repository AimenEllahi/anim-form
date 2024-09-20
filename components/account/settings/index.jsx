"use client";
import React, { useState } from "react";
import CustomButton from "@/components/ui/custom-button";
import User from "@/components/ui/Icons/User";
import Section from "@/components/account/settings/sections/sections";
import Payment from "@/components/account/settings/sections/payment";
import { cn } from "@/lib/utils";

export default function Index() {
  const [active, setActive] = useState("account");
  return (
    <div className='h-screen md:h-full min-h-screen text-white w-full flex flex-col pt-[94px] md:pt-[9rem] px-5 lg:px-12 pb-32'>
      <div className='flex flex-col w-full gap-2.5'>
        <div className='flex justify-between text-white z-[10] w-full md:w-auto'>
          <span className='headline-3 z-[10] hidden md:block '>
            Account settings
          </span>
        </div>

        <div className=' my-4 z-[9] h-full flex flex-col md:flex-row'>
          <div className='w-full md:w-1/5  flex flex-col gap-3'>
            <CustomButton
              withIcon={true}
              onClick={() => setActive("account")}
              className={cn(
                "hidden md:flex justify-start  bg-transparent",
                active === "account" &&
                  "border-white hover:border-white focus:border-white bg-white/[8%] "
              )}
            >
              <User className='h-5 w-5 opacity-70 fill-white ' />
              Account Settings
            </CustomButton>

            <CustomButton
              withIcon={true}
              onClick={() => setActive("payment")}
              className={cn(
                "hidden md:flex justify-start    bg-transparent",
                active === "payment" &&
                  "border-white hover:border-white focus:border-white  bg-white/[8%]"
              )}
            >
              <User className='h-5 w-5 opacity-70 fill-white ' />
              PAYMENT
            </CustomButton>
          </div>
          {active === "account" && <Section />}
          {active === "payment" && <Payment />}
        </div>
      </div>
    </div>
  );
}

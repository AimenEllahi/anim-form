"use client";
import React, { useState } from "react";
import CustomButton from "@/components/ui/custom-button";
import User from "@/components/ui/Icons/User";
import Section from "@/components/account/settings/sections/sections";
import Payment from "@/components/account/settings/sections/payment";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Icons/Card";

export default function Index() {
  const [active, setActive] = useState("account");
  return (
    <div className='h-full md:h-full min-h-screen text-white w-full flex flex-col pt-[108px] md:pt-[9rem] px-5 lg:px-12 pb-32'>
      <div className='flex flex-col w-full gap-2.5'>
        <div className='hidden md:flex justify-between text-white z-[10] w-full md:w-auto'>
          <span className='headline-3 z-[10] '>Account settings</span>
        </div>

        <div className=' my-4 w-full  z-[20] h-full flex flex-col md:flex-row gap-5'>
          {/* Desktop */}
          <div className='  w-full h-full md:w-1/5 z-[10] hidden md:flex md:flex-col gap-3'>
            <CustomButton
              withIcon={true}
              onClick={() => setActive("account")}
              className={cn(
                "flex justify-start  bg-transparent",
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
                "flex justify-start    bg-transparent",
                active === "payment" &&
                  "border-white hover:border-white focus:border-white  bg-white/[8%]"
              )}
            >
              <Card className='h-5 w-5 opacity-70 fill-white ' />
              PAYMENT
            </CustomButton>
          </div>

          {/* Mobile */}
          <div className='  w-full h-full md:w-1/5 z-[10]  md:hidden flex gap-3'>
            <CustomButton
              variant={active === "account" ? "primary" : "subtle"}
              withIcon={true}
              onClick={() => setActive("account")}
              className={cn("!p-3 !pr-4")}
            >
              <User
                className={cn(
                  "h-5 w-5 opacity-70 fill-white ",
                  active === "account" && "fill-russianViolet opacity-100"
                )}
              />
              Account Settings
            </CustomButton>

            <CustomButton
              withIcon={true}
              onClick={() => setActive("payment")}
              variant={active === "payment" ? "primary" : "subtle"}
              className={cn("!p-3 !pr-4")}
            >
              <Card
                className={cn(
                  "h-5 w-5 opacity-70 fill-white ",
                  active === "payment" && "fill-russianViolet opacity-100"
                )}
              />
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

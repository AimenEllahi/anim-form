"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "../ui/custom-button";
import Support from "./forms/support";
import Feedback from "./forms/feedback";
import Bug from "./forms/bug";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function index() {
  const type = useSearchParams().get("type");
  const [reason, setReason] = useState(type || "support");

  useEffect(() => {
    if (type) {
      setReason(type);
    }
  }, [type]);
  return (
    <div className='h-full text-white w-full flex flex-col pt-[154px] md:pt-[128px] px-5 lg:px-12 pb-32'>
      <div className='flex flex-col w-full gap-10 z-[10]'>
        <div className='flex  justify-between text-white  w-full md:w-auto'>
          <span className='headline-3 z-[10] hidden md:block '>Contact</span>
        </div>
        <div className=' text-white capitalize md:w-[490px] w-full flex  flex-col gap-12 justify-center items-center self-center '>
          <div className='flex flex-col gap-5  '>
            <span className='running-text-large'>Reason for your request</span>
            <div className='flex gap-4 flex-wrap '>
              <CustomButton
                onClick={() => setReason("support")}
                variant={reason === "support" && "primary"}
                className={cn("rounded-[48px]  ")}
              >
                Support Request
              </CustomButton>
              <CustomButton
                onClick={() => setReason("feedback")}
                variant={reason === "feedback" && "primary"}
                className={cn("rounded-[48px]  ")}
              >
                feedback
              </CustomButton>
              <CustomButton
                onClick={() => setReason("bug")}
                variant={reason === "bug" && "primary"}
                className={cn("rounded-[48px]  ")}
              >
                report a bug
              </CustomButton>
            </div>
          </div>
          {
            {
              support: <Support />,
              feedback: <Feedback />,
              bug: <Bug />,
            }[reason]
          }
        </div>
      </div>
    </div>
  );
}

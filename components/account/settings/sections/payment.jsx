import React from "react";
import CustomButton from "@/components/ui/custom-button";
import Download from "@/components/ui/Icons/Download";
import Edit from "@/components/ui/Icons/Edit";
import Delete from "@/components/ui/Icons/Delete";

export default function Payment() {
  return (
    <div className="w-4/5  px-28 flex flex-col gap-4">
      <div className="w-[709px] border border-white/[8%] rounded-[16px] bg-white/[8%]">
        <div className="p-4 flex justify-between items-center">
          <span className="headline-4">Active payment</span>
          <span
            className="running-text-mono flex justify-center items-center gap-2 cursor-pointer uppercase"
            onClick={() => handleEditClick("email")}
          >
            <Download className="h-5 w-5 opacity-70 fill-white" />
            Download invoice
          </span>
        </div>
        <hr className="border border-white/[8%] " />
        <div className="p-4 flex justify-start items-center gap-6 ">
          <div className="bg-white/[8%] uppercase border border-white/10 rounded-[16px] w-[267px]">
            <div className="p-4 flex flex-col gap-4">
              <span className="running-text-mono text-gray2">CHAMPION</span>
              <span className="text-white headline-4">
                14,99€
                <span className="running-text-mono text-gray2"> /Month</span>
              </span>
            </div>
            <hr className="border border-white/[8%]" />
            <div className="p-4 flex flex-col gap-4">
              <div className="running-text-mono flex gap-2 justify-satrt items-center">
                <img
                  src="/Gems/Legendary.webp"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                <span>20</span>
              </div>
              <div className="running-text-mono flex gap-2 justify-satrt items-center">
                <img
                  src="/Gems/Mythic.webp"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                <span>110</span>
              </div>
            </div>
            <hr className="border border-white/[8%]" />
            <div className="flex flex-col p-4 gap-4">
              <CustomButton
                withIcon={true}
                variant={"primary"}
                className={"hidden md:flex justify-start  "}
              >
                <Edit className="h-5 w-5 opacity-70 fill-black" />
                <span> change subscription</span>
              </CustomButton>
              <CustomButton
                withIcon={true}
                className={"hidden md:flex justify-start  "}
              >
                <Delete className="h-5 w-5 opacity-70 fill-red-500" />
                <span> cancel subscription</span>
              </CustomButton>
            </div>
          </div>
          <div className="uppercase flex flex-col gap-8 self-start ">
            <div className="flex flex-col gap-4">
              <span className=" text-irisPurpleLight font-roboto-mono text-[10px]">
                Debit interval
              </span>
              <span className=" text-white running-text-mono">monthly</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className=" text-irisPurpleLight font-roboto-mono text-[10px]">
                Debit interval
              </span>
              <span className=" text-white running-text-mono">monthly</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className=" text-irisPurpleLight font-roboto-mono text-[10px]">
                Debit interval
              </span>
              <span className=" text-white running-text-mono">monthly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

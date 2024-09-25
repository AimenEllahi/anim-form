import React from "react";
import CustomButton from "@/components/ui/custom-button";
import { cn } from "@/lib/utils";
import Switch from "../ui/Shared/Switch";
import LeftSection from "./single/LeftSection";
import RightSection from "./single/RightSection";

export default function index() {
  return (
    <div className="h-screen z-[10] w-full flex flex-col  px-6 lg:px-12">
      {/* Desktop */}
      <div className="hidden md:flex md:flex-row gap-2.5 ">
        <h1 className="text-center hidden  md:flex justify-start text-white headline-3 z-[10] ">
          Games in Progress
        </h1>
        <Switch />
      </div>

      {/* Desktop */}
      <div className="md:flex border text-white  bg-white/[8%] rounded-[16px] border-white/10 h-full justify-end items-end my-6  hidden  w-full ">
        <div className="w-1/2 h-full border-r border-white/[8%]">
          <LeftSection />
        </div>
        <div className="w-1/2 h-full ">
          <RightSection />
        </div>
      </div>
    </div>
  );
}

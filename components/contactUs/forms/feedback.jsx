import React from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomTextArea from "@/components/ui/custom-textArea";
import CustomButton from "@/components/ui/custom-button";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Emoticons from "./emoticons";

export default function feedback() {
  return (
    <div className=" flex w-full flex-col gap-6 justify-center items-center">
      <div className="w-full flex flex-col gap-4">
        <span>How would you rate dndai?</span>
        <Emoticons />
      </div>
      <div className="w-full flex flex-col gap-4">
        <span>Do you have any thoughts you’d like to share?</span>
        <CustomTextArea placeholder="Your thoughts" />

        <CustomButton
          variant={"primary"}
          withIcon={true}
          className={" focus:bg-white focus:text-black self-end"}
        >
          <span>Send</span>
          <ArrowRight className="h-5 w-5 fill-gray2" />
        </CustomButton>
      </div>
    </div>
  );
}

import React from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomTextArea from "@/components/ui/custom-textArea";
import CustomButton from "@/components/ui/custom-button";

import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Upload from "./upload";

//bug form
export default function bug() {
  return (
    <div className=" flex w-full flex-col gap-6 justify-center items-center">
      <div className="w-full flex flex-col gap-4">
        <span>Tell us more information about the bug</span>
        <CustomTextArea placeholder="Describe the bug" />
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-col gap-4">
          <Upload />
        </div>
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

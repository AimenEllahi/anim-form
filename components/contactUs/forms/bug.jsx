import React, { useState } from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomTextArea from "@/components/ui/custom-textArea";
import CustomButton from "@/components/ui/custom-button";

import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Upload from "./upload";

export default function bug() {
  const [file, setFile] = useState(null);
  const [bugDescription, setBugDescription] = useState("");
  return (
    <div className=' flex w-full flex-col gap-6 justify-center items-center'>
      <div className='w-full flex flex-col gap-4'>
        <span>Tell us more information about the bug</span>
        <CustomTextArea
          value={bugDescription}
          onChange={(e) => setBugDescription(e)}
          placeholder='Describe the bug'
        />
      </div>
      <div className='w-full flex flex-col gap-4'>
        <div className='w-full flex flex-col gap-4'>
          <Upload file={file} setFile={setFile} />
        </div>
        <CustomButton
          variant={"primary"}
          withIcon={true}
          className={" focus:bg-white focus:text-black self-end"}
        >
          <span>Send</span>
          <ArrowRight className='h-5 w-5 fill-gray2' />
        </CustomButton>
      </div>
    </div>
  );
}

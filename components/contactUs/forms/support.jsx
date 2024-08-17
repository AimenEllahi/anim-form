import React from "react";
import CustomInput from "@/components/ui/custom-input";
import CustomTextArea from "@/components/ui/custom-textArea";
import CustomButton from "@/components/ui/custom-button";
import { Checkbox } from "@/components/ui/checkbox";
import ArrowRight from "@/components/ui/Icons/ArrowRight";

export default function support() {
  return (
    <div className=' flex w-full flex-col gap-6 justify-center items-center'>
      <div className='w-full flex gap-4'>
        <CustomInput placeholder='Name' />
        <CustomInput placeholder='surname' />
      </div>
      <div className='w-full flex flex-col gap-4'>
        <CustomInput placeholder='e-mail' />
        <CustomTextArea placeholder='Message' />
        <div className='flex justify-center items-center gap-4'>
          <Checkbox
            //checked={flag}
            // onCheckedChange={(value) => setAgreeTOC(value)}
            className='border border-irisPurpleLight h-[20px] w-[20px]'
          />
          <span className='running-text-small'>
            By selecting I agree to the dndai{" "}
            <span className='text-irisPurpleLight'>terms and conditions</span>.
            You can read how we use and protect your data in our{" "}
            <span className='text-irisPurpleLight'>privacy policy</span>.
          </span>
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

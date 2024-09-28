import React from "react";
import CustomRadioButton from "@/components/ui/custom-radio-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Card({
  optionArray,
  img,
  name,
  handlePersonalityChange,
  selectedOption,
  tooltip,
}) {
  const key = name.toLowerCase();

  return (
    <div className='w-full h-auto gap-6 md:gap-0 flex flex-col hide-scrollbar md:bg-white/[2%] md:border border-white/5 rounded-[10px] overflow-y-scroll'>
      <div className='w-full h-[192px]  md:w-full md:h-auto'>
        <img
          src={img}
          alt='Personality'
          className=' h-full w-full object-cover  rounded-[10px]  md:rounded-none'
        />
      </div>

      <div className='md:p-5 h-full md:pt-5 flex flex-col items-start justify-start gap-5 md:gap-6'>
        <span className='running-text-mono text-gray2'>{name}</span>
        <CustomRadioButton
          selectedOption={selectedOption}
          className={
            "flex items-start flex-col flex-wrap max-h-[180px] md:max-h-full gap-y-4 w-full"
          }
          onChange={(value) => handlePersonalityChange(key, value)}
          options={optionArray}
        />
      </div>
    </div>
  );
}

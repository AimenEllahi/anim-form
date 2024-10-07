import React from "react";
import CustomRadioButton from "@/components/ui/custom-radio-button";
import { cn } from "@/lib/utils";

export default function Info({ alignment }) {
  return (
    <div
      className={cn(
        "hidden md:block w-2/5 h-fit max-h-full border bg-white/10 border-white/10 rounded-[16px] overflow-y-scroll hide-scrollbar pb-6 md:max-w-[350px] 2xl:max-w-[467px] ",
        !alignment && "opacity-0 pointer-events-none"
      )}
    >
      <div className='flex h-full flex-col'>
        <div className='w-full h-auto'>
          <img
            src={`https://dzjg7lvewk7ln.cloudfront.net/alignments/${alignment?.name
              ?.toLowerCase()
              .replaceAll(" ", "-")}.webp

`}
            alt={alignment}
            title={alignment}
            className='w-full object-contain '
          />
        </div>

        <div className='p-4 flex flex-col justify-around gap-4 '>
          <span className='running-text-large '>{alignment?.name}</span>
          <span className='text-gray2 running-text '>
            {alignment?.description}
          </span>
        </div>
      </div>
    </div>
  );
}

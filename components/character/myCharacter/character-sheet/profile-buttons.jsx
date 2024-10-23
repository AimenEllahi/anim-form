import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import CustomIconbutton from "@/components/ui/custom-iconbutton";
import Sheet from "@/components/ui/Icons/Sheet";
import Appearance from "@/components/ui/Icons/Appearance";
import Info from "@/components/ui/Icons/Info";

export default function ProfileButtons({ character }) {
 
  return (
    <div className='absolute top-4 left-4 w-full flex justify-start gap-4 '>
      <Popover>
        <PopoverTrigger>
          <CustomIconbutton className={" bg-blur-icon-button"}>
            <Appearance className='h-5 w-5' fill={"#fff"} />
          </CustomIconbutton>
        </PopoverTrigger>
        <PopoverContent className='!p-6 !pt-4 !pe-5 ' side='bottom'>
          <div className='flex flex-col gap-4 '>
            <span className='headline-4'>Appeareance</span>
            <span className='running-text'>{character.value?.appearance}</span>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <CustomIconbutton className={" bg-blur-icon-button"}>
            <Sheet className='h-4.5 w-4.5' fill={"#fff"} />
          </CustomIconbutton>
        </PopoverTrigger>
        <PopoverContent className='!p-6 !pt-4 !pe-5 !ms-2 ' side='bottom'>
          <div className='flex flex-col gap-4 '>
            <span className='headline-4'>Abilitiy Scores</span>
            <div className='flex flex-col justify-start gap-5 w-full'>
              {Object.entries(character?.value?.ability_scores || {}).map(
                ([key, value]) => {
                  return (
                    <div
                      className='flex items-center gap-8 justify-between w-4/4'
                      key={key}
                    >
                      <div
                        key={key}
                        className={`flex cursor-pointer running-text-mono uppercase justify-start items-center gap-3  `}
                      >
                        <img
                          src={`https://dzjg7lvewk7ln.cloudfront.net/abilities/${key}.webp`}
                          className={`w-12 h-12 ease-animate object-cover rounded-[10px] `}
                          title='Icon'
                          alt='icon'
                        />
                        <span>{key}</span>
                      </div>
                      <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                          <span className='running-text-mono'>{value}</span>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger>
          <CustomIconbutton className={" bg-blur-icon-button"}>
            <Info className='h-4 w-4' fill={"#fff"} />
          </CustomIconbutton>
        </PopoverTrigger>
        <PopoverContent className='!p-6 !pt-4 !pe-5 ' side='bottom'>
          <div className='flex flex-col gap-4 '>
            <span className='headline-4'>Abilities</span>
            <span className='running-text'>{character.value?.abilities}</span>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

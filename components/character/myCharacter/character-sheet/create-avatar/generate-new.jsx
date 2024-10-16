import React, { useState } from "react";
import { IMAGE_STYLES } from "@/components/constants/ImageStyles";
import { cn } from "@/lib/utils";

export default function GenerateNew({ style, setStyle }) {
  return (
    <div className='grid grid-cols-12 w-full gap-5 min-h-96  max-h-[80vh] md:max-h-[60vh] h-full overflow-y-scroll hide-scrollbar  pb-56 md:pb-6'>
      {IMAGE_STYLES.map((avatar, index) => (
        <div
          key={index}
          className='col-span-6 md:col-span-4 gap-3 text-white flex flex-col'
          onClick={() => {
            setStyle(avatar);
          }}
        >
          <img
            src={`https://dzjg7lvewk7ln.cloudfront.net/art-styles/${avatar
              .toLowerCase()
              .replaceAll(" ", "-")}.webp`}
            alt='avatar'
            title='Avatar Image'
            style={{ aspectRatio: "1/1" }}
            className={cn(
              " cursor-pointer ease-animate rounded-[16px]",
              style === avatar && "border-2 border-irisPurple shadow-custom-1"
            )}
          />
          <span className='uppercase running-text-mono'>{avatar}</span>
        </div>
      ))}
    </div>
  );
}

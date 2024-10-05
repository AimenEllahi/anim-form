import React from "react";

export default function ArticleImage({ image }) {
  return (
    <div className='flex flex-col  mb-16 md:mb-8  md:!py-32 py-0 md:gap-10  gap-5'>
      <div className='flex md:flex-row flex-col md:gap-10 gap-4 items-left justify-start '>
      </div>
      <div className='w-full flex md:flex-col flex-col-reverse md:gap-[100px] gap-8 justify-center items-end'>
        <div
          className='h-full rounded-[10px] md:rounded-[16px]
        shadow-step-images
         z-10 overflow-hidden border-[1px] border-[#8F91FF]/20 l md:w-[711px] w-full'
        >
          <img src={image} title='News Article Image' alt={"News article image of dndai"} className='w-full  object-contain' />
        </div>
      </div>
    </div>
  );
}

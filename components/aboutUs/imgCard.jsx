import React from "react";

export default function imgCard({ src, name, job }) {
  return (
    <div className='flex flex-col gap-6 w-full  '>
      <img
        src={src}
        alt='Images about the developers of dndai.app'
        className='w-full  h-full object-cover images-glow rounded-[16px] border border-irisPurpleLight/20'
      />
      <div className='flex flex-col gap-3 '>
        <span className='headline-4'>{name}</span>
        <span className='running-text-mono text-irisPurpleLight uppercase'>
          {job}
        </span>
      </div>
    </div>
  );
}

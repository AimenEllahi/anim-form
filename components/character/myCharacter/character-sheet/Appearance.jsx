import React from "react";

export default function Appearance({ character }) {
  return (
    <div className='flex flex-col gap-5 z-[1]'>
      <div className=' h-fit w-full lg:w-[345px]  py-4 px-5  flex flex-col gap-3 justify-start bg-white/10 rounded-[16px] border border-white/10'>
        <span className='running-text-large'>Appearance</span>
        <span className='running-text text-gray2'>
          {character.value.appearance}
        </span>
      </div>
      <div className=' h-fit w-full lg:w-[345px]   py-4 px-5 flex flex-col gap-3 justify-start bg-white/10 rounded-[16px] border border-white/10'>
        <span className='running-text-large'>Additional Notes</span>
        <span className='running-text text-gray2'>
          {character.value.additionalNotes}
        </span>
      </div>
    </div>
  );
}

import React from "react";

export default function Details({ details, setting }) {
  return (
    <div className='flex flex-col md:flex-row gap-[20px] w-full  details-section px-5 md:px-0'>
      <div className='md:w-1/2 flex flex-col gap-[16px]'>
        <div className=' flex flex-col gap-[16px]'>
          <span className='running-text-mono text-gray2'>TIME</span>
          <p className='running-text '>{details.time}</p>
        </div>
        <div className=' flex flex-col gap-[16px]'>
          <span className='running-text-mono text-gray2'>PLOT</span>
          <p className='running-text '>{details.plot}</p>
        </div>
        <div className=' flex flex-col gap-[16px]'>
          <span className='running-text-mono text-gray2'>HOOK</span>
          <p className='running-text '>{details.hook}</p>
        </div>
      </div>
      <div className='md:w-1/2'>
        {" "}
        <div className='flex flex-col gap-[16px] items-start justify-start'>
          <span className='running-text-mono text-gray2'>SETTINGS</span>
          <span className='running-text md:hidden '>{setting}</span>

          <img
            src={`https://dzjg7lvewk7ln.cloudfront.net/settings/${setting
              .toLowerCase()
              .replaceAll(" ", "-")
              .replaceAll("'", "")}.webp`}
            title='setting icon'
            alt='settings icon'
            className=' rounded-[16px] object-contain w-full'
          />
        </div>
      </div>
    </div>
  );
}

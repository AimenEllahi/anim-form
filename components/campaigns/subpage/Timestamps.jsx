import React from "react";
import moment from "moment";
export default function Timestamps({ campaign, dictionary }) {
  return (
    <div className=' w-full h-fit flex running-text-mono uppercase  flex-col max-h-auto bg-white/[8%] border border-white/10 rounded-[16px] overflow-hidden '>
      <img
        src={campaign?.worldMapUrl || "/campaignheader.png"}
        title='Worlmap of Campaign'
        alt='Image of the specific campaign'
        className=' hidden md:block object-contain w-full'
      />
      <div className='p-5'>
        <div className=' border-b w-full border-white/10 pb-5'>
          <span className=' text-gray2 uppercase'>{dictionary.created}:</span>
          <span className='ml-2'>{moment(campaign.createdAt).fromNow()}</span>
        </div>
        <div className=' border-b border-white/10 py-5 '>
          <span className=' text-gray2  uppercase'>
            {dictionary.createdBy}:
          </span>
          <span className='ml-2'>{campaign.playerName}</span>
        </div>
        <div className='  border-white/10 pt-5 '>
          <span className=' text-gray2 uppercase'>
            {dictionary.lastPlayed}:
          </span>
          <span className='ml-2'> {moment(campaign.updatedAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
}

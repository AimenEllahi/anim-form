import React from "react";
import ImgCard from "./imgCard";

export default function index({ dictionary }) {
  return (
    <div className='h-full text-white w-full flex flex-col pt-[94px] md:pt-[9rem] px-5 lg:px-12 pb-32'>
      <div className='flex flex-col w-full gap-10 z-[10]'>
        <div className='flex  justify-between text-white  w-full md:w-auto'>
          <span className='headline-3 z-[10] hidden md:block '>
            {dictionary.aboutUs}
          </span>
        </div>

        <div className=' text-white grid grid-cols-1 md:grid-cols-12  gap-8 justify-end items-end'>
          <div className='flex running-text-small md:running-text-large flex-col md:col-start-5 gap-5  md:col-span-7 w-full'>
            <span>
              {dictionary.welcomeTo}{" "}
              <span className='text-irisPurpleLight'> dndai.app!</span>
            </span>
            <p>{dictionary.p1}</p>
            <p>{dictionary.p2}</p>
            <p>{dictionary.p3}</p>
            <p>{dictionary.p4}</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 w-full mt-[24px] md:mt-[265px]'>
          <span className='headline-3'> {dictionary.ourTeam}</span>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <ImgCard
              src='/team/DND-AI-Portraits-Alex.webp'
              name='Alexander Ksela'
              job={dictionary.development}
            />
            <ImgCard
              src='/team/DND-AI-Portraits-Luci.webp'
              name='Lucas Rossmann'
              job={dictionary.design}
            />
            <ImgCard
              src='/team/DND-AI-Portraits-Aimen.webp'
              name='Aimen Qaiser'
              job={dictionary.development}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

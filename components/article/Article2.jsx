import React from 'react';
import ArticleImage from "./articleImage";

export default function Article2() {
  return (
    <div className='h-full text-white w-full flex flex-col pt-[104px] md:pt-[9rem] px-5 lg:px-12 pb-32'>
      <div className='flex flex-col w-full gap-10 z-[10]'>
        <div className='flex justify-between text-white w-full md:w-auto'>
          <span className='headline-3 z-[10] hidden md:block'>Patch 1.1</span>
        </div>
        <div className='text-white flex flex-col gap-8 justify-center items-center'>
          <div className='flex flex-col gap-5 md:w-[711px] w-full '>
            <p className='running-text-large'>Major Updates:</p>
            <ul className='list-disc list-inside'>
              <li><strong>Rework of Game Start Process:</strong> Implemented a new "Start Game Wizard" that streamlines the game initiation process into three simple steps: Select Campaign, Select Character, and Review Selection.</li>
              <li><strong>Navbar Redesign:</strong> The navbar has been updated to include three main sections: Games, Campaigns, and Community Gallery.</li>
              <li><strong>Community Gallery:</strong> A collection of all images generated from character portraits or game scenes, free to use for any purpose.</li>
            </ul>

            <p className='running-text-large'>Character Creation Updates:</p>
            <ul className='list-disc list-inside'>
              <li>Added conditional logic to ensure that starting equipment appears based on the selected race and class combination.</li>
            </ul>

            <p className='running-text-large'>Bug Fixes:</p>
            <ul className='list-disc list-inside'>
              <li>Fixed a bug that prevented "Choices" from displaying in the game.</li>
              <li>Resolved an issue with incorrect attribute attribution for stats.</li>
              <li>Various UI/UX improvements and bug fixes to enhance overall user experience.</li>
            </ul>
          </div>
          <ArticleImage
            image={
              "https://dzjg7lvewk7ln.cloudfront.net/articles/article_2.webp"
            }
            loading='lazy'
          />
          <div className='h-full flex flex-col justify-center items-center bg-transparent md:py-32 px-5 md:px-12'>
          </div>
        </div>
      </div>
    </div>
  );
}

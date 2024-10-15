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
                <li><strong>Rework of Game Start Process:</strong>
                <p></p>
                 Implemented a new "Start Game Wizard" that streamlines the game initiation process into three simple steps:
                  <ul className='list-disc list-inside ml-5'>
                    <li>Select Campaign: Choose from various campaigns with a summary of each.</li>
                    <li>Select Character: Pick your character for the adventure.</li>
                    <li>Review Selection: Confirm your choices with a summary and proceed with a Finish button.</li>
                  </ul>
                </li>
                <li><strong>Navbar Redesign:</strong>
                <p></p>
                The navbar has been updated to include three main sections:
                  <ul className='list-disc list-inside ml-5'>
                    <li><strong>Games: </strong>
                    <p></p>
                     View all in-progress games, including character details and the last game state. Users can continue games from this page. A tab control allows switching between in-progress and completed games. Completed games feature a summary of events and can be continued even after finishing.</li>
                    <li><strong>Campaigns:</strong> 
                    <p></p>
                    Explore community favorites, which showcase the most liked campaigns. Below that, find Public Campaigns—all publicly available campaigns on dndai.app, sorted from newest to oldest, with filtering options for:
                      <ul className='list-disc list-inside ml-5'>
                        <li>Newest to Oldest</li>
                        <li>Most Liked</li>
                        <li>Most Favorited</li>
                        <li>Most Played</li>
                      </ul>
                    </li>
                    <li><strong>Community Gallery: </strong>
                      <p></p>
                      A collection of all images generated from character portraits or game scenes. These images are free to use for any purpose.</li>
                  </ul>
                </li>
              </ul>
  
              <p className='running-text-large'>Character Creation Updates:</p>
        
                Added conditional logic to ensure that starting equipment appears based on the selected race and class combination.
             
  
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
import React from 'react';
import ArticleImage from "./articleImage";

export default function Article5() {
  return (
    <div className='h-full text-white w-full flex flex-col pt-[104px] md:pt-[9rem] px-5 lg:px-12 pb-32'>
      <div className='flex flex-col w-full gap-10 z-[10]'>
        <div className='flex justify-between text-white w-full md:w-auto'>
          <span className='headline-3 z-[10] hidden md:block'>Patch Notes  1.4</span>
        </div>
        <div className='text-white flex flex-col gap-8 justify-center items-center'>
          <div className='flex flex-col gap-5 md:w-[711px] w-full '>
            <p className='running-text-large'>New Features:</p>
            <div className='flex flex-col gap-3 pl-5'>
              <div><span className='font-bold'>Multi-Language Support:</span> The app now supports multiple languages, automatically set based on your country's IP. You can change the language anytime via the "Account Menu" in the top-right corner.</div>
              <div><span className='font-bold'>Community Gallery Likes:</span> You can now like images in the "Community Gallery" to rank your favorite contributions and filter for "Most Liked" images.</div>
              <div><span className='font-bold'>Improved Character Creator:</span> Introduced three ways to assign ability scores:
                <div className='flex flex-col gap-2 pl-5'>
                  <div><span className='font-bold'>Standard Array:</span> Assign predetermined numbers to abilities like Strength, Dexterity, etc.</div>
                  <div><span className='font-bold'>Point Buy:</span> Customize scores by distributing points, balancing your character perfectly.</div>
                  <div><span className='font-bold'>Roll for Stats:</span> Roll 4d6, drop the lowest die, and sum the remaining dice for each ability.</div>
                </div>
              </div>
              <div><span className='font-bold'>Companions Management:</span> Companions can now be deleted via the "Adventurer Overview" screen.</div>
              <div><span className='font-bold'>Rank Emblems Enhancements:</span> Rank emblems are now displayed as profile icons and can be customized in the "Emblems & Titles" menu. Your rank emblem is also shown next to your name in campaign comments.</div>
            </div>

            <p className='running-text-large'>Bug Fixes:</p>
            <div className='flex flex-col gap-3 pl-5'>
              <div>Fixed an issue where Rank and Title wouldn't remain set after selection.</div>
              <div>Resolved app crashes when deleting a premade character or generating a character portrait and switching tabs.</div>
              <div>Improved mobile layout and performance for Adventurer Overview, text formatting, emblems & titles.</div>
              <div>Fixed various UI issues, including hover states, paddings, shadows, icons, and overall formatting.</div>
              <div>General performance optimizations.</div>
            </div>
          </div>
          <ArticleImage
            image={
              "https://dndai-images.s3.eu-central-1.amazonaws.com/benjammin/1735499870031.webp"
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

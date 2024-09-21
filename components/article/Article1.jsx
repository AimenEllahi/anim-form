import React from 'react';
import ArticleImage from "./articleImage";

export default function Article1() {
  return (
    
    
    <div className='h-full text-white w-full flex flex-col pt-[104px] md:pt-[9rem] px-5 lg:px-12 pb-32'>
      <div className='flex flex-col w-full gap-10 z-[10]'>
        <div className='flex justify-between text-white w-full md:w-auto'>
          <span className='headline-3 z-[10] hidden md:block'>Patch 1.0</span>
        </div>
        <div className='text-white flex flex-col gap-8 justify-center items-center'>
          <div className='flex flex-col gap-5 md:w-[711px] w-full '>
            <p className='running-text-large'>Character Creation:</p>
            <ul className='list-disc list-inside'>
              <li>Build your own unique character with our advanced character creator!</li>
              <li>Create a custom Character Portrait.</li>
              <li>Save character progress, including items, additional notes, and updated ability scores.</li>
            </ul>

            <p className='running-text-large' >Campaign Creation:</p>
            <ul className='list-disc list-inside'>
              <li>Create and customize campaigns that are playable with your characters.</li>
              <li>Publish your campaigns so others can enjoy them.</li>
              <li>Interact with the community by commenting on, liking, and starring other users' campaigns.</li>
            </ul>

            <p className='running-text-large'>Gameplay Enhancements:</p>
            <ul className='list-disc list-inside'>
              <li>Choose from a wide range of user-generated campaigns.</li>
              <li>Easily continue your recently played games.</li>
              <li>Complete quests and advance your progress.</li>
              <li>Earn experience points (XP) and level up your characters.</li>
            </ul>
            <p className='running-text-large'>Image Galleries:</p>
            <ul className='list-disc list-inside'>
              <li>Community Gallery: View all images shared by users in a collective gallery.</li>
              <li>My Images: Access and manage images you’ve personally created.</li>
            </ul>
          </div>
          <ArticleImage
            image={
              "https://dzjg7lvewk7ln.cloudfront.net/articles/article_1.webp"
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

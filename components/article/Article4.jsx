import React from 'react';
import ArticleImage from "./articleImage";

export default function Article4() {
  return (
    
    
    <div className='h-full text-white w-full flex flex-col pt-[104px] md:pt-[9rem] px-5 lg:px-12 pb-32'>
      <div className='flex flex-col w-full gap-10 z-[10]'>
        <div className='flex justify-between text-white w-full md:w-auto'>
          <span className='headline-3 z-[10] hidden md:block'>Patch 1.3</span>
        </div>
        <div className='text-white flex flex-col gap-8 justify-center items-center'>
          <div className='flex flex-col gap-5 md:w-[711px] w-full '>
            <p className='running-text-large'>Achievement & Rank System</p>
            <ul className='list-disc list-inside'>
              <li>You can now earn Ranks and unlock Emblems that display your progress on our page.</li>
              <li>There are 40 Achievements and 20 Rank levels to progress through.</li>
              <li>Each Rank level unlocks a unique Emblem and a matching title.</li>
              <li>You can choose which Emblem to display alongside your name for others to see.</li>
            </ul>

            <p className='running-text-large' >Achievements:</p>
            <ul className='list-disc list-inside'>
              <li>When you complete achievements, you earn Pokals (trophies).</li>
              <li>On the Achievements page, you’ll see a progress bar at the top. This shows how many Pokals you need to reach the next Rank level.</li>
              <li>Each new Rank level unlocks additional Emblems and Ranks that you can choose to display.</li>
            </ul>

            <p className='running-text-large'>Emblems:</p>
            <ul className='list-disc list-inside'>
              <li>Choose from a wide range of user-generated campaigns.</li>
              <li>Easily continue your recently played games.</li>
              <li>Complete quests and advance your progress.</li>
              <li>Earn experience points (XP) and level up your characters.</li>
            </ul>
            <p className='running-text-large'>Ranks & Emblems</p>
            <ul className='list-disc list-inside'>
              <li>Once unlocked, you can freely choose your favorite Emblems and Ranks to best represent your profile. Customize your look to match your style!</li>
            </ul>
            <p className='running-text-large'>Bug Fixes:</p>
            <ul className='list-disc list-inside'>
              <li>Fixed a bug that made text formatting difficult to read.</li>
              <li>Improved story cohesion and clarified objectives.</li>
              <li>Resolved various visual bugs.</li>
              <li>Enhanced page loading times for a smoother experience.</li>
            </ul>
          </div>
          <ArticleImage
            image={
              "https://dzjg7lvewk7ln.cloudfront.net/rank-images/Hero.webp"
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

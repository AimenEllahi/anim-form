import React from 'react';
import ArticleImage from "./articleImage";

export default function Article3() {
  return (
      <div className='h-full text-white w-full flex flex-col pt-[104px] md:pt-[9rem] px-5 lg:px-12 pb-32'>
        <div className='flex flex-col w-full gap-10 z-[10]'>
          <div className='flex justify-between text-white w-full md:w-auto'>
            <span className='headline-3 z-[10] hidden md:block'>Patch 1.2</span>
          </div>
          <div className='text-white flex flex-col gap-8 justify-center items-center'>
            <div className='flex flex-col gap-5 md:w-[711px] w-full '>
            <p className='running-text-large'>Major Update:</p>
              <p className='running-text-large'>Adventurer Overview Rework:</p>
              <ul className='list-disc list-inside'>
                <strong>Complete Redesign:</strong>
                <p></p>
                The Adventurer Overview has undergone a complete redesign. It now features a tabbed interface with four sections:
                <ol className='list-decimal list-inside ml-5'>
                  <li><strong>Appearance Tab: </strong>
                    <p></p>
                    This tab provides detailed information about your adventurer’s appearance, including any special notes (such as newly acquired powers or significant events). You can also see your experience points (XP), current adventurer level, background, race, class, gender, alignment, and personality traits.
                  </li>
                  <li><strong>Companions Tab: </strong>
                    <p></p>
                    In this tab, you can view all companions or allies you’ve gathered during your adventures. Each companion has its own name and appearance, which can be used as a profile picture. You can change these profile pictures at any time through this tab. The companions section, like the rest of the overview, updates dynamically as you play.
                  </li>
                  <li><strong>Abilities Tab: </strong>
                    <p></p>
                    This tab displays all of your ability scores (Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma), defenses (Hit Points and Armor Class), as well as adventurer-specific abilities and spells.
                  </li>
                  <li><strong>Inventory Tab: </strong>
                    <p></p>
                    Here, you’ll find all the items your adventurer has collected, including starting equipment. Like the other sections, the inventory updates automatically during gameplay.
                  </li>
                </ol>
              </ul>

              <p className='running-text-large'>Minor Updates:</p>
              <ul className='list-disc list-inside'>
                <li>
                  UX Improvement: The user experience (UX) has been improved, allowing you to view other players' Adventurer Overviews via a link.
                  <p></p>
                   For example, you can visit another player’s character by using a link like
                   <p></p>
                  <span>https://dndai.app/character/sheet/ + the ID </span>
                  <br/>Example link: 
                  <a href="https://dndai.app/character/sheet/66ca27de008b9bd5a758c379" className='text-blue-400'> https://dndai.app/character/sheet/66ca27de008b9bd5a758c379</a>
                </li>
                <li>Bug fixes have been implemented to improve loading times, overall page speed, performance, and stability.</li>
              </ul>
            </div>
            <ArticleImage
            image={
              "https://dzjg7lvewk7ln.cloudfront.net/der%20patron/1729688171168.webp"
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

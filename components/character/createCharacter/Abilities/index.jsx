"use client";
import React, { useState } from "react";
import Choose from "./Choose";
import Help from "@/components/ui/Icons/Help";

const abilitiesType = [
  {
    title: "Standard Array",
    options: [
      {
        title: "Use these fixed numbers",
        desc: "15, 14, 13, 12, 10, 8",
      },
      {
        title: "How it works",
        desc: "Assign each number to an ability: Strength, Dexterity, Constitution, Intelligence, Wisdom and Charisma.",
      },
      {
        title: "Why choose this?",
        desc: "It’s quick, simple, and balanced.",
      },
    ],
  },
  {
    title: "Point Buy",
    options: [
      {
        title: "Start with a pool of points to customize your ability scores.",
      },
      {
        title: "How it works",
        desc: "Assign points to each ability, with higher scores costing more points. You can balance your character exactly how you like.",
      },
      {
        title: "Why choose this?",
        desc: "It offers the most control and flexibility.",
      },
    ],
  },
  {
    title: "Roll for Stats",
    options: [
      {
        title: "Roll dice to determine your scores for each ability.",
      },
      {
        title: "How it works",
        desc: "Roll 4d6, drop the lowest die, and add the remaining three dice together for each ability. Assign the totals to your abilities.",
      },
      {
        title: "Why choose this?",
        desc: "It’s random and exciting, perfect for players who love surprises.",
      },
    ],
  },
];

export default function Index({ character, setCharacter }) {
  const [abilitiesTypeStep, setAbilitiesTypeStep] = useState(2);
  const handleChangeAbilities = (abilities) => {
    setCharacter((prev) => ({
      ...prev,
      abilities,
    }));
  };

  return (
    <div className=' text-white   flex justify-start items-start gap-5 h-full  w-full pb-32 sm:pb-0'>
      <Choose
        abilities={character.abilities}
        _pointsToSpend={character.pointsToSpend}
        handleChangeAbilities={handleChangeAbilities}
        setAbilitiesTypeStep={setAbilitiesTypeStep}
        abilitiesTypeStep={abilitiesTypeStep}

      />
      <div className='border h-fit w-1/3 gap-4 flex flex-col bg-white/10 border-white/10 rounded-[16px] p-5 pt-3.5'>
        <div className='flex gap-4 items-center'>
          <Help className='size-6' />
          <span className='running-text-large'>
            {abilitiesType[abilitiesTypeStep].title}
          </span>
        </div>
        {abilitiesType[abilitiesTypeStep].options.map((option, index) => (
          <div key={index} className='flex flex-col gap-2'>
            <span className='running-text'>{option.title}</span>
            <span className='running-text text-gray2 '>{option?.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import Check from "../ui/Icons/Check";
import LockIcon from "../ui/Icons/Lock";

export default function Titles({ userPokals }) {
  const LEVELS = [
    { rank: "Novice", pokalsRequired: 0 },
    { rank: "Apprentice", pokalsRequired: 100 },
    { rank: "Adept", pokalsRequired: 250 },
    { rank: "Specialist", pokalsRequired: 450 },
    { rank: "Expert", pokalsRequired: 700 },
    { rank: "Artisan", pokalsRequired: 1000 },
    { rank: "Master", pokalsRequired: 1350 },
    { rank: "Grandmaster", pokalsRequired: 1750 },
    { rank: "Hero", pokalsRequired: 2200 },
    { rank: "Champion", pokalsRequired: 2700 },
    { rank: "Legend", pokalsRequired: 3250 },
    { rank: "Demigod", pokalsRequired: 3850 },
    { rank: "Titan", pokalsRequired: 4500 },
    { rank: "Immortal", pokalsRequired: 5200 },
    { rank: "Celestial", pokalsRequired: 6000 },
    { rank: "Ancient", pokalsRequired: 6850 },
    { rank: "Primarch", pokalsRequired: 7750 },
    { rank: "Eidolon", pokalsRequired: 8700 },
    { rank: "Paragon", pokalsRequired: 9700 },
    { rank: "Ascendant", pokalsRequired: 10750 },
  ];

  return (
    <div className="relative md:bg-white/[8%] bg-transparent md:w-3/4 w-full rounded-2xl md:p-5 p-0 grid md:grid-cols-5 grid-cols-2 gap-5">
      {LEVELS.map((level, index) => (
        <div
          key={index}
          className={`h-[50px] w-full bg-white/[8%] rounded-[10px] flex items-center justify-center transition-shadow duration-300 border border-[#FFFFFF]/[4%] ${
            userPokals < level.pokalsRequired
              ? "bg-white/[4%] border-white/[4%]"
              : "hover:border-[#8F91FF] hover:shadow-[0_0_30px_0_rgba(127,126,252,0.3)]"
          }`}
        >
          <div className="p-2 pl-4 w-full  flex justify-between items-center">
            <span className="uppercase text-sandyOrange running-text-mono">
              {level.rank}
            </span>
            {userPokals < level.pokalsRequired ? (
              <div className="w-5 h-5 flex justify-center items-center p-[2px] rounded-full bg-white/10">
                <LockIcon fill="#fff" width="8px" />
              </div>
            ) : (
              <div className="w-4 h-4 flex justify-center items-center p-[2px] rounded-full bg-irisPurpleLight">
                <Check />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

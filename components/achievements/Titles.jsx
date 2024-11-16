import React from "react";
import Check from "../ui/Icons/Check";
import LockIcon from "../ui/Icons/Lock";

export default function Titles() {
  const titles = [
    "NOVICE",
    "APPRENTICE",
    "ADEPT",
    "SPECIALIST",
    "EXPERT",
    "ARTISAN",
    "MASTER",
    "GRANDMASTER",
    "HERO",
    "CHAMPION",
    "LEGEND",
    "DEMIGOD",
    "TITAN",
    "IMMORTAL",
    "CELESTIAL",
    "ANCIENT",
    "PRIMARCH",
    "EIDOLON",
    "PARAGON",
    "ASCENDANT",
  ];

  const lockedTitles = [
    "TITAN",
    "IMMORTAL",
    "CELESTIAL",
    "PRIMARCH",
    "EIDOLON",
    "PARAGON",
    "ASCENDANT",
  ];

  return (
    <div className="relative bg-white/[8%] w-3/4 rounded-2xl p-5 grid grid-cols-5 gap-5">
      {titles.map((title, index) => (
        <div
          key={index}
          className={`h-[50px] w-full bg-white/[8%] rounded-[10px] flex items-center justify-center transition-shadow duration-300 border border-[#FFFFFF]/[4%] ${
            lockedTitles.includes(title)
              ? "bg-white/[4%] border-white/[4%]"
              : "hover:border-[#8F91FF] hover:shadow-[0_0_30px_0_rgba(127,126,252,0.3)]"
          }`}
        >
          <div className="p-2 pl-4 w-full  flex justify-between items-center">
            <span className="uppercase text-sandyOrange running-text-mono">
              {title}
            </span>
            {lockedTitles.includes(title) ? (
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

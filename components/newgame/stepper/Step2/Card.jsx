import { cn } from "@/lib/utils";
import useGameStore from "@/utils/gameStore";
import React from "react";

export default function Card({ character, summary = false }) {
  const { setCurrentCharacter, currentCharacter } = useGameStore();
  return (
    <div
      onClick={() => {
        setCurrentCharacter(character);
      }}
      className={cn(
        "border w-full border-white/[8%] bg-white/[8%] p-2 flex justify-between rounded-[10px] cursor-pointer transition-all duration-300 ease-in-out overflow-visible ",
        !summary &&
          (currentCharacter?._id === character?._id
            ? "bg-[#8F91FF33] border-[#8F91FF] shadow-[0_0_20px_0_rgba(143,145,255,0.8)]"
            : "hover:bg-white/10 hover:border-white/20")
      )}
    >
      <div className='flex justify-start items-center gap-3'>
        <img
          src={character?.personal?.portraitUrl || "/images/Header.png"}
          alt={character?.personal?.name}
          className='h-16 w-16 rounded-[6px]'
        />
        <div className='flex flex-col  gap-[14px]'>
          <h3 className='text-white running-text-mono uppercase'>
            {character?.personal?.name}
          </h3>
          <div className=' flex flex-col gap-1 description'>
            <span className='text-white uppercase'>
              Level {character?.value.level}
            </span>
            <span className='text-irisPurpleLight uppercase'>
              {character?.personal.race}{" "}
              <span className='text-sandyOrange'>
                {character?.personal.class}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Check from "../ui/Icons/Check";
import LockIcon from "../ui/Icons/Lock";
import useUserStore from "@/utils/userStore";
import { updateTitle } from "@/actions/achievement";
import useCustomToast from "@/hooks/useCustomToast";
import { cn } from "@/lib/utils";
export const LEVELS = [
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

export default function Titles({ userPokals }) {
  const { invokeToast } = useCustomToast();
  const { user, updateTitle: updateTitleInStore } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const handleTitleUpdate = async (_title) => {
    try {
      setIsLoading(true);
      const { title } = await updateTitle(user.token, _title);
      updateTitleInStore(title);
      invokeToast("title updated successfully", "success");
    } catch (error) {
      console.error("Error:", error);
      invokeToast("Failed to update title", "error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='relative md:bg-white/[8%] md:border md:border-white/10 bg-transparent md:w-fit w-full rounded-[16px] md:p-5 p-0 grid md:grid-cols-5 grid-cols-2 gap-5'>
      {LEVELS.map((level, index) => (
        <div
          onClick={() => {
            if (userPokals >= level.pokalsRequired)
              handleTitleUpdate(level.rank);
          }}
          key={index}
          className={cn(
            `h-[50px] border p-5 pe-3 border-white/10  w-[215px] bg-white/[8%] group rounded-[10px] flex items-center justify-center transition-shadow duration-300 `,
            userPokals < level.pokalsRequired
              ? "bg-white/[4%] pointer-events-none border-white/[4%]"
              : "hover:border-[#8F91FF] cursor-pointer hover:shadow-[0_0_30px_0_rgba(127,126,252,0.3)]",
            isLoading && "pointer-events-none opacity-50"
          )}
        >
          <div className='w-full   flex justify-between items-center'>
            <span className='uppercase text-sandyOrange running-text-mono'>
              {level.rank}
            </span>
            {userPokals < level.pokalsRequired && (
              <div className='w-6 h-6 flex justify-center backdrop-blur-[32px] rounded-full items-center p-[2px]  bg-white/10'>
                <LockIcon fill='#fff' className='w-2.5 h-3' />
              </div>
            )}
            <div
              className={cn(
                "w-4 h-4 opacity-0 flex group-hover:opacity-100 ease-animate justify-center items-center p-[2px] rounded-full bg-irisPurpleLight",
                userPokals < level.pokalsRequired && "hidden"
              )}
            >
              <Check />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

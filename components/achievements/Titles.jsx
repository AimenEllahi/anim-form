import React, { useState } from "react";
import Check from "@/components/ui/Icons/Check";
import LockIcon from "@/components/ui/Icons/Lock";
import useUserStore from "@/utils/userStore";
import { updateTitle } from "@/actions/achievement";
import useCustomToast from "@/hooks/useCustomToast";
import { cn } from "@/lib/utils";
import CheckV2 from "../ui/Icons/CheckV2";
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
  const { user, updateTitle: updateTitleInStore, title } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  console.log(title);
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
    <div className=' relative md:bg-white/[8%] md:border md:border-white/10 bg-transparent md:w-fit w-full rounded-[16px] md:p-5 p-0 grid md:grid-cols-3 xl:grid-cols-5 grid-cols-2 gap-4 md:gap-5'>
      {LEVELS.map((level, index) => (
        <div
          onClick={() => {
            if (userPokals >= level.pokalsRequired)
              handleTitleUpdate(level.rank);
          }}
          key={index}
          className={cn(
            `h-[50px] border p-5 pe-3 border-white/[8%]  md:w-[215px] bg-white/[8%] group rounded-[10px] flex items-center justify-center ease-animate `,
            userPokals < level.pokalsRequired
              ? "bg-white/[4%] pointer-events-none border-white/[4%] opacity-70"
              : "hover:bg-white/10 hover:border-white/20 active:border-[#8F91FF] cursor-pointer active:shadow-[0_0_30px_0_rgba(127,126,252,0.3)]",
            level.rank === title &&
              "border-irisPurpleLight bg-irisPurpleLight/[16%] shadow-[0_0_40px_0_rgba(143,145,255,0.4)] hover:border-irisPurpleLight hover:bg-irisPurpleLight/[16%] hover:shadow-[0_0_40px_0_rgba(143,145,255,0.4)]",
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
                "w-4 h-4 opacity-0 flex ease-animate justify-center items-center p-[2px] rounded-full bg-irisPurpleLight",
                userPokals < level.pokalsRequired && "hidden",
                level.rank === title && "opacity-100"
              )}
            >
              <CheckV2 className='h-[7px] w-[9px] fill-russianViolet' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

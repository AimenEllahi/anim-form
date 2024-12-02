import React, { useState } from "react";
import { LEVELS } from "./Titles";
import { cn } from "@/lib/utils";
import Lock from "@/components/ui/Icons/Lock";
import useUserStore from "@/utils/userStore";
import { updateRank } from "@/actions/achievement";
import useCustomToast from "@/hooks/useCustomToast";
import Check from "../ui/Icons/Check";
import CheckV2 from "../ui/Icons/CheckV2";
export default function Emblems({ userPokals }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isUnlocked = (index) => userPokals >= LEVELS[index].pokalsRequired;
  const { invokeToast } = useCustomToast();
  const { user, updateRank: updateRankInStore, rank } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const handleEmblemUpdate = async (_rank) => {
    try {
      setIsLoading(true);
      const { rank } = await updateRank(user.token, _rank);
      updateRankInStore(rank);
      invokeToast("Emblem updated successfully", "success");
    } catch (error) {
      console.error("Error:", error);
      invokeToast("Failed to update Emblem", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='relative md:border md:border-white/10 md:bg-white/[8%] bg-transparent w-full rounded-[16px] md:p-5 p-0 grid sm:grid-cols-10 grid-cols-2 gap-4 md:gap-5'>
      {LEVELS.map((_, index) => (
        <div
          key={index}
          onClick={() => {
            if (isUnlocked(index)) handleEmblemUpdate(_.rank);
          }}
          className={cn(
            `w-[168px] md:w-[122px] relative h-auto bg-white/10 rounded-[10px] overflow-hidden flex items-center justify-center ease-animate sm:col-span-3 md:col-span-2 xl:col-span-1`,

            rank === _.rank &&
              "border !border-irisPurpleLight bg-irisPurpleLight/[16%] shadow-[0_0_40px_0_rgba(143,145,255,0.4)]",
            isLoading && "pointer-events-none opacity-50"
          )}
        >
          <div className='absolute bottom-2 right-2 z-[10]'>
            <div
              className={cn(
                " flex items-center justify-center backdrop-blur-[32px] rounded-full h-6 w-6 bg-white/[8%] ",
                rank === _.rank && "bg-irisPurpleLight h-4 w-4",
                rank !== _.rank && isUnlocked(index) && "hidden"
              )}
            >
              {!isUnlocked(index) ? (
                <Lock className='h-3 w-2.5 fill-white' />
              ) : (
                rank === _.rank && (
                  <CheckV2 className=' h-[7px] w-[9px] fill-russianViolet' />
                )
              )}
            </div>
          </div>

          <img
            src={`https://dzjg7lvewk7ln.cloudfront.net/rank-images/${_.rank}.webp`}
            alt=''
            className={cn(
              "w-full object-contain  cursor-pointer",
              !isUnlocked(index) && "opacity-40 pointer-events-none"
            )}
          />
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import { LEVELS } from "./Titles";
import { cn } from "@/lib/utils";
import Lock from "@/components/ui/Icons/Lock";
import useUserStore from "@/utils/userStore";
import { updateRank } from "@/actions/achievement";
import useCustomToast from "@/hooks/useCustomToast";
export default function Emblems({ userPokals }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isUnlocked = (index) => userPokals >= LEVELS[index].pokalsRequired;
  const { invokeToast } = useCustomToast();
  const { user, updateRank: updateRankInStore } = useUserStore();
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
    <div className='relative md:border md:border-white/10 md:bg-white/[8%] bg-transparent w-full rounded-[16px] md:p-5 p-0 grid md:grid-cols-10 grid-cols-2 gap-5'>
      {LEVELS.map((_, index) => (
        <div
          key={index}
          onClick={() => {
            if (isUnlocked(index)) handleEmblemUpdate(_.rank);
          }}
          onMouseEnter={() => setSelectedIndex(index)}
          onMouseLeave={() => setSelectedIndex(null)}
          className={cn(
            `h-[122px] relative w-full bg-white/10 rounded-[10px] flex items-center justify-center transition-shadow transition-border duration-300`,
            selectedIndex === index && isUnlocked(index)
              ? "border border-[#8F91FF] shadow-[0_0_40px_0_rgba(143,145,255,0.4)]"
              : "border border-none",
            isLoading && "pointer-events-none opacity-50"
          )}
        >
          {!isUnlocked(index) && (
            <div className='absolute bottom-2 right-2 z-[10]'>
              <div className=' flex items-center justify-center backdrop-blur-[32px] rounded-full h-6 w-6 bg-white/[8%] '>
                <Lock className='h-3 w-2.5 fill-white' />
              </div>
            </div>
          )}
          <img
            src={`https://dzjg7lvewk7ln.cloudfront.net/rank-images/${_.rank}.webp`}
            alt=''
            className={cn(
              "w-full h-full object-cover rounded-[10px] cursor-pointer",
              !isUnlocked(index) && "opacity-40 pointer-events-none"
            )}
          />
        </div>
      ))}
    </div>
  );
}

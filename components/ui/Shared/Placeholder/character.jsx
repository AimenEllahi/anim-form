import React from "react";
import CustomButton from "@/components/ui/custom-button";
import AddUser from "@/components/ui/Icons/AddUser";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Play from "@/components/ui/Icons/Play";
import useGameStore from "@/utils/gameStore";
export default function Character({ className, isCompanion, character }) {
  const router = useRouter();
  const { setStartNewGame, setCurrentCharacter } = useGameStore();
  return (
    <div
      className={cn(
        "fixed z-10 h-screen w-full mx-auto max-w-[1536px]  flex-col text-center flex items-center justify-center gap-6 md:gap-8 text-white ",
        className
      )}
    >
      {isCompanion ? (
        <span className='headline-3 w-[90%] md:w-3/5'>
          You have no companions yet! Start your adventure
          <span className='text-irisPurpleLight'>
            {" "}
            to find powerful allies!
          </span>
        </span>
      ) : (
        <span className='headline-3 w-4/5 md:w-full'>
          Begin your journey by <br />
          creating
          <span className='text-irisPurpleLight'> your first hero!</span>
        </span>
      )}
      {isCompanion ? (
        <CustomButton
          onClick={() => {
            setCurrentCharacter(character);
            setStartNewGame(true);
          }}
          withIcon={true}
        >
          <Play className='h-5 w-5 fill-white opacity-70' />
          Start Now
        </CustomButton>
      ) : (
        <CustomButton
          onClick={() => router.push("/character/create")}
          withIcon={true}
        >
          <AddUser className='h-5 w-5 fill-white opacity-70' />
          Create Adventurer
        </CustomButton>
      )}
    </div>
  );
}

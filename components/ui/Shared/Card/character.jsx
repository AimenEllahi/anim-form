"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Play from "@/components/ui/Icons/Play";
import CustomButton from "@/components/ui/custom-button";
import MoreOptions from "@/components/ui/Icons/MoreOptions";
import CustomMenuItem from "@/components/ui/custom-menu-item";
import Download from "@/components/ui/Icons/Download";
import { useRouter } from "next/navigation";
import Eye from "@/components/ui/Icons/Eye";
import { extractSection, isSelectionValid } from "@/lib/Helpers/shared";
import useGameStore from "@/utils/gameStore";
import useUserStore from "@/utils/userStore";
import { getCharacter } from "@/actions/character";
import useCustomToast from "@/hooks/useCustomToast";
export default function card({
  character,
  carousel,
  className,
  hideShowDetails,
  isGamePage = false,
  hideMenu = false,
  loadGameOnClick = false,
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    setCurrentCharacter,

    setStartNewGame,
  } = useGameStore();
  const { user } = useUserStore();
  const { invokeToast } = useCustomToast();

  // Play with character
  const handlePlay = async () => {
    try {
      setIsLoading(true);
      const characterId = character._id;
      //  console.log(characterId);
      const { character: _character } = await getCharacter(
        characterId,
        user?.token
      );

      setCurrentCharacter(_character);
      setStartNewGame(true);
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error playing with character",
        "Error"
      );
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRedirect = (event, path) => {
    const classNames =
      event?.target?.className?.baseVal || event?.target?.className;

    if (!classNames?.includes("prevent-redirect")) {
      router.push(path);
    }
  };

  const handleShowDetails = (event) => {
    event?.stopPropagation();
    window.open(`/character/sheet/${character._id}`, "_blank");
  };

  return (
    <div
      onClick={(event) => {
        if (loadGameOnClick) {
          handlePlay();
          return;
        }
        if (isGamePage) {
          handleShowDetails();
          return;
        }
        handleRedirect(event, `/character/sheet/${character._id}`);
      }}
      className={cn(
        "rounded-[16px] h-auto group hover:!shadow-custom-2 bg-white/[8%] group-hover:bg-white/10 my-0 cursor-pointer overflow-hidden col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 w-full border-white/[8%] border hover:border-white/20 running-text-mono ease-animate z-[10]",
        className
      )}
    >
      <div className='w-full h-full overflow-hidden border-none transition-all'>
        <div className='relative'>
          <img
            src={
              character?.personal?.portraitUrl ||
              "/images/CreateCharacter/CharacterName/CharacterName.png"
            }
            alt='user generated character portrait'
            className=' w-full object-contain'
          />
          <div
            className={cn(
              "absolute text-xs text-white top-0 right-0 p-4 justify-between items-end flex opacity-100 pointer-events-auto md:opacity-0 md:pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto ease-animate",
              hideMenu && "hidden"
            )}
          >
            <DropdownMenu>
              <DropdownMenuTrigger className='bg-blur prevent-redirect !h-9 !w-9 cursor-pointer !border ease-animate border-white/10 hover:border-white/20 hover:bg-white/10 active:bg-white/20 active:border-white/40 disabled:opacity-30% disabled:pointer-events-none hover:!duration-200 !rounded-full active:!duration-100 !flex !items-center !justify-center'>
                <MoreOptions
                  className='w-5 h-5 prevent-redirect'
                  fill='white'
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-transparent uppercase flex flex-col mt-4 p-2 !px-[9px] border border-white/10 z-[10] bg-blur menu-shadow text-white running-text-mono rounded-[16px] !gap-y-2'>
                <DropdownMenuItem className='flex !p-0 prevent-redirect !my-0 w-full focus:bg-transparent focus:text-white transition-all duration-300 ease-linear cursor-pointer'>
                  <CustomMenuItem>
                    <Download className='h-5 w-5' fill='white' />
                    <span>Download Character Sheet</span>
                  </CustomMenuItem>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={cn(
                    "flex !p-0 prevent-redirect !my-0 w-full focus:bg-transparent focus:text-white transition-all duration-300 ease-linear cursor-pointer"
                  )}
                >
                  <CustomMenuItem onClick={handlePlay}>
                    <Play className='h-5 w-5' fill='white' />
                    <span>Play With Character</span>
                  </CustomMenuItem>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className='flex flex-col p-5 pb-6 !gap-4'>
          <div className='flex justify-between items-center'>
            <span className='headline-4 text-white'>
              {character?.value.name}
            </span>
            <img
              src={`https://dzjg7lvewk7ln.cloudfront.net/class/${character?.personal?.class
                .toLowerCase()
                .replaceAll(" ", "-")}.webp`}
              className='rounded-full h-[32px] w-[32px]'
            />
          </div>
          <div className='flex flex-col running-text-mono'>
            <span className='text-white'>
              LEVEL {character.value.level || 0}
            </span>
            <span className='uppercase text-irisPurpleLight'>
              {character?.personal.race}
              <span className='uppercase text-sandyOrange'>
                {" "}
                {character?.personal.class}
              </span>
            </span>
          </div>
          <div
            className={cn(
              "flex justify-between items-center gap-5 text-white",
              (carousel || hideShowDetails) && "hidden"
            )}
          >
            <CustomButton withIcon onClick={handleShowDetails}>
              <Eye className='w-4 h-4' fill='white' />
              <span>SHOW DETAILS</span>
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

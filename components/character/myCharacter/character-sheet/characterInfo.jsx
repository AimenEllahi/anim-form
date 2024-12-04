import React, { useEffect, useState } from "react";
import useUserStore from "@/utils/userStore";
import { cn } from "@/lib/utils";
import Loader from "@/components/ui/Loader";
import CustomButton from "@/components/ui/custom-button";
import Edit from "@/components/ui/Icons/Edit";
import { useRouter, usePathname } from "next/navigation";
import Information from "@/components/ui/Icons/Information";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function characterInfo({
  character,
  currentPortrait,
  loadingAvatar,
  isCreator,
  setOpen,
}) {
  const { user } = useUserStore();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className=' w-full lg:w-[345px] h-auto p-4 border border-white/10 bg-white/10 rounded-[16px] overflow-hidden flex flex-col justify-start'>
      <div className=''>
        <div className='h-auto w-full relative flex flex-col gap-4'>
          <div className='flex justify-between'>
            <span className='running-text-large'>Character portrait</span>
            <Popover>
              <PopoverTrigger>
                <Information className={cn("h-6 w-6   ")} />
              </PopoverTrigger>
              <PopoverContent>
                <p style={{ marginBottom: "10px" }}>
                  As you play games your Adventurer evolves!
                  <p style={{ marginBottom: "10px" }}></p>
                  Every 5-7 turns, your Adventurer will automatically update,
                  allowing you to create a new Character Portrait !
                </p>
                <p style={{ marginBottom: "10px" }}>
                  Your trusty companions, awesome abilities, and packed
                  inventory also change up as you keep playing.
                </p>
              </PopoverContent>
            </Popover>
          </div>
          <div className='relative'>
            {loadingAvatar && (
              <Loader
                text='Weaving illusions...'
                className='absolute top-0 left-0 rounded-[10px] w-full h-full bg-blur flex items-center justify-center'
              />
            )}
            <img
              src={
                currentPortrait ||
                "/images/CreateCharacter/CharacterName/CharacterName.png"
              }
              alt='custom character portrait'
              title='Custom Character Portrait'
              className=' w-full object-contain aspect-square rounded-[10px] '
            />
          </div>
          <CustomButton
            disabled={loadingAvatar}
            onClick={() => {
              setOpen(true);
              if (character?.personal?.portraits?.length > 0) {
                router.push(pathname);
              } else {
                router.push(pathname + "?generateAvatar=true");
              }
            }}
            variant={"primary"}
            withIcon
            className={cn(!isCreator && "hidden")}
          >
            <Edit className={cn("h-5 w-5 fill-russianViolet")} />
            change character potrait
          </CustomButton>
          {/* <div
            className={cn(
              "absolute bottom-0 left-0 w-full bg-sandyOrange gap-2 py-4 pe-6 ps-5 flex items-center justify-center text-black",
              user?.token && "opacity-0 pointer-events-none"
            )}
          >
            <Info className="w-4 h-4" fill="#000" />{" "}
            <span className="description text-russianViolet uppercase">
              Sign up to change character portrait
            </span>
          </div> */}
        </div>
        {/* <div className="flex flex-col p-5 pt-6 gap-4">
          <div className=" flex justify-between items-center">
            <span className=" headline-4 text-white ">
              {character?.personal?.name}
            </span>
            <img
              src={`https://dzjg7lvewk7ln.cloudfront.net/class/${character?.personal?.class
                .toLowerCase()
                .replaceAll(" ", "-")}.webp`}
              className="rounded-full h-[32px] w-[32px]"
              title="Characters Class"
              alt="class of the Character"
            />
          </div>
          <div className="flex flex-col running-text-mono">
            <span className="text-white ">LEVEL {character.value.level}</span>
            <span className=" text-irisPurpleLight uppercase">
              {character?.personal?.race}{" "}
              <span className=" text-sandyOrange uppercase">
                {character?.personal?.class}
              </span>
            </span>
          </div>
        </div> */}
      </div>
      {/* <ProfileButtons character={character} /> */}
    </div>
  );
}

import React from "react";
import Card from "@/components/ui/Shared/Card/character";
import CustomButton from "@/components/ui/custom-button";
import useGameStore from "@/utils/gameStore";
import { useRouter } from "next/navigation";
import GeneralGameTabbar from "@/components/ui/Shared/TabBar/generalGame";
import { cn } from "@/lib/utils";
import useDeviceDetect from "@/hooks/useDeviceDetect";

export default function index({ characters }) {
  const { isMobile } = useDeviceDetect();
  const router = useRouter();

  const handleRedirection = () => {
    router.push("/character/create");
  };

  //console.log(currentCampaign);

  return (
    <div className='border-white gap-8 w-full flex flex-col pt-[86px] md:pt-[9rem] z-[10] text-white relative px-6 lg:px-12 pb-28 md:pb-64'>
      <div className='flex justify-center items-center relative'>
        <h1 className='headline-3 text-center w-3/4 md:w-1/2'>
          Begin your journey by selecting{" "}
          <span className='text-irisPurpleLight'>your hero!</span>
        </h1>

        <CustomButton
          onClick={handleRedirection}
          className={"hidden md:flex absolute top-1/2 -translate-y-1/2 right-0"}
        >
          <img src='/Icons/CreateCharacter.svg' alt='Create character button' />
          Create character
        </CustomButton>
      </div>
      <div
        className={cn(
          " w-full flex items-center  justify-center place-items-center grid-cols-12   gap-[20px]",
          (characters.length > 3 || isMobile) && "grid"
        )}
      >
        {characters.slice(0, 2).map((character, index) => (
          <Card
            loadGameOnClick={true}
            key={index}
            character={character}
            className={cn(characters.length <= 3 && "md:w-1/3 lg:w-1/4")}
          />
        ))}
      </div>
      <GeneralGameTabbar />
    </div>
  );
}

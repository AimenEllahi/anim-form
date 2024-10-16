"use client";
import React, { useState } from "react";
import { DialogContent } from "@/components/ui/dialog";
import StepRenderer from "./StepRenderer"; // Import the new stepper component
import Cancel from "@/components/ui/Icons/Cancel";
import CustomButton from "@/components/ui/custom-button";
import ArrowLeft from "@/components/ui/Icons/ArrowLeft";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Tick from "@/components/ui/Icons/Tick";
import Stepper from "./Stepper";
import useGameStore from "@/utils/gameStore";
import { useRouter } from "next/navigation";
import MobileStepper from "./MobileStepper";
import useDeviceDetect from "@/hooks/useDeviceDetect";
import { twMerge } from "tailwind-merge";

export default function StepDialog({
  setOpen,
  characters,
  setQuery,
  query,
  sort,
  campaigns,
  setSort,
  premadeCharacters,
}) {
  const { isMobile } = useDeviceDetect();
  const { step, setStep, currentCharacter, currentCampaign, setStartNewGame } =
    useGameStore();
  const router = useRouter();

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const startGame = () => {
    setStartNewGame(false);
    router.push("/game/play");
  };

  return (
    <DialogContent className='md:!bg-white/[8%] flex flex-col overflow-hidden !gap-0 text-white !p-0  !pt-[136px] md:!pt-0 !border-0 md:!border border-white/[8%] !rounded-[16px] h-full    !bg-transparent  min-w-full md:min-w-[824px] md:h-[696px]'>
      {isMobile && (
        <img
          src='/images/bg.png'
          alt='Background'
          priority='true'
          title='Background Gradient'
          className='fixed w-screen h-screen top-0 left-0 z-1 object-cover'
        />
      )}

      {/* Desktop */}
      <div className='p-6 pb-5 pt-4 hidden md:flex flex-col gap-4 '>
        <h2 className='running-text-large'>Start new game</h2>
        <Stepper step={step} setStep={setStep} />
      </div>

      {/* Mobile */}
      <MobileStepper step={step} setStep={setStep} />

      <div className='z-10 pb-0 h-full overflow-scroll md:overflow-hidden md:h-full md:border-y border-white/10'>
        {/* Pass the current step and navigation functions to the Stepper */}
        <StepRenderer
          step={step}
          characters={characters}
          setQuery={setQuery}
          campaigns={campaigns}
          query={query}
          sort={sort}
          setSort={setSort}
          premadeCharacters={premadeCharacters}
        />
      </div>

      <div
        className={twMerge(
          "p-5 h-fit md:p-6 pb-5 flex justify-end md:justify-between ",
          isMobile && "bg-blur-bottom-menu"
        )}
      >
        {/* Desktop */}
        <CustomButton
          withIcon
          className={twMerge("me-auto hidden md:flex")}
          onClick={() => setOpen(false)}
        >
          <Cancel className='h-4 w-4 fill-white' />
          cancel
        </CustomButton>
        {/* Mobile */}
        {step === 1 && (
          <CustomButton
            withIcon
            className={twMerge("me-auto  md:hidden")}
            onClick={() => setOpen(false)}
          >
            <ArrowLeft className='h-5 w-5 fill-white' />
            Back
          </CustomButton>
        )}

        {/* Navigation Buttons */}
        <div className='stepper-navigation flex gap-6'>
          {step > 1 && (
            <CustomButton withIcon variant={"subtle"} onClick={prevStep}>
              <ArrowLeft className='h-5 w-5 fill-white' />
              Back
            </CustomButton>
          )}
          {step < 3 && (
            <CustomButton
              onClick={nextStep}
              withIcon
              disabled={
                (step === 1 && !currentCampaign) ||
                (step === 2 && !currentCharacter)
              }
              className={"me-auto"}
              variant={"primary"}
            >
              Next Step
              <ArrowRight className='h-5 w-5 fill-russianViolet' />
            </CustomButton>
          )}
          {step === 3 && (
            <CustomButton onClick={startGame} withIcon variant={"success"}>
              Finish and Start Game
              <Tick className='h-4 w-4 fill-russianViolet' />
            </CustomButton>
          )}
        </div>
      </div>
    </DialogContent>
  );
}

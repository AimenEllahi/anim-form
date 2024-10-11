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

export default function StepDialog({
  setOpen,
  characters,
  setQuery,
  query,
  sort,
  campaigns,
  setSort,
}) {
  const [step, setStep] = useState(1);
  const { currentCharacter, currentCampaign } = useGameStore();

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

  return (
    <DialogContent className='!bg-white/[8%] flex flex-col overflow-hidden !gap-0 text-white !p-0  md:!pt-0 border-white/[8%] !rounded-[16px] h-full md:h-auto  md:bg-white/10 min-w-[824px]'>
      <div className='p-6 pb-5 pt-4 flex flex-col gap-4'>
        <h2 className='running-text-large'>Start new game</h2>

        <Stepper step={step} setStep={setStep} />
      </div>

      <div className=' pb-0 h-full border-y border-white/10'>
        {/* Pass the current step and navigation functions to the Stepper */}
        <StepRenderer
          step={step}
          characters={characters}
          setQuery={setQuery}
          campaigns={campaigns}
          query={query}
          sort={sort}
          setSort={setSort}
        />
      </div>

      <div className='p-6 pb-5 flex justify-between'>
        <CustomButton
          withIcon
          className={"me-auto"}
          onClick={() => setOpen(false)}
        >
          <Cancel className='h-4 w-4 fill-white' />
          cancel
        </CustomButton>
        {/* Navigation Buttons */}
        <div className='stepper-navigation flex gap-4'>
          {step > 1 && (
            <CustomButton
              withIcon
              className={"me-auto bg-transparent border-none"}
              onClick={prevStep}
            >
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
            <CustomButton
              withIcon
              className={"me-auto bg-[#05D381] hover:bg-[#05D381]"}
              variant={"primary"}
            >
              Finish and Start Game
              <Tick className='h-4 w-4 fill-russianViolet' />
            </CustomButton>
          )}
        </div>
      </div>
    </DialogContent>
  );
}

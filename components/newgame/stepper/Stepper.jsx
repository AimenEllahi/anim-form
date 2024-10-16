import CustomIconButton from "@/components/ui/custom-iconbutton";
import { cn } from "@/lib/utils";
import useGameStore from "@/utils/gameStore";
import React from "react";

const steps = ["Select campaign", "Select character", "summary"];

export default function Stepper({ step, setStep }) {
  const { currentCharacter, currentCampaign } = useGameStore();

  const handleStepChange = (index) => {
    if ((step === 1 && !currentCampaign) || (step === 2 && !currentCharacter)) {
      return;
    }
    setStep(index + 1);
  };
  return (
    <div className='flex w-full  z-[10]  items-center gap-6'>
      {steps.map((_step, index) => {
        return (
          <>
            <div
              onClick={() => handleStepChange(index)}
              key={index}
              className='flex h-full items-center gap-2'
            >
              <CustomIconButton
                className={cn(
                  " h-8 w-8 opacity-70 text-gray2 pointer-events-auto",
                  step - 1 === index &&
                    "opacity-100 bg-white text-russianViolet hover:bg-white active:bg-white",
                  step > index ? "!border-gray1 !border-[1px] " : "border-none"
                )}
              >
                {step > index + 1 ? (
                  <img
                    src='/Icons/Check.svg'
                    title='Check icon'
                    alt='Check icon'
                    className='w-2.5  '
                  />
                ) : (
                  index + 1
                )}
              </CustomIconButton>
              <span className='running-text-mono uppercase text-white'>
                {_step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <hr className='border-white/15 w-[53px]' />
            )}
          </>
        );
      })}
    </div>
  );
}

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
                variant={index + 1 === step ? "primary" : "outlined"}
                className={cn()}
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

import React from "react";
import CustomIconbutton from "@/components/ui/custom-iconbutton";
import useStepperStore from "@/utils/characterStore";
import { cn } from "@/lib/utils";
import { STEP_NAMES } from "./constants";
export default function Stepper() {
  const { activeStep, setActiveStep } = useStepperStore();
  // Define step names

  return (
    <ol className='hidden md:block relative h-full text-gray-500  border-gradient-to-b from-purple-400 via-pink-500 to-red-500 '>
      {STEP_NAMES.slice(0, 8).map((stepName, index) => (
        <li key={index} className='mb-8  flex items-center gap-x-2.5  relative'>
          <hr
            className={cn(
              "rotate-90 w-16 absolute top-full -left-[25%] border-[1px] border-white/[16%] translate-x-[25%] !-z-[0]",
              index === 7 && "hidden",
              activeStep > index && "border-gray1"
            )}
          />
          {/* Use IconButton to set active step */}
          <div className=' bg-russianViolet rounded-full  h-full w-auto z-10'>
            <CustomIconbutton
              className={cn(
                " h-8 w-8 opacity-70 text-gray2 pointer-events-none",
                activeStep === index &&
                  "opacity-100 bg-white text-russianViolet hover:bg-white active:bg-white",
                activeStep > index
                  ? "!border-gray1 !border-[1px] "
                  : "border-none"
              )}
            >
              {activeStep > index ? (
                <img src='/Icons/Check.svg' className='w-2.5  ' />
              ) : (
                index + 1
              )}
            </CustomIconbutton>
          </div>
          <h3 className='running-text-mono bg-transparent capitalize'>
            {stepName}
          </h3>
        </li>
      ))}
    </ol>
  );
}

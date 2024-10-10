"use client";
import React, { useState } from "react";
import { DialogContent } from "@/components/ui/dialog";
import Stepper from "./Stepper"; // Import the new stepper component
import Cancel from "@/components/ui/Icons/Cancel";
import CustomButton from "@/components/ui/custom-button";
import ArrowLeft from "@/components/ui/Icons/ArrowLeft";
import ArrowRight from "@/components/ui/Icons/ArrowRight";
import Tick from "@/components/ui/Icons/Tick";

export default function StepDialog({ setOpen }) {
  const [step, setStep] = useState(1);

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
    <DialogContent className="bg-white/[8%] flex flex-col overflow-hidden !gap-0 text-white !p-0 !pt-[52px] md:!pt-0 border-0 !rounded-[16px] h-full md:h-auto bg-gradient md:bg-white/10">
      <div className="p-6 pb-5">
        <h2 className="text-white text-lg font-bold">Start new game</h2>

        {/* Render the Stepper Header */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                step >= 1
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-500 text-gray-500"
              }`}
            >
              1
            </div>
            <span
              className={`${step >= 1 ? "text-blue-500" : "text-gray-500"}`}
            >
              Select Campaign
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-500 mx-2"></div> {/* Line */}
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                step >= 2
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-500 text-gray-500"
              }`}
            >
              2
            </div>
            <span
              className={`${step >= 2 ? "text-blue-500" : "text-gray-500"}`}
            >
              Select Character
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-500 mx-2"></div> {/* Line */}
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                step === 3
                  ? "border-blue-500 bg-blue-500 text-white"
                  : "border-gray-500 text-gray-500"
              }`}
            >
              3
            </div>
            <span
              className={`${step === 3 ? "text-blue-500" : "text-gray-500"}`}
            >
              Summary
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 pb-0 h-full border-y border-white/10">
        {/* Pass the current step and navigation functions to the Stepper */}
        <Stepper step={step} />
      </div>

      <div className="p-6 pb-5 flex justify-between">
        <CustomButton
          withIcon
          className={"me-auto"}
          onClick={() => setOpen(false)}
        >
          <Cancel className="h-4 w-4 fill-white" />
          cancel
        </CustomButton>
        {/* Navigation Buttons */}
        <div className="stepper-navigation flex gap-4">
          {step > 1 && (
            <CustomButton
              withIcon
              className={"me-auto bg-transparent border-none"}
              onClick={prevStep}
            >
              <ArrowLeft className="h-5 w-5 fill-white" />
              Back
            </CustomButton>
          )}
          {step < 3 && (
            <CustomButton
              onClick={nextStep}
              withIcon
              className={"me-auto"}
              variant={"primary"}
            >
              Next Step
              <ArrowRight className="h-5 w-5 fill-russianViolet" />
            </CustomButton>
          )}
          {step === 3 && (
            <CustomButton
              withIcon
              className={"me-auto bg-[#05D381] hover:bg-[#05D381]"}
              variant={"primary"}
            >
              Finish and Start Game
              <Tick className="h-4 w-4 fill-russianViolet" />
            </CustomButton>
          )}
        </div>
      </div>
    </DialogContent>
  );
}

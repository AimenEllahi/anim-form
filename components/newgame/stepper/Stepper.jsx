import React from "react";
import Step1 from "./Step1/step1";
import Step2 from "./Step2/step2";
import Step3 from "./Step3/step3";

export default function Stepper({ step, nextStep, prevStep }) {
  return (
    <div className="stepper-container">
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
    </div>
  );
}

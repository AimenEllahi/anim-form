import React from "react";
import Step1 from "./Step1/step1";
import Step2 from "./Step2/step2";
import Step3 from "./Step3/step3";

export default function StepRenderer({
  step,
  characters,
  setQuery,
  query,
  sort,
  setSort,
  campaigns,
  premadeCharacters,
}) {
  return (
    <div className='stepper-container'>
      {step === 1 && (
        <Step1
          setQuery={setQuery}
          campaigns={campaigns}
          query={query}
          sort={sort}
          setSort={setSort}
        />
      )}
      {step === 2 && (
        <Step2 characters={characters} premadeCharacters={premadeCharacters} />
      )}
      {step === 3 && <Step3 />}
    </div>
  );
}

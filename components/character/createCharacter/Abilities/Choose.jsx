import React, { useState, useEffect } from "react";
import CustomDropdown from "@/components/ui/custom-dropdown";
import RollForStats from "./RollForStats";
import PointsBuy from "./PointsBuy";
import StandardArray from "./StandardArray";
import Help from "@/components/ui/Icons/Help";
import AbilitiesTypeModal from "../shared/AbilitiesTypeModal";

const _ABILITIES = [
  {
    name: "Strength",
    description:
      "Strength measures physical power and the ability to exert force.",
  },
  {
    name: "Dexterity",
    description: "Dexterity gauges agility, reflexes, and coordination.",
  },
  {
    name: "Constitution",
    description: "Constitution represents health, stamina, and vital force.",
  },
  {
    name: "Intelligence",
    description:
      "Intelligence assesses mental acuity, learning ability, and memory.",
  },
  {
    name: "Wisdom",
    description: "Wisdom evaluates perceptiveness, intuition, and insight.",
  },
  {
    name: "Charisma",
    description:
      "Charisma quantifies charm, social influence, and leadership capability.",
  },
];

const ABILITIES = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
];
const abilitiesType = ["Standard Array", "Point Buy", "Roll for Stats"];

export default function Choose({
  abilities,
  handleChangeAbilities,
  setAbilitiesTypeStep,
  abilitiesTypeStep,
  abilitiesDesc,
  setShowModal,
}) {
  const [showRollAll, setShowRollAll] = useState(true);

  return (
    <>
      <div className=' relative md:rounded-[16px] flex flex-col gap-8 md:gap-6 w-full md:w-fit max-h-full h-fit md:p-5 md:pt-3.5 md:border border-white/10 md:bg-white/[8%]  '>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <h1 className='running-text-large  hidden md:block'>Abilities</h1>
          </div>

          <div className='flex gap-4 items-center md:hidden'>
            <AbilitiesTypeModal
              abilitiesTypeStep={abilitiesTypeStep}
              abilitiesDesc={abilitiesDesc}
            >
              <Help className='size-6' />
            </AbilitiesTypeModal>
            <span className='running-text-large'>
              {abilitiesType[abilitiesTypeStep]}
            </span>
          </div>
          <CustomDropdown
            options={abilitiesType}
            setSelectedOption={(option) => {
              setAbilitiesTypeStep(abilitiesType.indexOf(option));
            }}
            placeholder={"Choose Your Stat-Building Method"}
            selectedOption={abilitiesType[abilitiesTypeStep]}
            className={" w-full md:w-3/4"}
          />
        </div>

        {abilitiesTypeStep === 0 && (
          <StandardArray
            abilities={abilities}
            ABILITIES={_ABILITIES}
            handleChangeAbilities={handleChangeAbilities}
          />
        )}
        {abilitiesTypeStep === 1 && (
          <PointsBuy
            abilities={abilities}
            ABILITIES={_ABILITIES}
            handleChangeAbilities={handleChangeAbilities}
          />
        )}

        {abilitiesTypeStep === 2 && (
          <RollForStats
            ABILITIES={ABILITIES}
            abilities={abilities}
            handleChangeAbilities={handleChangeAbilities}
            _ABILITIES={_ABILITIES}
            setShowRollAll={setShowRollAll}
            showRollAll={showRollAll}
          />
        )}
      </div>
    </>
  );
}

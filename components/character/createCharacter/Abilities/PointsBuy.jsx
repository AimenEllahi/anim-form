import CustomButton from "@/components/ui/custom-button";
import CustomDropdown from "@/components/ui/custom-dropdown";
import CustomIconButton from "@/components/ui/custom-iconbutton";
import React, { useState } from "react";

const INITIAL_ABILITIES = {
  strength: 8,
  dexterity: 8,
  constitution: 8,
  intelligence: 8,
  wisdom: 8,
  charisma: 8,
};

const INITIAL_POINTS = 27;
export default function PointsBuy({
  ABILITIES,
  handleChangeAbilities,
  abilities,
}) {
  const [pointsToSpend, setPointsToSpend] = useState(27);
  const handleChangeAbilityScore = (ability, value, type) => {
    if (
      value < 8 ||
      value > 15 ||
      (pointsToSpend <= 0 && type === "increasing")
    )
      return;

    //On top of that, you have 27 points to spend however you like to increase these scores. The cost to increase a score by 1 point is 1 point itself, except when the score reaches 14; from there, it costs 2 points to increase it further to a maximum of 15
    if (type === "increasing") {
      if (value > 14) {
        setPointsToSpend((prev) => prev - 2);
      } else {
        setPointsToSpend((prev) => prev - 1);
      }
    } else {
      if (value >= 14) {
        setPointsToSpend((prev) => prev + 2);
      } else {
        setPointsToSpend((prev) => prev + 1);
      }
    }
    handleChangeAbilities({ ...abilities, [ability]: value });
  };

  const resetAbilities = () => {
    handleChangeAbilities(INITIAL_ABILITIES);
    setPointsToSpend(INITIAL_POINTS);
  };

  return (
    <div className='grid w-full  gap-5 grid-cols-2 lg:grid-cols-3 hide-scrollbar overflow-y-scroll'>
      {ABILITIES.map((ability, index) => {
        const abilityName = ability.name.toLowerCase();
        const score = abilities[abilityName];

        return (
          <div
            key={index}
            className='flex flex-col md:bg-white/[2%] md:border border-white/5 md:p-4 gap-4 rounded-[16px] items-center justify-between col-span-1'
          >
            <div className='flex gap-3 w-full items-center'>
              <img
                src={`https://dzjg7lvewk7ln.cloudfront.net/abilities/${ability?.name?.toLowerCase()}.webp`}
                className={`w-12 h-12 ease-animate object-cover rounded-[10px] `}
                title='Icon'
                alt='icon'
              />
              <span className='running-text '>{ability.name}</span>
            </div>
            <div className='flex items-center gap-3 w-full'>
              <CustomIconButton
                onClick={() =>
                  handleChangeAbilityScore(
                    abilityName,
                    score - 1,
                    "descreasing"
                  )
                }
                disabled={score === 8}
                variant={"primary"}
                className={"h-6 w-6"}
              >
                <img src='/Icons/Minus.svg' alt='logo' className='h-2 w-2' />
              </CustomIconButton>
              <span className='running-text-mono'>{score}</span>
              <CustomIconButton
                onClick={() =>
                  handleChangeAbilityScore(abilityName, score + 1, "increasing")
                }
                disabled={
                  score === 15 ||
                  pointsToSpend <= 0 ||
                  (score === 14 && pointsToSpend <= 1)
                }
                variant={"primary"}
                className={"h-6 w-6 disabled:!opacity-50"}
              >
                <img src='/Icons/Add.svg' alt='logo' className='h-2 w-2' />
              </CustomIconButton>
            </div>
          </div>
        );
      })}

      <div className='w-full flex items-center justify-between  col-span-2 lg:col-span-3'>
        <CustomButton
          className='w-fit'
          onClick={resetAbilities}
          withIcon={true}
        >
          <img
            src='/Icons/Reset.svg'
            alt='logo'
            title='reset icon'
            className='h-5 w-5 invert opacity-70'
          />
          Reset stats
        </CustomButton>
        <span className='running-text-mono text-gray2 uppercase'>
          Remaining Points: {pointsToSpend}
        </span>
      </div>
    </div>
  );
}

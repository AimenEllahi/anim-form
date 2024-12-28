import CustomButton from "@/components/ui/custom-button";
import CustomDropdown from "@/components/ui/custom-dropdown";
import React, { useState } from "react";

const INITIAL_ABILITIES = {
  strength: 8,
  dexterity: 8,
  constitution: 8,
  intelligence: 8,
  wisdom: 8,
  charisma: 8,
};
export default function StandardArray({
  ABILITIES,
  handleChangeAbilities,
  abilities,
}) {
  const [selectedStats, setSelectedStats] = useState({});

  const handleSelectStat = (ability, value) => {
    handleChangeAbilities({ ...abilities, [ability]: parseInt(value) });
  };

  const resetAbilities = () => {
    handleChangeAbilities(INITIAL_ABILITIES);
    setSelectedStats({});
  };
  return (
    <div className='grid gap-x-4 gap-y-8 md:gap-x-5 md:gap-y-5 grid-cols-2 lg:grid-cols-3 hide-scrollbar overflow-y-scroll'>
      {ABILITIES.map((ability, index) => {
        return (
          <div
            key={index}
            className='flex flex-col md:bg-white/[2%] md:border border-white/5 md:p-4 gap-4 rounded-[16px] items-center justify-between col-span-1'
          >
            <div className='flex gap-3 w-full items-center'>
              <img
                src={`https://dzjg7lvewk7ln.cloudfront.net/abilities/${ability.name.toLowerCase()}.webp`}
                className={`w-12 h-12 ease-animate object-cover rounded-[10px] `}
                title='Icon'
                alt='icon'
              />
              <span className='running-text '>{ability.name}</span>
            </div>
            <CustomDropdown
              selectedOption={
                selectedStats[ability.name.toLowerCase()] || "Select Points"
              }
              setSelectedOption={(value) => {
                setSelectedStats({
                  ...selectedStats,
                  [ability.name.toLowerCase()]: value,
                });
                handleSelectStat(ability.name.toLowerCase(), value);
              }}
              options={["8", "10", "12", "13", "14", "15"].filter((value) => {
                return !Object.values(selectedStats).includes(value);
              })}
              className={""}
              placeholder={"Select Points"}
            />
          </div>
        );
      })}

      <CustomButton
        //disabled={isRollingAbilities}
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
    </div>
  );
}

import CustomButton from "@/components/ui/custom-button";
import CustomDropdown from "@/components/ui/custom-dropdown";
import React from "react";

export default function StandardArray({ ABILITIES }) {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 hide-scrollbar overflow-y-scroll'>
      {ABILITIES.map((ability, index) => {
        return (
          <div
            key={index}
            className='flex flex-col bg-white/[2%] border border-white/5 p-4 gap-4 rounded-[16px] items-center justify-between col-span-1'
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
              selectedOption={ability.value}
              setSelectedOption={(value) => console.log(value)}
              options={["8", "10", "12", "13", "14", "15"]}
              className={""}
              placeholder={"Select Stat"}
            />
          </div>
        );
      })}

      <CustomButton
        //disabled={isRollingAbilities}
        className='w-fit'
        //onClick={resetAbilities}
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

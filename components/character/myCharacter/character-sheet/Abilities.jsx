import React from "react";
import RenderCharacteristics from "./RenderCharacteristics";
import { cn } from "@/lib/utils";
export default function Abilities({ character }) {
  return (
    <div className='relative z-10 grid grid-cols-12 gap-5'>
      <div className='flex flex-col gap-4  col-span-3 bg-white/10 border border-white/10 rounded-[16px] p-5 pt-4'>
        <span className='running-text-large'>Abilitiy Scores</span>
        <div className='flex flex-col justify-start gap-5 w-full'>
          {Object.entries(character?.value?.ability_scores || {}).map(
            ([key, value]) => {
              return (
                <div
                  className='flex items-center gap-8 justify-between w-4/4'
                  key={key}
                >
                  <div
                    key={key}
                    className={`flex cursor-pointer running-text-mono uppercase justify-start items-center gap-3  `}
                  >
                    <img
                      src={`https://dzjg7lvewk7ln.cloudfront.net/abilities/${key}.webp`}
                      className={`w-12 h-12 ease-animate object-cover rounded-[10px] `}
                      title='Icon'
                      alt='icon'
                    />
                    <span>{key}</span>
                  </div>
                  <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'>
                      <span className='running-text-mono'>{value}</span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className='col-span-2'>
        <RenderCharacteristics
          title='Defence'
          data={[
            {
              key: "Hit Point",
              value: character.value.hp,
            },
            {
              key: "Armor Class",
              value: character.value.armor_class || character.value.ac,
            },
          ]}
          className={"col-span-4 md:col-span-1"}
          containerClassName='flex-row md:flex-col'
        />
      </div>
      <div className=' h-fit col-span-4  py-4 px-5 flex flex-col gap-3 justify-start bg-white/10 rounded-[16px] border border-white/10'>
        <span className='running-text-large'>Abilities</span>
        <span className='running-text text-gray2'>
          {character.value.abilities}
        </span>
      </div>
      <div className='col-span-2'>
        <div
          className={cn(
            " h-auto p-4 px-5  flex flex-col gap-3 justify-start bg-white/10 rounded-[16px] border border-white/10",
            character.value.spells?.length === 0 && "hidden"
          )}
        >
          <span className='running-text-large'>Spells</span>
          <ul className='flex running-text text-gray2 flex-col  '>
            {character.value.spells?.map((spell, index) => (
              <li key={index}>{spell}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

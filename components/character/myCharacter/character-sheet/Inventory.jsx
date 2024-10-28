import React from "react";
import { cn } from "@/lib/utils";

const RenderEquipmentData = ({ value, className, length, index }) => {
  if (value === "") return null;

  return (
    <span
      className={cn(
        "running-text  border-b border-white/10 py-5",
        length % 3 === 0
          ? (index === length - 1 || index === length - 2) && "!pb-0 border-0"
          : index === length && "!pb-0 border-0",
        className
      )}
    >
      {value}
    </span>
  );
};

export default function Inventory({ character }) {
  return (
    <div className='  h-auto  relative  px-5 pt-4 pb-5  bg-white/10 border border-white/10 rounded-[16px] '>
      <div className=' flex flex-col '>
        <div className='flex w-full flex-col  items-start justify-between '>
          <span className='running-text-large'>Inventory</span>
          <div className='w-full grid-cols-1 md:grid-cols-3 grid gap-x-5 '>
            <RenderEquipmentData
              value={character.value.gold + " Gold"}
              index={0}
              length={character.value.length + 1}
              className={""}
            />
            {character.value.equipment?.map((item, index) => (
              <>
                <RenderEquipmentData
                  key={index}
                  value={item}
                  index={index + item}
                  length={character.value.equipment.length + 1}
                  className={""}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

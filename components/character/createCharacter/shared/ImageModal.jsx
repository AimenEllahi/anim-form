import React, { useEffect } from "react";
import useCharacterStore from "@/utils/characterStore";
import { cn } from "@/lib/utils";

import CustomButton from "@/components/ui/custom-button";

export default function ImageModal() {
  const {
    selectedCharacteristic,
    showModal,
    setShowModal,
    setSelectedCharacteristic,
  } = useCharacterStore();

  return (
    <div
      className={cn(
        "bg-blur-bottom-menu ease-animate md:hidden flex-col flex justify-center fixed w-screen h-full !z-[100] left-0 top-0 p-5 pt-11 opacity-0 pointer-events-none",
        showModal && "opacity-100 pointer-events-auto"
      )}
    >
      <div className='flex flex-col gap-5 relative'>
        <img
          src={selectedCharacteristic?.image}
          alt='cancle icon'
          title='Cancle Icon'
          className='rounded-[16px]'
        />
        <div className='flex flex-col gap-4'>
          <span className='headline-2 text-white'>
            {selectedCharacteristic?.name}
          </span>
          <span className='running-text text-gray2'>
            {selectedCharacteristic?.description ||
              "Astral Elves, born of the Astral Plane and rooted in the Feywild, radiated with divine energy, embodying a celestial essence distinct from their terrestrial kin."}
          </span>
        </div>
      </div>
      <CustomButton
        onClick={() => {
          setSelectedCharacteristic(null);
          setShowModal(false);
        }}
        className={"w-fit ms-auto mt-auto"}
      >
        <img src='/Icons/Cancel.svg' alt='cancle icon' className='h-5 w-5 ' />
        Close
      </CustomButton>
    </div>
  );
}

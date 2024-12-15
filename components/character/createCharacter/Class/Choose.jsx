import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { CLASSES } from "../constants";
import useCharacterStore from "@/utils/characterStore"; 
import Help from "@/components/ui/Icons/Help";

export default function Choose({ _class, handleSelectClass }) {
  const { setShowModal, setSelectedCharacteristic, setCharacterClass } = useCharacterStore(); // Add setCharacterClass

  useEffect(() => {
    if (_class?.name) {
      // Focus div with the id of this name
      document
        .getElementById(_class.name)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [_class?.name]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className='md:rounded-[16px] flex flex-col  w-full md:w-3/5 h-fit max-h-full md:border md:border-white/10 md:bg-white/[8%] md:pb-0'>
      <h1 className='running-text-large hidden md:block md:px-5 md:pt-3.5'>
        Class
      </h1>

      <div className='grid grid-cols-12 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-10  gap-4 md:gap-5 md:p-5 w-full overflow-auto hide-scrollbar md:pb-5'>
        {CLASSES.map(({ name, description }, index) => (
          <div
            key={index}
            id={name}
            onClick={() => {
              handleSelectClass({ name, description }); // Call parent function to select class
              
              setCharacterClass(name); // Store the selected class in the global store

              setSelectedCharacteristic({
                name,
                image: `https://dzjg7lvewk7ln.cloudfront.net/class/${name
                  .toLowerCase()
                  .replace(" ", "-")}.webp`,
                  description: description,
              });
            }}
            className={`flex cursor-pointer col-span-4 md:col-span-4 relative xl:col-span-2 flex-col running-text-mono uppercase justify-start items-start gap-3`}>
            <div className='relative w-full'>
              <Help
                onClick={handleShowModal}
                className={cn(
                  "h-6 w-6 left-2 bottom-2 md:hidden ease-animate absolute",
                  _class?.name !== name && "opacity-0 pointer-events-none"
                )}
              />
              <img
                src={`https://dzjg7lvewk7ln.cloudfront.net/class/${name
                  .toLowerCase()
                  .replaceAll(" ", "-")}.webp`}
                alt={name}
                title={name}
                className={`w-full object-contain ease-animate rounded-[10px] ${
                  _class?.name === name &&
                  "border-2 border-irisPurpleLight shadow-custom-1"
                }`}
              />
            </div>
            <span className='description'>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

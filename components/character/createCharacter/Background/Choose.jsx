import React, { useState, useEffect } from "react";
import SearchInput from "@/components/ui/search-input";
import { cn } from "@/lib/utils";
import { BACKGROUND } from "../constants";
import useCharacterStore from "@/utils/characterStore";
import Help from "@/components/ui/Icons/Help";

export default function Choose({ background, handleSelectBackground }) {
  const {
    backgroundQuery,
    setBackgroundQuery,
    setShowModal,
    setSelectedCharacteristic,
  } = useCharacterStore();

  useEffect(() => {
    if (background?.name) {
      //focus div with id of this name
      document
        .getElementById(background.name)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className='md:rounded-[16px] flex flex-col  w-full md:w-3/5 h-fit max-h-full  md:border md:border-white/10 md:bg-white/[8%] md:pb-0  '>
      <h1 className='running-text-large  hidden md:block md:p-5  md:pt-3.5'>
        Background
      </h1>
      <div className='px-5 hidden md:block '>
        <SearchInput query={backgroundQuery} setQuery={setBackgroundQuery} />
      </div>
      <div className='grid grid-cols-12 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-10  gap-4 md:gap-5 w-full overflow-auto hide-scrollbar md:px-5 md:pt-5 md:pb-5'>
        {BACKGROUND.filter(({ name }) => {
          if (backgroundQuery) {
            return name.toLowerCase().includes(backgroundQuery.toLowerCase());
          }

          return true;
        }).map(({ name, description }, index) => (
          <div
            id={name}
            key={index}
            onClick={() => {
              handleSelectBackground({ name, description });
              setSelectedCharacteristic({
                name,
                image: `https://dzjg7lvewk7ln.cloudfront.net/backgrounds/${name
                  .toLowerCase()
                  .replace(" ", "-")}.webp`,
                description,
              });
            }}
            className={`flex cursor-pointer col-span-4 md:col-span-4  relative xl:col-span-2 flex-col running-text-mono uppercase justify-start items-start gap-3  `}
          >
            <div className='relative w-full  '>
              <Help
                onClick={handleShowModal}
                className={cn(
                  "h-6 w-6 left-2 bottom-2 md:hidden ease-animate absolute ",
                  background?.name !== name && "opacity-0 pointer-events-none"
                )}
              />

              <img
                src={`https://dzjg7lvewk7ln.cloudfront.net/backgrounds/${name
                  .toLowerCase()
                  .replaceAll(" ", "-")}.webp`}
                alt={name}
                title={name}
                className={`  w-full object-contain ease-animate rounded-[10px] ${
                  background?.name === name &&
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

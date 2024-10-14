import React, { useEffect, useState } from "react";
import SearchInput from "@/components/ui/search-input";
import CustomRadioButton from "@/components/ui/custom-radio-button";
import { cn } from "@/lib/utils";
import { RACE } from "../constants";
import useCharacterStore from "@/utils/characterStore";
import Information from "@/components/ui/Icons/Information";

export default function Choose({ race, handleSelectRace }) {
  const { raceQuery, setRaceQuery, setShowModal, setSelectedCharacteristic } =
    useCharacterStore();

  useEffect(() => {
    if (race.name) {
      //focus div with id of this name
      document
        .getElementById(race.name)
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div className='md:rounded-[16px] flex flex-col  w-full md:w-3/5 h-full    md:border md:border-white/10 md:bg-white/[8%] md:pb-0'>
      {/* For PC */}
      <h1 className='running-text-large hidden md:block md:p-5 md:pt-3.5'>
        Race
      </h1>
      <div className='md:px-5 '>
        <SearchInput
          query={raceQuery}
          setQuery={setRaceQuery}
          className={"hidden md:block "}
        />
      </div>

      {/* Ends */}
      <div className='grid grid-cols-12 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-10 gap-4 md:gap-5 w-full overflow-y-scroll md:p-5  overflow-visible hide-scrollbar md:pb-5'>
        {RACE.filter(({ name }) => {
          if (raceQuery) {
            return name.toLowerCase().includes(raceQuery.toLowerCase());
          }

          return true;
        }).map(({ name, description }, index) => (
          <div
            id={name}
            key={index}
            onClick={() => {
              handleSelectRace({
                ...race,
                name: name,
                description: description,
              });
              setSelectedCharacteristic({
                name,
                image: `https://dzjg7lvewk7ln.cloudfront.net/race/${name
                  .toLowerCase()
                  .replace(" ", "-")}.webp`,
                description: description,
              });
            }}
            //add shadow to after

            className={`flex cursor-pointer col-span-4 md:col-span-4  xl:col-span-2 flex-col running-text-mono uppercase justify-start items-start gap-3  `}
          >
            <div className={cn("relative w-full  ")}>
              <img
                src={`https://dzjg7lvewk7ln.cloudfront.net/race/${name
                  .toLowerCase()
                  .replace(" ", "-")}.webp`}
                alt={name}
                title={name}
                className={` w-full relative box-border object-contain ease-animate rounded-[10px] ${
                  race?.name === name &&
                  "border-2 border-irisPurpleLight shadow-custom-1 "
                }`}
              />
              <Information
                onClick={handleShowModal}
                className={cn(
                  "h-6 w-6  left-2 bottom-2 md:hidden ease-animate  absolute ",
                  race?.name !== name && "opacity-0 pointer-events-none"
                )}
              />
            </div>
            <span className='description'>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

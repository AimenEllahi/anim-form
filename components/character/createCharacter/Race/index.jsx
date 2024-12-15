"use client";
import React, { useEffect, useState } from "react";
import useCharacterStore from "@/utils/characterStore";
import Choose from "./Choose";
import Info from "./Info";

export default function Index({ character, setCharacter }) {
  const { gender } = useCharacterStore();
  const handleSelectRace = (race) => {
    setCharacter((prev) => ({
      ...prev,
      race,
    }));
  };
  const changeGender = () => {
    setCharacter((prev) => ({
      ...prev,
      race: {
        ...prev.race,
        gender,
      },
    }));
  };
  useEffect(() => {
    changeGender();
  }, [gender]);

  return (
    <div className=' text-white  flex justify-start  items-start gap-5  h-full   w-full pb-28 md:pt-8  md:py-0'>
      <Choose race={character.race} handleSelectRace={handleSelectRace} />

      <Info race={character.race} handleSelectRace={handleSelectRace} />
    </div>
  );
}

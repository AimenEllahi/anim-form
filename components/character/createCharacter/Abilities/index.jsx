"use client";
import React, { useState } from "react";

import Choose from "./Choose";

export default function Index({ character, setCharacter }) {
  const handleChangeAbilities = (abilities) => {
    setCharacter((prev) => ({
      ...prev,
      abilities,
    }));
  };

  return (
    <div className=' text-white  flex justify-start items-start gap-5 h-full  w-full pb-32 sm:pb-0'>
      <Choose
        abilities={character.abilities}
        _pointsToSpend={character.pointsToSpend}
        handleChangeAbilities={handleChangeAbilities}
      />
    </div>
  );
}

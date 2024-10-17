import React, { useState } from "react";
import RenderCharacteristics from "./RenderCharacteristics";

const INITIAL_STATE = {
  background: "",
  alignment: "",
  xpPoints: 0,
  personality: "",
  ideal: {
    value: "",
    description: "",
  },
  bond: {
    value: "",
    description: "",
  },
  flaw: {
    value: "",
    description: "",
  },
  hitPoints: 0,
  armorClass: 0,
  gold: 0,
  equipment: [],
  weapon: "",
  secondary: "",
  armor: "",
  toolAndAmmo: "",
};
export default function general({ character }) {
  const [generalInfo, setGeneralInfo] = useState(INITIAL_STATE);

  return (
    <div className=' gap-4 md:gap-5 z-[10]'>
      <div className='gap-4 flex md:gap-5 '>
        <RenderCharacteristics
          title='General'
          data={[
            {
              key: "race",
              value: character?.value?.race || "male",
            },
            {
              key: "Class",
              value: character?.value?.class || "male",
            },
            {
              key: "gender",
              value: character?.value?.gender || "male",
            },
            {
              key: "background",
              value: character.value.background,
            },
            {
              key: "alignment",
              value: character.value.alignment,
            },
            {
              key: "level",
              value: character.value.level,
            },
            {
              key: "xp points",
              value: character.value.xp,
            },
          ]}
          className={"col-span-2 md:col-span-1"}
        />
        <RenderCharacteristics
          title='Personality'
          data={[
            {
              key: "Personality",
              value: character.value.personality_traits.personality_trait,
            },
            {
              key: "Ideal",
              value: character.value.personality_traits.ideal,
              description: "",
            },
            {
              key: "Bond",
              value: character.value.personality_traits.bond,
              description: "",
            },
            {
              key: "Flaw",
              value: character.value.personality_traits.flaw,
              description: "",
            },
          ]}
          className={"col-span-2 md:col-span-1"}
        />
      </div>
    </div>
  );
}

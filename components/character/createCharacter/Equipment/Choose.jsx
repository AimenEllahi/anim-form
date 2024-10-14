import React, { useEffect } from "react";
import Card from "./Card";
import {
  EQUIPMENTS,
  EQUIPMENT_BY_CLASS,
  EQUIPMENT_BY_RACE,
} from "../constants";
import useCharacterStore from "@/utils/characterStore"; // Import the character store

export default function Choose({ equipments, handleSetEquipments }) {
  // Access the character's race and class from the store
  const { character } = useCharacterStore();
  const { race, class: className } = character;

  // Function to get equipment options based on race and class
  const getEquipmentOptions = ({ race, class: className }) => {
    let options = {};

    // Start with the default equipment options
    for (let category in EQUIPMENTS) {
      options[category] = new Set(EQUIPMENTS[category]);
    }

    // Merge class-specific equipment options
    if (EQUIPMENT_BY_CLASS[className]) {
      const classEquip = EQUIPMENT_BY_CLASS[className];
      for (let category in classEquip) {
        if (!options[category]) {
          options[category] = new Set();
        }
        classEquip[category].forEach((option) => options[category].add(option));
      }
    }

    // Merge race-specific equipment options
    if (EQUIPMENT_BY_RACE[race]) {
      const raceEquip = EQUIPMENT_BY_RACE[race];
      for (let category in raceEquip) {
        if (!options[category]) {
          options[category] = new Set();
        }
        raceEquip[category].forEach((option) => options[category].add(option));
      }
    }

    // Convert sets to arrays
    for (let category in options) {
      options[category] = Array.from(options[category]);
    }

    return options;
  };

  const equipmentOptions = getEquipmentOptions(character);

  // Define the equipment array using filtered equipment options
  const _Equipment = [
    {
      name: "WEAPON",
      img: "/images/CreateCharacter/Equipment/img1.png",
      optionArray: equipmentOptions.weapon || [],
    },
    {
      name: "SECONDARY",
      img: "/images/CreateCharacter/Equipment/img2.png",
      optionArray: equipmentOptions.secondaryweapon || [],
    },
    {
      name: "ARMOR",
      img: "/images/CreateCharacter/Equipment/img3.png",
      optionArray: equipmentOptions.armour || [],
    },
    {
      name: "TOOL & AMMO",
      img: "/images/CreateCharacter/Equipment/img4.png",
      optionArray: equipmentOptions["tool&ammo"] || [],
    },
  ];

  const handleEquipmentChange = (key, value) => {
    handleSetEquipments({
      ...equipments,
      [key]: value,
    });
  };

  return (
    <div className="md:rounded-[16px] w-full md:w-full lg:w-4/5 flex flex-col gap-6 h-fit max-h-full mb-auto md:p-5 md:pt-3.5 md:border border-white/10 md:bg-white/[8%] overflow-y-scroll hide-scrollbar">
      <h1 className="running-text-large hidden md:block">Starting Equipment</h1>

      <div className="w-full h-full flex justify-between flex-col md:flex-row items-stretch gap-16 md:gap-5">
        {_Equipment.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            img={
              `https://dzjg7lvewk7ln.cloudfront.net/equipment/${item.name
                .toLowerCase()
                .replaceAll(" ", "-")
                .replace("&", "and")}.webp` || item.img
            }
            optionArray={item.optionArray}
            handleEquipmentChange={handleEquipmentChange}
            selectedOption={
              equipments[item.name?.toLowerCase().replaceAll(" ", "")] // Using selected equipment
            }
          />
        ))}
      </div>
    </div>
  );
}
import React from "react";
import Card from "./Card";
import { EQUIPMENTS } from "../constants";
const _Equipment = [
  //name, img, optionArray
  {
    name: "WEAPON",
    img: "/images/CreateCharacter/Equipment/img1.png",
    optionArray: EQUIPMENTS.weapon,
  },
  {
    name: "SECONDARY",
    img: "/images/CreateCharacter/Equipment/img2.png",
    optionArray: EQUIPMENTS.secondaryweapon,
  },
  {
    name: "ARMOR",
    img: "/images/CreateCharacter/Equipment/img3.png",
    optionArray: EQUIPMENTS.armour,
  },
  {
    name: "TOOL & AMMO",
    img: "/images/CreateCharacter/Equipment/img4.png",
    optionArray: EQUIPMENTS["tool&ammo"],
  },
];
export default function Choose({ equipments, handleSetEquipments }) {
  const handleEquipmentChange = (key, value) => {
    handleSetEquipments({
      ...equipments,
      [key]: value,
    });
  };
  return (
    <div className='md:rounded-[16px]  w-full md:w-full lg:w-4/5 flex flex-col gap-6  h-fit max-h-full mb-auto md:p-5 md:pt-3.5  md:border border-white/10 md:bg-white/[8%]  overflow-y-scroll hide-scrollbar'>
      <h1 className='running-text-large  hidden md:block'>
        Starting Equipment
      </h1>

      <div className=' w-full h-full flex justify-between flex-col md:flex-row  items-stretch gap-16 md:gap-5'>
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
              equipments[item.name?.toLowerCase().replaceAll(" ", "")]
            }
          />
        ))}
      </div>
    </div>
  );
}

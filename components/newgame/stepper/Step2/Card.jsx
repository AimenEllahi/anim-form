import React from "react";

export default function Card({ title, description, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`border w-full border-white/[8%] bg-white/[8%] p-2 flex justify-between rounded-[10px] cursor-pointer transition-all duration-300 ease-in-out overflow-visible ${
        selected
          ? "bg-[#8F91FF33] border-[#8F91FF] shadow-[0_0_20px_0_rgba(143,145,255,0.8)]"
          : "hover:bg-[#8F91FF33] hover:border-[#8F91FF] hover:shadow-[0_0_20px_0_rgba(143,145,255,0.8)]"
      }`}
    >
      <div className="flex justify-start items-start gap-2">
        <img
          src="/images/Header.png"
          alt={title}
          className="h-16 w-16 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between h-full ">
          <h3 className="text-white running-text-mono uppercase">{title}</h3>
          <div className=" flex flex-col gap-1 description">
            <span className="text-white uppercase">Level 31</span>
            <span className="text-irisPurpleLight">
              FIRE GENASSI <span className="text-sandyOrange">SORCERER</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

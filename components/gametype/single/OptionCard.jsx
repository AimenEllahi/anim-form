import React from "react";

export default function OptionCard({
  imageSrc,
  title,
  desc,
  isSelected,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`border p-2 flex justify-between rounded-[16px] cursor-pointer transition-all duration-300 ease-in-out
        ${
          isSelected
            ? "bg-irisPurpleLight/[20%] border-2 border-irisPurpleLight shadow-[0_0_30px_0_rgba(143,145,255,0.3)]"
            : "bg-white/[8%] border-white/10"
        } 
        hover:bg-[#8F91FF33] hover:border-2 hover:border-irisPurpleLight hover:shadow-[0_0_30px_0_rgba(143,145,255,0.3)]`}
    >
      <div className="flex gap-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-14 h-14 rounded-[6px] object-cover"
        />
        <div className="flex flex-col justify-center gap-1 items-start">
          <span className="running-text">{title}</span>
          <span className="text-gray2 running-text-mono uppercase">{desc}</span>
        </div>
      </div>
      <img
        src="/Icons/DownArrow.svg"
        alt=""
        className="mr-4 transform -rotate-90"
      />
    </div>
  );
}

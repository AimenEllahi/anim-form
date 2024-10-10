import React from "react";

export default function Card({ title, description, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`border border-white/[8%] bg-white/[8%] p-2 flex justify-between rounded-[10px] cursor-pointer transition-all duration-300 ease-in-out overflow-visible ${
        selected
          ? "bg-[#8F91FF33] border-[#8F91FF] shadow-[0_0_20px_0_rgba(143,145,255,0.8)]"
          : "hover:bg-[#8F91FF33] hover:border-[#8F91FF] hover:shadow-[0_0_20px_0_rgba(143,145,255,0.8)]"
      }`}
    >
      <div className="flex justify-start items-start gap-2">
        <img
          src="/images/Header.png"
          alt="Campaign"
          className="h-full w-14 rounded-lg object-cover"
        />
        {/* Left section for title and description */}
        <div className="flex flex-col">
          <h3 className="text-white text-base">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
      {/* Right section for any actions or details */}
      <div className="flex items-center">
        <div className="h-9 w-9 rounded-full bg-white/[8%] border border-white/[8%] flex justify-center items-center">
          <img src="/icons/toolip.svg" alt="Info" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

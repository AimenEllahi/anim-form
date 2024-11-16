import React, { useState } from "react";

export default function Emblems() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="relative bg-white/[8%] w-full rounded-2xl p-5 grid grid-cols-10 gap-5">
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onMouseLeave={() => setSelectedIndex(null)}
            className={`h-[122px] w-full bg-white/10 rounded-[16px] flex items-center justify-center transition-shadow transition-border duration-300 ${
              selectedIndex === index
                ? "border border-[#8F91FF] shadow-[0_0_40px_0_rgba(143,145,255,0.4)]"
                : "border border-transparent"
            }`}
          >
            <img
              src="/achievements/adept.png"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))}
    </div>
  );
}

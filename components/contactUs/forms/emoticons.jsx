import React, { useState } from "react";

export default function emoticons({ selected, setSelected, emoticons }) {
  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className='flex flex-col items-start'>
      <div className='flex justify-start space-x-4'>
        {emoticons.map((emoticon) => (
          <div
            key={emoticon.id}
            className={`cursor-pointer text-4xl border h-10 w-10 rounded-full flex justify-center items-center bg-white/[8%] ${
              selected === emoticon.id ? "text-white" : "text-white opacity-50"
            }`}
            title={emoticon.label}
            onClick={() => handleSelect(emoticon.id)}
          >
            <img src={emoticon.icon} title='emoticon' alt={emoticon.label} />
          </div>
        ))}
      </div>
    </div>
  );
}

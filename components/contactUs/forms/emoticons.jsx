import React, { useState } from "react";

export default function emoticons() {
  const [selected, setSelected] = useState(5);

  const emoticons = [
    { id: 1, label: "Very Unhappy", icon: "/Icons/saddest.svg" },
    { id: 2, label: "Unhappy", icon: "/Icons/sadder.svg" },
    { id: 3, label: "Neutral", icon: "/Icons/sad.svg" },
    { id: 4, label: "Happy", icon: "/Icons/happy.svg" },
    { id: 5, label: "Very Happy", icon: "/Icons/happiest.svg" },
  ];

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
            <img src={emoticon.icon} alt={emoticon.label} />
          </div>
        ))}
      </div>
    </div>
  );
}

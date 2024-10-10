"use client ";
import React, { useState } from "react";
import CampaignAdd from "@/components/ui/Icons/CampaignAdd";
import Card from "../Step2/Card";

export default function Step3() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };
  const myCharacters = [
    {
      title: "Valhein Kicklighter",
      description: "Level 31 - Drow Rogue",
    },
    {
      title: "Bentøx",
      description: "Level 16 - Fire Genassi Sorcerer",
    },
    {
      title: "Limewax",
      description: "Level 11 - Half Elf Druid",
    },
  ];
  return (
    <div className="step3-container h-[300px] overflow-auto hide-scrollbar">
      <div className="flex gap-4 rounded-lg ">
        {/* Left Section: Campaign Details */}
        <div className=" space-y-4">
          <div className="uppercase flex gap-2 mb-4">
            {/* <img src="/icons/Swords.svg" alt="Swords Icon" /> */}
            <CampaignAdd className={"fill-gray2 4-5 w-4"} />
            <h3 className="running-text-mono text-gray2">Campaign</h3>
          </div>
          <div className="bg-white/[8%] p-4 rounded-lg">
            <p className="text-white running-text-large">
              Realms Reborn: Chronicles of the Eternal Quest
            </p>
            <p className="text-gray-400 text-sm mt-2">
              The players are approached by a mysterious figure cloaked in
              shadows during a bustling festival in a small town. The figure
              reveals that they possess an ancient map leading to the lost
              capital of Althar, where the Heart of Echoes is said to lie.
              <br />
              The figure's dying words, as they collapse from a poisoned wound,
              are a cryptic warning: "Beware the echoes... they are not what
              they seem." As the players investigate the figure's death and the
              map's authenticity, they are drawn into a race against time.
              <br />
              Other groups are also on the hunt for the Heart of Echoes, and
              dark forces conspire to use its power for their own ends. The
              players must unravel the mystery before the artifact falls into
              the wrong hands and brings about a new age of darkness.
            </p>
          </div>
        </div>

        {/* Right Section: Character Details */}
        <div className="flex-1 space-y-4">
          <div className="uppercase flex gap-2 mb-4">
            <img src="/icons/Swords.svg" alt="Swords Icon" />
            <h3 className="running-text-mono text-gray2">Characters</h3>
          </div>
          <div className="space-y-2">
            {myCharacters.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                selected={selectedCard === index}
                onSelect={() => handleCardSelect(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

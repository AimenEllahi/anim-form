import React, { useState } from "react";
import Card from "./Card";
import CustomButton from "@/components/ui/custom-button";

export default function Step2() {
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

  const premadeCharacters = [
    {
      title: "Premade 1",
      description: "Level 1 - Drow Rogue",
    },
    {
      title: "Premade 2",
      description: "Level 1 - Fire Genassi Sorcerer",
    },
    {
      title: "Premade 3",
      description: "Level 1 - Drow Rogue",
    },
    {
      title: "Premade 4",
      description: "Level 1 - Fire Genassi Sorcerer",
    },
  ];

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* My Characters Section */}
      <div>
        <div className="uppercase flex gap-2 mb-4">
          <img src="/icons/Swords.svg" alt="Swords Icon" />
          <h3 className="running-text-mono text-gray2">My Characters</h3>
        </div>

        {myCharacters.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
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
        ) : (
          <div className="flex flex-col items-center justify-center h-40 gap-4 bg-white/10 rounded-lg">
            <p className="text-white running-text-large">
              You’re ready to create your first character!
            </p>
            <CustomButton withIcon={true}>create character</CustomButton>
          </div>
        )}
      </div>

      {/* Premade Characters Section */}
      <div>
        <div className="uppercase flex gap-2 mb-4">
          <img src="/icons/Swords.svg" alt="Premade Icon" />
          <h3 className="running-text-mono text-gray2">Premade Characters</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {premadeCharacters.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              selected={selectedCard === `premade-${index}`}
              onSelect={() => handleCardSelect(`premade-${index}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

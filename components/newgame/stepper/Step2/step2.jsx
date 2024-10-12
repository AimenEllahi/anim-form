import React, { useState } from "react";
import Card from "./Card";
import CustomButton from "@/components/ui/custom-button";

import Adventure from "@/components/ui/Icons/Adventure";
import PremadeCharacter from "@/components/ui/Icons/PremadeCharacter";
import AddUser from "@/components/ui/Icons/AddUser";
import { cn } from "@/lib/utils";

export default function Step2({ characters }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  const myCharacters = [];

  const premadeCharacters = [];

  return (
    <div
      className={cn(
        "flex flex-col gap-5 pb-4 pt-5 h-[483px] overflow-y-scroll hide-scrollbar ",
        characters.length <= 0 && "flex-col-reverse"
      )}
    >
      {/* My Characters Section */}
      <div className='px-5 flex flex-col gap-3'>
        <div className='uppercase flex gap-2 '>
          <Adventure className='h-5 w-5 fill-gray2 ' />
          <h3 className='running-text-mono text-gray2'>My Characters</h3>
        </div>

        {characters.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {characters.map((card, index) => (
              <Card
                key={index}
                character={card}
                selected={selectedCard === index}
                onSelect={() => handleCardSelect(index)}
              />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center h-[180px] gap-4 bg-white/10 border border-white/10 rounded-[10px]'>
            <p className='text-white running-text-large text-center'>
              You’re ready to create your first character!
            </p>
            <CustomButton withIcon={true}>
              <AddUser className='h-5 w-5 fill-white opacity-70' />
              create character
            </CustomButton>
          </div>
        )}
      </div>
      {/* Premade Characters Section */}
      {premadeCharacters.length > 0 && (
        <div className='px-5 flex flex-col gap-3'>
          <div className='uppercase flex gap-2 '>
            <PremadeCharacter className='h-5 w-5 fill-gray2 ' />
            <h3 className='running-text-mono text-gray2'>Premade Characters</h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
      )}
    </div>
  );
}

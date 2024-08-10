import CustomInput from "@/components/ui/custom-input";
import React from "react";
import CustomButton from "@/components/ui/custom-button";
import { getRandomName } from "@/lib/Helpers/character";
import useCharacterStore from "@/utils/characterStore";
import Image from "next/image";

export default function Index({ character, setCharacter }) {
  const { characterNameError, setCharacterNameError } = useCharacterStore();

  const handleRandomCharacterName = async () => {
    const name = getRandomName();
    setCharacter((prev) => ({
      ...prev,
      name,
    }));
    setCharacterNameError(false);
  };

  return (
    <div className='flex h-screen fixed top-[156px] left-0 px-6 w-full flex-col gap-5'>
      <div className='w-full h-[248px] rounded-[16px] overflow-hidden'>
        <Image
          src='/images/CreateCharacter/CharacterName/CharacterName.png'
          alt='Character Name Background'
          layout='fill' // Adjust based on your layout needs
          objectFit='cover'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <CustomInput
          focusOnError={true}
          value={character.name}
          icon={
            character.name && (
              <Image
                src='/Icons/Success.svg'
                alt='Success'
                width={16}
                height={16}
              />
            )
          }
          onChange={(value) => {
            if (value) setCharacterNameError(false);
            else setCharacterNameError(true);
            if (value.length <= 32)
              setCharacter((prev) => ({ ...prev, name: value }));
          }}
          placeholder='CHARACTER NAME'
          className={"w-full"}
        />
        {characterNameError && (
          <span className='text-errorRed uppercase font-roboto-mono text-[10px]'>
            Please enter a character name
          </span>
        )}
      </div>

      <CustomButton withIcon onClick={handleRandomCharacterName}>
        <Image src='/Icons/Random.svg' alt='Random Character Name' width={20} height={20} />
        RANDOM CHARACTER Name
      </CustomButton>
    </div>
  );
}

"use client";
import React, { Suspense, useEffect, useState } from "react";
import CharacterSheet from "@/components/character/myCharacter/character-sheet";
import { getCharacter } from "@/actions/character";
import Loader from "@/components/ui/Loader";
import { useRouter } from "next/navigation";
import useCustomToast from "@/hooks/useCustomToast";
import useUserStore from "@/utils/userStore";
import Cookie from "universal-cookie";
import useCharaterStore from "@/utils/characterStore";
import useTracking from "@/hooks/useTracking";

const ch = {
  personal: {
    name: "Gouram Crawford",
    level: 0,
    background: "Arcane Scholar",
    race: "Arakocra",
    class: "Artificer",
    backgroundUrl: "",
    portraitUrl:
      "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
    gender: "male",
    portraits: [
      "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721507843816.webp",
      "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721508236615.webp",
      "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721508327730.webp",
      "https://dndai-images.s3.eu-central-1.amazonaws.com/aimen/1721511265879.webp",
    ],
  },
  _id: "669ad11857264cc693e47eeb",
  userId: "66680e88336d28219dfc93bc",
  equipment: {
    weapon: "Novice Wand",
    secondary: "Book of shadows",
    armor: "leather armor",
    misc: "disguise kit",
  },
  abilityScores: {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  },
  personality: {
    personalityTrait: "Charismatic",
    ideal: "Unity",
    bond: "Service",
    flaw: "Addiction",
  },
  general: {
    alignment: "true good",
    gold: 200,
  },
  credits: 0,
  value: {
    name: "Gouram Crawford",
    race: "Arakocra",
    gender: "Male",
    class: "Artificer",
    level: 15,
    hp: 30,
    ac: 10,
    xp: 100,
    background: "Arcane Scholar",
    alignment: "True Good",
    ability_scores: {
      strength: 8,
      dexterity: 8,
      constitution: 8,
      intelligence: 12,
      wisdom: 10,
      charisma: 10,
    },
    personality_traits: {
      personality_trait: "Charismatic",
      ideal: "Unity",
      bond: "Service",
      flaw: "Addiction",
    },
    gold: 325,
    equipment: [
      "Wand of Minor Conjuring",
      "Book of Shadows",
      "Leather Armor",
      "Disguise Kit",
      "200 Gold from Marauders",
      "3 sets of Leather Armor",
      "2 Short Swords",
      "Mysterious Potion labeled ‘Elixir of Shadows’",
      "Map of Hidden Locations in Thalos",
    ],
    appearance:
      "Gouram Crawford is an Arakocra, a vibrant avian scholar leading an army, utilizing dark powers through the Book of Shadows.",
    spells: ["No spells", "Wand of Minor Conjuring (basic spells)"],
    abilities: "Artificer skills, Shadow Control, Leadership over marauders.",
    additionalNotes:
      "Gouram seeks the Heart of Echoes while battling addiction, aiding others with acquired knowledge.",
  },
  imageUrl: "",
  createdAt: "2024-07-19T20:48:24.586Z",
  updatedAt: "2024-08-24T18:30:56.534Z",
  __v: 4,
};

const SheetContainer = ({ params }) => {
  const [character, setCharacter] = useState();
  const router = useRouter();
  const { invokeToast } = useCustomToast();
  const { user } = useUserStore();
  const { setDisplayingCharacter } = useCharaterStore();
  const tracking = useTracking();

  const handleGetCharacter = async () => {
    try {
      const response = await getCharacter(params.slug);
      setDisplayingCharacter(response.character);
      setCharacter(response.character);
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error fetching character",
        "Error"
      );
      router.push("/character/my-characters");
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    handleGetCharacter();
  }, [user]);

  if (!character) return <Loader text={"Loading Adventurer..."} />;

  // console.log(character);
  return (
    <div className='bg-gradient text-white'>
      <CharacterSheet character={character} setCharacter={setCharacter} />
    </div>
  );
};

export default function page({ params }) {
  return (
    <Suspense>
      <SheetContainer params={params} />
    </Suspense>
  );
}

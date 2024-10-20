"use client";
import React, { useEffect, useState } from "react";
import CharacterSheet from "@/components/character/myCharacter/character-sheet";
import { getCharacter } from "@/actions/character";
import Loader from "@/components/ui/Loader";
import { useRouter } from "next/navigation";
import useCustomToast from "@/hooks/useCustomToast";
import useUserStore from "@/utils/userStore";
import Cookie from "universal-cookie";

export default function page({ params }) {
  const [character, setCharacter] = useState();
  const router = useRouter();
  const { invokeToast } = useCustomToast();
  const { user } = useUserStore();
  const cookies = new Cookie();

  const handleGetCharacter = async () => {
    try {
      const token = user?.token || cookies.get("token");

      const response = await getCharacter(params.slug, token);
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
}

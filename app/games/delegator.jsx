"use client";
import React, { useState, useEffect } from "react";
import Games from "@/components/gametype/index";
import NoGames from "@/components/gametype/noGames/index";
import Loader from "@/components/ui/Loader";
import useUserStore from "@/utils/userStore";
import { getGames } from "@/actions/game";
import useCustomToast from "@/hooks/useCustomToast";
import useControlsStore from "@/utils/controlsStore";

export default function page() {
  const [games, setGames] = useState();
  const { setGamesLength } = useControlsStore();
  const { user } = useUserStore();
  const { invokeToast } = useCustomToast();

  const handleGetGames = async () => {
    try {
      setGames(null);

      const response = await getGames(user?.token);

      setGames(response.games);
      setGamesLength(response.games.length);
    } catch (error) {
      console.log("error", error);
      invokeToast(
        error?.response?.data?.error || "Error fetching Games",
        "Error"
      );
      setGames([]);
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    if (user?.token) {
      handleGetGames();
    } else {
      setGames([]);
      setGamesLength(0);
    }
  }, [user?.token]);

  if (!games) return <Loader text='Loading games...' />;

  return (
    <div className='h-full md:h-screen w-full fixed md:relative z-[10] pt-[122px] md:pt-[144px] md:pb-[24px]'>
      {/* <Games gameType={"multiPlayer"} /> */}
      <Games gameType={"singlePlayer"} games={games} setGames={setGames} />
    </div>
    // <div className="md:h-screen w-full relative z-[10]">
    //   <NoGames />
    // </div>
  );
}

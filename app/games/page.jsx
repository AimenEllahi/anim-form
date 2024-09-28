"use client";
import React, { useState, useEffect } from "react";
import Games from "@/components/gametype/index";
import NoGames from "@/components/gametype/noGames/index";
import Loader from "@/components/ui/Loader";
import useUserStore from "@/utils/userStore";
import { getGames } from "@/actions/game";
import useCustomToast from "@/hooks/useCustomToast";
export default function page() {
  const [games, setGames] = useState();
  const { user } = useUserStore();
  const { invokeToast } = useCustomToast();

  const handleGetGames = async () => {
    try {
      setGames(null);
      console.log(user);
      console.log("hereee");
      const response = await getGames(user?.token);
      console.log(response);
      setGames(response.games);
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
      console.log("we end up here");
      setGames([]);
    }
  }, [user?.token]);

  if (!games) return <Loader text='Loading games...' />;
  return (
    <div className='h-full md:h-screen w-full relative z-[10] pt-[130px] md:pt-[120px] md:pb-[188px]'>
      {/* <Games gameType={"multiPlayer"} /> */}
      <Games gameType={"singlePlayer"} games={games} setGames={setGames} />
    </div>
    // <div className="md:h-screen w-full relative z-[10]">
    //   <NoGames />
    // </div>
  );
}

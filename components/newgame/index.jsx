"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle } from "@/components/ui/dialog";
import StepDialog from "./stepper/StepDialog";
import { getCharacters } from "@/actions/character";
import { getPopularCampaigns } from "@/actions/campaigns";
import useCustomToast from "@/hooks/useCustomToast";
import useGameStore from "@/utils/gameStore";
import useUserStore from "@/utils/userStore";
export default function index() {
  const { startNewGame, setStartNewGame, currentCampaign } = useGameStore();

  const { user } = useUserStore();
  const [characters, setCharacters] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const { invokeToast } = useCustomToast();

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest-to-oldest");
  const getAllCharacters = async () => {
    try {
      const response = await getCharacters(user?.token);

      setCharacters(response.characters);
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error fetching Characters",
        "Error"
      );
      setCharacters([]);
      console.error("Error:", error);
    }
  };

  const handleGetPopularCampaigns = async () => {
    try {
      const response = await getPopularCampaigns(sort, 12, query);
      setCampaigns(response.campaigns);
      if (currentCampaign) {
        //check if the current campaign is in the list of popular campaigns
        const campaign = response.campaigns.find(
          (campaign) => campaign._id === currentCampaign?._id
        );
        if (!campaign) {
          setCampaigns([currentCampaign, ...response.campaigns]);
        }
      }
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error fetching Public campaigns",
        "Error"
      );
      setCampaigns([]);
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    handleGetPopularCampaigns();
  }, [sort, query]);

  useEffect(() => {
    if (currentCampaign) {
      const campaign = campaigns.find(
        (campaign) => campaign._id === currentCampaign?._id
      );
      if (!campaign) {
        setCampaigns([currentCampaign, ...campaigns]);
      }
    }
  }, [currentCampaign]);
  useEffect(() => {
    getAllCharacters();
  }, [user]);

  return (
    <div className='h-full z-[10] w-full flex flex-col px-5 lg:px-12'>
      <Dialog open={startNewGame} onOpenChange={setStartNewGame}>
        <DialogTitle></DialogTitle>
        <StepDialog
          setOpen={setStartNewGame}
          characters={characters}
          setQuery={setQuery}
          campaigns={campaigns}
          query={query}
          sort={sort}
          setSort={setSort}
        />
      </Dialog>
    </div>
  );
}

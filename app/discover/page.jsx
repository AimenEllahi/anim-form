"use client";
import useUserStore from "@/utils/userStore";
import React, { useState, useEffect } from "react";
import Discover from "@/components/discover";
import { getCharacters } from "@/actions/character";
import {
  getMostLikedCampaigns,
  getPopularCampaigns,
} from "@/actions/campaigns";
import useCustomToast from "@/hooks/useCustomToast";
import { getGames } from "@/actions/game";

export default function page() {
  const { user } = useUserStore();
  const { invokeToast } = useCustomToast();

  const [campaigns, setCampaigns] = useState([]);
  const [popularCampaigns, setPopularCampaigns] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [games, setGames] = useState([]);

  const handleGetRecentlyPlayed = async () => {
    try {
      const response = await getGames(user?.token);

      setGames(response.games);
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error fetching Recently Played",
        "Error"
      );
      setGames([]);
      console.error("Error:", error);
    }
  };

  const handleGetPopularCampaigns = async () => {
    try {
      const response = await getPopularCampaigns();

      setPopularCampaigns(response.campaigns);
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error fetching Public campaigns",
        "Error"
      );
      setPopularCampaigns([]);
      console.error("Error:", error);
    }
  };

  const handleGetMostLikedCampaigns = async () => {
    try {
      const response = await getMostLikedCampaigns();
      setCampaigns(response.campaigns);
    } catch (error) {
      invokeToast(
        error?.response?.data?.error || "Error fetching Community Favorites",
        "Error"
      );
      setCampaigns([]);
      console.error("Error:", error);
    }
  };

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
  useEffect(() => {
    handleGetPopularCampaigns();
    handleGetMostLikedCampaigns();
    getAllCharacters();
    handleGetRecentlyPlayed();
  }, [user]);
  return (
    <Discover
      characters={characters}
      mostLiked={campaigns}
      popular={popularCampaigns}
      recentlyPlayed={games}
    />
  );
}

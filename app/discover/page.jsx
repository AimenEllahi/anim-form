"use client";
import useUserStore from "@/utils/userStore";
import React, { useState, useEffect, Suspense } from "react";
import Discover from "@/components/discover";
import {
  getMostLikedCampaigns,
  getPopularCampaigns,
} from "@/actions/campaigns";
import useCustomToast from "@/hooks/useCustomToast";
import { useSearchParams } from "next/navigation";

const DiscoverContainer = () => {
  const { user } = useUserStore();
  const { invokeToast } = useCustomToast();

  const [campaigns, setCampaigns] = useState([]);
  const [popularCampaigns, setPopularCampaigns] = useState([]);
  const [showMoreCampaigns, setShowMoreCampaigns] = useState(true);
  const [loadingCampaigns, setLoadingCampaigns] = useState(false);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(12);
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort") || "newest-to-oldest";
  const page = parseInt(searchParams.get("page")) || 1;

  const handleGetPopularCampaigns = async () => {
    try {
      setLoadingCampaigns(true);
      const response = await getPopularCampaigns(sort, limit, query);
      if (response.campaigns.length >= response.totalCampaigns) {
        setShowMoreCampaigns(false);
      }
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

  useEffect(() => {
    handleGetPopularCampaigns();
  }, [limit, sort, query]);

  useEffect(() => {
    const element = document.querySelector(".public-campaigns");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [sort]);
  useEffect(() => {
    handleGetMostLikedCampaigns();
  }, [user]);
  return (
    <Discover
      mostLiked={campaigns}
      popular={popularCampaigns}
      setPopularCampaigns={setPopularCampaigns}
      setCampaigns={setCampaigns}
      showMoreCampaigns={showMoreCampaigns}
      setLimit={setLimit}
      loadingCampaigns={loadingCampaigns}
      setQuery={setQuery}
      sort={sort}
    />
  );
};
export default function page() {
  return (
    <Suspense>
      <DiscoverContainer />
    </Suspense>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Achievements from "@/components/achievements/index";
import useUserStore from "@/utils/userStore";
import Loader from "@/components/ui/Loader";
import { getAllAchievements, getUserAchievements } from "@/actions/achievement";
import useCustomToast from "@/hooks/useCustomToast";

function convertAchievements(data, progressData) {
  // Group achievements by category
  const categories = {};

  for (const achievement of data) {
    const { category, title, description, pokals, criteria, _id } = achievement;

    // Calculate progress and unlocked status
    const criteriaKey = Object.keys(criteria)[0];
    const criteriaValue = criteria[criteriaKey];

    const userProgress = progressData[criteriaKey] || 0; // Get user's progress for the criteria
    let progress = `${Math.min(userProgress, criteriaValue)}/${criteriaValue}`;
    progress = `0/${criteriaValue}`;
    const unlocked = false;

    // Create a category if it doesn't exist
    if (!categories[category]) {
      categories[category] = { name: category, achievements: [] };
    }

    // Add achievement to the category
    categories[category].achievements.push({
      id: _id,
      title,
      description,
      criteria,
      progress,
      points: pokals,
      unlocked,
    });
  }

  // Convert categories object to an array
  return Object.values(categories);
}

export default function page() {
  const { user, updateRank, updateTitle } = useUserStore();
  const [userAchievements, setUserAchievements] = useState(null);
  const [achievements, setAchievements] = useState(null);
  const { invokeToast } = useCustomToast();
  const handleGetAllAchievements = async () => {
    try {
      const _achievements = await getAllAchievements();
      const progressData = {
        createdCharacters: 3,
        characterLevel: 2,
        uniqueClassesOrRaces: 5,
        characterPortraits: 2,
        createdCampaigns: 2,
        publishedCampaigns: 1,
        campaignComments: 5,
        turnsPlayed: 15,
        totalPlayTime: 120,
        gamesCompleted: 3,
        sharedOn: ["Twitter", "Instagram"],
        accountAge: 30,
      };
      const convertedAchievements = convertAchievements(
        _achievements,
        progressData
      );
      setAchievements(convertedAchievements);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleGetUserAchievements = async () => {
    try {
      if (!user.token) return;
      const userAchievements = await getUserAchievements(user?.token);
      updateRank(userAchievements.rank);
      updateTitle(userAchievements.title);
      setUserAchievements(userAchievements);

      if (userAchievements.newLevel) {
        invokeToast(`You have reached level ${newLevel}`, "success");
      }

      if (userAchievements.unlockedAchievements.length > 0) {
        userAchievements.unlockedAchievements.forEach((achievement, index) => {
          setTimeout(() => {
            invokeToast(`${achievement.title} Unlocked`, "success");
          }, 4000 * (index + (userAchievements.newLevel ? 1 : 0)));
        });
      }
    } catch (error) {
      console.error("Error:", error);
      invokeToast(
        error?.response?.data || "Error getting user achievements",
        "error"
      );
    }
  };

  useEffect(() => {
    handleGetAllAchievements();
    handleGetUserAchievements();
  }, [user]);
  if (!userAchievements) return <Loader text={"Loading Achievements ..."} />;

  return (
    <div>
      <Achievements
        userAchievements={userAchievements}
        achievements={achievements}
      />
    </div>
  );
}

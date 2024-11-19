import React, { useState } from "react";
import Adventure from "@/components/ui/Icons/Adventure";
import Campaign from "@/components/ui/Icons/Campaign";
import Diamond from "@/components/ui/Icons/Diamond";
import Watch from "@/components/ui/Icons/Watch";

export default function Achieve({ achievements, userAchievements }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const calculateProgressPercentage = (progress) => {
    const [current, total] = progress.split("/").map(Number);

    return (current / total) * 100;
  };

  const checkIfAchievementUnlocked = (id) => {
    return userAchievements.achievements.some((a) => a.id === id);
  };

  const getProgressBarColor = (progress, unlocked) => {
    const percentage = calculateProgressPercentage(progress);

    if (percentage === 100) return "border-[#05D381]"; // Success Green for 100%
    if (percentage > 0 && percentage < 100) return "border-white"; // White for partial progress (1% to 99%)
    return "border-gray-400"; // Grayish background for 0%
  };

  const getDescriptionTextColor = (progress, unlocked) => {
    const percentage = calculateProgressPercentage(progress);
    return percentage === 100 ? "text-[#05D381]" : "text-gray2"; // Success Green for 100%, Gray2 for others
  };

  const getBackgroundColor = (progress, unlocked) => {
    const percentage = calculateProgressPercentage(progress);

    if (percentage === 100) return "bg-[#05D381]/[20%]"; // Success Green for 100%
    if (percentage > 0 && percentage < 100) return "bg-[#4767DC]/[20%]"; // Blue for partial progress
    return "bg-white/[8%]"; // Default for 0%
  };

  const getProgressText = (progress, unlocked) => {
    const percentage = calculateProgressPercentage(progress);
    return percentage === 100 ? "" : progress;
  };

  const trackProgress = (id) => {
    const characterCountAchievements = [
      "6739002289dcd8613b6b36c6",
      "6739002289dcd8613b6b36c7",
      "6739002289dcd8613b6b36ca",
    ];

    const characterPortraitsAchievements = [
      "6739002289dcd8613b6b36cf",
      "6739002289dcd8613b6b36ce",
    ];

    const chatacterLevelAchievements = [
      "6739002289dcd8613b6b36c8",
      "6739002289dcd8613b6b36c9",
      "6739002289dcd8613b6b36cb",
    ];

    const uniqueClassesOrRacesAchievements = [
      "6739002289dcd8613b6b36cd",
      "6739002289dcd8613b6b36cc",
    ];

    const campaignsCount = [
      "6739002289dcd8613b6b36d0",
      "6739002289dcd8613b6b36d2",
    ];

    const campaignPublishCount = [
      "6739002289dcd8613b6b36d1",
      "6739002289dcd8613b6b36d3",
      "6739002289dcd8613b6b36d9",
      "6739002289dcd8613b6b36d8",
    ];

    const campaignCommentCount = [
      "6739002289dcd8613b6b36d4",
      "6739002289dcd8613b6b36d5",
    ];

    const starCampaignCount = ["6739002289dcd8613b6b36d6"];
    const likeCampaignCount = ["6739002289dcd8613b6b36d7"];
    const turnsPlayed = [
      "6739002289dcd8613b6b36da",
      "6739002289dcd8613b6b36db",
      "6739002289dcd8613b6b36dc",
    ];

    const timePlayed = [
      "6739002289dcd8613b6b36dd",
      "6739002289dcd8613b6b36de",
      "6739002289dcd8613b6b36df",
    ];

    const gamesCompleted = [
      "6739002289dcd8613b6b36e0",
      "6739002289dcd8613b6b36e1",
    ];

    const accountAge = [
      "6739002289dcd8613b6b36e4",
      "6739002289dcd8613b6b36e5",
      "6739002289dcd8613b6b36e6",
      "6739002289dcd8613b6b36e7",
      "6739002289dcd8613b6b36e8",
    ];

    const subscribed = ["6739002289dcd8613b6b36ed"];

    if (characterCountAchievements.includes(id))
      return userAchievements.createdCharacters;
    else if (characterPortraitsAchievements.includes(id))
      return userAchievements.characterPortraits;
    else if (chatacterLevelAchievements.includes(id))
      return userAchievements.characterLevel;
    else if (uniqueClassesOrRacesAchievements.includes(id))
      return userAchievements.uniqueClassesOrRaces;
    else if (campaignsCount.includes(id))
      return userAchievements.createdCampaigns;
    else if (campaignPublishCount.includes(id))
      return userAchievements.publishedCampaigns;
    else if (campaignCommentCount.includes(id))
      return userAchievements.campaignComments;
    else if (starCampaignCount.includes(id))
      return userAchievements.starredCampaigns;
    else if (likeCampaignCount.includes(id))
      return userAchievements.likedCampaigns;
    else if (turnsPlayed.includes(id)) return userAchievements.turnsPlayed;
    else if (timePlayed.includes(id)) return userAchievements.totalPlayTime;
    else if (gamesCompleted.includes(id))
      return userAchievements.gamesCompleted;
    else if (id === "6739002289dcd8613b6b36e2") {
      return userAchievements.gameTurns;
    } else if (id === "6739002289dcd8613b6b36e3") {
      return userAchievements.totalGamesPlayed;
    } else if (accountAge.includes(id)) {
      return userAchievements.accountAge;
    } else if (subscribed.includes(id)) {
      return userAchievements.isSubscribed;
    } else return 0;
  };

  return (
    <div className='w-full p-5 flex flex-col gap-8'>
      {achievements.map((category, catIndex) => (
        <div key={catIndex} className='flex flex-col gap-4'>
          <span className='running-text-mono text-gray2 uppercase flex items-center gap-2'>
            {category.name.toLowerCase().includes("character") && (
              <Adventure className='w-5 h-5 fill-gray2 ' />
            )}
            {category.name.toLowerCase().includes("campaign") && (
              <Campaign className='w-5 h-5 fill-gray2 ' />
            )}
            {category.name.toLowerCase().includes("game") && (
              <Diamond className='w-5 h-5 fill-gray2 ' />
            )}
            {category.name.toLowerCase().includes("lifetime") && (
              <Watch className='w-5 h-5 fill-gray2 ' />
            )}
            {category.name}
          </span>

          <div className='relative w-full rounded-2xl grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 gap-5'>
            {category.achievements.map((achievement, index) => {
              const userProgress = trackProgress(achievement.id);

              // Calculate progress and unlocked status
              const criteriaKey = Object.keys(achievement.criteria)[0];

              const criteriaValue = achievement.criteria[criteriaKey];

              let progress = `${Math.min(
                userProgress,
                criteriaValue
              )}/${criteriaValue}`;

              if (achievement.id === "6739002289dcd8613b6b36e2") {
                if (!userProgress) progress = "0/1";
                else progress = "1/1";
              }
              if (achievement.id === "6739002289dcd8613b6b36e4") {
                progress = `1/1`;
              }
              if (
                [
                  "6739002289dcd8613b6b36ec",
                  "6739002289dcd8613b6b36eb",
                  "6739002289dcd8613b6b36ea",
                  "6739002289dcd8613b6b36e9",
                ].includes(achievement.id)
              ) {
                progress = `0/1`;
              }

              return (
                <div
                  key={index}
                  className={`h-[218px] w-full rounded-[16px] p-5 transition-shadow duration-300 flex flex-col justify-between items-center ${getBackgroundColor(
                    progress,
                    checkIfAchievementUnlocked(achievement.id)
                  )} `}
                >
                  <div className='flex justify-center items-center mb-4'>
                    <div className='relative'>
                      <div
                        className={`w-16 h-16 border-2 rounded-full flex items-center justify-center  ${getProgressBarColor(
                          progress
                        )}`}
                      >
                        <span className='text-gray-400'>
                          {getProgressText(progress)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-center running-text'>
                    <span className='text-lg font-medium text-white'>
                      {achievement.title}
                    </span>
                    <p
                      className={`${getDescriptionTextColor(progress)} text-sm`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                  <div className='text-center mt-2 running-text-mono'>
                    <span className='text-sandyOrange flex gap-2 items-center'>
                      <img
                        src='/achievements/icons/trophy.png'
                        alt=''
                        className='w-3 h-3'
                      />
                      {achievement.points}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

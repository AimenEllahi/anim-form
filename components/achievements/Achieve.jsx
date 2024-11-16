import React, { useState } from "react";
const categories = [
  {
    name: "Character",
    achievements: [
      {
        title: "First Character",
        description: "Create your first character",
        progress: "1/1",
        points: 10,
        unlocked: true,
      },
      {
        title: "Level 2 Virtuoso",
        description: "Have a character reach level 2",
        progress: "2/3",
        points: 20,
        unlocked: true,
      },
      {
        title: "Character Enthusiast",
        description: "Have 3 characters",
        progress: "3/3",
        points: 28,
        unlocked: false,
      },
      {
        title: "Level 3 Maestro",
        description: "Have 3 characters reach level 3",
        progress: "3/3",
        points: 78,
        unlocked: true,
      },
      {
        title: "Master Creator",
        description: "Create characters from 10 different classes/races",
        progress: "5/5",
        points: 200,
        unlocked: false,
      },
      {
        title: "Veteran Characters",
        description: "Have a character reach level 10",
        progress: "10/10",
        points: 100,
        unlocked: true,
      },
      {
        title: "Legendary Hero",
        description: "Have 5 characters reach level 15",
        progress: "5/5",
        points: 300,
        unlocked: false,
      },
      {
        title: "Epic Summoner",
        description: "Summon a character of each class",
        progress: "1/1",
        points: 250,
        unlocked: true,
      },
      {
        title: "Ultimate Creator",
        description: "Have 10 characters",
        progress: "10/10",
        points: 500,
        unlocked: false,
      },
      {
        title: "Immortal Legacy",
        description: "Create 20 unique characters",
        progress: "10/10",
        points: 1000,
        unlocked: false,
      },
    ],
  },
  {
    name: "Campaigns",
    achievements: [
      {
        title: "Diverse Creator",
        description: "Create characters from 5 different classes/races",
        progress: "0/5",
        points: 100,
        unlocked: false,
      },
      {
        title: "Veteran Campaigner",
        description: "Complete 5 campaigns",
        progress: "5/5",
        points: 300,
        unlocked: true,
      },
      {
        title: "Campaign Master",
        description: "Complete 10 campaigns",
        progress: "10/10",
        points: 500,
        unlocked: false,
      },
      {
        title: "Hero's Journey",
        description: "Complete a journey campaign",
        progress: "1/1",
        points: 50,
        unlocked: true,
      },
      {
        title: "Grand Campaigner",
        description: "Complete 15 campaigns",
        progress: "5/5",
        points: 800,
        unlocked: true,
      },
      {
        title: "Epic Conqueror",
        description: "Defeat 5 campaign bosses",
        progress: "0/5",
        points: 400,
        unlocked: false,
      },
      {
        title: "Campaign Collector",
        description: "Collect 50 campaign badges",
        progress: "5/5",
        points: 200,
        unlocked: true,
      },
      {
        title: "Champion of Realms",
        description: "Participate in 10 realms",
        progress: "10/10",
        points: 700,
        unlocked: true,
      },
      {
        title: "Master of Fates",
        description: "Achieve full completion in a campaign",
        progress: "1/1",
        points: 1000,
        unlocked: false,
      },
    ],
  },
  {
    name: "Games",
    achievements: [
      {
        title: "Character Collector",
        description: "Create 5 Character Portraits",
        progress: "0/5",
        points: 200,
        unlocked: false,
      },
      {
        title: "Game Challenger",
        description: "Complete 3 games",
        progress: "3/3",
        points: 100,
        unlocked: false,
      },
      {
        title: "Strategist",
        description: "Win a game without taking damage",
        progress: "1/1",
        points: 150,
        unlocked: true,
      },
      {
        title: "Puzzle Solver",
        description: "Solve 5 puzzles",
        progress: "5/5",
        points: 300,
        unlocked: false,
      },
      {
        title: "Mastermind",
        description: "Win 5 strategy games",
        progress: "5/5",
        points: 400,
        unlocked: true,
      },
      {
        title: "Arena Champion",
        description: "Win 10 arena matches",
        progress: "10/10",
        points: 250,
        unlocked: false,
      },
      {
        title: "Tactician",
        description: "Reach the top 10 in leaderboards",
        progress: "1/1",
        points: 500,
        unlocked: true,
      },
      {
        title: "Game Legend",
        description: "Complete 10 games",
        progress: "10/10",
        points: 1000,
        unlocked: false,
      },
    ],
  },
  {
    name: "Lifetime",
    achievements: [
      {
        title: "Legendary Creator",
        description: "Create 5 Character Portraits",
        progress: "5/5",
        points: 300,
        unlocked: true,
      },
      {
        title: "Lifetime Player",
        description: "Play 10 games",
        progress: "10/10",
        points: 1000,
        unlocked: false,
      },
      {
        title: "Master Collector",
        description: "Collect 100 unique items",
        progress: "10/10",
        points: 600,
        unlocked: true,
      },
      {
        title: "Veteran Explorer",
        description: "Visit 5 unique locations",
        progress: "5/5",
        points: 400,
        unlocked: true,
      },
      {
        title: "Epic Adventurer",
        description: "Complete 5 quests",
        progress: "5/5",
        points: 800,
        unlocked: true,
      },
      {
        title: "Immortalized",
        description: "Reach immortal rank in all skills",
        progress: "5/5",
        points: 1500,
        unlocked: false,
      },
      {
        title: "Game Master",
        description: "Host 5 games",
        progress: "5/5",
        points: 2000,
        unlocked: false,
      },
      {
        title: "Storyteller",
        description: "Tell 5 stories",
        progress: "5/5",
        points: 500,
        unlocked: true,
      },
      {
        title: "Ultimate Journey",
        description: "Complete all lifetime achievements",
        progress: "10/10",
        points: 5000,
        unlocked: false,
      },
    ],
  },
];

export default function Achieve() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const calculateProgressPercentage = (progress) => {
    const [current, total] = progress.split("/").map(Number);
    return (current / total) * 100;
  };

  const getProgressBarColor = (progress) => {
    const percentage = calculateProgressPercentage(progress);

    if (percentage === 100) return "border-[#05D381]"; // Success Green for 100%
    if (percentage > 0 && percentage < 100) return "border-white"; // White for partial progress (1% to 99%)
    return "border-gray-400"; // Grayish background for 0%
  };

  const getDescriptionTextColor = (progress) => {
    const percentage = calculateProgressPercentage(progress);
    return percentage === 100 ? "text-[#05D381]" : "text-gray2"; // Success Green for 100%, Gray2 for others
  };

  const getBackgroundColor = (progress) => {
    const percentage = calculateProgressPercentage(progress);

    if (percentage === 100) return "bg-[#05D381]/[20%]"; // Success Green for 100%
    if (percentage > 0 && percentage < 100) return "bg-[#4767DC]/[20%]"; // Blue for partial progress
    return "bg-white/[8%]"; // Default for 0%
  };

  const getProgressText = (progress) => {
    const percentage = calculateProgressPercentage(progress);
    return percentage === 100 ? "" : progress;
  };

  return (
    <div className="w-full p-5 flex flex-col gap-8">
      {categories.map((category, catIndex) => (
        <div key={catIndex} className="flex flex-col gap-4">
          <span className="running-text-mono text-gray2 uppercase flex items-center gap-2">
            <img
              src={`/icons/${category.name.toLowerCase()}.png`}
              alt="icon"
              className="w-6 h-6"
            />
            {category.name}
          </span>

          <div className="relative w-full rounded-2xl grid grid-cols-5 gap-5">
            {category.achievements.map((achievement, index) => {
              const progressPercentage = calculateProgressPercentage(
                achievement.progress
              );
              return (
                <div
                  key={index}
                  className={`h-[218px] w-full rounded-[16px] p-5 transition-shadow duration-300 flex flex-col justify-between items-center ${getBackgroundColor(
                    achievement.progress
                  )} `}
                >
                  <div className="flex justify-center items-center mb-4">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 border-2 rounded-full flex items-center justify-center  ${getProgressBarColor(
                          achievement.progress
                        )}`}
                      >
                        <span className="text-gray-400">
                          {getProgressText(achievement.progress)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center running-text">
                    <span className="text-lg font-medium text-white">
                      {achievement.title}
                    </span>
                    <p
                      className={`${getDescriptionTextColor(
                        achievement.progress
                      )} text-sm`}
                    >
                      {achievement.description}
                    </p>
                  </div>
                  <div className="text-center mt-2 running-text-mono">
                    <span className="text-sandyOrange flex gap-2 items-center">
                      <img
                        src="/achievements/icons/trophy.png"
                        alt=""
                        className="w-3 h-3"
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

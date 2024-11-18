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
    return userAchievements.achievements.some(
      (achievement) => achievement.id === id
    );
  };

  const getProgressBarColor = (progress, unlocked) => {
    const percentage = calculateProgressPercentage(progress);

    if (percentage === 100 || unlocked) return "border-[#05D381]"; // Success Green for 100%
    if (percentage > 0 && percentage < 100) return "border-white"; // White for partial progress (1% to 99%)
    return "border-gray-400"; // Grayish background for 0%
  };

  const getDescriptionTextColor = (progress, unlocked) => {
    const percentage = calculateProgressPercentage(progress);
    return percentage === 100 || unlocked ? "text-[#05D381]" : "text-gray2"; // Success Green for 100%, Gray2 for others
  };

  const getBackgroundColor = (progress, unlocked) => {
    const percentage = calculateProgressPercentage(progress);

    if (percentage === 100 || unlocked) return "bg-[#05D381]/[20%]"; // Success Green for 100%
    if (percentage > 0 && percentage < 100) return "bg-[#4767DC]/[20%]"; // Blue for partial progress
    return "bg-white/[8%]"; // Default for 0%
  };

  const getProgressText = (progress, unlocked) => {
    const percentage = calculateProgressPercentage(progress);
    return percentage === 100 || unlocked ? "" : progress;
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

          <div className='relative w-full rounded-2xl grid grid-cols-5 gap-5'>
            {category.achievements.map((achievement, index) => {
              const progressPercentage = calculateProgressPercentage(
                achievement.progress,
                checkIfAchievementUnlocked(achievement.id)
              );
              return (
                <div
                  key={index}
                  className={`h-[218px] w-full rounded-[16px] p-5 transition-shadow duration-300 flex flex-col justify-between items-center ${getBackgroundColor(
                    achievement.progress,
                    checkIfAchievementUnlocked(achievement.id)
                  )} `}
                >
                  <div className='flex justify-center items-center mb-4'>
                    <div className='relative'>
                      <div
                        className={`w-16 h-16 border-2 rounded-full flex items-center justify-center  ${getProgressBarColor(
                          achievement.progress,
                          checkIfAchievementUnlocked(achievement.id)
                        )}`}
                      >
                        <span className='text-gray-400'>
                          {getProgressText(achievement.progress)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-center running-text'>
                    <span className='text-lg font-medium text-white'>
                      {achievement.title}
                    </span>
                    <p
                      className={`${getDescriptionTextColor(
                        achievement.progress,
                        checkIfAchievementUnlocked(achievement.id)
                      )} text-sm`}
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

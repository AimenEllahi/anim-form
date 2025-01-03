"use client";
import React from "react";
import Card from "@/components/ui/Shared/Card/NewsCard";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";
import GeneralTabbar from "@/components/ui/Shared/TabBar/general";

export default function ArticlesPage() {
  const router = useRouter();

  // Handle redirection
  const handleRedirect = (path) => {
    router.push(path);
  };

  // Define your static articles
  const articles = [
    {
      id: 1,
      title: "Offical Release of Patch 1.0",
      description: "Patch 1.0",
      imageUrl: "https://dzjg7lvewk7ln.cloudfront.net/articles/article_1.webp",
    },
    {
     id: 2,
      title: "Offical Release of Patch 1.1",
      description:
        "New Start Game Wizard, Navbar Rework, Conditional start Equipment logic and more..",
      imageUrl: "https://dzjg7lvewk7ln.cloudfront.net/articles/article_2.webp",
      },
      {
      id: 3,
      title: "Adventurer Overview | Update Patch 1.2 ",
      description:
        "Major rework of the adventurer overview and more...",
      imageUrl: "https://dzjg7lvewk7ln.cloudfront.net/der%20patron/1729688171168.webp",
      },
      {
        id: 4,
        title: "Achievements & Ranks | Update Patch 1.3 ",
        description:
          "Unlock Achievements and Ranks...",
        imageUrl: "https://dzjg7lvewk7ln.cloudfront.net/rank-images/Novice.webp",
        },
        {
        id: 5,
        title: "Likes in Community Gallery | Patch 1.4 ",
        description:
        "Updates in the community Gallery, Character creator and more...",
      imageUrl: "https://dndai-images.s3.eu-central-1.amazonaws.com/daniel%20moll/1735459541150.webp",
      },
        //{
    // id: 6,
    //  title: "Health Update: Benefits of a Balanced Diet",
    //  description:
    //    "A balanced diet is crucial for maintaining good health and wellbeing...",
    //  imageUrl: "/images/article2.jpg",
    //  },
    // Add more articles as needed
  ];

  return (
    <div
      className="min-h-screen relative h-full w-full flex flex-col pt-[118px] md:pt-[9rem] px-5 lg:px-12 pb-32 md:pb-64 "
      suppressHydrationWarning
    >
      <div className="flex flex-col gap-2.5 ">
        <div className="text-center flex justify-between text-white headline-3 z-[10] ">
          {/* Desktop */}
          <span className="headline-3 z-[10] hidden md:block">
            News Articles
            <span className="text-gray2 ms-3 md:ms-4 font-roboto-mono transform translate-up text-[17px] md:text-[24px] translate-y-[-15px] md:translate-y-[-20px]">
              ({articles.length})
            </span>
          </span>
        </div>
      </div>

      <div className="w-full text-white z-[9] grid grid-cols-12 lg:grid-cols-12 gap-4 pt-9 md:pt-8">
        {articles.map((article, i) => (
          <div
            key={i}
            className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 w-full min-w-full max-w-full"
          >
            <Card article={article} className={"!w-full !min-w-full"} />
          </div>
        ))}
      </div>
      <GeneralTabbar showSearch={false} />
    </div>
  );
}

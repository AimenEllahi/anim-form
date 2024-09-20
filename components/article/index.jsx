"use client"; // If needed
import React from "react";

// Sample article content for demonstration
const articleContent = {
  1: "This is the content of Article 1",
  2: "This is the content of Article 2",
  3: "This is the content of Article 3",
};

export default function Article({ articleId }) {
  // Convert the articleId to a number
  const id = Number(articleId);

  // Fetch content based on the articleId
  const content = articleContent[id] || "Article not found";

  return (
    <div className="h-full text-white w-full flex flex-col pt-[94px] md:pt-[9rem] px-5 lg:px-12 pb-32">
      <div className="flex flex-col w-full gap-10 z-[10]">
        <div className="text-white grid grid-cols-1 md:grid-cols-12 gap-8 justify-end items-end">
          <div className="flex running-text-small md:running-text-large flex-col md:col-start-5 gap-5 md:col-span-7 w-full">
            <span>{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
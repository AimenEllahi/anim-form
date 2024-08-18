"use client";
import Landing from "@/components/landingPage/index";
import { useEffect } from "react";

export default function PageClient() {
  useEffect(() => {
    // Set dynamic title
    document.title = "DND AI";

    // Create and append meta tags
    const metaTags = [
      { name: "description", content: "Join DNDAI to play Dungeons and Dragons with AI as Game Master. AI-supported pen and paper games." },
      { name: "keywords", content: "AI adventure games, text-based games, interactive fiction, role-playing games, free online adventure games, AI Game, Free online game 2024" },
      { property: "og:title", content: "DND AI - Play an AI driven Story game and create breathtaking images in the process" },
      { property: "og:description", content: "Dive into epic, story-driven adventures with free pen and paper games, powered by OpenAI’s cutting-edge artificial intelligence." },
      { property: "og:url", content: "https://www.dndai.app" },
      { property: "og:image", content: "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp" },
      { property: "og:type", content: "website" }
    ];

    metaTags.forEach(tagInfo => {
      const metaTag = document.createElement("meta");
      Object.keys(tagInfo).forEach(key => {
        metaTag.setAttribute(key, tagInfo[key]);
      });
      document.head.appendChild(metaTag);

      // Clean up the meta tag when the component unmounts
      return () => {
        document.head.removeChild(metaTag);
      };
    });

  }, []);

  return <Landing />;
}

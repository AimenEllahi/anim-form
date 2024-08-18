"use client";
import React, { useEffect, Suspense, memo } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Script from "next/script";
import "./globals.css";
import useGameStore from "@/utils/gameStore";
import CreditsDialogue from "@/components/ui/Shared/Dialogue/GetCredits";
import useStepperStore from "@/utils/characterStore";

const inter = Inter({ subsets: ["latin"] });

const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { activeStep } = useStepperStore();

  const isTransparentNavbar =
    pathname.includes("/auth") || pathname.includes("/game/play");
  const showFooter =
    !pathname.includes("/auth") &&
    !pathname.includes("/character") &&
    !pathname.includes("/campaign") &&
    !pathname.includes("/discover") &&
    !pathname.includes("game") &&
    !pathname.includes("payment") &&
    !pathname.includes("settings");

  const showDiceGold =
    pathname.includes("/character/create") && activeStep === 7;
  const showDiceAbilities =
    pathname.includes("/character/create") && activeStep === 2;

  const showDiceGame = pathname.includes("/game/play");

  const characterSheet = pathname.includes("/character/sheet");

  const setMetadata = (url) => {
    let title = "DND AI | Dive into epic, story-driven adventures with free pen and paper games, powered by OpenAI’s cutting-edge artificial intelligence!";
    let description = "Join DNDAI to play Dungeons and Dragons with AI as Game Master. AI-supported pen and paper games.";
    let keywords = "AI adventure games, text-based games, interactive fiction, role-playing games, free online adventure games, AI Game, Free online game 2024";
    let ogTitle = "DND AI - Play an AI driven Story game and create breathtaking images in the process";
    let ogDescription = "Dive into epic, story-driven adventures with free pen and paper games, powered by OpenAI’s cutting-edge artificial intelligence.";
    let ogUrl = "https://www.dndai.app";
    let ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  
    if (url.includes("/character/sheet")) {
      title = "DND AI | Character Overview";
      description = "View your character's detailed overview in DND AI.";
      keywords = "DND AI, Character Overview, Role-playing games";
      ogTitle = "DND AI | Character Overview";
      ogDescription = "View your character's detailed overview in DND AI.";
    } else if (url === "/") {
      title = "DND AI | Home";
    } else if (url.includes("/campaign/")) {
      title = "DND AI | Campaign Details";
      description = "Explore the campaign details in DND AI.";
      keywords = "DND AI, Campaign Details, Role-playing games";
      ogTitle = "DND AI | Campaign Details";
      ogDescription = "Explore the campaign details in DND AI.";
    } else {
      const pageTitle = url.split("/").pop().replaceAll("-", " ");
      title = `${pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)} - DND AI`;
    }
  
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute("content", description);
    document.querySelector('meta[name="keywords"]').setAttribute("content", keywords);
    document.querySelector('meta[property="og:title"]').setAttribute("content", ogTitle);
    document.querySelector('meta[property="og:description"]').setAttribute("content", ogDescription);
    document.querySelector('meta[property="og:url"]').setAttribute("content", ogUrl);
    document.querySelector('meta[property="og:image"]').setAttribute("content", ogImage);
  
    window.gtag("config", "G-BTHMYX7TZ9", {
      page_title: title,
      page_path: url,
      screen_name: title,
    });
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      setMetadata(url);
    };
  
    setMetadata(pathname); // Set metadata on initial load
  
    if (window.gtag) {
      handleRouteChange(pathname);
    }
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <GoogleOAuthProvider clientId="1036030324483-ltg0nqpg0ectr5q3n7cfa66l7eq1ban8.apps.googleusercontent.com">
      <head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <link rel="icon" href="/favicon.ico" />
  <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-BTHMYX7TZ9`} async />
  <Script
    id="google-analytics"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BTHMYX7TZ9', {
          page_path: window.location.pathname,
        });
      `,
    }}
    async
  />
  <meta name="description" content="Join DNDAI to play Dungeons and Dragons with AI as Game Master. AI-supported pen and paper games." />
  <meta name="keywords" content="AI adventure games, text-based games, interactive fiction, role-playing games, free online adventure games, AI Game, Free online game 2024" />
  <meta property="og:title" content="DND AI - Play an AI driven Story game and create breathtaking images in the process" />
  <meta property="og:description" content="Dive into epic, story-driven adventures with free pen and paper games, powered by OpenAI’s cutting-edge artificial intelligence." />
  <meta property="og:url" content="https://www.dndai.app" />
  <meta property="og:image" content="https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp" />
  <meta property="og:type" content="website" />
</head>
        <body className="w-screen hide-scrollbar relative max-w-screen overflow-x-hidden bg-russianViolet">
          {showDiceGold && <div id="dice-box-gold" className="dice-box"></div>}
          {showDiceGame && <div id="dice-box-game" className="dice-box"></div>}
          {showDiceAbilities && (
            <div id="dice-box-abilities" className="dice-box"></div>
          )}
          <img
            src="/images/bg.png"
            alt="Background"
            className="h-screen w-screen object-fill fixed top-0 left-0 z-0"
          />
          <MemoizedNavbar
            characterSheet={characterSheet}
            variant={isTransparentNavbar ? "transparent" : "glass"}
          />
          <main className="z-[1]">{children}</main>
          {showFooter && <MemoizedFooter />}
          <Suspense fallback={null}>
            <CreditsDialogue />
          </Suspense>
          <div className="!z-[50]">
            <Toaster />
          </div>
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}

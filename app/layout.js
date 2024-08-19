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

function getMetaTags(pathname) {
  let title = "DND AI | Dive into epic, story-driven adventures with free pen and paper games, powered by OpenAI’s cutting-edge artificial intelligence!";
  let description = "Join DNDAI to play Dungeons and Dragons with AI as Game Master. AI-supported pen and paper games.";
  let keywords = "AI adventure games, text-based games, interactive fiction, role-playing games, free online adventure games, AI Game, Free online game 2024";
  let ogTitle = "DND AI - Play an AI driven Story game and create breathtaking images in the process";
  let ogDescription = "Dive into epic, story-driven adventures with free pen and paper games, powered by OpenAI’s cutting-edge artificial intelligence.";
  let ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  let ogUrl = "https://www.dndai.app";

  if (pathname.includes("/character/sheet")) {
    title = "DND AI | Character Overview";
    description = "View and manage your character sheet in DNDAI.";
    keywords = "character sheet, DnD AI, role-playing games, RPG character management";
    ogTitle = "DND AI - Character Overview";
    ogDescription = "Manage your character sheet and track your progress in DNDAI.";
  } else if (pathname === "/") {
    title = "DND AI | Home";
    description = "Welcome to DNDAI - Dive into epic, AI-driven adventures!";
    keywords = "home, DnD AI, AI adventure games, free online games";
  } else if (pathname.includes("/campaign/")) {
    title = "DND AI | Campaign Details";
    description = "Explore exciting campaigns and adventures in DNDAI.";
    keywords = "campaigns, adventures, AI game master, DnD AI";
    ogTitle = "DND AI - Campaign Details";
    ogDescription = "Dive into detailed campaigns and epic stories.";
  } else if (pathname.includes("/auth")) {
    title = "DND AI | Authentication";
    description = "Authenticate to access your DNDAI account and continue your adventures.";
    keywords = "authentication, login, sign up, DnD AI";
  }

  // Add more conditions as needed for other paths.

  return { title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl };
}


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

  const { title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl } = getMetaTags(pathname);

  useEffect(() => {
    const setDocumentTitle = (url) => {
      document.title = title;
      window.gtag("config", "G-BTHMYX7TZ9", {
        page_title: title,
        page_path: url,
        screen_name: title,
      });
    };

    setDocumentTitle(pathname);
    const handleRouteChange = (url) => {
      setDocumentTitle(url);
    };
    if (window.gtag) {
      handleRouteChange(pathname);
    }
  }, [pathname, title]);

  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <GoogleOAuthProvider clientId="1036030324483-ltg0nqpg0ectr5q3n7cfa66l7eq1ban8.apps.googleusercontent.com">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link rel="icon" href="/favicon.ico" />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-BTHMYX7TZ9`}
            async
          />
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
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta property="og:title" content={ogTitle} />
          <meta property="og:description" content={ogDescription} />
          <meta property="og:url" content={ogUrl} />
          <meta property="og:image" content={ogImage} />
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

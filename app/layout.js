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
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);

function getMetaTags(pathname) {
  let title = "DND AI ";
  let description = "Join DNDAI to play Dungeons and Dragons with AI as Game Master. AI-supported pen and paper games.";
  let keywords = "AI adventure games, text-based games, interactive fiction, role-playing games, free online adventure games, AI Game, Free online game 2024";
  let ogTitle = "DND AI | Play an AI driven Story game and create breathtaking images in the process";
  let ogDescription = "Dive into epic, story-driven adventures with free pen and paper games, powered by OpenAI’s cutting-edge artificial intelligence.";
  let ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  let ogUrl = "https://www.dndai.app";

  if (pathname.includes("/character/create")) {
    title = "DND AI | Create Character";
    description = "Create your own unique fantasy character effortlessly. Choose from various races, classes, abilities, backgrounds, alignments, starting equipment, and more. Let our AI bring your character to life in seconds!";
    keywords = "fantasy character creation, RPG character generator, custom character builder, AI character creation, RPG classes and races, D&D character generator, role-playing game tools, character background generator";
    ogTitle = "DND AI | Create Character";
    ogDescription = "Build your perfect fantasy character with ease! Select your race, class, abilities, and more—our AI does the rest. Start your RPG adventure now!";
    ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/tutorial/tutorial-1.webp";
    ogUrl = `https://dndai.app${pathname}`;
  }else if (pathname.includes("/character/my-characters")) {
    title = "DND AI | My Characters";
    description = "View your uniquely crafted characters or start creating a new one with our intuitive AI-powered generator. Manage existing characters or dive into the fun of character creation with endless customization options.";
    keywords = "view created characters, manage characters, create new character, character management, AI character generator, RPG character builder, game character customization, character creation tool, custom characters";
    ogTitle = "DND AI | My Characters";
    ogDescription = "Explore your uniquely created characters or kickstart the creation of a new one with our easy-to-use AI character generator. Manage your personas or begin a new adventure today!";
    ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
    ogUrl = `https://dndai.app${pathname}`;
  } else if (pathname.includes("/character/sheet/")) {
    title = "DND AI | Character Overview";
    description = "Check out in-depth details of your character with our comprehensive Character Sheet. View stats, items, images, XP, HP, level, and track your character's progress with ease. ";
    keywords = "character overview, character details, character sheet, RPG Character stats, character items, character image, XP, HP, level, character progress, character management, RPG character details, gaming character sheet";
    ogTitle = "DND AI | Create Character";
    ogDescription = "Full details of your character with our detailed Character Sheet. Check stats, items, images, XP, HP, levels, more... and monitor progress";
    ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
    ogUrl = `https://dndai.app${pathname}`;
  }  
  else if (pathname === "/") {
    title = "DND AI | Home";
    description = "DnD AI, where Dungeons & Dragons meets cutting-edge AI! Create your hero, embark on epic quests, and let our AI Dungeon Master weave thrilling stories from your choices. Adventure awaits at dndai.app – dive in now!";
    ogTitle = "DND AI | Create Character";
    ogDescription = "Enter the world of DnD AI – a fusion of Dungeons & Dragons and AI magic. Forge your hero, tackle epic quests, and let our AI DM craft unforgettable adventures from your choices. Start your legendary journey at dndai.app!";
    ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
    ogUrl = `https://dndai.app${pathname}`;
    keywords = "DnD AI adventure, Dungeons & Dragons online, AI Dungeon Master, create RPG characters, epic quests, dynamic storytelling, solo RPG, multiplayer RPG, quest generator, DnD adventures";
  }
  else if (pathname.includes("/campaign/create")) {
    title = "DND AI | Create Campaign";
    description = "Create your own epic campaign on DnD AI! Customize plots, hooks, timeframes, and scene settings, and let our AI weave a magnificent adventure. Step into the world of endless possibilities and craft unforgettable stories at dndai.app!.";
    keywords = "create DnD campaign, AI campaign creation, custom RPG plot, campaign hook, campaign scene setting, AI-driven adventures, RPG campaign generator, dynamic storytelling, Dungeons & Dragons campaigns";
    ogTitle = "DND AI | Create Campaign";
    ogDescription = "Dive into detailed campaigns and epic stories.";
    ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/tutorial/tutorial-2.webp";
    ogUrl = `https://dndai.app${pathname}`;
  }
 else if (pathname.includes("/campaign/my-campaigns")) {
  title = "DND AI | My Campaigns";
  description = "Discover and manage your epic DnD campaigns on DnD AI! View a selection of your custom adventures, or create new, legendary tales with our AI-driven campaign generator. Your next great story awaits at dndai.app!";
  keywords = "view DnD campaigns, manage RPG campaigns, custom campaign cards, AI campaign generator, create new DnD adventures, campaign management, RPG storytelling, personalized campaigns, Dungeons & Dragons";
  ogTitle = "DND AI | My Campaigns";
  ogDescription = "Explore your epic DnD campaigns on DnD AI! Browse through your custom creations or kickstart a new adventure with our AI-powered campaign generator. Your next legendary tale begins at dndai.app!";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}

//WOULD LOVE TO MAKE THIS DYNAMIC BUT IM STRUGGLING, Aimen halp x) want to have campaign.title as title, campaign.adventure.plot as description and adventure.worldmapurl as og:image
else if (pathname.match(/^\/campaign\/[a-zA-Z0-9]{24}$/)) {
  title = "DND AI | Campaign Details";
  description = "Details of your epic campaign on DnD AI! Explore plot twists, character arcs, settings, and more. Let our AI bring your custom adventure to life with captivating storytelling.";
  keywords = "campaign details, DnD campaign overview, plot details, RPG campaign exploration, custom adventure breakdown, AI storytelling, Dungeons & Dragons, character arcs, setting details, RPG campaign management";
  ogTitle = "DND AI | Campaign Details";
  ogDescription = "See details of your epic campaign on DnD AI! Explore your plot, hook, and settings in depth, and watch as our AI enhances your custom adventure with vivid storytelling.";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/derpatron/1721941622500.webp";
  ogUrl = `https://dndai.app${pathname}`;
} else if (pathname.match(/^\/campaign\/public(\?page=\d+)?$/)) {
  title = "DND AI | Public Campaigns";
  description = "Epic collection of public campaigns on DnD AI! Browse thrilling adventures with stunning images, select your favorites, and dive into detailed stories crafted by our users and AI.";
  keywords = "public DnD campaigns, browse RPG adventures, AI-generated stories, campaign gallery, select public campaigns, campaign images, RPG storytelling, Dungeons & Dragons adventures, public campaign details, RPG exploration";
  ogTitle = "DND AI | Public Campaigns";
  ogDescription = "Uncover a world of public campaigns on DnD AI! Browse captivating adventures with rich images, select and expand for detailed exploration, and embark on thrilling quests. Discover epic stories at dndai.app!";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
} else if (pathname.includes("/auth")) {
  title = "DND AI | Authentication";
  description = "Authenticate to access your DNDAI account and continue your adventures.";
  keywords = "authentication, login, sign up, DnD AI";
  ogTitle = "DND AI | Authentication";
  ogDescription = "Authenticate to access your DNDAI account and continue your adventures.";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}
else if (pathname.match(/^\/discover\/gallery(\?page=\d+)?$/)) {
  title = "DND AI | Gallery";
  description = "Unveil stunning images in the DnD AI Image Gallery! Explore captivating visuals created during gameplay, all free to use and copyright-free. Ignite your imagination and download your favorites at dndai.app";
  keywords = "image gallery, stunning game visuals, free to use images, copyright-free RPG images, AI-generated artwork, gameplay images, Dungeons & Dragons gallery, downloadable RPG images, captivating game art, RPG visuals";
  ogTitle = "DND AI | Gallery";
  ogDescription = "Unveil stunning images in the DnD AI Image Gallery! Explore captivating visuals created during gameplay, all free to use and copyright-free. Ignite your imagination and download your favorites";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}
else if (pathname.includes("/discover")) {
  title = "DND AI | Discover";
  description = "Continue recently played campaigns, explore your favorites, and dive into public games. Check out an overview of your created characters and let the next epic journey begin at dndai.app!";
  keywords = "discover DnD campaigns, recently played games, favorite campaigns, public RPG adventures, character overview, AI-generated stories, continue RPG adventure, Dungeons & Dragons, RPG exploration, campaign favorites";
  ogTitle = "DND AI | Discover";
  ogDescription = "Dive into the DnD AI Image Gallery! Browse and download stunning, copyright-free images created during gameplay. Perfect for igniting your imagination and enhancing your adventures. Explore now at dndai.app!";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}
else if (pathname.includes("/about-us")) {
  title = "DND AI | About Us";
  description = "Learn all about DnD AI – where Dungeons & Dragons meets AI magic! Discover our vision, mission, and the passionate team behind the platform. Join us in revolutionizing the world of RPG adventures at dndai.app!";
  keywords = "about DnD AI, our mission, our vision, RPG innovation, AI and Dungeons & Dragons, team behind DnD AI, platform story, RPG community, about our team, DnD AI journey";
  ogTitle = "DND AI | About Us";
  ogDescription = "Get to know DnD AI! Discover our vision, mission, and the passionate team committed to blending AI with the magic of Dungeons & Dragons. Join us on our epic journey at dndai.app!";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}
else if (pathname.includes("/pricing")) {
  title = "DND AI | Premium";
  description = "pricing options at DnD AI! Choose between subscription and instant buy. Use Legendary Gems to generate stunning images and custom campaigns, and Mythic Gems to create characters and dive into epic quests.";
  keywords = "DnD AI pricing, subscription options, instant buy, Legendary Gems, Mythic Gems, custom campaigns, generate character portraits, RPG adventure, AI-driven storytelling, Dungeons & Dragons, free";
  ogTitle = "DND AI | Premium";
  ogDescription = "Pricing options at DnD AI! Unlock the magic with Legendary and Mythic Gems – perfect for generating stunning images, custom campaigns, and diving into epic quests.";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}
else if (pathname.includes("/imprint")) {
  title = "DND AI | Imprint";
  description = "DnD AI imprint, legal information, company details, contact information, regulatory compliance, company address, legal notice, DnD AI contact, company imprint, legal page";
  keywords = "DnD AI pricing, subscription options, instant buy, Legendary Gems, Mythic Gems, custom campaigns, generate character portraits, RPG adventure, AI-driven storytelling, Dungeons & Dragons, free";
  ogTitle = "DND AI | Imprint";
  ogDescription = "Find important legal information and contact details for DnD AI on our Imprint page. Get to know the company behind the platform, including address, regulatory details, and how to reach us for inquiries. ";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}
else if (pathname.includes("/privacy")) {
  title = "DND AI | Privacy";
  description = "Understand how DnD AI collects, uses, and protects your personal information. Our Privacy Policy provides detailed information on data handling, user privacy, and security measures. Visit dndai.app to learn more about our commitment to your privacy.";
  keywords = "DnD AI privacy policy, personal data protection, data handling, user privacy, data security, privacy practices, information collection, data use, privacy commitment, DnD AI";
  ogTitle = "DND AI | Privacy";
  ogDescription = "Learn how DnD AI safeguards your personal information. Our Privacy Policy outlines data collection, usage, and protection measures, ensuring your privacy and security. Read more at dndai.app.";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}
else if (pathname.includes("/cookies")) {
  title = "DND AI | Cookies";
  description = "Learn about the cookies used on DnD AI. Our Cookies Policy explains what cookies are, how we use them to enhance your experience, and how you can manage your cookie preferences. Visit dndai.app for more details.";
  keywords = "DnD AI cookies policy, cookies usage, manage cookies, cookie preferences, website cookies, data tracking, user experience, cookies management, DnD AI";
  ogTitle = "DND AI | Cookies";
  ogDescription = "Discover how DnD AI uses cookies to improve your experience. Our Cookies Policy provides details on what cookies are, how we use them, and how you can manage your settings. Learn more at dndai.app.";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}
else if (pathname.includes("/terms")) {
  title = "DND AI | Terms and Conditions";
  description = "Read the Terms and Conditions for DnD AI. Our terms outline the rules and guidelines for using our platform, including user responsibilities, rights, and legal agreements. Visit dndai.app to understand our usage policies.";
  keywords = "DnD AI terms and conditions, usage policies, user guidelines, platform rules, legal agreements, user responsibilities, DnD AI rules, terms of service, DnD AI policies";
  ogTitle = "DND AI | Terms and Conditions";
  ogDescription = "erms and Conditions for using DnD AI. Understand the rules, user responsibilities, and legal agreements that govern our platform. Stay informed at dndai.app.";
  ogImage = "https://dndai-images.s3.eu-central-1.amazonaws.com/Headers/Header.webp";
  ogUrl = `https://dndai.app${pathname}`;
}


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
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;700&display=swap" as="style" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap" as="style" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap" as="style" />
          <link rel="preload" href="/fonts/HelveticaNowDisplay-Medium.ttf" as="font" type="font/ttf" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap" />
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
          <Image
            src="/images/bg.png"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="fixed top-0 left-0 z-0"
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
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
import CreditsDialogue from "@/components/ui/Shared/Dialogue/GetCredits";
import useStepperStore from "@/utils/characterStore";

import useUserStore from "@/utils/userStore";
import Cookie from "universal-cookie";
import { getMetaTags } from "@/utils/metaTags";
import { cn } from "@/lib/utils";
import NewGameModal from "@/components/newgame/index";
const inter = Inter({ subsets: ["latin"] });

const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { activeStep } = useStepperStore();
  const { user } = useUserStore();
  const cookies = new Cookie();

  const isTransparentNavbar =
    pathname.includes("/auth") || pathname.includes("/game/play");
  const showFooter =
    !pathname.includes("/auth") &&
    !pathname.includes("/character") &&
    !pathname.includes("/campaign") &&
    !pathname.includes("game") &&
    !pathname.includes("payment") &&
    !pathname.includes("settings");

  const showDiceGold =
    pathname.includes("/character/create") && activeStep === 7;
  const showDiceAbilities =
    pathname.includes("/character/create") && activeStep === 2;

  const showDiceGame = pathname.includes("/game/play");

  const characterSheet = pathname.includes("/character/sheet");
  const noMaxWidth = pathname.includes("/game/play") || pathname === "/";
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogVideo,
    ogWebsite,
  } = getMetaTags(pathname);

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
  useEffect(() => {
    //get token
    const token = cookies.get("token");
    if (!token && user?.token) {
      cookies.set("token", user.token, {
        path: "/",
        secure: true,

        sameSite: "Strict",
      });
    }
  }, [user]);
  return (
    <html lang='en' suppressHydrationWarning className={inter.className}>
      <GoogleOAuthProvider clientId='1036030324483-ltg0nqpg0ectr5q3n7cfa66l7eq1ban8.apps.googleusercontent.com'>
        <head>
          <meta
            name='viewport'
            content='width=device-width, viewport-fit=cover'
          />
          <meta charSet='UTF-8' />
          <title>{ogTitle}</title>
          <meta name='author' content='dndai.app' />
          <meta name='robots' content='index, follow' />
          <meta name='language' content='English' />
          <meta name='revisit-after' content='daily' />
          <meta name='theme-color' content='#0A0A21' />

          <meta property='og:title' content={ogTitle} />
          <meta property='og:description' content={ogDescription} />
          <meta property='og:url' content={ogUrl} />
          <meta property='og:image' content={ogImage} />
          <meta property='og:video' content={ogVideo} />
          <meta property='og:type' content={ogWebsite} />
          <meta property='og:site_name' content='DND AI' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={ogTitle} />
          <meta name='twitter:description' content={ogDescription} />
          <meta name='twitter:image' content={ogImage} />
          <meta name='twitter:site' content='@dndai_app' />
          <meta name='twitter:creator' content='@dndai_app' />

          <meta name='description' content={description} />
          <meta name='keywords' content={keywords} />

          <meta name='mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta name='apple-mobile-web-app-title' content='DND AI' />
          <meta name='application-name' content='DND AI' />
          <meta name='msapplication-TileColor' content='#0A0A21' />
          <meta name='msapplication-TileImage' content={ogImage} />
          <link 
            rel="preload" 
            href="/fonts/HelveticaNowDisplay-Medium.woff2" 
            as="font" 
            type="font/woff2" 
            crossOrigin="anonymous"
          />
          <link 
            rel="preload" 
            href="/fonts/RobotoMono-VariableFont_wght.woff2" 
            as="font" 
            type="font/woff2" 
            crossOrigin="anonymous"
          />
          <link rel='canonical' href={ogUrl} />
          <link rel="manifest" href="/manifest.webmanifest"/>
          <link rel="icon" href="/favicon.ico" sizes="32x32"/>
          <link rel="icon" href="/icon.svg" type="image/svg+xml"/>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
          <Script
            strategy='afterInteractive'
            src={`https://www.googletagmanager.com/gtag/js?id=G-BTHMYX7TZ9`}
            async
          />
          <Script
            id='google-analytics'
            strategy='afterInteractive'
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
          />
        </head>
        <body className='w-screen hide-scrollbar relative max-w-screen overflow-x-hidden bg-russianViolet'>
          {showDiceGold && <div id='dice-box-gold' className='dice-box'></div>}
          {showDiceGame && <div id='dice-box-game' className='dice-box '></div>}
          {showDiceAbilities && (
            <div id='dice-box-abilities' className='dice-box'></div>
          )}
          <img
            src='/images/bg.png'
            alt='Background'
            priority='true'
            title='Background Gradient'
            className='fixed w-screen h-screen top-0 left-0 z-0 object-cover'
          />
          <MemoizedNavbar
            characterSheet={characterSheet}
            variant={isTransparentNavbar ? "transparent" : "glass"}
          />

          <main
            className={cn("z-[1]", !noMaxWidth && "mx-auto max-w-[1536px]")}
          >
            <NewGameModal />
            {children}
          </main>
          {showFooter && <MemoizedFooter />}
          <Suspense fallback={null}>
            <CreditsDialogue />
          </Suspense>
          <div className='!z-[50]'>
            <Toaster />
          </div>
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}

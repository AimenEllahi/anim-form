import { NextResponse } from "next/server";
import { i18n } from "./i18n";

// Use locales from the i18n configuration
const locales = i18n.locales;

// Default to English if no match is found
const defaultLocale = i18n.defaultLocale || "en";

// Function to get the default locale based on the user's IP address
async function getDefaultLocaleFromIP(ip) {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    const regionCode = data.country_code.toLowerCase();
    const defaultLanguage =
      {
        us: "en",
        de: "de",
        es: "es",
        fr: "fr",
        it: "it",
        pt: "pt",
        ru: "ru",
        ko: "ko",
        cn: "zh",
      }[regionCode] || "en"; // Default to English if region is not matched

    return defaultLanguage || defaultLocale;
  } catch (error) {
    console.error(error);
    return defaultLocale; // Fall back to the default locale
  }
}

export default async function middleware(req) {
  const url = req.nextUrl.clone(); // Clone the URL for manipulation
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || ""; // Base URL from environment
  const token = req.cookies.get("token")?.value; // Retrieve token from cookies
  const selectedLanguage = req.cookies.get("selectedLanguage")?.value; // Retrieve selected language from cookies
  const pathname = url.pathname;

  // Get user's IP address
  const userIP = req.headers.get("x-forwarded-for") || req.ip || "127.0.0.1"; // Fallback to localhost for testing

  // Determine the default locale based on the cookie or IP address
  let detectedDefaultLocale;
  if (selectedLanguage && locales.includes(selectedLanguage)) {
    detectedDefaultLocale = selectedLanguage; // Use the cookie if present and valid
  } else {
    detectedDefaultLocale = await getDefaultLocaleFromIP(userIP); // Fallback to IP-based locale detection
  }

  // Check if the pathname already contains a locale
  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));

  if (!hasLocale) {
    const detectedLocale = detectedDefaultLocale;
    url.pathname = `/${detectedLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  // Redirect if not logged in and accessing restricted pages
  if (
    !token &&
    (pathname.includes("my-account") ||
      pathname.includes("emblems") ||
      pathname.includes("favorites"))
  ) {
    url.pathname = `/${detectedDefaultLocale}/`;
    return NextResponse.redirect(url);
  }

  // Redirect if logged in and accessing auth pages
  if (token && pathname.includes("/auth")) {
    url.pathname = `/${detectedDefaultLocale}/`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (SEO metadata file)
     * - public (public files)
     * - images (image files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|public|images|models|fonts|audio|gems|Icons|parallax|Logo|env|privacy|cookies|faq|imprint|instructions|terms|shop|assets|manifest.webmanifest|icon-192.png|videos|team).*)",
  ],
};

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const NavMenu = ({ menu, disable }) => {
  const getLinkHref = (link) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    switch (link) {
      case "Discord":
        return "https://discord.gg/aEdqs8hahN"; // Discord invite URL
      case "Tiktok":
        return "https://www.tiktok.com/@dndai.app"; 
      case "Instagram":
        return "https://www.instagram.com/dnd.ai.app/"; 
      case "Twitter":
        return "https://x.com/dndai_app"; // Replace with your Twitter URL
      case "Terms and Conditions":
        return `/terms`; // Imprint page URL
      case "Privacy":
        return `/privacy`; // Privacy page URL
      case "Imprint":
        return `/imprint`; // Imprint page URL
      case "Cookies":
        return `/cookies`;
      case "About Us":
        return `/about-us`; // Imprint page URL
      case "Contact Us":
        return `/contact-us?type=support`; // Contact page URL
      case "Give us Feedback":
        return `/contact-us?type=feedback`; // Feedback page URL
      case "News":
        return `/news`;
      case "Report a Bug":
        return `/contact-us?type=bug`; // Bug report page URL
      default:
        return "#"; // Default to # or another appropriate fallback
    }
  };

  return (
    <div className='w-auto md:w-1/2 lg:w-1/4 py-2 flex flex-col gap-9 z-10 '>
      <footer
        className={`text-irisPurpleLight running-text-mono ${
          disable ? "opacity-50" : ""
        }`}
      >
        {menu.heading}
      </footer>
      <ul className='flex flex-col gap-4'>
        {menu.navlinks.map((link, index) => (
          <li key={index}>
            <Link
              href={getLinkHref(link)}
              className={`text-white ease-animate hover:text-gray2 running-text ${
                disable ? "pointer-events-none text-gray-400" : ""
              }`}
              target={
                link === "Discord" || link === "Twitter" ? "_blank" : undefined
              }
              rel={
                link === "Discord" || link === "Twitter"
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={cn(
        "bg-russianViolet w-full text-white pt-0 pb-16 md:px-12 px-5 md:py-16",
        pathname === "/discover" && "hidden md:block",
        pathname !== "/" && "max-w-[1536px] mx-auto"
      )}
    >
      <div className='w-full border'>
        <div className='w-full md:w-1/2 flex flex-wrap md:gap-8 gap-y-12 justify-between'>
          {/* Help / Support Section */}
          <NavMenu
            menu={{
              heading: "HELP AND SUPPORT",
              navlinks: [
                "About Us",
                "News",
                "Contact Us",
                "Give us Feedback",
                "Report a Bug",
              ],
            }}
          />
          <NavMenu
            menu={{
              heading: "LEGAL",
              navlinks: [
                "Imprint",
                "Terms and Conditions",
                "Privacy",
                "Cookies",
              ],
            }}
          />
          <NavMenu
            menu={{
              heading: "SOCIAL MEDIA",
              navlinks: ["Discord", "Twitter","Tiktok", "Instagram"],
            }}
            disable={false} // Disable this menu
          />
        </div>
        {/* Copyright Notice */}
        <div className='!z-10 mt-14 running-text-mono'>
          <p className='text-left relative z-10 text-white'>
            DND AI © 2024 ALL RIGHTS RESERVED
          </p>
          <p className='text-left md:text-right relative z-10 text-white pt-4 md:pt-0'>
            DESIGNED WITH ♥ BY
            <a href='https://www.nexene.at' target='_blank'>
              {" "}
              NEXENE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

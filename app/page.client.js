"use client";
import Landing from "@/components/landingPage/index";
import { useEffect } from "react";

export default function PageClient() {
  useEffect(() => {
    document.title = "My Dynamic Page Title"; // Set your dynamic title here
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "This is a dynamic description for my page.";
    document.head.appendChild(metaDescription);

    // Clean up the meta tag when the component unmounts
    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return <Landing />;
}
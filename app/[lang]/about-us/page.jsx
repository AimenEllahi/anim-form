import React from "react";
import AboutUs from "@/components/aboutUs/index";
import { getDictionary } from "../dictionaries";

export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return <AboutUs dictionary={dict.aboutUs} />;
}

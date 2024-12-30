import React from "react";
import Price from "@/components/pricing/index";
import { getDictionary } from "../dictionaries";

export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return <Price dictionary={dict.supportUs} />;
}

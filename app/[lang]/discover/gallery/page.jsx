import React from "react";
import { getDictionary } from "../../dictionaries";
import Gallery from "./delegator";
export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return <Gallery dictionary={dict.gallery} />;
}

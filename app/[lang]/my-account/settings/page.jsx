import React from "react";
import Account from "@/components/account/settings/index";
import { getDictionary } from "../../dictionaries";

export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return <Account dictionary={dict.accountSettings} />;
}

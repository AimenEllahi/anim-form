import Campaigns from "./delegator";
import { getDictionary } from "../dictionaries";
export default async function page({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);
  return <Campaigns dictionary={dict.discoverCampaigns} />;
}
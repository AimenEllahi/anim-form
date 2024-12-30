import Landing from "@/components/landingPage/index";
import { getDictionary } from "./dictionaries";


export default async function Home({ params }) {
  const lang = (await params).lang;
  const dict = await getDictionary(lang);

  return <Landing dictionary={dict.landingPage} />;
}

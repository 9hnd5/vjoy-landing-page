import { getDouments } from "@/utils/firestore";
import HomePage from "./home-page";

export default async function Page() {
  const docs = await getDouments("users");

  return <HomePage docs={docs.result} />;
}

import { getDouments } from "@/utils/firestore";
import HomePage from "./home-page";
export const revalidate = 0;
export default async function Page() {
  const docs = await getDouments("users");
  
  return <HomePage docs={docs.result} />;
}

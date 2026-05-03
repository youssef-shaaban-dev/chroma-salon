import { getMessages } from "next-intl/server";
import { PageData } from "../../lib/data";
import HomeClient from "./HomeClient";

export default async function Page() {
  const messages = await getMessages();
  const pageTranslations = (messages as Record<string, unknown>).page as Omit<
    PageData,
    "fontHead" | "fontBody"
  >;

  return <HomeClient pageTranslations={pageTranslations} />;
}


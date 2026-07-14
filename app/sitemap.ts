import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { insurerProfiles } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://oc.documenty.pl";
  const lastModified = new Date("2026-07-14");
  const routes = [
    "",
    "/generator",
    "/dokumenty",
    "/oswiadczenie-sprawcy",
    "/wspolne-oswiadczenie",
    "/umowa-kupna-sprzedazy",
    "/umowa-kupna-sprzedazy-wspolwlasciciel",
    "/umowa-cesji-praw-z-polisy",
    "/umowa-darowizny-samochodu",
    "/odstapienie-od-umowy-ubezpieczenia-zawartej-na-odleglosc",
    "/ubezpieczyciele",
    "/blog",
    "/faq",
    "/kontakt",
    "/polityka-prywatnosci",
    "/regulamin",
  ];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified, changeFrequency: "weekly" as const, priority: route === "" ? 1 : 0.8 })),
    ...blogPosts.map(({ slug }) => ({ url: `${base}/blog/${slug}`, lastModified, changeFrequency: "weekly" as const, priority: 0.6 })),
    ...insurerProfiles.map(({ slug }) => ({ url: `${base}/ubezpieczyciele/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}

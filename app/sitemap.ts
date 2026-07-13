import type { MetadataRoute } from "next";
import { insurerProfiles } from "@/lib/catalog";

export default function sitemap():MetadataRoute.Sitemap{const base="https://oc.documenty.pl";const lastModified=new Date("2026-07-14");const routes=["","/generator","/dokumenty","/oswiadczenie-sprawcy","/wspolne-oswiadczenie","/ubezpieczyciele","/faq","/kontakt","/polityka-prywatnosci","/regulamin"];return[...routes.map((route)=>({url:`${base}${route}`,lastModified,changeFrequency:"weekly" as const,priority:route===""?1:.8})),...insurerProfiles.map(({slug})=>({url:`${base}/ubezpieczyciele/${slug}`,lastModified,changeFrequency:"monthly" as const,priority:.7}))];}


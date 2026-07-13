import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DocumentsBrowser } from "@/features/documents/DocumentsBrowser";

export const metadata: Metadata = { title: "Wzory dokumentów ubezpieczeniowych", description: "Wybierz aktualny wzór dokumentu OC i wypełnij go online." };

export default function DocumentsPage(){return <><Header/><main id="main-content"><div className="container"><Breadcrumbs items={[{label:"Dokumenty"}]}/></div><DocumentsBrowser/></main><Footer/></>}


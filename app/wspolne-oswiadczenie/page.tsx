import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JointStatementForm } from "@/features/collision/JointStatementForm";

export const metadata:Metadata={title:"Wspólne oświadczenie o zdarzeniu drogowym",description:"Wypełnij wspólne oświadczenie sprawcy i uczestnika zdarzenia, dodaj podpisy i pobierz PDF."};
export default function JointStatementPage(){return <><Header/><main id="main-content" className="generatorPage"><div className="container"><Breadcrumbs items={[{label:"Dokumenty",href:"/dokumenty"},{label:"Wspólne oświadczenie"}]}/><div className="generatorIntro"><span className="eyebrow">Dokument po kolizji</span><h1>Wspólne oświadczenie o zdarzeniu drogowym</h1><p>Wypełnij dane obu stron, opisz zdarzenie i dodaj czytelne podpisy.</p></div><JointStatementForm/></div></main><Footer/></>}


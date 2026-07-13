import type { Metadata } from "next";
import { CheckCircle2, LockKeyhole, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GeneratorForm } from "@/features/generator/GeneratorForm";

export const metadata:Metadata={title:"Generator wypowiedzenia OC",description:"Wybierz ubezpieczyciela i przygotuj wypowiedzenie umowy OC online krok po kroku.",alternates:{canonical:"/generator"}};

export default function GeneratorPage(){return <><Header/><main id="main-content" className="generatorPage"><div className="container"><div className="generatorIntro enterpriseGeneratorIntro"><span className="premiumPill"><Sparkles/> Generator online</span><h1>Wypowiedzenie umowy OC</h1><p>Wybierz ubezpieczyciela, uzupełnij dane i pobierz profesjonalny dokument PDF.</p><div><span><CheckCircle2/> Bez konta</span><span><LockKeyhole/> Zapis lokalny</span><span><CheckCircle2/> Podpis zdjęciem</span></div></div><GeneratorForm/></div></main><Footer/></>}

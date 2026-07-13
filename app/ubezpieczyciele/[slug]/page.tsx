import type { Metadata } from "next";
import { ArrowRight, Building2, CheckCircle2, FileText, Mail, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { insurerProfiles } from "@/lib/catalog";

interface InsurerPageProps { params: Promise<{slug:string}> }

export function generateStaticParams(){return insurerProfiles.filter((item)=>item.slug!=="pzu").map(({slug})=>({slug}));}

export async function generateMetadata({params}:InsurerPageProps):Promise<Metadata>{const{slug}=await params;const insurer=insurerProfiles.find((item)=>item.slug===slug);if(!insurer)return{};return{title:`Dokumenty ${insurer.name} — formularze online`,description:`Wypowiedzenie OC, zwrot składki i pozostałe dokumenty ${insurer.name} do wypełnienia online.`};}

export default async function InsurerPage({params}:InsurerPageProps){const{slug}=await params;const insurer=insurerProfiles.find((item)=>item.slug===slug);if(!insurer||slug==="pzu")notFound();const docs=[{title:`Wypowiedzenie OC ${insurer.name}`,href:"/generator"},{title:`Zwrot składki OC ${insurer.name}`,href:null},{title:`Reklamacja do ${insurer.name}`,href:null},{title:"Oświadczenie sprawcy kolizji",href:"/oswiadczenie-sprawcy"}];return <><Header/><main id="main-content"><div className="container"><Breadcrumbs items={[{label:"Ubezpieczyciele",href:"/ubezpieczyciele"},{label:insurer.name}]}/></div><section className="companyHero"><div className="container companyHeroGrid"><div><span className="eyebrow"><ShieldCheck/> Formularze OC</span><h1>Dokumenty {insurer.name}</h1><p>Przygotuj dokument online, pobierz gotowy PDF i przekaż go ubezpieczycielowi.</p><div className="companyChecks"><span><CheckCircle2/>Czytelne formularze</span><span><CheckCircle2/>Gotowe w kilka minut</span><span><CheckCircle2/>Dane przetwarzane lokalnie</span></div><Link className="button buttonPrimary buttonLarge" href="/generator">Utwórz wypowiedzenie OC <ArrowRight/></Link></div><div className="companyMark"><Building2/><strong>{insurer.name}</strong><small>Dokumenty i formularze online</small></div></div></section><section className="section soft"><div className="container companyLayout"><div><h2>Dokumenty</h2><div className="companyDocs">{docs.map((doc)=><article key={doc.title}><span><FileText/></span><div><h3>{doc.title}</h3><p>{doc.href?"Wypełnij online i pobierz gotowy dokument.":"Ten generator jest w przygotowaniu."}</p></div>{doc.href?<Link href={doc.href}>Wypełnij <ArrowRight/></Link>:<span className="comingSoon">W przygotowaniu</span>}</article>)}</div></div><aside className="contactCard"><h2>Jak wysłać dokument?</h2><p>Po wygenerowaniu dokumentu możesz przekazać go zgodnie z instrukcjami swojej firmy.</p><div><Mail/><span><strong>Online</strong><small>Formularz lub wiadomość e-mail</small></span></div><div><MapPin/><span><strong>Pocztą</strong><small>Na oficjalny adres ubezpieczyciela</small></span></div><Link className="button buttonOutline" href="/dokumenty">Zobacz wszystkie wzory</Link></aside></div></section></main><Footer/></>}


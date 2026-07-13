"use client";

import { ArrowRight, Download, FileSearch, FileText, Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { documentCatalog } from "@/lib/catalog";

const categories=["Wszystkie","Wypowiedzenia","Oświadczenia","Zwroty","Pojazd","Reklamacje"] as const;

function documentHref(slug:string){if(slug==="wypowiedzenie-oc")return"/generator";if(slug==="oswiadczenie-sprawcy")return"/oswiadczenie-sprawcy";if(slug==="wspolne-oswiadczenie")return"/wspolne-oswiadczenie";return null;}
function pdfHref(slug:string){if(slug==="oswiadczenie-sprawcy")return"/wzory/oswiadczenie-sprawcy-wzor.pdf";if(slug==="wspolne-oswiadczenie")return"/wzory/wspolne-oswiadczenie-wzor.pdf";if(slug==="wypowiedzenie-oc")return"/wzory/wypowiedzenie-oc-wzor.pdf";return null;}

export function DocumentsBrowser(){
  const[query,setQuery]=useState("");
  const[category,setCategory]=useState<(typeof categories)[number]>("Wszystkie");
  const documents=useMemo(()=>{const normalized=query.trim().toLocaleLowerCase("pl");return documentCatalog.filter((document)=>(category==="Wszystkie"||document.category===category)&&(!normalized||`${document.title} ${document.description} ${document.category}`.toLocaleLowerCase("pl").includes(normalized)));},[query,category]);
  return <><section className="catalogHero"><div className="container"><span className="eyebrow">Biblioteka wzorów</span><h1>Wzory dokumentów</h1><p>Aktualne formularze OC gotowe do wypełnienia i pobrania.</p><label className="catalogSearch"><Search/><span className="srOnly">Szukaj dokumentu</span><input value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Szukaj dokumentu..."/>{query&&<button onClick={()=>setQuery("")} aria-label="Wyczyść wyszukiwanie"><X/></button>}</label></div></section><section className="section"><div className="container catalogLayout"><aside className="categoryPanel"><strong>Kategorie</strong>{categories.map((item)=><button className={category===item?"selected":""} onClick={()=>setCategory(item)} key={item}>{item}<span>{item==="Wszystkie"?documentCatalog.length:documentCatalog.filter((doc)=>doc.category===item).length}</span></button>)}</aside><div><div className="mobileCategories" role="group" aria-label="Kategorie dokumentów">{categories.map((item)=><button className={category===item?"selected":""} onClick={()=>setCategory(item)} key={item}>{item}</button>)}</div><p className="resultsCount">Znaleziono: <strong>{documents.length}</strong></p>{documents.length?<div className="catalogList">{documents.map((doc)=>{const href=documentHref(doc.slug);return <article className="catalogCard" key={doc.slug}><span><FileText/></span><div><small>{doc.category}</small><h2>{doc.title}</h2><p>{doc.description}</p></div><div className="catalogActions">{pdfHref(doc.slug)&&<a className="pdfLink" href={pdfHref(doc.slug)??undefined} download><Download/> PDF</a>}{href?<Link className="button buttonOutline" href={href}>Wypełnij <ArrowRight/></Link>:<span className="comingSoon">W przygotowaniu</span>}</div></article>})}</div>:<div className="emptyDocuments"><FileSearch/><h2>Nie znaleziono dokumentów</h2><p>Zmień wyszukiwaną frazę lub wybierz inną kategorię.</p><button className="button buttonOutline" onClick={()=>{setQuery("");setCategory("Wszystkie");}}>Wyczyść filtry</button></div>}</div></div></section></>;
}

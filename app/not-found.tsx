import { ArrowLeft, FileQuestion, Search } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound(){return <><Header/><main id="main-content" className="notFoundPage"><div className="container notFoundGrid"><div><span className="premiumPill">Błąd 404</span><h1>Ten dokument<br/>gdzieś się zapodział.</h1><p>Sprawdź adres albo wróć do biblioteki wzorów. Wszystkie dostępne generatory nadal czekają na Ciebie.</p><div><Link className="premiumButton primary" href="/"><ArrowLeft/> Strona główna</Link><Link className="premiumButton secondary" href="/dokumenty"><Search/> Znajdź dokument</Link></div></div><div className="lostDocument" aria-hidden="true"><span><FileQuestion/></span><i/><i/><i/><div><Search/></div></div></div></main><Footer/></>}

"use client";

import { Menu, Search, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

export function Header(){const[open,setOpen]=useState(false);const close=()=>setOpen(false);return <><a className="skipLink" href="#main-content">Przejdź do treści</a><header className={`siteHeader ${open?"menuOpen":""}`}><div className="container nav"><Logo/><nav className="mainNav" aria-label="Główna nawigacja"><Link onClick={close} href="/generator">Generator dokumentów</Link><Link onClick={close} href="/dokumenty">Dokumenty</Link><Link onClick={close} href="/ubezpieczyciele">Ubezpieczyciele</Link><Link onClick={close} href="/#jak-to-dziala">Jak to działa</Link><Link onClick={close} href="/faq">FAQ</Link><Link onClick={close} href="/kontakt">Kontakt</Link><Link className="mobileAccount" onClick={close} href="/generator"><UserRound/> Otwórz generator</Link></nav><div className="navActions"><Link className="iconButton" href="/dokumenty" aria-label="Szukaj dokumentu"><Search/></Link><Link className="button buttonOutline login" href="/kontakt">Pomoc</Link><Link className="button buttonPrimary account" href="/generator"><UserRound/> Generator</Link><button className="iconButton menu" aria-label={open?"Zamknij menu":"Otwórz menu"} aria-expanded={open} onClick={()=>setOpen(!open)}><Menu/></button></div></div></header></>}

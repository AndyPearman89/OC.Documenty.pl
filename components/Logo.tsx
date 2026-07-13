import { FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Logo(){return <Link className="logo" href="/" aria-label="OC.Documenty.pl — strona główna"><span className="logoIcon brandMark" aria-hidden="true"><FileText className="brandDocument"/><ShieldCheck className="brandShield"/></span><span><strong><i>OC.</i>Documenty.pl</strong><small>Wzory dokumentów OC/AC online</small></span></Link>}

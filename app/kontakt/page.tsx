import type { Metadata } from "next";
import { ArrowRight, Clock3, Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactForm } from "@/features/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — OC.Documenty.pl",
  description: "Skontaktuj się z zespołem OC.Documenty.pl w sprawie wzorów i generatorów dokumentów.",
  alternates: { canonical: "/kontakt" },
};

const contactPoints = [
  "Pytania o wzory PDF i DOCX.",
  "Pomoc przy generatorach i formularzach online.",
  "Sugestie nowych dokumentów i poprawek treści.",
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="container">
          <Breadcrumbs items={[{ label: "Kontakt" }]} />
        </div>
        <section className="section contactSection">
          <div className="container contactGrid">
            <div>
              <span className="eyebrow">
                <MessageSquareText /> Kontakt
              </span>
              <h1>Porozmawiajmy</h1>
              <p>Masz pytanie dotyczące formularza, wzoru PDF albo sposobu wysyłki? Napisz do nas.</p>
              <div className="documentLeadBox">
                <strong>Najczęściej pomagamy przy</strong>
                <p>
                  wyborze dokumentu, dopasowaniu wzoru do sprawy i podpowiedziach, jak najszybciej przejść do gotowego pliku.
                </p>
              </div>
              <div className="homepageHighlights contactHighlights">
                {contactPoints.map((point) => (
                  <div key={point}>
                    <ShieldCheck />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <div className="contactDetails">
                <a href="mailto:oc@documenty.pl">
                  <Mail />
                  <span>
                    <strong>E-mail</strong>
                    <small>oc@documenty.pl</small>
                  </span>
                </a>
                <div>
                  <Clock3 />
                  <span>
                    <strong>Godziny kontaktu</strong>
                    <small>Poniedziałek–piątek, 8:00–16:00</small>
                  </span>
                </div>
              </div>
              <aside>
                <strong>OC.Documenty.pl</strong>
                <p>Serwis jest częścią platformy Documenty.pl.</p>
                <Link className="inlineArrow" href="/dokumenty">
                  Zobacz dokumenty <ArrowRight />
                </Link>
              </aside>
            </div>
            <ContactForm />
          </div>
        </section>
        <section className="enterpriseSection surfaceSection">
          <div className="container documentSeoBox">
            <h2>Jak najlepiej napisać do nas</h2>
            <p>
              Opisz krótko, jakiego dokumentu szukasz, z jakim ubezpieczycielem pracujesz i co chcesz zrobić: pobrać PDF, wypowiedzieć
              polisę albo znaleźć wzór dopasowany do konkretnej sprawy.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

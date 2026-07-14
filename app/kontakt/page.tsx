import type { Metadata } from "next";
import { Clock3, Mail, MessageSquareText } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactForm } from "@/features/contact/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z zespołem OC.Documenty.pl w sprawie wzorów i generatorów dokumentów.",
};

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
              <span className="eyebrow"><MessageSquareText /> Kontakt</span>
              <h1>Porozmawiajmy</h1>
              <p>Masz pytanie dotyczące formularza lub dokumentu? Napisz do nas.</p>
              <div className="contactDetails">
                <a href="mailto:oc@documenty.pl">
                  <Mail />
                  <span><strong>E-mail</strong><small>oc@documenty.pl</small></span>
                </a>
                <div>
                  <Clock3 />
                  <span><strong>Godziny kontaktu</strong><small>Poniedziałek–piątek, 8:00–16:00</small></span>
                </div>
              </div>
              <aside>
                <strong>OC.Documenty.pl</strong>
                <p>Serwis jest częścią platformy Documenty.pl.</p>
              </aside>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import path from "node:path";
import { Clock3, Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { readJsonlFile } from "@/lib/admin/readJsonl";

export const metadata: Metadata = {
  title: "Panel",
  description: "Podgląd zapisanych wiadomości newslettera i kontaktu.",
  alternates: { canonical: "/panel" },
};

type NewsletterEntry = { email: string; name?: string; source?: string; createdAt: string };
type ContactEntry = { name: string; email: string; subject: string; message: string; createdAt: string };

export default async function AdminPanelPage() {
  const newsletterPath = path.join(process.cwd(), "data", "newsletter-subscribers.jsonl");
  const contactPath = path.join(process.cwd(), "data", "contact-messages.jsonl");

  const [newsletterEntries, contactEntries] = await Promise.all([
    readJsonlFile<NewsletterEntry>(newsletterPath),
    readJsonlFile<ContactEntry>(contactPath),
  ]);

  return (
    <>
      <Header />
      <main id="main-content" className="section soft">
        <div className="container adminPanel">
          <span className="eyebrow">
            <ShieldCheck /> Panel
          </span>
          <h1>Podgląd zapisów</h1>
          <p>Newsletter i formularz kontaktowy zapisują dane lokalnie, a tutaj możesz szybko sprawdzić ostatnie wpisy.</p>

          <div className="adminStats">
            <article>
              <Mail />
              <strong>{newsletterEntries.length}</strong>
              <span>zapisów newslettera</span>
            </article>
            <article>
              <MessageSquareText />
              <strong>{contactEntries.length}</strong>
              <span>wiadomości kontaktowych</span>
            </article>
            <article>
              <Clock3 />
              <strong>na żywo</strong>
              <span>odczyt z plików JSONL</span>
            </article>
          </div>

          <section className="adminSection">
            <h2>Newsletter</h2>
            <div className="adminTable">
              {newsletterEntries.length ? newsletterEntries.map((entry) => (
                <article key={`${entry.email}-${entry.createdAt}`}>
                  <div>
                    <strong>{entry.email}</strong>
                    <span>{entry.name || "bez imienia"} · {entry.source || "newsletter"}</span>
                  </div>
                  <small>{new Date(entry.createdAt).toLocaleString("pl-PL")}</small>
                </article>
              )) : <p className="adminEmpty">Brak zapisów newslettera.</p>}
            </div>
          </section>

          <section className="adminSection">
            <h2>Kontakt</h2>
            <div className="adminTable">
              {contactEntries.length ? contactEntries.map((entry) => (
                <article key={`${entry.email}-${entry.createdAt}`}>
                  <div>
                    <strong>{entry.subject}</strong>
                    <span>{entry.name} · {entry.email}</span>
                    <p>{entry.message}</p>
                  </div>
                  <small>{new Date(entry.createdAt).toLocaleString("pl-PL")}</small>
                </article>
              )) : <p className="adminEmpty">Brak wiadomości kontaktowych.</p>}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

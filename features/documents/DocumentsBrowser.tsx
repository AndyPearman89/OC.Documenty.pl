"use client";

import { ArrowRight, Download, FileSearch, FileText, Search, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { documentCatalog } from "@/lib/catalog";

const categories = ["Wszystkie", "Wypowiedzenia", "Oświadczenia", "Zwroty", "Pojazd", "Umowy", "Odstąpienia", "Reklamacje"] as const;

function documentHref(slug: string) {
  if (slug === "wypowiedzenie-oc") return "/generator";
  return `/dokumenty/${slug}`;
}

function pdfHref(slug: string) {
  return `/wzory/${slug}-wzor.pdf`;
}

export function DocumentsBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("Wszystkie");

  const documents = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pl");
    return documentCatalog.filter(
      (document) =>
        (category === "Wszystkie" || document.category === category) &&
        (!normalized ||
          `${document.title} ${document.description} ${document.category}`.toLocaleLowerCase("pl").includes(normalized)),
    );
  }, [query, category]);

  return (
    <section className="section catalogSection">
      <div className="container">
        <div className="catalogToolbar">
          <div>
            <span className="eyebrow">
              <FileText /> Biblioteka wzorów
            </span>
            <h2>Wzory dokumentów</h2>
            <p>Aktualne formularze OC gotowe do wypełnienia, pobrania i wydruku.</p>
          </div>
          <label className="catalogSearch">
            <Search />
            <span className="srOnly">Szukaj dokumentu</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Szukaj dokumentu..." />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Wyczyść wyszukiwanie">
                <X />
              </button>
            )}
          </label>
        </div>

        <div className="catalogLayout">
          <aside className="categoryPanel">
            <strong>Kategorie</strong>
            {categories.map((item) => (
              <button type="button" className={category === item ? "selected" : ""} onClick={() => setCategory(item)} key={item}>
                {item}
                <span>{item === "Wszystkie" ? documentCatalog.length : documentCatalog.filter((doc) => doc.category === item).length}</span>
              </button>
            ))}
          </aside>

          <div>
            <div className="mobileCategories" role="group" aria-label="Kategorie dokumentów">
              {categories.map((item) => (
                <button type="button" className={category === item ? "selected" : ""} onClick={() => setCategory(item)} key={item}>
                  {item}
                </button>
              ))}
            </div>

            <div className="catalogSummary">
              <p className="resultsCount">
                Znaleziono: <strong>{documents.length}</strong>
              </p>
              <p className="catalogHint">
                Najczęściej pobierane wzory, gotowe do użycia od razu.
              </p>
            </div>

            {documents.length ? (
              <div className="catalogList">
                {documents.map((doc) => {
                  const href = documentHref(doc.slug);
                  return (
                    <article className="catalogCard" key={doc.slug}>
                      <span>
                        {doc.category === "Umowy" ? <Sparkles /> : <FileText />}
                      </span>
                      <div>
                        <small>{doc.category}</small>
                        <h2>{doc.title}</h2>
                        <p>{doc.description}</p>
                      </div>
                      <div className="catalogActions">
                        <a className="pdfLink" href={pdfHref(doc.slug)} download>
                          <Download /> PDF
                        </a>
                        <Link className="button buttonOutline" href={href}>
                          Wypełnij <ArrowRight />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="emptyDocuments">
                <FileSearch />
                <h2>Nie znaleziono dokumentów</h2>
                <p>Zmień wyszukiwaną frazę lub wybierz inną kategorię.</p>
                <button
                  type="button"
                  className="button buttonOutline"
                  onClick={() => {
                    setQuery("");
                    setCategory("Wszystkie");
                  }}
                >
                  Wyczyść filtry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

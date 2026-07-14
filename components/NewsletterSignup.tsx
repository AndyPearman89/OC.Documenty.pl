"use client";

import { ArrowRight, CheckCircle2, Mail, Newspaper, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

type NewsletterSignupProps = {
  compact?: boolean;
  variant?: "default" | "showcase" | "sales" | "footer";
  title?: string;
  description?: string;
};

export function NewsletterSignup({
  compact = false,
  variant = "default",
  title = "Newsletter",
  description = "Dostawaj raz w tygodniu najważniejsze informacje o dokumentach, przepisach i nowych wzorach PDF.",
}: NewsletterSignupProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") ?? "").trim(),
      name: String(formData.get("name") ?? "").trim(),
      source: title,
    };

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Nie udało się zapisać adresu e-mail.");
      }

      setSubmitted(true);
      event.currentTarget.reset();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Nie udało się zapisać adresu e-mail.");
    } finally {
      setLoading(false);
    }
  }

  if (variant === "showcase") {
    return (
      <section className={compact ? "newsletterCompact newsletterShowcaseWrap" : "newsletterSection newsletterShowcaseWrap"}>
        <div className={compact ? "newsletterCompactGrid newsletterShowcase" : "container newsletterGrid newsletterShowcase"}>
          <div className="newsletterShowcaseContent">
            <span className="premiumPill">
              <Sparkles /> {title}
            </span>
            <h2>Jedna wiadomość tygodniowo. Tylko to, co naprawdę ważne.</h2>
            <p>{description}</p>

            <div className="newsletterShowcaseStats">
              <div>
                <strong>dokument tygodnia</strong>
                <span>najbardziej przydatny wzór lub landing</span>
              </div>
              <div>
                <strong>zmiany przepisów</strong>
                <span>krótkie podsumowania bez szumu</span>
              </div>
              <div>
                <strong>nowe generatory</strong>
                <span>aktualizacje PDF, DOCX i formularzy</span>
              </div>
            </div>

            <div className="newsletterShowcaseBadges">
              <span>
                <Newspaper /> nowe artykuły
              </span>
              <span>
                <ShieldCheck /> sprawdzone wzory
              </span>
              <span>
                <Mail /> wysyłka raz w tygodniu
              </span>
            </div>
          </div>

          <form className="newsletterForm newsletterFormShowcase" onSubmit={handleSubmit}>
            <div className="newsletterFormHeading">
              <strong>Zapisz się bez zakładania konta</strong>
              <span>Zero spamu. Tylko treści, które pomagają kierowcom.</span>
            </div>
            <label>
              Adres e-mail
              <input type="email" name="email" placeholder="twoj@email.pl" aria-label="Adres e-mail do newslettera" required />
            </label>
            <label>
              Imię
              <input type="text" name="name" placeholder="Twoje imię" aria-label="Imię" />
            </label>
            <button className="premiumButton primary" type="submit">
              {loading ? "Zapisywanie..." : "Zapisz się"} <ArrowRight />
            </button>
            <small>
              Zapis oznacza zgodę na otrzymywanie wiadomości od OC.Documenty.pl. W każdej chwili możesz zrezygnować.
            </small>
            {error ? <strong className="newsletterError">{error}</strong> : null}
            {submitted ? <strong className="newsletterSuccess">Dzięki! Zapis został zapisany lokalnie.</strong> : null}
          </form>
        </div>
      </section>
    );
  }

  if (variant === "sales") {
    return (
      <section className={compact ? "newsletterCompact newsletterSalesWrap" : "newsletterSection newsletterSalesWrap"}>
        <div className={compact ? "newsletterCompactGrid newsletterSales" : "container newsletterGrid newsletterSales"}>
          <div className="newsletterSalesCopy">
            <span className="premiumPill">
              <Sparkles /> {title}
            </span>
            <h2>Otrzymuj tylko to, co naprawdę pomaga zamknąć sprawę szybciej.</h2>
            <p>{description}</p>
            <div className="newsletterSalesProof">
              <div>
                <strong>1 wiadomość / tydzień</strong>
                <span>bez przeładowania skrzynki</span>
              </div>
              <div>
                <strong>praktyczne wzory</strong>
                <span>gotowe do użycia od razu</span>
              </div>
              <div>
                <strong>zmiany prawa</strong>
                <span>to, co wpływa na kierowców</span>
              </div>
            </div>
            <div className="newsletterSalesTrust">
              <span><ShieldCheck /> bez logowania</span>
              <span><CheckCircle2 /> dane lokalnie</span>
              <span><Mail /> zawsze możesz wypisać się jednym kliknięciem</span>
            </div>
          </div>

          <form className="newsletterForm newsletterFormSales" onSubmit={handleSubmit}>
            <div className="newsletterFormHeading">
              <strong>Dołącz do newslettera OC.Documenty.pl</strong>
              <span>Dostaniesz praktyczne wskazówki, zanim zaczniesz szukać w internecie.</span>
            </div>
            <label>
              Adres e-mail
              <input type="email" name="email" placeholder="twoj@email.pl" aria-label="Adres e-mail do newslettera" required />
            </label>
            <button className="premiumButton primary" type="submit">
              {loading ? "Zapisywanie..." : "Zapisz się i odbieraj aktualizacje"} <ArrowRight />
            </button>
            <small>
              Zapis oznacza zgodę na otrzymywanie wiadomości od OC.Documenty.pl. W każdej chwili możesz zrezygnować.
            </small>
            {error ? <strong className="newsletterError">{error}</strong> : null}
            {submitted ? <strong className="newsletterSuccess">Dzięki! Zapis został zapisany lokalnie.</strong> : null}
          </form>
        </div>
      </section>
    );
  }

  if (variant === "footer") {
    return (
      <section className={compact ? "newsletterCompact newsletterFooterLiteWrap" : "newsletterSection newsletterFooterLiteWrap"}>
        <div className={compact ? "newsletterCompactGrid newsletterFooterLite" : "container newsletterGrid newsletterFooterLite"}>
          <div className="newsletterFooterLiteCopy">
            <span className="premiumPill">
              <Mail /> {title}
            </span>
            <h2>Krótko. Raz w tygodniu.</h2>
            <p>{description}</p>
          </div>

          <form className="newsletterForm newsletterFormFooterLite" onSubmit={handleSubmit}>
            <label>
              Adres e-mail
              <input type="email" name="email" placeholder="twoj@email.pl" aria-label="Adres e-mail do newslettera" required />
            </label>
            <button className="premiumButton primary" type="submit">
              {loading ? "Zapisywanie..." : "Zapisz"} <ArrowRight />
            </button>
            {error ? <strong className="newsletterError">{error}</strong> : null}
            {submitted ? <strong className="newsletterSuccess">Gotowe — zapis zapisany lokalnie.</strong> : null}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className={compact ? "newsletterCompact" : "newsletterSection"}>
      <div className={compact ? "newsletterCompactGrid" : "container newsletterGrid"}>
        <div>
          <span className="premiumPill">
            <Mail /> {title}
          </span>
          <h2>Raz w tygodniu najważniejsze informacje dla kierowców</h2>
          <p>{description}</p>
          <div className="newsletterPoints">
            <span>
              <CheckCircle2 /> dokument tygodnia
            </span>
            <span>
              <CheckCircle2 /> zmiany przepisów i kar
            </span>
            <span>
              <CheckCircle2 /> nowe generatory i PDF
            </span>
          </div>
        </div>

        <form className="newsletterForm" onSubmit={handleSubmit}>
          <label>
            Adres e-mail
            <input type="email" name="email" placeholder="twoj@email.pl" aria-label="Adres e-mail do newslettera" required />
          </label>
          <label>
            Imię
            <input type="text" name="name" placeholder="Twoje imię" aria-label="Imię" />
          </label>
          <button className="premiumButton primary" type="submit">
            {loading ? "Zapisywanie..." : "Zapisz się"} <ArrowRight />
          </button>
          <small>
            Zapis oznacza zgodę na otrzymywanie wiadomości od OC.Documenty.pl. W każdej chwili możesz zrezygnować.
          </small>
          {error ? <strong className="newsletterError">{error}</strong> : null}
          {submitted ? <strong className="newsletterSuccess">Dzięki! Zapis został zapisany lokalnie.</strong> : null}
        </form>
      </div>
    </section>
  );
}

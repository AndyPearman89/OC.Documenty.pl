"use client";

import { Mail, Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function send() {
    setError("");

    if (name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(email) || subject.trim().length < 3 || message.trim().length < 10) {
      setError("Uzupełnij poprawnie wszystkie pola.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Nie udało się zapisać wiadomości.");
      }

      const body = encodeURIComponent(`Imię i nazwisko: ${name}\nE-mail: ${email}\n\n${message}`);
      window.location.href = `mailto:oc@documenty.pl?subject=${encodeURIComponent(subject)}&body=${body}`;
      setSubmitted(true);
      setError("Otworzono aplikację pocztową. Sprawdź wiadomość przed wysłaniem.");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Nie udało się zapisać wiadomości.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contactForm">
      <header>
        <Mail />
        <div>
          <h2>Wyślij wiadomość</h2>
          <p>Formularz zapisuje zgłoszenie i otwiera Twoją aplikację pocztową.</p>
        </div>
      </header>
      <div className="formGrid">
        <label>
          Imię i nazwisko
          <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
        </label>
        <label>
          Adres e-mail
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
        </label>
        <label className="wide">
          Temat
          <input value={subject} onChange={(event) => setSubject(event.target.value)} />
        </label>
        <label className="wide">
          Wiadomość
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={6} />
        </label>
      </div>
      {error && (
        <p className="contactStatus" role="status">
          {error}
        </p>
      )}
      {submitted ? (
        <p className="contactStatus contactStatusSuccess" role="status">
          Wiadomość została zapisana lokalnie i przygotowana do wysłania.
        </p>
      ) : null}
      <button className="button buttonPrimary buttonLarge" onClick={send} disabled={loading}>
        <Send /> {loading ? "Zapisywanie..." : "Przygotuj wiadomość"}
      </button>
    </section>
  );
}

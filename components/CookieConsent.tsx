"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "oc-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function decide(value: "accepted" | "rejected") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookieConsent" role="dialog" aria-live="polite" aria-label="Zgoda na pliki cookie">
      <p>
        Używamy niezbędnych plików cookie do działania serwisu. Więcej informacji w{" "}
        <Link href="/polityka-prywatnosci">polityce prywatności</Link>.
      </p>
      <div className="cookieConsentActions">
        <button className="button buttonOutline" onClick={() => decide("rejected")}>
          Odrzuć
        </button>
        <button className="button buttonPrimary" onClick={() => decide("accepted")}>
          Akceptuj
        </button>
      </div>
    </div>
  );
}

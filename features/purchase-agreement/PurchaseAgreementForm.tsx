"use client";

import { Check, FileDown, ImageUp, Printer, Save, ShieldCheck, Trash2 } from "lucide-react";
import Image from "next/image";
import { type ChangeEvent, type CSSProperties, useEffect, useMemo, useState } from "react";
import { downloadPdf } from "@/lib/downloadPdf";

type VehicleType = "samochod" | "motocykl" | "przyczepka" | "ciezarowka" | "pozostale";

const vehicleOptions: Array<{ value: VehicleType; label: string }> = [
  { value: "samochod", label: "Samochód" },
  { value: "motocykl", label: "Motocykl" },
  { value: "przyczepka", label: "Przyczepka" },
  { value: "ciezarowka", label: "Ciężarówka" },
  { value: "pozostale", label: "Pozostałe" },
];

const textFields = [
  "sellerName",
  "sellerAddress",
  "sellerId",
  "buyerName",
  "buyerAddress",
  "buyerId",
  "vehicleMake",
  "vehicleModel",
  "vehicleRegistration",
  "vehicleVin",
  "vehicleYear",
  "price",
  "saleDate",
  "salePlace",
] as const;

type TextField = (typeof textFields)[number];

type FormState = Record<TextField | "vehicleType", string>;

const labels: Record<TextField, string> = {
  sellerName: "Sprzedający - imię i nazwisko",
  sellerAddress: "Sprzedający - adres",
  sellerId: "Sprzedający - PESEL / NIP",
  buyerName: "Kupujący - imię i nazwisko",
  buyerAddress: "Kupujący - adres",
  buyerId: "Kupujący - PESEL / NIP",
  vehicleMake: "Marka pojazdu",
  vehicleModel: "Model pojazdu",
  vehicleRegistration: "Numer rejestracyjny",
  vehicleVin: "Numer VIN",
  vehicleYear: "Rok produkcji",
  price: "Cena sprzedaży",
  saleDate: "Data sprzedaży",
  salePlace: "Miejsce sprzedaży",
};

const defaults: FormState = {
  vehicleType: "samochod",
  sellerName: "",
  sellerAddress: "",
  sellerId: "",
  buyerName: "",
  buyerAddress: "",
  buyerId: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleRegistration: "",
  vehicleVin: "",
  vehicleYear: "",
  price: "",
  saleDate: "",
  salePlace: "",
};

const draftKey = "oc-documenty-umowa-kupna-sprzedazy-draft";

export function PurchaseAgreementForm() {
  const [values, setValues] = useState<FormState>(() => {
    if (typeof window === "undefined") return defaults;
    try {
      const saved = sessionStorage.getItem(draftKey);
      return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
    } catch {
      return defaults;
    }
  });
  const [signature, setSignature] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    sessionStorage.setItem(draftKey, JSON.stringify(values));
  }, [values]);

  const progress = useMemo(() => {
    const filled = [...textFields, "vehicleType"].filter((field) => values[field as keyof FormState]?.trim()).length + (signature ? 1 : 0);
    return Math.round((filled / (textFields.length + 2)) * 100);
  }, [signature, values]);

  function update(name: keyof FormState, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function upload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Wybierz zdjęcie JPG, PNG lub WEBP.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("Zdjęcie może mieć maksymalnie 5 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setSignature(String(reader.result));
      setError("");
    };
    reader.readAsDataURL(file);
  }

  function finish() {
    if (!signature) {
      setError("Dodaj podpis zdjęciem, aby wygenerować umowę.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <section className="purchaseDone">
        <div className="successSummary">
          <Check />
          <span className="premiumPill">Dokument gotowy</span>
          <h2>Umowa kupna-sprzedaży została przygotowana</h2>
          <p>Sprawdź podgląd, pobierz PDF lub wydrukuj dokument.</p>
        </div>
        <div className="documentActions">
          <button className="button buttonPrimary" onClick={() => downloadPdf("purchase-agreement", "umowa-kupna-sprzedazy.pdf")}>
            <FileDown /> Pobierz PDF
          </button>
          <button className="button buttonOutline" onClick={() => window.print()}>
            <Printer /> Drukuj
          </button>
        </div>
        <AgreementDocument values={values} signature={signature} />
      </section>
    );
  }

  return (
    <div className="generatorShell enterpriseGenerator">
      <header className="generatorProgressHeader">
        <div>
          <span>Postęp dokumentu</span>
          <strong>{progress}%</strong>
        </div>
        <div className="progressTrack"><i style={{ width: `${progress}%` }} /></div>
        <small><Save /> Zapis lokalny</small>
      </header>
      <div className="generatorBody purchaseBody">
        <section className="formPanel">
          <div className="formHeading">
            <span>Wzór umowy</span>
            <h2>Wypełnij umowę kupna-sprzedaży</h2>
            <p>Wpisz dane stron, typ pojazdu i warunki transakcji. Umowa zostanie przygotowana w przejrzystym układzie.</p>
          </div>

          <div className="formGrid detailedForm">
            <label className="wide">
              Typ pojazdu
              <div className="choiceGroup purchaseChoiceGroup">
                {vehicleOptions.map((option) => (
                  <label key={option.value}>
                    <input
                      type="radio"
                      name="vehicleType"
                      value={option.value}
                      checked={values.vehicleType === option.value}
                      onChange={(event) => update("vehicleType", event.target.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </label>

            {textFields.map((field) => (
              <label className={["sellerAddress", "buyerAddress", "vehicleVin", "price", "salePlace"].includes(field) ? "wide" : ""} key={field}>
                {labels[field]}
                <input
                  value={values[field]}
                  onChange={(event) => update(field, event.target.value)}
                  placeholder={
                    field === "sellerName" ? "Jan Kowalski"
                      : field === "buyerName" ? "Anna Nowak"
                      : field === "vehicleMake" ? "Volkswagen"
                      : field === "vehicleModel" ? "Passat"
                      : field === "vehicleRegistration" ? "WA 12345"
                      : field === "vehicleVin" ? "WVWZZZ..."
                      : field === "price" ? "45 000 PLN"
                      : field === "saleDate" ? "2026-07-14"
                      : ""
                  }
                />
              </label>
            ))}
          </div>

          <section className="signatureUpload">
            <h3>Podpis stron</h3>
            <p>Dodaj zdjęcie podpisu sprzedającego albo wspólną pieczęć transakcji.</p>
            {signature ? (
              <div className="signaturePreview">
                <Image src={signature} alt="Podpis" width={420} height={160} unoptimized />
                <button type="button" onClick={() => setSignature("")}>
                  <Trash2 /> Usuń
                </button>
              </div>
            ) : (
              <label className="uploadArea">
                <ImageUp />
                <strong>Dodaj podpis zdjęciem</strong>
                <span>JPG, PNG lub WEBP · do 5 MB</span>
                <input type="file" accept="image/jpeg,image/png,image/webp" capture="environment" onChange={upload} />
              </label>
            )}
            {error && <small className="uploadError" role="alert">{error}</small>}
          </section>

          <div className="formActions">
            <button className="button buttonPrimary" onClick={finish}>
              Podpisz i utwórz <FileDown />
            </button>
          </div>
        </section>

        <aside className="securityCard premiumSecurity">
          <div className="progressRing" style={{ "--progress": `${progress * 3.6}deg` } as CSSProperties}>
            <span>{progress}%</span>
          </div>
          <h3>Twoja umowa</h3>
          <p>{values.sellerName ? `${values.sellerName} → ${values.buyerName || "kupujący"}` : "Najpierw uzupełnij dane stron."}</p>
          <ul>
            <li><Check /> Dane stron, typu i pojazdu</li>
            <li><Check /> Podpis zdjęciem</li>
            <li><Check /> PDF, druk i zapis lokalny</li>
          </ul>
          <small><ShieldCheck /> Dane nie są wysyłane automatycznie</small>
        </aside>
      </div>
    </div>
  );
}

function AgreementDocument({ values, signature }: { values: FormState; signature: string }) {
  const typeLabel = vehicleOptions.find((option) => option.value === values.vehicleType)?.label ?? "________________";

  return (
    <article id="purchase-agreement" className="ocPrintDocument purchaseDocument">
      <header>
        <strong><i>OC.</i>Documenty.pl</strong>
        <span>Dokument wygenerowany online</span>
      </header>
      <h1>UMOWA KUPNA-SPRZEDAŻY POJAZDU</h1>
      <div className="ocParties">
        <section>
          <h3>Sprzedający</h3>
          <p><b>{values.sellerName || "________________"}</b><br />{values.sellerAddress || "________________"}<br />{values.sellerId || "________________"}</p>
        </section>
        <section>
          <h3>Kupujący</h3>
          <p><b>{values.buyerName || "________________"}</b><br />{values.buyerAddress || "________________"}<br />{values.buyerId || "________________"}</p>
        </section>
      </div>
      <section>
        <h3>Dane pojazdu</h3>
        <p>
          Typ: <b>{typeLabel}</b><br />
          Marka: <b>{values.vehicleMake || "________________"}</b><br />
          Model: {values.vehicleModel || "________________"}<br />
          Numer rejestracyjny: {values.vehicleRegistration || "________________"}<br />
          VIN: {values.vehicleVin || "________________"}<br />
          Rok produkcji: {values.vehicleYear || "________________"}
        </p>
      </section>
      <section>
        <h3>Warunki transakcji</h3>
        <p>Miejsce sprzedaży: <b>{values.salePlace || "________________"}</b><br />Data sprzedaży: {values.saleDate || "________________"}<br />Cena: {values.price || "________________"}</p>
      </section>
      <div className="ocSignature">
        <Image src={signature} alt="Podpis" width={300} height={100} unoptimized />
        <span>Podpis sprzedającego</span>
      </div>
    </article>
  );
}

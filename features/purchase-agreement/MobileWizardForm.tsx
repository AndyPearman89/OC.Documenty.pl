"use client";

import { ChevronLeft, Check, FileDown, Printer, ImageUp, Trash2 } from "lucide-react";
import Image from "next/image";
import { type ChangeEvent, useEffect, useRef, useState } from "react";
import { downloadPdf } from "@/lib/downloadPdf";
import { FormField } from "@/components/FormField";
import { VehicleTypeTiles } from "@/components/VehicleTypeTiles";

type VehicleType = "samochod" | "motocykl" | "przyczepka" | "ciezarowka" | "pozostale";

const vehicleOptions: Array<{ value: VehicleType; label: string; emoji: string }> = [
  { value: "samochod", label: "Samochód", emoji: "🚗" },
  { value: "motocykl", label: "Motocykl", emoji: "🏍️" },
  { value: "przyczepka", label: "Przyczepka", emoji: "🚐" },
  { value: "ciezarowka", label: "Ciężarówka", emoji: "🚚" },
  { value: "pozostale", label: "Pozostałe", emoji: "🚛" },
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
  sellerName: "Imię i nazwisko",
  sellerAddress: "Adres",
  sellerId: "PESEL / NIP",
  buyerName: "Imię i nazwisko",
  buyerAddress: "Adres",
  buyerId: "PESEL / NIP",
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

const draftKey = "oc-documenty-umowa-kupna-sprzedazy-mobile-draft";

const steps = [
  { number: 1, title: "Typ pojazdu", fields: ["vehicleType"] },
  { number: 2, title: "Sprzedający", fields: ["sellerName", "sellerAddress", "sellerId"] },
  { number: 3, title: "Kupujący", fields: ["buyerName", "buyerAddress", "buyerId"] },
  { number: 4, title: "Pojazd", fields: ["vehicleMake", "vehicleModel", "vehicleVin", "vehicleRegistration"] },
  { number: 5, title: "Transakcja", fields: ["vehicleYear", "price", "saleDate", "salePlace"] },
  { number: 6, title: "Podpis i podsumowanie", fields: ["signature"] },
];

export function MobileWizardForm() {
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
  const [currentStep, setCurrentStep] = useState(1);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const firstFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sessionStorage.setItem(draftKey, JSON.stringify(values));
  }, [values]);

  useEffect(() => {
    if (typeof window !== "undefined" && firstFieldRef.current) {
      const input = firstFieldRef.current.nextElementSibling?.querySelector("input, select");
      if (input instanceof HTMLElement) {
        setTimeout(() => input.focus(), 100);
      }
    }
  }, [currentStep]);

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

  function validateStep(step: number): boolean {
    setError("");

    // Validate required fields per step
    if (step === 2 && (!values.sellerName || !values.sellerAddress || !values.sellerId)) {
      setError("Wypełnij wszystkie pola sprzedającego");
      return false;
    }
    if (step === 3 && (!values.buyerName || !values.buyerAddress || !values.buyerId)) {
      setError("Wypełnij wszystkie pola kupującego");
      return false;
    }
    if (step === 4 && (!values.vehicleMake || !values.vehicleModel || !values.vehicleVin || !values.vehicleRegistration)) {
      setError("Wypełnij dane pojazdu");
      return false;
    }
    if (step === 5 && (!values.vehicleYear || !values.price || !values.saleDate || !values.salePlace)) {
      setError("Wypełnij dane transakcji");
      return false;
    }

    return true;
  }

  function handleNext() {
    if (currentStep < 6) {
      if (validateStep(currentStep)) {
        setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 6) {
      if (!signature) {
        setError("Dodaj podpis zdjęciem, aby wygenerować umowę.");
        return;
      }
      setDone(true);
    }
  }

  function handleBack() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setError("");
    }
  }

  if (done) {
    return (
      <section className="wizardDone">
        <div className="successSummary">
          <Check />
          <span className="premiumPill">Dokument gotowy</span>
          <h2>Umowa kupna-sprzedaży została przygotowana</h2>
          <p>Sprawdź podgląd, pobierz PDF lub wydrukuj dokument w formacie A4.</p>
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

  const currentStepData = steps[currentStep - 1];
  const isLastStep = currentStep === 6;

  return (
    <div className="mobileWizard">
      <header className="wizardHeader">
        {currentStep > 1 && (
          <button className="wizardBack" onClick={handleBack} aria-label="Wróć do poprzedniego kroku">
            <ChevronLeft />
          </button>
        )}
        <div className="wizardProgress">
          <span className="wizardStep">{currentStep}/6</span>
          <div className="wizardProgressBar">
            <div className="wizardProgressFill" style={{ width: `${(currentStep / 6) * 100}%` }} />
          </div>
        </div>
      </header>

      <div className="wizardContent">
        <div className="wizardStepHeader">
          <h1>{currentStepData.title}</h1>
        </div>

        <form className="wizardForm">
          {/* Step 1: Vehicle Type */}
          {currentStep === 1 && (
            <div className="wizardFieldGroup vehicleTypesContainer">
              <VehicleTypeTiles
                options={vehicleOptions}
                value={values.vehicleType}
                onChange={(value) => {
                  update("vehicleType", value);
                  if (firstFieldRef.current) {
                    firstFieldRef.current.focus();
                  }
                }}
              />
            </div>
          )}

          {/* Step 2: Seller Details */}
          {currentStep === 2 && (
            <div className="wizardFieldGroup">
              <div ref={firstFieldRef} style={{ display: "none" }} />
              <FormField
                label="Imię i nazwisko"
                icon="👤"
                type="text"
                value={values.sellerName}
                onChange={(e) => update("sellerName", e)}
                placeholder="Jan Kowalski"
                required
              />
              <FormField
                label="Adres"
                icon="📍"
                type="text"
                value={values.sellerAddress}
                onChange={(e) => update("sellerAddress", e)}
                placeholder="ul. Przykładowa 1, 00-000 Warszawa"
                required
              />
              <FormField
                label="PESEL / NIP"
                icon="🔢"
                type="text"
                value={values.sellerId}
                onChange={(e) => update("sellerId", e)}
                placeholder="00000000000"
                required
              />
            </div>
          )}

          {/* Step 3: Buyer Details */}
          {currentStep === 3 && (
            <div className="wizardFieldGroup">
              <div ref={firstFieldRef} style={{ display: "none" }} />
              <FormField
                label="Imię i nazwisko"
                icon="👤"
                type="text"
                value={values.buyerName}
                onChange={(e) => update("buyerName", e)}
                placeholder="Anna Nowak"
                required
              />
              <FormField
                label="Adres"
                icon="📍"
                type="text"
                value={values.buyerAddress}
                onChange={(e) => update("buyerAddress", e)}
                placeholder="ul. Przykładowa 1, 00-000 Warszawa"
                required
              />
              <FormField
                label="PESEL / NIP"
                icon="🔢"
                type="text"
                value={values.buyerId}
                onChange={(e) => update("buyerId", e)}
                placeholder="00000000000"
                required
              />
            </div>
          )}

          {/* Step 4: Vehicle Specs */}
          {currentStep === 4 && (
            <div className="wizardFieldGroup">
              <div ref={firstFieldRef} style={{ display: "none" }} />
              <FormField
                label="Marka pojazdu"
                icon="🚗"
                type="text"
                value={values.vehicleMake}
                onChange={(e) => update("vehicleMake", e)}
                placeholder="Volkswagen"
                required
              />
              <FormField
                label="Model pojazdu"
                icon="🚗"
                type="text"
                value={values.vehicleModel}
                onChange={(e) => update("vehicleModel", e)}
                placeholder="Passat"
                required
              />
              <FormField
                label="Numer VIN"
                icon="🔢"
                type="text"
                value={values.vehicleVin}
                onChange={(e) => update("vehicleVin", e)}
                placeholder="WVWZZZ..."
              />
              <FormField
                label="Numer rejestracyjny"
                icon="📄"
                type="text"
                value={values.vehicleRegistration}
                onChange={(e) => update("vehicleRegistration", e)}
                placeholder="WA 12345"
                required
              />
            </div>
          )}

          {/* Step 5: Transaction Details */}
          {currentStep === 5 && (
            <div className="wizardFieldGroup">
              <div ref={firstFieldRef} style={{ display: "none" }} />
              <FormField
                label="Rok produkcji"
                icon="📅"
                type="text"
                value={values.vehicleYear}
                onChange={(e) => update("vehicleYear", e)}
                placeholder="2020"
                required
              />
              <FormField
                label="Cena sprzedaży"
                icon="💵"
                type="text"
                value={values.price}
                onChange={(e) => update("price", e)}
                placeholder="45 000 PLN"
                required
              />
              <FormField
                label="Data sprzedaży"
                icon="📅"
                type="date"
                value={values.saleDate}
                onChange={(e) => update("saleDate", e)}
                required
              />
              <FormField
                label="Miejsce sprzedaży"
                icon="📍"
                type="text"
                value={values.salePlace}
                onChange={(e) => update("salePlace", e)}
                placeholder="Warszawa"
                required
              />
            </div>
          )}

          {/* Step 6: Signature */}
          {currentStep === 6 && (
            <div className="wizardFieldGroup wizardSignatureStep">
              <h2>Podpis stron</h2>
              <p>Dodaj zdjęcie podpisu sprzedającego albo wspólny znak potwierdzający transakcję.</p>
              {signature ? (
                <div className="wizardSignaturePreview">
                  <Image src={signature} alt="Podpis" width={280} height={120} unoptimized />
                  <button
                    type="button"
                    className="button buttonOutline"
                    onClick={() => {
                      setSignature("");
                      setError("");
                    }}
                  >
                    <Trash2 /> Usuń
                  </button>
                </div>
              ) : (
                <label className="wizardUploadArea">
                  <ImageUp />
                  <strong>Dodaj podpis zdjęciem</strong>
                  <span>JPG, PNG lub WEBP · do 5 MB</span>
                  <input type="file" accept="image/jpeg,image/png,image/webp" capture="environment" onChange={upload} />
                </label>
              )}
            </div>
          )}

          {error && (
            <div className="wizardError" role="alert">
              {error}
            </div>
          )}
        </form>
      </div>

      <footer className="wizardFooter">
        <button className="button buttonPrimary wizardNextBtn" onClick={handleNext}>
          {isLastStep ? "Podpisz i utwórz" : "Dalej"}
          {!isLastStep && <ChevronLeft style={{ transform: "rotate(180deg)" }} />}
        </button>
      </footer>

      <div className="stickyCta">
        <button className="button buttonPrimary" style={{ width: "100%" }} onClick={handleNext}>
          {isLastStep ? "Podpisz i utwórz dokument" : "Dalej"}
        </button>
      </div>
    </div>
  );
}

function AgreementDocument({ values, signature }: { values: FormState; signature: string }) {
  const typeLabel = vehicleOptions.find((option) => option.value === values.vehicleType)?.label ?? "________________";

  return (
    <article id="purchase-agreement" className="ocPrintDocument purchaseDocument">
      <header className="printDocumentHeader">
        <div className="printBrand">
          <img src="/images/oc-brand.jpeg" alt="OC.Documenty.pl" />
          <div>
            <strong><i>OC.</i>Documenty.pl</strong>
            <span>Wzory dokumentów OC/AC online</span>
          </div>
        </div>
        <div className="printMeta">
          <span>Umowa kupna-sprzedaży</span>
          <small>Dokument gotowy do wydruku</small>
        </div>
      </header>

      <h1>UMOWA KUPNA-SPRZEDAŻY POJAZDU</h1>
      <p className="printLead">
        Wpisz dane stron i pojazdu czytelnie. Po podpisaniu dokument możesz wydrukować, przekazać drugiej stronie
        lub pobrać jako PDF.
      </p>

      <div className="ocParties">
        <section>
          <h3>Sprzedający</h3>
          <p>
            <b>{values.sellerName || "________________"}</b>
            <br />
            {values.sellerAddress || "________________"}
            <br />
            {values.sellerId || "________________"}
          </p>
        </section>
        <section>
          <h3>Kupujący</h3>
          <p>
            <b>{values.buyerName || "________________"}</b>
            <br />
            {values.buyerAddress || "________________"}
            <br />
            {values.buyerId || "________________"}
          </p>
        </section>
      </div>

      <section>
        <h3>Dane pojazdu</h3>
        <p>
          Typ: <b>{typeLabel}</b>
          <br />
          Marka: <b>{values.vehicleMake || "________________"}</b>
          <br />
          Model: {values.vehicleModel || "________________"}
          <br />
          Numer rejestracyjny: {values.vehicleRegistration || "________________"}
          <br />
          VIN: {values.vehicleVin || "________________"}
          <br />
          Rok produkcji: {values.vehicleYear || "________________"}
        </p>
      </section>

      <section>
        <h3>Warunki transakcji</h3>
        <p>
          Miejsce sprzedaży: <b>{values.salePlace || "________________"}</b>
          <br />
          Data sprzedaży: {values.saleDate || "________________"}
          <br />
          Cena: {values.price || "________________"}
        </p>
      </section>

      <div className="ocSignature">
        <Image src={signature} alt="Podpis" width={300} height={100} unoptimized />
        <span>Podpis sprzedającego</span>
      </div>

      <footer className="printFooter">
        <div>
          <strong>OC.Documenty.pl</strong>
          <span>Profesjonalne wzory dokumentów</span>
        </div>
        <div>Wygenerowano przez OC.Documenty.pl</div>
        <div>Strona 1 / 1</div>
      </footer>
    </article>
  );
}

# SITE_ARCHITECTURE.md

> Website Information Architecture
> Project: OC.Documenty.pl

---

# Purpose

This document lists every route that actually exists in `app/` and the real homepage layout. Keep it in sync with `app/sitemap.ts`.

---

# Primary Navigation (Header.tsx)

Check `components/Header.tsx` for the current nav links before assuming this list — verify it hasn't drifted.

---

# Site Map (real routes)

```
/
/generator
/dokumenty
/dokumenty/[slug]            → one per lib/catalog.ts entry (12 documents)
/kolizja
/oswiadczenie-sprawcy
/wspolne-oswiadczenie
/umowa-kupna-sprzedazy
/umowa-kupna-sprzedazy-wspolwlasciciel
/ubezpieczyciele
/ubezpieczyciele/[slug]       → one per lib/catalog.ts insurerProfiles
/ubezpieczyciele/pzu          → dedicated landing page (separate from [slug])
/blog
/blog/[slug]
/faq
/kontakt
/polityka-prywatnosci
/regulamin
```

There is no `/dashboard`, `/premium`, `/about`, `/cookies`, `/generator/oc`, `/generator/ac`, or any `/{miasto}`/`/{wojewodztwo}` programmatic SEO routes.

---

# Homepage (app/page.tsx)

Actual section order (see class names in `app/enterprise.css`):

```
Hero (enterpriseHero)
  ↓
Trust badges (enterpriseTrust)
  ↓
Process — "Od formularza do gotowego dokumentu" (processSection)
  ↓
Document surface / preview showcase (surfaceSection)
  ↓
Insurers strip (insurersSection)
  ↓
Benefits (benefitsSection)
  ↓
Guides / blog teasers (guidesSection)
  ↓
FAQ (faqEnterprise)
  ↓
Final CTA (enterpriseFinalCta)
  ↓
Footer
```

There is no Statistics or Newsletter section on the homepage.

---

# Generator Flow (features/generator/GeneratorForm.tsx)

```
Step 1: Ubezpieczyciel (insurer)
  ↓
Step 2: Pojazd (vehicle)
  ↓
Step 3: Właściciel (owner)
  ↓
Step 4: Polisa (policy)
  ↓
Step 5: Podpis i podgląd (signature + preview)
  ↓
Download
```

---

# Document Catalog (lib/catalog.ts categories)

`Wypowiedzenia`, `Zwroty`, `Oświadczenia`, `Pojazd`, `Umowy`, `Odstąpienia`, `Reklamacje` — 12 documents total. See `features/documents/DocumentsBrowser.tsx` for the filter UI.

---

# Footer Navigation (components/Footer.tsx)

Two link columns ("Dokumenty", "Pomoc i informacje") plus a contact block. Check the file directly before assuming its contents — it has previously drifted from the real document list.

---

# Breadcrumbs

`components/Breadcrumbs.tsx` renders breadcrumbs on catalog/insurer pages. Not every page uses them — verify per page before assuming presence.

---

# URL Rules

- Human-readable, lowercase, hyphen-separated Polish slugs
- Stable — slugs are used as PDF template keys in `pdf/templates/`, so renaming a slug requires updating `lib/catalog.ts` and the matching template file together

---

# Future Expansion (not started)

Programmatic SEO pages (per-city, per-insurer combinations), a dashboard, and additional document categories are plausible future directions but are not designed or scheduled — do not build against them without confirming scope first.

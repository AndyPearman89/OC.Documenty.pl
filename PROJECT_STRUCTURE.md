# PROJECT_STRUCTURE.md

> Repository Structure
> Project: OC.Documenty.pl

---

# Purpose

This document reflects the actual current repository structure. Update it whenever top-level folders or conventions change.

---

# Repository (top level)

```
OC.Documenty.pl/
app/
components/
features/
lib/
pdf/
public/
scripts/
```

There are no `hooks/`, `services/`, `types/`, `styles/`, `docs/`, `tests/` or `config/` folders. Types live inline or next to the modules that use them; global styles live in `app/globals.css` and `app/enterprise.css`.

---

# app/

Next.js App Router pages.

```
app/
  layout.tsx
  page.tsx                          → homepage
  not-found.tsx
  robots.ts
  sitemap.ts
  globals.css
  enterprise.css
  generator/page.tsx                → generator wizard (wypowiedzenie OC)
  dokumenty/page.tsx                → document library with search/filter
  dokumenty/[slug]/page.tsx         → single document landing page
  kolizja/page.tsx                  → collision statement flow
  oswiadczenie-sprawcy/page.tsx
  wspolne-oswiadczenie/page.tsx
  umowa-kupna-sprzedazy/page.tsx
  umowa-kupna-sprzedazy-wspolwlasciciel/page.tsx
  ubezpieczyciele/page.tsx          → insurer directory
  ubezpieczyciele/[slug]/page.tsx
  ubezpieczyciele/pzu/page.tsx      → dedicated PZU landing page
  blog/page.tsx
  blog/[slug]/page.tsx
  faq/page.tsx
  kontakt/page.tsx
  polityka-prywatnosci/page.tsx
  regulamin/page.tsx
```

There is no `loading.tsx`, `error.tsx`, `dashboard/`, `premium/`, or `api/` route.

---

# components/

Flat, reusable UI components (no subfolders):

```
components/
  Header.tsx
  Footer.tsx
  Logo.tsx
  Breadcrumbs.tsx
  CookieConsent.tsx
  InsurerBrand.tsx
  ProductVisuals.tsx    → decorative section illustrations (SVG-based)
  Reveal.tsx            → scroll-triggered fade-in wrapper (IntersectionObserver)
```

---

# features/

Business logic grouped by feature, one folder per domain:

```
features/
  generator/GeneratorForm.tsx
  collision/CollisionForm.tsx
  collision/JointStatementForm.tsx
  contact/ContactForm.tsx
  documents/DocumentsBrowser.tsx
  purchase-agreement/PurchaseAgreementForm.tsx
```

---

# lib/

```
lib/
  catalog.ts       → document catalog, generator groups, insurer list
  blog.ts          → blog post data
  downloadPdf.ts    → client-side PDF download helper
```

---

# pdf/

Standalone PDF generation engine (Node scripts, not part of the Next.js runtime bundle):

```
pdf/
  engine/create-pdf.mjs
  engine/document.mjs
  engine/footer.mjs
  engine/form.mjs
  engine/grid.mjs
  engine/header.mjs
  engine/helpers.mjs
  engine/qr.mjs
  engine/theme.mjs
  engine/typography.mjs
  engine/watermark.mjs
  templates/oswiadczenie-sprawcy.mjs
  templates/wspolne-oswiadczenie.mjs
  templates/wypowiedzenie-oc.mjs
```

---

# scripts/

```
scripts/
  generate-pdf-templates.mjs
  generate-premium-collision-pdf.mjs
  generate-professional-pdfs.mjs
  generate-styled-pdfs.mjs
```

Run via `npm run pdf:generate` (see `package.json`).

---

# public/

```
public/
  images/    → brand + document preview images
  wzory/     → pre-generated sample PDFs served for download
```

---

# Repository Rules

Never

- duplicate components
- duplicate features
- duplicate types
- add a new top-level folder without updating this document

Always

- keep one feature = one folder under `features/`
- reuse existing components before creating new ones

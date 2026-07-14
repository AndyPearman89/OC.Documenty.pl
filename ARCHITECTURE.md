# ARCHITECTURE.md

> Architecture Specification
> Project: OC.Documenty.pl

---

# Purpose

This document describes the actual architecture of the OC.Documenty.pl platform as implemented today, plus explicitly-marked future direction.

---

# System Overview

OC.Documenty.pl is a Next.js site that lets users fill in and download Polish insurance-related document templates (OC cancellation, collision statements, vehicle sale/purchase contracts, refund requests, complaints, etc.) as PDF, entirely client-side — no accounts, no server-side storage of form data.

---

# High-Level Architecture

```
Browser
  ↓
Next.js App Router (Server Components for content, Client Components for forms)
  ↓
features/*  (form state, validation, step wizards)
  ↓
lib/downloadPdf.ts + pdf/engine  (PDF generation, runs in-browser via jsPDF/html2canvas)
  ↓
Downloaded PDF file
```

There is no backend API, database, or authentication layer. `pdf/` also contains standalone Node scripts (`scripts/generate-*.mjs`) used to pre-render the static sample PDFs shipped in `public/wzory/`.

---

# Core Modules (implemented)

## Marketing / content pages

Homepage, `/dokumenty` (document library), `/blog`, `/faq`, `/kontakt`, `/ubezpieczyciele` (insurer directory + PZU landing page), legal pages (`/regulamin`, `/polityka-prywatnosci`).

## Generator

`/generator` — multi-step wizard (`features/generator/GeneratorForm.tsx`) for the OC-cancellation flow: insurer → vehicle → owner → policy → signature/preview, backed by React Hook Form + Zod.

## Collision statements

`/kolizja`, `/oswiadczenie-sprawcy`, `/wspolne-oswiadczenie` — `features/collision/CollisionForm.tsx` and `JointStatementForm.tsx`.

## Vehicle sale/purchase contracts

`/umowa-kupna-sprzedazy`, `/umowa-kupna-sprzedazy-wspolwlasciciel` — `features/purchase-agreement/PurchaseAgreementForm.tsx`.

## Document catalog

`features/documents/DocumentsBrowser.tsx` + `lib/catalog.ts` — searchable, category-filtered list of all 12 document templates.

## PDF engine

`pdf/engine/*.mjs` — shared low-level building blocks (header, footer, watermark, QR code, typography, grid) composed by `pdf/templates/*.mjs` into per-document layouts. Generated PDFs include header, footer, logo, QR code and A4 print-ready layout.

---

# Not implemented (do not assume these exist)

- User accounts, login, dashboard, saved documents/history
- Any backend API, database, or WordPress/GraphQL integration
- Electronic signature (photo-signature capture exists in the generator; cryptographic e-signature does not)
- OCR, AI autofill, multi-language support

Treat these as roadmap ideas only — verify with the user before designing against them.

---

# Frontend Layers

```
app/*/page.tsx (Server Components, metadata, layout)
  ↓
components/*  (shared, presentational)
  ↓
features/*/*Form.tsx (Client Components: state, validation, steps)
  ↓
lib/*  (catalog data, PDF download helper)
```

---

# Data Flow (generator/form flows)

```
User input (React Hook Form + Zod validation)
  ↓
In-memory / component state (no server round-trip)
  ↓
Preview render
  ↓
pdf/engine via lib/downloadPdf.ts
  ↓
Download
```

Form drafts are not persisted to a server; some flows keep a working draft in browser storage for the duration of the session (see `polityka-prywatnosci` page for the current wording on this).

---

# Cross-Cutting Concerns

- Accessibility (WCAG AA target — see UI_GUIDELINES.md)
- SEO (per-page metadata, sitemap.ts, robots.ts)
- Performance (Next.js App Router defaults: server components, image optimization)

No analytics, logging, or monitoring integration exists yet.

---

# Scalability

New document types are added by: extending `lib/catalog.ts`, adding a `features/<domain>/*Form.tsx`, adding a `pdf/templates/<slug>.mjs`, and adding the corresponding `app/<slug>/page.tsx` (or a `dokumenty/[slug]` entry if it doesn't need a dedicated custom page).

---

# Quality Goals

- Strong typing (TypeScript strict)
- No duplicated business logic across features
- Predictable, flat folder structure (see PROJECT_STRUCTURE.md)

---

# Future Integrations (not started)

- Backend API / persistence
- Electronic signature provider
- Analytics

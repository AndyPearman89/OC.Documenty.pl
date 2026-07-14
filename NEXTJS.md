# NEXTJS.md

> Next.js Enterprise Architecture
> Project: OC.Documenty.pl
> Version: 1.0

---

# Purpose

This document defines the official Next.js architecture for OC.Documenty.pl.

All development must follow this specification.

---

# Framework

- Next.js 16+
- React 19
- TypeScript Strict
- App Router
- Server Components by default

---

# Core Principles

- Server First
- Progressive Enhancement
- Mobile First
- SEO First
- Performance First
- Accessibility First

---

# Rendering Strategy

Default

- Server Components

Use Client Components only for:

- forms
- animations
- browser APIs
- interactive UI

Never use `"use client"` unless required.

---

# Routing

Actual routes (see SITE_ARCHITECTURE.md for the full, current list):

```
/
/generator
/dokumenty
/dokumenty/[slug]
/kolizja
/oswiadczenie-sprawcy
/wspolne-oswiadczenie
/umowa-kupna-sprzedazy
/umowa-kupna-sprzedazy-wspolwlasciciel
/ubezpieczyciele
/ubezpieczyciele/[slug]
/ubezpieczyciele/pzu
/blog
/blog/[slug]
/faq
/kontakt
/polityka-prywatnosci
/regulamin
```

There is no `/dashboard`, `/generator/oc`, or `/generator/sprzedaz` route.

---

# Route Rules

Every route must include:

- metadata
- loading.tsx
- error.tsx
- not-found.tsx (where applicable)

---

# Metadata

Every page requires:

- title
- description
- canonical
- OpenGraph
- Twitter Card
- robots
- JSON-LD

---

# Layout

```
Root Layout

↓

Marketing Layout

↓

Dashboard Layout

↓

Generator Layout
```

Nested layouts should minimize duplication.

---

# Components

Order of preference:

1. Server Component
2. Shared Component
3. Feature Component
4. Client Component

---

# Data Fetching

Prefer:

- async Server Components
- streaming
- cache where appropriate

Avoid unnecessary client-side fetching.

---

# Forms

Use:

- React Hook Form
- Zod
- Server Actions (when adopted)

Never implement custom validation if an existing validator is available.

---

# Images

Use next/image.

Requirements:

- responsive
- lazy loading
- descriptive alt text
- optimized formats

---

# Fonts

Use next/font.

No external runtime font loading.

---

# Performance

Target:

- Lighthouse 95+
- Core Web Vitals "Good"

Always use:

- dynamic imports
- lazy loading
- code splitting

---

# Error Handling

Every route supports:

- loading
- error
- empty
- retry

---

# Accessibility

Mandatory:

- WCAG AA
- semantic HTML
- keyboard navigation
- ARIA labels
- visible focus

---

# Testing

Each route should include:

- rendering tests
- accessibility verification
- responsive verification

Critical flows require E2E coverage.

---

# Security

Never expose:

- secrets
- tokens
- environment variables

Sanitize all user input.

---

# Production Checklist

Before merge:

- Build passes
- TypeScript passes
- ESLint passes
- Tests pass
- Lighthouse target achieved
- Accessibility verified
- Metadata verified
- No duplicated code

---

# Final Rule

Every page should be deployable to production without requiring placeholder implementations or unfinished functionality.

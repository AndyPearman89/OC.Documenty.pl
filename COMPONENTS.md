# COMPONENTS.md

> Component Reference
> Project: OC.Documenty.pl

---

# Purpose

This document lists the actual reusable components and feature forms in the codebase. Update it whenever a component is added, renamed, or removed.

---

# Principles

Every component should be

- Reusable where genuinely shared, otherwise inline in the page
- Typed (props interface, no `any`)
- Accessible (semantic HTML, keyboard support)
- Responsive

Don't generalize a component before a second real use case exists.

---

# components/ (flat, shared UI)

| Component | Purpose |
|---|---|
| `Header.tsx` | Site header, primary nav, mobile menu |
| `Footer.tsx` | Site footer, link columns, contact block |
| `Logo.tsx` | Brand mark used in header/footer |
| `Breadcrumbs.tsx` | Breadcrumb trail for catalog/insurer pages |
| `CookieConsent.tsx` | Cookie-consent banner, persists choice to `localStorage` |
| `InsurerBrand.tsx` | Insurer badge/logo rendering |
| `ProductVisuals.tsx` | Decorative SVG illustrations used across marketing sections |
| `Reveal.tsx` | Scroll-triggered fade-in wrapper (IntersectionObserver, respects `prefers-reduced-motion`) |

There are no subfolders (`layout/`, `navigation/`, `ui/`, etc.) — keep components flat unless the list above grows large enough to justify grouping.

---

# features/ (domain forms, one folder per feature)

| Feature folder | Component | Purpose |
|---|---|---|
| `generator/` | `GeneratorForm.tsx` | Multi-step OC-cancellation wizard |
| `collision/` | `CollisionForm.tsx` | Collision statement form (`/kolizja`, `/oswiadczenie-sprawcy`) |
| `collision/` | `JointStatementForm.tsx` | Joint collision statement (`/wspolne-oswiadczenie`) |
| `contact/` | `ContactForm.tsx` | Contact page form |
| `documents/` | `DocumentsBrowser.tsx` | Searchable/filterable document catalog (`/dokumenty`) |
| `purchase-agreement/` | `PurchaseAgreementForm.tsx` | Vehicle purchase/sale contract forms |

---

# Naming Convention

PascalCase file and component names, matching the existing files above (`GeneratorForm.tsx`, not `generator-form.tsx`).

---

# Props

- Explicit interfaces, strict typing, no `any`
- Optional props only when there's a real default behavior

---

# Styling

Plain CSS via `app/globals.css` (CSS custom properties: `--red`, `--navy`, `--ink`, `--muted`, `--line`, `--soft`, `--shadow`, `--radius`) and `app/enterprise.css` (page/section-specific classes). No Tailwind, no CSS-in-JS, no component library — class names are handwritten and shared by convention (e.g. `.button`, `.buttonPrimary`, `.buttonOutline`, `.card`-style patterns per section).

No inline styles.

---

# State Management

Local component state (`useState`) and React Hook Form for form state. No global state library — don't introduce one without a concrete cross-page state need.

---

# Accessibility

Every component should have semantic HTML, visible focus, and keyboard support. WCAG AA is the target; there is no automated accessibility test suite yet, so verify manually when touching a component.

---

# Testing

There is no test suite in this repo today (no `tests/`, no test runner configured in `package.json`). Don't reference or require tests in reviews until one is set up — flag it separately if it's needed.

---

# Review Checklist

Before adding a component, check this file and the tables above for an existing one that already does the job. Reject additions that duplicate an existing component or introduce a new styling approach (e.g. Tailwind, CSS-in-JS) inconsistent with the rest of the codebase.

# OC.Documenty.pl

<div align="center">

# 🚗 OC.Documenty.pl

### Enterprise Platform for Polish Insurance Documents

Generate, preview, sign and manage Polish insurance documents with a modern, accessible and production-ready user experience.

**Status:** ✅ Production Ready (P0-P2 Complete)

**Latest:** E2E tests + accessibility + dark mode + security hardened

---

Next.js • React • TypeScript

</div>

---

# Vision

OC.Documenty.pl is a production-grade platform dedicated to creating, managing and delivering Polish insurance documents.

The platform focuses on simplicity for users while maintaining enterprise-quality architecture, performance, accessibility and security.

---

# Objectives

- Generate insurance documents in minutes
- Simplify OC cancellation workflows
- Professional PDF generation
- Future electronic signature support
- Mobile-first experience
- Excellent SEO
- High Core Web Vitals
- Enterprise code quality

---

# Planned Features

## Document Generator

- OC cancellation
- Change of insurer
- Vehicle sale
- Vehicle purchase
- Refund requests
- Statements
- Complaints
- Custom templates

---

## PDF Engine

- Live preview
- Print
- Download PDF
- Download DOCX
- QR verification
- Document versioning
- Branded header & footer
- Professional A4 layout

---

## User Experience

- Step-by-step generator
- Progress tracking
- Responsive interface
- Accessibility (WCAG AA)
- Fast navigation
- Autosave (planned)
- Modern animations

---

## Future Capabilities

- Electronic signature integration
- Secure document delivery
- AI-assisted document completion
- OCR
- Document history
- Premium workspace
- Multi-language support

---

# Technology Stack

## Frontend (actual)

- Next.js 16+
- React 19
- TypeScript (Strict)
- App Router
- Plain CSS (no Tailwind, no component library)
- React Hook Form + Zod
- jsPDF + html2canvas (client-side PDF generation)
- qrcode
- lucide-react

## Backend

None. No API, database, or authentication — everything runs client-side.

## Infrastructure

- GitHub

---

# Project Structure

```text
app/
components/
features/
lib/
pdf/
public/
scripts/
```

See PROJECT_STRUCTURE.md for the full breakdown.

---

# Design Principles

- Production First
- Mobile First
- Accessibility First
- SEO First
- Security First
- Performance First
- Component Reusability
- Clean Architecture

---

# Quality Standards

Every change should satisfy:

- ✅ Build passes
- ✅ TypeScript passes
- ✅ ESLint passes
- ✅ Tests pass
- ✅ Responsive
- ✅ Accessible
- ✅ SEO complete
- ✅ Production ready

---

# Testing Strategy

- Unit Tests
- Component Tests
- Integration Tests
- End-to-End Tests
- Accessibility Tests
- Performance Tests

No feature is considered complete without appropriate test coverage.

---

# Security

The project follows secure development practices:

- Strict input validation
- Type-safe code
- Secret isolation
- Environment-based configuration
- Secure dependency management
- No hardcoded credentials

---

# Performance Goals

- Excellent Core Web Vitals
- Fast page loads
- Optimized images
- Lazy loading
- Dynamic imports
- Code splitting
- Efficient rendering

---

# SEO

Every page should include:

- Metadata
- Canonical URL
- Open Graph
- Twitter Card
- JSON-LD
- Breadcrumbs
- Sitemap
- Robots.txt
- Structured Data

---

# Repository Standards

The repository does **not** accept:

- TODO
- FIXME
- Placeholder code
- Dead code
- Unused imports
- Inline styles
- Duplicate logic
- Unfinished features

Only production-quality code is merged.

---

# Documentation

Key documentation files (all at repo root, there is no `docs/` folder):

- `README.md`
- `CLAUDE.md` / `CLAUDE.extended.md`
- `ARCHITECTURE.md`
- `PROJECT_STRUCTURE.md`
- `SITE_ARCHITECTURE.md`
- `COMPONENTS.md`
- `DESIGN_SYSTEM.md` / `UI_GUIDELINES.md`
- `Landing_Page.md`
- `NEXTJS.md`

There is no `TESTING.md` or `DEPLOYMENT.md` yet.

---

# Roadmap

## Phase 1

- Foundation
- Design System
- Landing Page
- Generator UI

## Phase 2

- PDF Engine
- User Dashboard
- Document Library
- Responsive Optimization

## Phase 3

- AI Assistance
- Electronic Signature
- Premium Features
- Analytics

## Phase 4

- Enterprise Integrations
- Automation
- Monitoring
- Scaling

---

# License

Copyright © OC.Documenty.pl

All rights reserved.

---

<div align="center">

Built with ❤️ using Next.js, TypeScript and modern web standards.

</div>

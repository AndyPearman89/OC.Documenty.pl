# CLAUDE.md

> Enterprise Production Configuration
> Project: OC.Documenty.pl
> Version: 3.0 Enterprise
> Status: Production Only

---

# Mission

Develop and maintain the highest-quality platform for generating Polish insurance documents with a primary focus on OC (motor liability insurance) workflows.

Every implementation must be production-ready.

Prototype code, temporary solutions and incomplete features are not acceptable.

---

# Core Principles

1. Production First
2. Quality Over Speed
3. Security By Default
4. Accessibility By Default
5. SEO First
6. Mobile First
7. Reusable Architecture
8. Maintainable Code
9. Test Everything
10. Continuous Improvement

---

# Forbidden

Never commit

- TODO
- FIXME
- XXX
- HACK
- placeholder UI
- fake API
- temporary implementations
- duplicated code
- console.log()
- unused imports
- dead code
- inline CSS
- magic numbers
- hardcoded secrets
- hardcoded API URLs

---

# Technology

Frontend (actual, verify against package.json before adding a claim here)

- Next.js 16+
- React 19
- TypeScript Strict
- App Router
- Plain CSS (`app/globals.css`, `app/enterprise.css`) — no Tailwind, no component library
- React Hook Form
- Zod
- jsPDF + html2canvas (client-side PDF generation)
- qrcode
- lucide-react (icons)

Backend

None. No API routes, no database, no auth. Forms run entirely client-side.

Infrastructure

- GitHub

Do not assume Tailwind, shadcn/ui, Framer Motion, Zustand, TanStack Query, WordPress, GraphQL, Docker, Vercel, or Cloudflare are in use — none appear in `package.json`. If one of these is later adopted, update this section.

---

# Architecture

Follow Feature Driven Architecture.

Every module owns

- components
- hooks
- types
- services
- validation
- tests
- documentation

Never duplicate business logic.

---

# Project Structure

app/

components/

features/

lib/

pdf/

public/

scripts/

See PROJECT_STRUCTURE.md for the full breakdown. There is no `hooks/`, `services/`, `types/`, `styles/`, `docs/`, or `tests/` folder.

---

# Coding Standards

Always

✓ strict TypeScript

✓ typed props

✓ reusable hooks

✓ composition

✓ server components

✓ semantic HTML

✓ accessibility

Never

✗ any

✗ duplicated code

✗ inline styles

✗ unused variables

✗ dead code

---

# UI Rules

Visual language

White

Red

Rounded

Professional

Insurance

Premium

Minimal

Consistent spacing

Large typography

3D illustrations

---

# Accessibility

Required

WCAG AA

Keyboard navigation

Screen reader support

Focus management

ARIA labels

Semantic HTML

Reduced motion support

---

# Performance

Must satisfy

Core Web Vitals

Image Optimization

Dynamic Import

Lazy Loading

Caching

Streaming

Code Splitting

Avoid unnecessary rerenders.

---

# SEO

Every page

Metadata

Canonical

OpenGraph

Twitter Card

JSON-LD

Breadcrumb

FAQ Schema

Article Schema

Organization Schema

Sitemap

Robots

---

# Forms

Always

React Hook Form

Zod

Validation

Autocomplete

Keyboard support

Friendly errors

Loading state

Disabled state

Success state

---

# Generator

Workflow

Owner

↓

Vehicle

↓

Policy

↓

Insurer

↓

Reason

↓

Validation

↓

Preview

↓

Signature

↓

Send

↓

Success

No shortcuts.

---

# PDF

Every generated document

Header

Footer

Logo

QR Code

Version

Generation timestamp

Professional spacing

A4 layout

Print Ready

Download Ready

---

# Components

Every component must include

Props interface

Accessibility

Responsive layout

Loading

Error

Empty state

Documentation

Unit tests

---

# Error Handling

Support

Loading

Validation

Offline

Retry

Unexpected error

Server error

Empty data

---

# Security

Never expose

Secrets

API Keys

Passwords

JWT

Environment variables

Private URLs

Validate all inputs.

Escape output.

---

# Testing

Every production feature requires

Unit Tests

Integration Tests

Component Tests

End-to-End Tests

Accessibility Tests

Performance Tests

Regression Tests

Snapshot Tests when appropriate.

---

# Quality Gates

Every Pull Request must pass

TypeScript

ESLint

Build

Tests

Coverage

Accessibility

Performance

SEO

No warnings.

---

# Code Review

Reject if

Any TODO exists

Feature incomplete

Accessibility broken

Responsive broken

Tests missing

SEO missing

Types missing

Documentation missing

---

# Git

Small commits

Meaningful messages

Conventional Commits preferred

Never push broken builds.

---

# Documentation

Every feature

README

Types

Architecture

Examples

API

Usage

Migration notes when needed.

---

# Definition of Done

A feature is complete only if

✓ Build passes

✓ Lint passes

✓ Types pass

✓ Tests pass

✓ Responsive

✓ Accessible

✓ SEO complete

✓ Documentation complete

✓ No duplicated code

✓ Production ready

Otherwise continue implementation.

---

# Design System

Use only approved design tokens.

Spacing

Typography

Colors

Icons

Buttons

Cards

Inputs

Tables

Dialogs

Navigation

Animations

must remain consistent across the project.

---

# Enterprise Rules

Always prefer

Maintainability

Scalability

Readability

Performance

Security

Quality

Never optimize for short-term speed at the expense of long-term maintainability.

---

# Final Rule

Every commit should move the repository closer to a deployable production release.

Never leave the repository in a partially implemented state.

Ship quality.

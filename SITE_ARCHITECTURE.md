# SITE_ARCHITECTURE.md

> Enterprise Website Architecture
> Project: OC.Documenty.pl
> Version: 1.0

---

# Purpose

This document defines the complete information architecture of the website.

It specifies every page, route, navigation path and content relationship.

---

# Goals

The website must be:

- SEO First
- Mobile First
- Accessible
- Fast
- Conversion Focused
- Scalable

---

# Primary Navigation

Home

Generator

Documents

Guides

FAQ

Contact

Login

Dashboard

---

# Site Map

/

├── generator/
│   ├── oc/
│   ├── ac/
│   ├── vehicle-sale/
│   ├── vehicle-purchase/
│   ├── complaint/
│   ├── refund/
│   └── preview/
│
├── documents/
│   ├── category/
│   ├── insurer/
│   ├── tag/
│   └── [slug]
│
├── guides/
│   ├── category/
│   └── [slug]
│
├── faq/
│
├── insurers/
│   └── [slug]
│
├── dashboard/
│
├── premium/
│
├── about/
│
├── contact/
│
├── privacy-policy/
│
├── terms/
│
└── cookies/

---

# Homepage

Hero

↓

Quick Generator

↓

Popular Documents

↓

Categories

↓

How It Works

↓

Benefits

↓

Statistics

↓

FAQ

↓

Newsletter

↓

Footer

---

# Generator Flow

Landing

↓

Document Type

↓

Owner Details

↓

Vehicle Details

↓

Insurance Details

↓

Validation

↓

Preview

↓

Signature

↓

Download

↓

Send

↓

Success

---

# Dashboard

Overview

↓

Saved Documents

↓

Drafts

↓

History

↓

Downloads

↓

Settings

---

# Search

Global Search

↓

Documents

↓

Guides

↓

FAQ

↓

Insurers

---

# Footer Navigation

Documents

Guides

Categories

Support

Company

Legal

Social

---

# SEO Landing Pages

/oc/

/wypowiedzenie-oc/

/ubezpieczyciele/

/poradniki/

/wzory-dokumentow/

/faq/

/kategorie/

/tagi/

---

# URL Rules

- Human-readable
- Short
- Stable
- Lowercase
- Hyphen-separated

Never expose implementation details in URLs.

---

# Breadcrumbs

Every content page requires breadcrumbs.

Example

Home

>

Documents

>

OC

>

Cancellation Letter

---

# Accessibility

Every page must include:

- Semantic HTML
- Keyboard navigation
- Skip links
- Proper headings
- Accessible forms

---

# Performance

Target:

- Lighthouse ≥95
- Core Web Vitals "Good"

---

# Future Expansion

Architecture must support:

- Additional document types
- AI features
- Multi-language
- User workspaces
- Enterprise integrations

without restructuring existing routes.

---

# Final Rule

The site architecture should remain predictable, scalable and easy to navigate for both users and search engines.

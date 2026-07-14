# DESIGN_SYSTEM.md

> Enterprise Design System
> Project: OC.Documenty.pl
> Version: 1.0

---

# Purpose

This document defines the official design language used across the entire application.

Every UI component must comply with this specification.

---

# Design Principles

The interface should communicate:

- Trust
- Professionalism
- Simplicity
- Speed
- Clarity
- Reliability

The design should resemble modern SaaS products rather than traditional government portals.

---

# Visual Identity

Brand

OC.Documenty.pl

Style

- Clean
- Modern
- Minimal
- Premium
- Enterprise
- Insurance-oriented

---

# Color Palette

Primary

- Brand Red

Neutral

- White
- Light Gray
- Gray
- Dark Gray

Semantic

- Success
- Warning
- Error
- Info

Never introduce ad-hoc colors.

---

# Typography

Headings

- H1
- H2
- H3
- H4

Body

- Large
- Medium
- Small

Buttons

- Medium
- Large

Use a consistent typographic scale throughout the application.

---

# Grid & Spacing

Base spacing unit: 8px

Recommended spacing:

- 8
- 16
- 24
- 32
- 48
- 64

Avoid arbitrary spacing values.

---

# Border Radius

Small

Medium

Large

Cards should use consistent rounded corners.

---

# Shadows

Levels

- Small
- Medium
- Large

Use subtle shadows to create hierarchy.

---

# Buttons

Variants

- Primary
- Secondary
- Outline
- Ghost
- Destructive

States

- Default
- Hover
- Active
- Focus
- Disabled
- Loading

---

# Forms

All inputs require:

- Label
- Placeholder
- Validation
- Error message
- Help text (when needed)

---

# Cards

Every card includes:

- Header
- Content
- Optional footer

Spacing and alignment must remain consistent.

---

# Icons

Use Lucide Icons.

Do not mix icon libraries.

---

# Animations

Use CSS transitions and the `Reveal` component (`components/Reveal.tsx`, IntersectionObserver-based scroll fade-in). No animation library is installed — don't add one without confirming the need first.

Animations should:

- improve usability
- communicate state changes
- never delay interaction

---

# Responsive Design

Breakpoints

- Mobile
- Tablet
- Laptop
- Desktop

Design mobile-first.

---

# Accessibility

Required:

- WCAG AA
- Visible focus
- Keyboard navigation
- Sufficient contrast
- Semantic HTML

---

# PDF Branding

Generated documents must include:

- Logo
- Header
- Footer
- Version
- Timestamp
- QR Code

Visual consistency between the web application and exported PDF is mandatory.

---

# Component Consistency

Every reusable component must follow the same:

- spacing
- typography
- border radius
- colors
- interaction patterns

---

# Design Review Checklist

Before merging UI changes verify:

- Responsive
- Accessible
- Consistent
- No duplicated styles
- Matches branding
- Uses design tokens
- Production ready

# COMPONENTS.md

> Enterprise Component Architecture
> Project: OC.Documenty.pl
> Version: 1.0

---

# Purpose

This document defines the architecture, lifecycle and implementation standards for every reusable component in the project.

Every UI element must comply with this specification.

---

# Principles

Every component must be

- Reusable
- Typed
- Accessible
- Responsive
- Tested
- Documented

Never build one-off components if they can be generalized.

---

# Component Hierarchy

Application

↓

Feature

↓

Section

↓

Component

↓

Primitive

---

# Folder Structure

components/

layout/

navigation/

marketing/

generator/

documents/

dashboard/

pdf/

forms/

shared/

ui/

---

# Naming Convention

Use PascalCase.

Examples

Navbar.tsx

Hero.tsx

DocumentCard.tsx

GeneratorStepper.tsx

PreviewPDF.tsx

SignaturePad.tsx

---

# Component Template

Every component should contain

- Interface
- Component
- Default export
- Documentation
- Accessibility
- Tests

---

# Props

Rules

- Explicit interfaces
- Strict typing
- Optional props only when necessary
- No any

Example

interface ButtonProps {

variant

size

disabled

loading

children

onClick

}

---

# Component Categories

## Layout

Navbar

Footer

Sidebar

Header

Container

Section

PageLayout

DashboardLayout

---

## Navigation

Breadcrumb

Pagination

Tabs

Menu

MegaMenu

MobileMenu

SearchBar

---

## Marketing

Hero

Features

Benefits

CTA

Testimonials

FAQ

Newsletter

Statistics

Pricing

---

## Generator

GeneratorStepper

ProgressBar

InsuranceForm

VehicleForm

OwnerForm

ReasonSelector

PreviewCard

Summary

---

## PDF

PreviewPDF

PDFToolbar

DownloadButton

PrintButton

VersionInfo

QRCode

---

## Documents

DocumentCard

DocumentGrid

CategoryCard

DocumentSidebar

RelatedDocuments

---

## Dashboard

DashboardCard

StatsCard

ActivityFeed

HistoryTable

ProfileCard

---

## Forms

Input

Textarea

Checkbox

Radio

Select

Autocomplete

DatePicker

FileUpload

SignaturePad

---

## Feedback

Alert

Toast

Notification

Loading

Skeleton

EmptyState

ErrorState

---

# Styling

Use only

Tailwind CSS

Design Tokens

Shared utilities

No inline styles.

---

# State Management

Prefer

Props

↓

Context

↓

Zustand

Avoid unnecessary global state.

---

# Accessibility

Every component requires

- semantic HTML
- ARIA labels
- keyboard navigation
- visible focus
- contrast compliance

---

# Performance

Use

memo()

dynamic()

lazy()

only where measurable benefit exists.

Avoid premature optimization.

---

# Testing

Every reusable component requires

- Rendering test
- Accessibility test
- Interaction test
- Snapshot (when useful)

---

# Documentation

Every exported component should document

- Purpose
- Props
- Usage
- Accessibility notes

---

# Review Checklist

Reject components that

- duplicate existing logic
- use any
- lack accessibility
- lack tests
- violate design system
- introduce inconsistent styling

---

# Definition of Done

A component is complete only if

✓ Typed

✓ Responsive

✓ Accessible

✓ Tested

✓ Documented

✓ Reusable

✓ Production Ready

# CLAUDE.extended.md

> Enterprise AI Development Specification\
> Project: **OC.Documenty.pl**\
> Version: **1.0**

------------------------------------------------------------------------

# Purpose

This document extends `CLAUDE.md` and defines engineering standards,
architecture principles and implementation requirements for the project.

It is the primary specification for AI-assisted development.

------------------------------------------------------------------------

# Development Philosophy

-   Plan before coding.
-   Analyze the existing repository first.
-   Reuse existing modules whenever possible.
-   Prefer maintainability over shortcuts.
-   Reduce technical debt with every change.

------------------------------------------------------------------------

# Product Goals

## Primary

Create a production-grade platform for Polish insurance document
generation.

## Secondary

-   Performance
-   Security
-   Accessibility
-   SEO
-   Reliability
-   Scalability

------------------------------------------------------------------------

# Architecture Principles

-   Feature Driven Architecture
-   Component Composition
-   Separation of Concerns
-   Single Responsibility Principle
-   DRY
-   KISS

------------------------------------------------------------------------

# Repository Rules

Never introduce:

-   duplicate components
-   duplicate hooks
-   duplicate services
-   duplicated business logic
-   placeholder implementations

Always refactor existing code before creating new abstractions.

------------------------------------------------------------------------

# Planning Rules

Before implementation:

1.  Analyze the repository.
2.  Search for existing implementations.
3.  Reuse existing modules.
4.  Design the solution.
5.  Implement.
6.  Test.

------------------------------------------------------------------------

# Component Standards

Every component should include:

-   typed props
-   accessibility
-   responsive layout
-   loading state
-   error state
-   empty state
-   documentation
-   tests

------------------------------------------------------------------------

# Testing Policy

Every completed feature requires:

-   Unit Tests
-   Integration Tests (where applicable)
-   End-to-End Tests for critical flows
-   Accessibility verification
-   Visual regression checks (where appropriate)

------------------------------------------------------------------------

# Quality Gate

A task is complete only if:

-   Build passes
-   Lint passes
-   Type checking passes
-   Tests pass
-   Accessibility requirements are met
-   Documentation is updated

------------------------------------------------------------------------

# Continuous Improvement

Every commit should leave the repository in a better state than before.

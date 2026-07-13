# CLAUDE.md

## Production Rules

This repository targets production-quality software only.

### Non-negotiable requirements
- No TODO, FIXME, XXX or placeholder code.
- No mock implementations committed as production.
- Every feature must be complete, tested and documented.
- Use strict TypeScript.
- No `any`.
- No duplicated code.
- Accessibility (WCAG AA) is mandatory.
- Mobile-first responsive UI.
- Performance and SEO are first-class requirements.

### Testing
Every feature must include appropriate tests where applicable:
- Unit tests
- Component tests
- Integration tests
- End-to-end tests for critical user journeys

Do not mark work as complete unless build, lint, type checking and tests pass.

### Architecture
- Next.js App Router
- Reusable components
- Feature-based organization
- Clear separation of UI, domain and infrastructure.

### Quality
Prefer maintainability over shortcuts.
Reject partial implementations. Ship production-ready code only.

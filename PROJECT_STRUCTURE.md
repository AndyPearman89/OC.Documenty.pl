# PROJECT_STRUCTURE.md

> Enterprise Repository Structure
> Project: OC.Documenty.pl

---

# Purpose

This document defines the official repository structure.

No folders should be created outside this specification unless the architecture evolves and this document is updated.

---

# Repository

```
OC.Documenty.pl/

app/
components/
features/
hooks/
lib/
services/
types/
styles/
public/
docs/
tests/
scripts/
config/
```

---

# app/

Contains all Next.js App Router pages.

```
app/

layout.tsx

page.tsx

loading.tsx

error.tsx

not-found.tsx

generator/

dokumenty/

faq/

kontakt/

o-nas/

dashboard/

premium/

api/
```

Rules

- Server Components by default
- Metadata in every route
- No business logic

---

# components/

Reusable UI.

```
components/

layout/

navigation/

cards/

forms/

generator/

pdf/

dashboard/

marketing/

shared/

ui/
```

Rules

- Reusable
- No duplicated UI
- Typed props

---

# features/

Business features.

Example

```
generator/

documents/

search/

authentication/

dashboard/

analytics/

pdf/
```

Every feature owns

- components
- hooks
- types
- services
- tests

---

# hooks/

Reusable hooks.

```
useGenerator

useSearch

useLocalStorage

useTheme

useDocument
```

Never duplicate hooks.

---

# lib/

Utilities.

```
constants.ts

helpers.ts

metadata.ts

schema.ts

validators.ts

config.ts
```

---

# services/

Business services.

```
pdf.ts

generator.ts

search.ts

analytics.ts

email.ts
```

No UI inside services.

---

# types/

Project-wide TypeScript types.

```
document.ts

generator.ts

insurance.ts

user.ts

pdf.ts
```

No duplicated interfaces.

---

# styles/

```
globals.css

animations.css

forms.css

print.css

variables.css
```

Only global styles belong here.

---

# public/

```
logo/

icons/

images/

3d/

mockups/

fonts/

favicon/
```

---

# docs/

Architecture documentation.

```
README.md

ARCHITECTURE.md

DESIGN_SYSTEM.md

TESTING.md

SECURITY.md

DEPLOYMENT.md
```

---

# tests/

```
unit/

integration/

e2e/

fixtures/

helpers/
```

Every critical feature must have tests.

---

# scripts/

Automation scripts.

```
build

lint

test

release

generate
```

---

# config/

```
eslint

prettier

tailwind

typescript

vitest

playwright
```

---

# Repository Rules

Never

- duplicate folders
- duplicate components
- duplicate services
- duplicate hooks
- duplicate types

Always

- organize by feature
- reuse code
- keep modules independent

---

# Quality Standard

Every new file should have

- clear responsibility
- strong typing
- documentation
- tests when applicable

No exceptions.

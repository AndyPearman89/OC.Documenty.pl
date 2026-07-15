# OC.Documenty.pl — Pełny Plan Implementacji Generatora Wypowiedzenia OC

**Wersja:** 1.0  
**Data:** 2026-07-15  
**Status:** W trakcie implementacji  

---

## 📋 Executive Summary

Budujemy **kompletny system** do generowania wypowiedzenia umowy OC (ubezpieczenia obowiązkowego) z trzema składowymi:

1. **Landing Page** — Marketing + showcase dokumentu
2. **Mobile Generator** — 5-krokowy formularz (mobile-first)
3. **Desktop Generator** — Side-by-side form + live PDF preview

System obejmuje **PDF i DOCX** export, live preview, validację, oraz security.

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────┐
│         OC.Documenty.pl Frontend                │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  /dokument/wypowiedzenie-oc (Landing)           │
│  ├─ Desktop: 2-column (form + preview)          │
│  └─ Mobile: Stacked (form, preview)             │
└─────────────────────────────────────────────────┘
           ↓ "Pobierz" / "Przejdź do generatora"
┌─────────────────────────────────────────────────┐
│  /generator-oc (Interactive Form)               │
│  ├─ Step 1: Dane właściciela                    │
│  ├─ Step 2: Dane pojazdu                        │
│  ├─ Step 3: Ubezpieczenie + typ wypowiedzenia   │
│  ├─ Step 4: Podsumowanie                        │
│  └─ Step 5: PDF Generation Progress             │
└─────────────────────────────────────────────────┘
           ↓
┌─────────────────────────────────────────────────┐
│  Success Screen + Download Options              │
│  ├─ Pobierz PDF                                 │
│  ├─ Pobierz DOCX                                │
│  ├─ Wyślij e-mail                               │
│  └─ Drukuj                                      │
└─────────────────────────────────────────────────┘

PDF/DOCX Generation Pipeline:
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│ Form     │→ │ Template │→ │ Renderer │→ │ Download │
│ Data     │  │ Fill     │  │ (jsPDF)  │  │ Manager  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

---

## 📁 File Structure

```
features/oc-cancellation/
├── OcCancellationTemplate.tsx          [EXISTING] ✓
│   └─ Szablon A4 z trzema opcjami
├── OcCancellationMobileGenerator.tsx    [EXISTING] ✓
│   └─ 4-krokowy formularz mobile-first
├── OcCancellationDesktopGenerator.tsx   [NEW] 🆕
│   └─ Desktop version (2-column layout)
├── PdfGenerator.ts                     [NEW] 🆕
│   └─ jsPDF rendering engine
├── DocxGenerator.ts                    [NEW] 🆕
│   └─ DOCX export (docx package)
├── types.ts                            [NEW] 🆕
│   └─ TypeScript interfaces & types
└── index.ts                            [UPDATE] ✏️
    └─ Export all components

app/
├── dokument/
│   └── wypowiedzenie-oc/
│       ├── page.tsx                    [NEW] 🆕
│       │   └─ Landing page + showcase
│       └── layout.tsx                  [NEW] 🆕
│           └─ Page-specific layout
├── generator-oc/
│   ├── page.tsx                        [UPDATE] ✏️
│   │   └─ Route both mobile + desktop
│   └── layout.tsx                      [NEW] 🆕
│       └─ Generator-specific layout
└── api/
    └── generate-pdf/
        └── route.ts                    [NEW] 🆕
            └─ Server-side PDF generation

components/
├── DocumentPreview.tsx                 [NEW] 🆕
│   └─ PDF viewer component
├── DownloadMenu.tsx                    [NEW] 🆕
│   └─ PDF/DOCX/Email/Print buttons
├── TrustBadges.tsx                     [NEW] 🆕
│   └─ Trust section with icons
└── DocumentShowcase.tsx                [NEW] 🆕
    └─ Landing page showcase

lib/
├── pdf/
│   ├── pdfGenerator.ts                 [NEW] 🆕
│   ├── pdfStyles.ts                    [NEW] 🆕
│   └── pdfTemplates.ts                 [NEW] 🆕
├── docx/
│   ├── docxGenerator.ts                [NEW] 🆕
│   └── docxTemplates.ts                [NEW] 🆕
├── validation/
│   └── formSchema.ts                   [UPDATE] ✏️
└── downloadManager.ts                  [NEW] 🆕

types/
├── oc-cancellation.ts                  [NEW] 🆕
│   └─ OcFormData, StepData, etc.
└── document.ts                         [NEW] 🆕
    └─ DocumentMetadata, ExportFormat

public/
└── fonts/
    ├── Inter-Regular.ttf               [MAYBE] 📦
    └── Inter-Bold.ttf                  [MAYBE] 📦
        └─ For PDF embedding
```

---

## 🧩 Component Specifications

### 1. **OcCancellationTemplate** [EXISTING]
```typescript
// Location: features/oc-cancellation/OcCancellationTemplate.tsx
// Status: DONE ✓

Props:
- data: Partial<OcCancellationData>
- onDataChange?: (data) => void
- readOnly?: boolean
- showSignature?: boolean

Features:
✓ A4 layout
✓ Three cancellation options with radio buttons
✓ Editable inline form fields
✓ Professional styling with red branding
✓ Print-optimized CSS
```

### 2. **OcCancellationMobileGenerator** [EXISTING]
```typescript
// Location: features/oc-cancellation/OcCancellationMobileGenerator.tsx
// Status: DONE ✓

Props: None (standalone hook-based)

Features:
✓ 4-step wizard
✓ Progress bar + stepper
✓ Session storage (draft saving)
✓ Zod validation
✓ Sticky bottom CTA
✓ Large touch targets (44-52px)

State Management:
- React Hook Form + Zod
- useState for step tracking
- sessionStorage for draft persistence
```

### 3. **OcCancellationDesktopGenerator** [NEW]
```typescript
// Location: features/oc-cancellation/OcCancellationDesktopGenerator.tsx
// Status: NOT STARTED 🆕

Props:
- initialData?: Partial<FormData>
- onSuccess?: (data) => void

Layout:
- Left (40%): Form + trust badges
- Right (60%): Live PDF preview

Features:
✓ Real-time form → PDF sync
✓ 2-column responsive layout
✓ Form field groups per step
✓ Live preview with page counter
✓ Desktop navigation buttons
```

### 4. **PdfGenerator** [NEW]
```typescript
// Location: lib/pdf/pdfGenerator.ts
// Status: NOT STARTED 🆕

Main Function:
generatePdfFromTemplate(
  formData: OcCancellationData,
  options?: PdfOptions
): Promise<Blob>

Sub-functions:
- createDocument(data): jsPDF instance
- addHeader(doc, data): void
- addInsurerSection(doc, data): void
- addOwnerSection(doc, data): void
- addCancellationOptions(doc, data): void
- addSignatureLine(doc): void
- addFooter(doc): void

Features:
✓ A4 page sizing
✓ Dynamic field population
✓ Red branding colors
✓ Conditional sections based on cancellation type
✓ Proper spacing & typography
✓ Print-ready output
```

### 5. **DocxGenerator** [NEW]
```typescript
// Location: lib/docx/docxGenerator.ts
// Status: NOT STARTED 🆕

Main Function:
generateDocxFromTemplate(
  formData: OcCancellationData,
  options?: DocxOptions
): Promise<Blob>

Features:
✓ Editable document
✓ Same layout as PDF
✓ Form fields can be edited in Word
✓ Red branding preserved
✓ Proper formatting maintained
```

### 6. **DocumentPreview** [NEW]
```typescript
// Location: components/DocumentPreview.tsx
// Status: NOT STARTED 🆕

Props:
- pdfBlob: Blob
- page?: number
- scale?: number

Features:
✓ PDF.js viewer
✓ Navigation controls
✓ Zoom in/out
✓ Download button
✓ Print button
```

### 7. **DownloadMenu** [NEW]
```typescript
// Location: components/DownloadMenu.tsx
// Status: NOT STARTED 🆕

Props:
- pdfBlob: Blob
- docxBlob?: Blob
- fileName: string
- onEmail?: () => void
- onPrint?: () => void

Features:
✓ Download PDF
✓ Download DOCX
✓ Send via email
✓ Print document
✓ Loading states
```

### 8. **TrustBadges** [NEW]
```typescript
// Location: components/TrustBadges.tsx
// Status: NOT STARTED 🆕

Props:
- variant?: 'desktop' | 'mobile'
- iconSize?: number

Badges:
1. "W 100% zgodnie z obowiązującymi przepisami"
2. "Profesjonalne wzory dokumentów"
3. "Pobierz od razu w PDF lub DOCX"
4. "Bezpieczne dane - szyfrowane"
5. "Dostępne 24/7"
```

### 9. **DocumentShowcase** [NEW]
```typescript
// Location: components/DocumentShowcase.tsx
// Status: NOT STARTED 🆕

Props:
- documentType: 'wypowiedzenie-oc'
- showPreview?: boolean

Features:
✓ Marketing copy
✓ Feature highlights
✓ Document preview/mockup
✓ Download buttons
✓ Rating display
```

---

## 📊 Data Flow

### Form Data Type
```typescript
interface OcCancellationFormData {
  // Step 1: Owner
  ownerName: string;
  pesel: string;
  phone?: string;
  address?: string;
  postalCode?: string;
  city?: string;

  // Step 2: Vehicle
  vehicleBrand: string;
  vehicleModel: string;
  registration: string;
  vin?: string;

  // Step 3: Insurance
  insurer: string;
  policyNumber: string;
  endDate: string;
  cancellationType: 'art28' | 'art28a' | 'art31';
  
  // Art 28a specific
  newInsurerName?: string;
  policyStartDate?: string;
  policyEndDate?: string;
  bankAccount?: string;
}
```

### Form → PDF Flow
```
1. User fills form (steps 1-4)
2. Clicks "Pobierz PDF" (step 5)
3. Data passed to PdfGenerator
4. PdfGenerator creates jsPDF instance
5. Template populated with form data
6. PDF rendered for preview
7. User can download/email/print
```

### Storage Flow
```
SessionStorage:
- Key: 'oc-generator-draft'
- Value: stringified FormData
- Persists across page reloads
- Cleared on successful submit
```

---

## ✨ Feature Checklist

### Landing Page (`/dokument/wypowiedzenie-oc`)
- [ ] **Desktop Layout**
  - [ ] Header with navigation
  - [ ] 2-column hero (text + illustration)
  - [ ] Document showcase with mockup/preview
  - [ ] Benefits/features grid
  - [ ] Trust badges section
  - [ ] Rating/social proof
  - [ ] Footer with contact info
  - [ ] PDF/DOCX download buttons

- [ ] **Mobile Layout**
  - [ ] Stack all sections vertically
  - [ ] Full-width buttons
  - [ ] Responsive images
  - [ ] Touch-friendly tap targets

- [ ] **Content**
  - [ ] Compelling headline
  - [ ] Problem statement
  - [ ] Solution description
  - [ ] Features list (5-7 items)
  - [ ] Pricing (free? or tiered?)
  - [ ] Legal disclaimers
  - [ ] Contact information

### Mobile Generator (`/generator-oc?view=mobile`)
- [x] **Step 1: Owner Data**
  - [x] Name input
  - [x] PESEL (numeric keyboard)
  - [x] Phone (optional)

- [x] **Step 2: Vehicle Data**
  - [x] Brand dropdown/input
  - [x] Model input
  - [x] Registration number
  - [x] VIN (optional)

- [x] **Step 3: Insurance Data**
  - [x] Insurer dropdown (autocomplete)
  - [x] Policy number
  - [x] End date (date picker)
  - [x] Cancellation type (radio buttons)

- [x] **Step 4: Summary**
  - [x] Data preview
  - [x] Confirmation message

- [ ] **Step 5: PDF Generation**
  - [ ] Progress bar
  - [ ] Loading state
  - [ ] Success checkmark

- [ ] **Success Screen**
  - [ ] "Gotowe!" heading
  - [ ] PDF preview thumbnail
  - [ ] Download options:
    - [ ] PDF
    - [ ] DOCX
    - [ ] Email
    - [ ] Print
  - [ ] "New document" button

- [ ] **Validation**
  - [x] Required fields
  - [x] Format validation (PESEL, email)
  - [x] Error messages
  - [ ] Real-time feedback on blur

- [ ] **Persistence**
  - [x] SessionStorage draft saving
  - [x] Auto-restore on page reload
  - [ ] Clear on submit

### Desktop Generator (`/generator-oc?view=desktop`)
- [ ] **2-Column Layout**
  - [ ] Left (40%): Form with steps
  - [ ] Right (60%): Live PDF preview

- [ ] **Form Section**
  - [ ] All form fields from mobile
  - [ ] Horizontal form layout
  - [ ] Grouped by step
  - [ ] Progress indicator at top
  - [ ] Keyboard navigation

- [ ] **Preview Section**
  - [ ] Real-time PDF rendering
  - [ ] Page counter (1/1)
  - [ ] Zoom controls
  - [ ] Navigation buttons
  - [ ] Update on every form change

- [ ] **Navigation**
  - [ ] Previous/Next buttons
  - [ ] Step indicator with progress bar
  - [ ] Keyboard shortcuts (Ctrl+Enter = Next)

### PDF Generation
- [ ] **jsPDF Integration**
  - [ ] A4 page sizing
  - [ ] Dynamic content filling
  - [ ] Color preservation (red branding)
  - [ ] Font embedding
  - [ ] Line breaks/text wrapping
  - [ ] Table layouts for options

- [ ] **Template Rendering**
  - [ ] Header with logo
  - [ ] Owner section
  - [ ] Insurer section
  - [ ] Cancellation statement
  - [ ] Three options (checkboxes)
  - [ ] Signature line
  - [ ] Footer with contact info

- [ ] **Conditional Content**
  - [ ] Show/hide fields based on cancellation type
  - [ ] Art. 28: Minimal fields
  - [ ] Art. 28a: Extra fields (new insurer, dates, bank account)
  - [ ] Art. 31: Minimal fields

### DOCX Export
- [ ] **Docx Generation**
  - [ ] Same layout as PDF
  - [ ] Editable form fields
  - [ ] Preserve formatting
  - [ ] Save as .docx file

### Download Manager
- [ ] **PDF Download**
  - [ ] Click to download
  - [ ] Proper MIME type
  - [ ] Filename: `vypowiedzenie-oc-{date}.pdf`

- [ ] **DOCX Download**
  - [ ] Click to download
  - [ ] Proper MIME type
  - [ ] Filename: `vypowiedzenie-oc-{date}.docx`

- [ ] **Email Integration**
  - [ ] Open default email client
  - [ ] Pre-filled subject
  - [ ] Attach PDF
  - [ ] Pre-filled body

- [ ] **Print**
  - [ ] Browser print dialog
  - [ ] Optimized print styles
  - [ ] A4 page sizing

### Security & Privacy
- [ ] **Data Handling**
  - [x] No server storage (client-side only)
  - [x] SessionStorage encryption (optional)
  - [ ] Clear data on logout
  - [ ] HTTPS only

- [ ] **Validation**
  - [x] Client-side Zod validation
  - [ ] PESEL format validation
  - [ ] Date validation (end date > today)
  - [ ] Email format validation

- [ ] **Trust Indicators**
  - [ ] "Bezpieczne dane" badge
  - [ ] Privacy policy link
  - [ ] Terms of service link
  - [ ] No cookies/tracking notice

---

## 🛠️ Technical Stack

### Frontend
- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Inline CSS + Tailwind (if needed)
- **Forms:** React Hook Form v7+
- **Validation:** Zod
- **PDF Generation:** jsPDF v2.5+
- **DOCX Export:** docx v8.12+

### Libraries
```json
{
  "dependencies": {
    "react": "^19",
    "next": "^16",
    "react-hook-form": "^7.51",
    "zod": "^3.22",
    "jspdf": "^2.5",
    "html2canvas": "^1.4",
    "docx": "^8.12",
    "@librarynext/pdfjs": "^4.0"
  }
}
```

### Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 14+, Chrome for Android

---

## 📋 Implementation Steps

### Phase 1: Setup (Day 1)
- [ ] Create file structure
- [ ] Create types/interfaces
- [ ] Update package.json with dependencies
- [ ] Set up form schema (Zod)

### Phase 2: Landing Page (Day 2)
- [ ] Create `/dokument/wypowiedzenie-oc` page
- [ ] Build mobile layout
- [ ] Build desktop layout
- [ ] Add showcase section
- [ ] Add trust badges
- [ ] Add marketing copy

### Phase 3: Desktop Generator (Day 3)
- [ ] Create `OcCancellationDesktopGenerator` component
- [ ] Build 2-column layout
- [ ] Implement live preview sync
- [ ] Add form sections

### Phase 4: PDF Generation (Day 4)
- [ ] Create `PdfGenerator` service
- [ ] Implement jsPDF template
- [ ] Add dynamic field filling
- [ ] Test PDF output
- [ ] Add preview component

### Phase 5: DOCX Export (Day 5)
- [ ] Create `DocxGenerator` service
- [ ] Implement docx template
- [ ] Add download manager
- [ ] Test DOCX output

### Phase 6: Success Screen (Day 6)
- [ ] Create success/completion screen
- [ ] Add download menu
- [ ] Add email integration
- [ ] Add print functionality
- [ ] Add "new document" flow

### Phase 7: Polish & Testing (Day 7-8)
- [ ] Responsive testing (mobile/tablet/desktop)
- [ ] Browser compatibility testing
- [ ] Accessibility (WCAG AA)
- [ ] Performance optimization
- [ ] Security audit
- [ ] User testing

### Phase 8: Deployment (Day 9)
- [ ] Build & test production build
- [ ] Deploy to staging
- [ ] Final QA
- [ ] Deploy to production
- [ ] Monitor for errors

---

## 🧪 Testing Strategy

### Unit Tests
```typescript
// PdfGenerator.test.ts
describe('PdfGenerator', () => {
  test('should generate valid PDF blob', async () => {
    const data = mockFormData;
    const blob = await generatePdfFromTemplate(data);
    expect(blob.type).toBe('application/pdf');
    expect(blob.size).toBeGreaterThan(0);
  });

  test('should fill Art 28a fields correctly', async () => {
    const data = { ...mockFormData, cancellationType: 'art28a' };
    const blob = await generatePdfFromTemplate(data);
    // Verify bank account field is in PDF
  });
});

// Validation.test.ts
describe('Zod validation', () => {
  test('should reject invalid PESEL', () => {
    const result = formSchema.safeParse({ 
      pesel: '12345' // Too short
    });
    expect(result.success).toBe(false);
  });
});
```

### Integration Tests
```typescript
// Generator.integration.test.ts
describe('Full flow', () => {
  test('should complete form → PDF download', async () => {
    // Simulate user filling form
    // Generate PDF
    // Verify download
  });
});
```

### E2E Tests (Playwright)
```typescript
// generator.e2e.ts
test('Mobile form flow', async ({ page }) => {
  await page.goto('/generator-oc');
  
  // Fill step 1
  await page.fill('[name="ownerName"]', 'Jan Kowalski');
  await page.fill('[name="pesel"]', '79010112345');
  await page.click('button:has-text("Dalej")');
  
  // Fill step 2
  await page.fill('[name="vehicleBrand"]', 'Toyota');
  // ... continue
  
  // Generate PDF
  await page.click('button:has-text("Pobierz PDF")');
  
  // Verify download
  const downloadPromise = page.waitForEvent('download');
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/vypowiedzenie-oc.*\.pdf/);
});
```

### Manual Testing Checklist
- [ ] Fill form on mobile (portrait + landscape)
- [ ] Fill form on tablet
- [ ] Fill form on desktop
- [ ] Test all 3 cancellation types
- [ ] Test validation errors
- [ ] Test draft persistence (reload page)
- [ ] Download PDF and verify content
- [ ] Download DOCX and verify content
- [ ] Test email link
- [ ] Test print functionality
- [ ] Test on slow network (throttle)
- [ ] Test on various browsers

---

## 🚀 Deployment Notes

### Build
```bash
npm run build  # Should complete without errors
```

### Environment Variables
```env
NEXT_PUBLIC_APP_URL=https://oc.documenty.pl
NEXT_PUBLIC_CONTACT_EMAIL=kontakt@oc.documenty.pl
# No backend API needed for MVP
```

### Performance Targets
- FCP (First Contentful Paint): < 1.5s
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- PDF generation time: < 2s

### Monitoring
- Sentry for error tracking
- Google Analytics for usage
- Core Web Vitals monitoring
- Error rate alerts

### Rollback Plan
- Keep previous version deployed
- Quick toggle feature flag if issues
- Database backup (if added later)

---

## 📝 Additional Notes

### Future Enhancements (Post-MVP)
1. **Multi-language support** (EN, DE)
2. **Digital signature** integration
3. **Email sending** backend
4. **Template versioning** system
5. **User accounts** with saved documents
6. **Document history** tracking
7. **Analytics** dashboard
8. **A/B testing** for conversion optimization
9. **Payment integration** (if not free)
10. **API** for partner integration

### Known Limitations
- Client-side only (no server storage)
- No user accounts/history
- No digital signature yet
- Limited to Polish language initially
- No offline support yet

### Dependencies to Add
```bash
npm install jspdf html2canvas docx
npm install --save-dev @types/jspdf
npm install --save-dev @types/docx
```

### Estimated Timeline
- **Design Review:** 1 day
- **Development:** 7-8 days
- **Testing & QA:** 2 days
- **Deployment:** 1 day
- **Total:** ~2 weeks

---

## 📞 Support & Questions

For questions about this plan:
- Review CLAUDE.md for project context
- Check ARCHITECTURE.md for system design
- Reference existing GeneratorForm component
- Consult OC template for PDF structure

---

**End of Document**

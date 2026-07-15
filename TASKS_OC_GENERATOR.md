# OC Generator — Task Checklist

**Last Updated:** 2026-07-15  
**Progress:** 15% (2/13 major phases complete)

---

## 🟢 COMPLETED

### Phase 0: Setup & Foundation
- [x] Create feature directory structure (`features/oc-cancellation/`)
- [x] Set up TypeScript types and interfaces
- [x] Configure launch.json for dev server
- [x] Update package.json with dependencies

### Phase 1: Template & Mobile Generator
- [x] Build `OcCancellationTemplate` component (A4 layout)
  - [x] Header with logo and branding
  - [x] Form sections for owner/insurer data
  - [x] Three cancellation options with radio buttons
  - [x] Professional CSS styling
  - [x] Print-optimized styles

- [x] Build `OcCancellationMobileGenerator` component
  - [x] 4-step form wizard (owner → vehicle → insurance → summary)
  - [x] Progress bar and stepper
  - [x] Zod validation
  - [x] React Hook Form integration
  - [x] Session storage for draft persistence
  - [x] Sticky bottom CTA buttons
  - [x] Large touch targets (44-52px)

---

## 🟡 IN PROGRESS / NOT STARTED

### Phase 2: Landing Page
- [ ] Create `/dokument/wypowiedzenie-oc` page route
  - [ ] Page component with metadata
  - [ ] Layout wrapper
- [ ] **Desktop Layout (Priority: HIGH)**
  - [ ] Header section
  - [ ] 2-column hero (text + illustration)
  - [ ] Document showcase/mockup
  - [ ] Benefits grid
  - [ ] Trust badges section
  - [ ] Rating/social proof display
  - [ ] CTA buttons (Pobierz PDF, Przejdź do generatora)
  - [ ] Footer

- [ ] **Mobile Layout (Priority: HIGH)**
  - [ ] Stack all sections vertically
  - [ ] Full-width buttons and images
  - [ ] Responsive spacing
  - [ ] Touch-friendly interactions

- [ ] **Content Writing (Priority: MEDIUM)**
  - [ ] Headline and tagline
  - [ ] Problem statement
  - [ ] Solution description
  - [ ] 5-7 key features
  - [ ] Social proof / testimonials
  - [ ] Legal disclaimers
  - [ ] Contact information

- [ ] **Components for Landing (Priority: HIGH)**
  - [ ] `DocumentShowcase` component
  - [ ] `TrustBadges` component
  - [ ] Image/illustration assets
  - [ ] Rating display component

### Phase 3: Desktop Generator
- [ ] Create `OcCancellationDesktopGenerator` component
  - [ ] 2-column layout (form + preview)
  - [ ] Left column: form fields
  - [ ] Right column: live PDF preview
  - [ ] Responsive breakpoints
  - [ ] Real-time form → PDF sync
  - [ ] Step indicator with progress
  - [ ] Navigation buttons (Previous/Next)

- [ ] Update form to support both mobile and desktop
  - [ ] Responsive form groups
  - [ ] Horizontal layout for desktop
  - [ ] Vertical layout for mobile
  - [ ] Conditional rendering

### Phase 4: PDF Generation Engine
- [ ] Create `lib/pdf/pdfGenerator.ts` service
  - [ ] Initialize jsPDF instance
  - [ ] Create template structure
  - [ ] Add header section with logo
  - [ ] Add owner data section
  - [ ] Add insurer data section
  - [ ] Add cancellation statement
  - [ ] Add three options with checkboxes
  - [ ] Add signature line
  - [ ] Add footer
  - [ ] Handle Art 28, 28a, 31 variations

- [ ] Create `lib/pdf/pdfStyles.ts`
  - [ ] Color constants
  - [ ] Font definitions
  - [ ] Spacing/padding values
  - [ ] Text styles

- [ ] Create `lib/pdf/pdfTemplates.ts`
  - [ ] Template structure
  - [ ] Text content
  - [ ] Helper functions

- [ ] **PDF Features (Priority: HIGH)**
  - [ ] Dynamic field population
  - [ ] Conditional sections (based on cancellation type)
  - [ ] Proper text wrapping
  - [ ] Page breaks handling
  - [ ] Font embedding
  - [ ] Image/logo embedding
  - [ ] Print-ready output

### Phase 5: DOCX Export Engine
- [ ] Create `lib/docx/docxGenerator.ts` service
  - [ ] Initialize docx document
  - [ ] Add header
  - [ ] Add form sections
  - [ ] Add cancellation options
  - [ ] Add signature section
  - [ ] Add footer

- [ ] Create `lib/docx/docxTemplates.ts`
  - [ ] Template structure
  - [ ] Paragraph styles
  - [ ] Table layouts

- [ ] **DOCX Features (Priority: MEDIUM)**
  - [ ] Editable form fields
  - [ ] Preserve formatting
  - [ ] Same layout as PDF
  - [ ] Proper styling

### Phase 6: Preview & Download Components
- [ ] Create `components/DocumentPreview.tsx`
  - [ ] PDF.js integration
  - [ ] Page navigation
  - [ ] Zoom controls
  - [ ] Download button

- [ ] Create `components/DownloadMenu.tsx`
  - [ ] PDF download button
  - [ ] DOCX download button
  - [ ] Email button
  - [ ] Print button
  - [ ] Loading states
  - [ ] Success messages

- [ ] Create `components/TrustBadges.tsx`
  - [ ] Icon components (5 badges)
  - [ ] Responsive grid
  - [ ] Desktop/mobile variants

- [ ] Create `lib/downloadManager.ts`
  - [ ] PDF download handler
  - [ ] DOCX download handler
  - [ ] Email integration
  - [ ] Print handler
  - [ ] Filename generation
  - [ ] Proper MIME types

### Phase 7: Success & Completion Flow
- [ ] Create success/completion screen component
  - [ ] "Gotowe!" heading with checkmark
  - [ ] Document preview thumbnail
  - [ ] Download menu
  - [ ] Email option
  - [ ] Print option
  - [ ] "New document" button

- [ ] Add completion tracking
  - [ ] PDF generation status
  - [ ] Download status
  - [ ] Email status

### Phase 8: Integration & Routing
- [ ] Update `/generator-oc` route
  - [ ] Detect device type (mobile/desktop)
  - [ ] Route to appropriate generator
  - [ ] Responsive design fallback
  - [ ] URL parameter handling

- [ ] Create API routes (if needed)
  - [ ] `/api/generate-pdf` (server-side rendering option)
  - [ ] `/api/generate-docx` (optional)
  - [ ] `/api/send-email` (optional)

- [ ] Update `features/oc-cancellation/index.ts`
  - [ ] Export all new components
  - [ ] Export all new services

### Phase 9: Testing
- [ ] **Unit Tests (Priority: MEDIUM)**
  - [ ] Zod schema validation tests
  - [ ] PDF generator tests
  - [ ] DOCX generator tests
  - [ ] Download manager tests
  - [ ] Form logic tests

- [ ] **Integration Tests (Priority: MEDIUM)**
  - [ ] Full form → PDF flow
  - [ ] Form → DOCX flow
  - [ ] Draft persistence
  - [ ] Validation errors

- [ ] **E2E Tests (Priority: HIGH)**
  - [ ] Mobile form completion
  - [ ] Desktop form completion
  - [ ] PDF download
  - [ ] DOCX download
  - [ ] Email integration
  - [ ] Print functionality

- [ ] **Manual Testing (Priority: HIGH)**
  - [ ] Mobile (portrait/landscape)
  - [ ] Tablet
  - [ ] Desktop
  - [ ] All 3 cancellation types
  - [ ] Draft reload persistence
  - [ ] Browser compatibility (Chrome, Firefox, Safari)
  - [ ] Responsive design breakpoints
  - [ ] Keyboard navigation
  - [ ] Accessibility (WCAG AA)

### Phase 10: Performance & Security
- [ ] **Performance Optimization**
  - [ ] Code splitting
  - [ ] Image optimization
  - [ ] PDF generation performance
  - [ ] Bundle size analysis
  - [ ] Lighthouse audit

- [ ] **Security Audit**
  - [ ] HTTPS only
  - [ ] No sensitive data logging
  - [ ] PESEL validation
  - [ ] XSS prevention
  - [ ] CSRF protection
  - [ ] Input sanitization

- [ ] **Privacy & Compliance**
  - [ ] GDPR compliance check
  - [ ] Data retention policy
  - [ ] Privacy policy update
  - [ ] Terms of service update

### Phase 11: Documentation & Polish
- [ ] **Code Documentation**
  - [ ] Component JSDoc comments
  - [ ] Function documentation
  - [ ] Type documentation
  - [ ] README updates

- [ ] **Content Polish**
  - [ ] Copy review and proofreading
  - [ ] Error message review
  - [ ] Translation check (Polish)
  - [ ] Legal review

- [ ] **Visual Polish**
  - [ ] Design consistency check
  - [ ] Color scheme verification
  - [ ] Typography refinement
  - [ ] Spacing consistency
  - [ ] Loading state animations

### Phase 12: Deployment & Monitoring
- [ ] **Pre-deployment**
  - [ ] Build and test production bundle
  - [ ] Environment configuration
  - [ ] Analytics setup
  - [ ] Error tracking (Sentry)
  - [ ] Deployment checklist

- [ ] **Staging Deployment**
  - [ ] Deploy to staging environment
  - [ ] Smoke testing
  - [ ] Performance testing
  - [ ] Final QA

- [ ] **Production Deployment**
  - [ ] Deploy to production
  - [ ] Monitor for errors (first 24h)
  - [ ] User feedback collection
  - [ ] Performance monitoring

- [ ] **Post-deployment**
  - [ ] Analytics review
  - [ ] User testing feedback
  - [ ] Bug tracking
  - [ ] Iteration planning

---

## 📊 Progress Metrics

### Completion by Phase
```
Phase 0: ████████████████████ 100% ✓
Phase 1: ████████████████████ 100% ✓
Phase 2: ▓░░░░░░░░░░░░░░░░░░   5% 
Phase 3: ░░░░░░░░░░░░░░░░░░░   0% 
Phase 4: ░░░░░░░░░░░░░░░░░░░   0% 
Phase 5: ░░░░░░░░░░░░░░░░░░░   0% 
Phase 6: ░░░░░░░░░░░░░░░░░░░   0% 
Phase 7: ░░░░░░░░░░░░░░░░░░░   0% 
Phase 8: ░░░░░░░░░░░░░░░░░░░   0% 
Phase 9: ░░░░░░░░░░░░░░░░░░░   0% 
Phase 10: ░░░░░░░░░░░░░░░░░░░  0% 
Phase 11: ░░░░░░░░░░░░░░░░░░░  0% 
Phase 12: ░░░░░░░░░░░░░░░░░░░  0% 
─────────────────────────────────────
Overall: ████░░░░░░░░░░░░░░░  15%
```

### Tasks by Priority
- **HIGH Priority:** 12 tasks
- **MEDIUM Priority:** 8 tasks
- **LOW Priority:** 4 tasks

### Time Estimates
- **Phase 2:** 2 days (landing page)
- **Phase 3:** 1.5 days (desktop generator)
- **Phase 4:** 2 days (PDF generation)
- **Phase 5:** 1 day (DOCX export)
- **Phase 6:** 1.5 days (components)
- **Phase 7:** 1 day (success flow)
- **Phase 8:** 1 day (routing & integration)
- **Phase 9:** 2 days (testing)
- **Phase 10:** 1 day (performance & security)
- **Phase 11:** 1 day (documentation)
- **Phase 12:** 1 day (deployment)

**Total Estimated Time:** 14-15 days

---

## 🚀 Next Steps

1. **Review IMPLEMENTATION_PLAN_OC_GENERATOR.md** (this document)
2. **Start Phase 2:** Landing page (highest priority)
3. **Parallelize:** Start Phase 3-4 after landing page foundation
4. **Regular testing:** Test after each phase completion
5. **Track progress:** Update this checklist daily

---

## 📝 Notes & Blockers

### Blockers
- None currently identified

### Dependencies
- jsPDF library (for PDF generation)
- docx library (for DOCX export)
- Next.js 16+ (for routing)
- React Hook Form + Zod (for forms)

### Risks
- PDF generation performance on large documents
- Browser compatibility for PDF.js viewer
- DOCX library file size impact
- Email integration reliability

### Assumptions
- Users have modern browsers with PDF support
- No backend storage needed (MVP)
- Email link uses default client
- Single-page document (no multi-page scenarios yet)

---

**Last Updated by:** Claude  
**Next Review Date:** 2026-07-22

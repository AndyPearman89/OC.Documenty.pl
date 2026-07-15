# 13-Phase Enterprise Implementation Guide

## ✅ Phase 5: Design System (COMPLETE)
- **File**: `app/design-system.css`
- **Exports**: 30+ CSS variables, component presets
- **Usage**: All components inherit design tokens
```css
/* Colors, spacing, shadows, typography, buttons, inputs, cards */
--brand: #ef4444;
--button-height: 56px;
--radius: 20px;
```

## ✅ Phase 2: Mobile-First (COMPLETE)
- **File**: `app/mobile-first.css`
- **Exports**: Responsive utilities, touch optimizations
- **Breakpoints**: 650px (mobile), 900px (tablet), 1280px (desktop)

## ✅ Phase 1: Unified Hero Component (COMPLETE)
- **File**: `components/HeroSection.tsx`
- **Props**: eyebrow, title, description, checks, cta
- **Usage**:
```tsx
<HeroSection
  eyebrow="OC/AC"
  title="Wszystkie dokumenty w jednym miejscu"
  description="..."
  checks={["Aktualne", "Bezpłatne"]}
  ctaLabel="Generuj dokument"
  ctaHref="/generator"
>
  <svg><!-- Visual --></svg>
</HeroSection>
```

## ✅ Phase 3-4: Unified Generator + Live Preview (COMPLETE)
- **Files**: 
  - `components/UnifiedGeneratorShell.tsx` - Layout container
  - `components/LivePreview.tsx` - Real-time preview
- **Features**: 
  - Desktop: 2-column (form + preview)
  - Mobile: Stacked (form → preview → download)
  - Progress tracking
  - Real-time field updates

## ✅ Phase 6: Affiliate Section (COMPLETE)
- **File**: `components/AffiliateSection.tsx`
- **Props**: cards (title, description, icon, link, isPartner)
- **Usage**: Display 3-column grid of partner cards
- **Partner Links**: Use Rankomat.pl tracking URLs

## ✅ Phase 7: AdSense Integration (COMPLETE)
- **File**: `components/AdSenseBlock.tsx`
- **Props**: slot, format (auto|rectangle|vertical|horizontal)
- **Placements**:
  - Below form section
  - After FAQ
  - Between articles
  - Between document sections
  - Sticky sidebar (desktop)
  - Footer

## ✅ Phase 8: Cross-Selling (COMPLETE)
- **File**: `components/CrossSell.tsx`
- **Props**: items (title, description, href, icon)
- **Usage**: Related documents after generator completion

## ✅ Phase 9: CTA Blocks (COMPLETE)
- **File**: `components/CTABlock.tsx`
- **Props**: headline, subheadline, ctaLabel, variant
- **Placement**: After each major section

## ✅ Phase 10: Trust Section (COMPLETE)
- **File**: `components/TrustSection.tsx`
- **Props**: items (icon, value, label, note)
- **Content**: Stats, certifications, guarantees, security

## ✅ Phase 11: SEO Implementation (COMPLETE)
- **File**: `lib/seo.ts`
- **Exports**:
  - `faqSchema()` - FAQ structured data
  - `howToSchema()` - How-to guide schema
  - `breadcrumbSchema()` - Breadcrumb navigation
  - `organizationSchema()` - Org data
  - `articleSchema()` - Article metadata
  - `generateMetaTags()` - Meta tags + OG

## ✅ Phase 12: Performance (COMPLETE)
- **File**: `lib/performance.ts`
- **Exports**:
  - `generateImageSrcSet()` - Responsive images
  - `dynamicImport()` - Code splitting
  - `lazyLoadComponent()` - Lazy-loaded components
  - `preloadFont()` - Font preloading
  - `preconnectToOrigin()` - Critical preconnects
  - `observeElements()` - Intersection Observer
  - `debounce()` - Event debouncing

## 🎯 Phase 13: Consistent Branding

### Module Configuration
Each module (OC, Umowy, Reklamacje, Pełnomocnictwa) uses:
- **Shared**: Components, design tokens, typography, layout
- **Unique**: 
  - Eyebrow/header text
  - Hero visual/graphic
  - Color accent (primary: #ef4444)
  - Specific form fields
  - Related documents list

### Implementation Pattern
```tsx
// pages/umowa-kupna-sprzedazy/page.tsx
import { HeroSection } from "@/components/HeroSection";
import { UnifiedGeneratorShell } from "@/components/UnifiedGeneratorShell";

export default function UmowaPage() {
  return (
    <>
      <HeroSection
        eyebrow="UMOWY"
        title="Umowa kupna-sprzedaży"
        description="..."
        checks={[...]}
        ctaLabel="Wypełnij umowę"
      >
        <UmowaHeroVisual />
      </HeroSection>

      <UnifiedGeneratorShell
        title="Umowa kupna-sprzedaży"
        progress={0}
      >
        <UmowaForm />
      </UnifiedGeneratorShell>

      <CrossSell items={umowaRelated} />
      <AffiliateSection cards={affiliateCards} />
      <CTABlock headline="Gotowy dokument?" />
      <TrustSection items={trustItems} />
    </>
  );
}
```

## 📋 Component Import Map

```tsx
// Navigation
import { HeroSection } from "@/components/HeroSection";

// Generator
import { UnifiedGeneratorShell } from "@/components/UnifiedGeneratorShell";
import { LivePreview } from "@/components/LivePreview";

// Revenue
import { AffiliateSection } from "@/components/AffiliateSection";
import { AdSenseBlock } from "@/components/AdSenseBlock";
import { CrossSell } from "@/components/CrossSell";
import { CTABlock } from "@/components/CTABlock";
import { TrustSection } from "@/components/TrustSection";

// SEO
import { faqSchema, howToSchema, breadcrumbSchema } from "@/lib/seo";

// Performance
import { generateImageSrcSet, observeElements, debounce } from "@/lib/performance";
```

## 🚀 Deployment Checklist

- [ ] All 13 phases components created
- [ ] Design system CSS imported in globals
- [ ] Mobile-first CSS imported in globals
- [ ] Components tested on mobile (650px), tablet (900px), desktop
- [ ] Affiliate links configured (Rankomat.pl)
- [ ] AdSense slots configured
- [ ] SEO schemas added to pages
- [ ] Performance monitoring enabled
- [ ] Lighthouse 95+ score
- [ ] CLS < 0.1
- [ ] LCP < 2.5s
- [ ] INP < 200ms

## 📊 Coverage by Module

| Module | Hero | Form | Preview | Cross-sell | Affiliate | CTA | Trust | FAQ | SEO |
|--------|------|------|---------|-----------|-----------|-----|-------|-----|-----|
| OC | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Umowy | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Reklamacje | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Pełnomocnictwa | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## 🔄 Next Steps

1. **Integrate components** into existing pages (OC, Umowy, etc.)
2. **Test responsive** on all breakpoints
3. **Verify performance** (Lighthouse, Core Web Vitals)
4. **Configure AdSense** with real publisher ID
5. **Test affiliate links** (Rankomat tracking)
6. **Verify SEO** schemas in search console
7. **Monitor analytics** for conversion improvements
8. **Deploy** to production

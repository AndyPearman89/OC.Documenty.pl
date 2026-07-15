# UX Improvements: Mobile-First Generator Experience

## Overview
10 major UX enhancements to simplify the mobile generator interface, reduce cognitive load, and increase form completion rates.

---

## 1. Button Groups (Instead of Dropdowns)

**File**: `components/ButtonGroup.tsx`

Replace `<select>` with large button grid for binary/limited choices.

**Use cases**:
- Tak / Nie
- Osoba fizyczna / Firma
- Kupujący / Sprzedający
- Nowy właściciel / Poprzedni właściciel

**Features**:
- 56px minimum height (large tap target)
- Icon support
- Active state with checkmark
- 2-column grid on mobile (1 desktop if needed)
- Scale-in animation on active

**Usage**:
```tsx
<ButtonGroup
  options={[
    { value: "individual", label: "Osoba fizyczna", icon: "👤" },
    { value: "company", label: "Firma", icon: "🏢" }
  ]}
  value={type}
  onChange={setType}
  label="Typ podmiotu"
/>
```

---

## 2. Vehicle Type Tiles

**File**: `components/VehicleTypeTiles.tsx`

Icon-based card grid instead of dropdown for vehicle selection.

**Types** (10 options):
- 🚗 Samochód
- 🚙 SUV
- 🏍️ Motocykl
- 🚐 Bus
- 🚚 Ciężarówka
- 🚜 Ciągnik
- 🚌 Autobus
- 🏕️ Kamper
- 🛵 Skuter
- 🚛 Naczepa

**Features**:
- Large emoji icons (32px)
- 3-column grid on desktop
- 2-column on tablet
- 2-column on mobile
- Hover + active states
- Checkmark badge

---

## 3. Vehicle Brand Search

**File**: `components/VehicleBrandSearch.tsx`

Search + quick buttons for vehicle brand selection.

**Features**:
- Search input with magnifying glass icon
- 10 quick buttons (Audi, BMW, Ford, Opel, Toyota, etc.)
- Full brand list (50+ brands) below quick buttons
- Autocomplete filtering
- Active state highlighting

**Behavior**:
- Click input → opens search popup
- Type to filter
- Click quick button or search result → select & close
- 16px font on mobile (prevent iOS zoom)

---

## 4. Horizontal Carousels

**File**: `components/Carousel.tsx`

Replace long vertical sections with horizontal scroll cards.

**Use for**:
- Powiązane dokumenty (Related documents)
- Polecane usługi (Recommended services)
- Partnerzy (Partners)
- Najczęściej pobierane (Most downloaded)
- Artykuły (Articles)
- Ubezpieczenia (Insurance types)
- Materiały partnerskie (Partner materials)

**Features**:
- Horizontal scroll (swipe on mobile)
- Left/right nav arrows (desktop only)
- Minimum 280px card width
- 16px gap between cards
- Smooth scroll behavior
- Touchscreen optimized (-webkit-overflow-scrolling)

---

## 5. Form Fields with Icons

**File**: `components/FormField.tsx`

Every text input prefixed with an icon for visual clarity.

**Icon mappings**:
- 👤 Dane właściciela (Owner data)
- 📍 Adres (Address)
- 📅 Data (Date)
- 🚗 Pojazd (Vehicle)
- 🔢 VIN
- 📄 Numer polisy (Policy number)
- 🏢 Ubezpieczyciel (Insurer)
- 📞 Telefon (Phone)
- ✉️ E-mail

**Features**:
- 18px icon at left (12px from edge)
- 44px left padding to input
- Focus state: 3px red ring
- Error state: red border + error message
- Label above, error below
- 16px font on mobile (prevent zoom)

---

## 6. Sticky CTA Button (Mobile Only)

**CSS class**: `stickyCta`

Fixed button at bottom of screen during form filling.

**Features**:
- Position: fixed bottom
- Z-index: 40 (above content)
- 100% width with padding
- Respects safe-area-inset-bottom (notch support)
- Visible on mobile only (<650px)
- Border-top separator
- Subtle shadow (0 -2px 10px)

**Usage**:
```tsx
<div className="stickyCta">
  <button className="button buttonPrimary">Generuj dokument</button>
</div>
```

---

## 7. Progress Stepper (Vertical Timeline)

**CSS classes**: `.progressSteps`, `.progressStep`, `.stepCircle`

Multi-step form progress visualization on left side.

**Features**:
- Vertical timeline layout
- Numbered circles (1-5)
- Left border changes color (gray → red active → green completed)
- Step labels + optional descriptions
- Active step highlighted in red (#ef4444)
- Completed steps in green (#10b981)

**Structure**:
```tsx
<div className="progressSteps">
  <div className="progressStep completed">
    <div className="stepCircle">1</div>
    <div className="stepLabel">Dane właściciela</div>
  </div>
  <div className="progressStep active">
    <div className="stepCircle">2</div>
    <div className="stepLabel">Dane pojazdu</div>
  </div>
  {/* ... more steps ... */}
</div>
```

---

## 8. Responsive Card Grid

**CSS classes**: `.responseGrid`, `.responseCard`

Adaptive column count by breakpoint.

**Grid layout**:
- Mobile (<650px): 1 column
- Tablet (651-900px): 2 columns
- Desktop (901px+): 3 columns

**Card features**:
- 20px padding
- Light border (1px #e7edf4)
- Hover: shadow + border color change + -2px translateY
- Smooth transitions (0.2s)
- Rounded corners (14px)

---

## 9. Animations & Interactions

**CSS animations**:
- `slideInUp`: Content enters from bottom (0.3s)
- `slideInDown`: Content enters from top (0.3s)
- `fadeIn`: Simple opacity transition (0.2s)
- `scaleIn`: Small → full size (0.2s, 0.95 start scale)

**Interactive animations**:
- Button groups: scale-in on load, scale-out on click (0.98)
- Vehicle tiles: same as button groups
- Cards: smooth hover effects
- Form sections: slide-in as user progresses

**Reduced motion support**:
- `@media (prefers-reduced-motion: reduce)` disables all animations
- Respects accessibility preferences

---

## 10. Design Philosophy (End Result)

Modern banking/configurator app aesthetic:
- ✅ Minimum text
- ✅ Maximum icons
- ✅ Large, clear buttons (56px+)
- ✅ Intuitive cards
- ✅ Mobile-optimized tap targets (44x44px)
- ✅ Smooth animations (non-blocking)
- ✅ Visual feedback on every interaction
- ✅ Progress visibility throughout
- ✅ Sticky CTA always accessible

---

## Component Import Map

```tsx
import { ButtonGroup } from "@/components/ButtonGroup";
import { VehicleTypeTiles } from "@/components/VehicleTypeTiles";
import { VehicleBrandSearch } from "@/components/VehicleBrandSearch";
import { Carousel } from "@/components/Carousel";
import { FormField } from "@/components/FormField";
```

---

## CSS Classes Quick Reference

| Component | Classes | Mobile | Tablet | Desktop |
|-----------|---------|--------|--------|---------|
| Button Group | `.buttonGroup` | 1-col | 2-col | 2-col |
| Vehicle Tiles | `.vehicleTypesTiles` | 2-col | 2-col | 3-col |
| Vehicle Brand | `.vehicleBrandContainer` | Stacked | Stacked | Stacked |
| Carousel | `.carouselContainer` | 1 visible | 1-2 | 3+ |
| Form Field | `.formField` | 100% | 100% | 100% |
| Sticky CTA | `.stickyCta` | Visible | Hidden | Hidden |
| Progress | `.progressSteps` | Vertical | Vertical | Vertical |
| Cards | `.responseGrid` | 1-col | 2-col | 3-col |

---

## Testing Checklist

- [ ] Button groups respond to touch (56px min height)
- [ ] Vehicle tiles display emoji + labels correctly
- [ ] Brand search filters on type and shows 10 quick buttons
- [ ] Carousels scroll smoothly on mobile (swipe gesture)
- [ ] Form fields show icons clearly (18px)
- [ ] Sticky CTA visible only on mobile, doesn't overlap content
- [ ] Progress stepper updates as user moves between steps
- [ ] Cards scale responsively (1/2/3 columns)
- [ ] Animations respect prefers-reduced-motion
- [ ] All touch targets are 44x44px minimum
- [ ] Font is 16px+ on mobile (no iOS zoom)
- [ ] Focus states visible (3px red ring)

---

## Performance Notes

- All animations use CSS (not JavaScript)
- No blocking transitions
- GPU-accelerated transforms (translate, scale)
- Carousels use native scroll (not library)
- Reduced motion queries prevent animation waste
- Lightweight icon strategy (emoji, not image files)

---

## Next Steps

1. Integrate components into OC.Documenty.pl generators
2. Test on real mobile devices (iOS + Android)
3. Verify touchscreen responsiveness
4. Check animations on low-end devices
5. Gather user feedback on form completion rates
6. Monitor analytics for conversion improvements

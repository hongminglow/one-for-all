# Storybook Page Overrides

> **PROJECT:** One For All UI
> **Generated:** 2026-02-05 22:49:18
> **Page Type:** Blog / Article

> ⚠️ **IMPORTANT:** Rules in this file **override** the Master file (`design-system/MASTER.md`).
> Only deviations from the Master are documented here. For all other rules, refer to the Master.

---

## Page-Specific Rules

### Layout Overrides

- **Max Width:** 1200px (standard)
- **Layout:** Full-width sections, centered content
- **Sections:** 1. Hero with search bar, 2. Popular categories, 3. FAQ accordion, 4. Contact/support CTA

### Spacing Overrides

- No overrides — use Master spacing

### Typography Overrides

- No overrides — use Master typography

### Color Overrides

- **Strategy:** Clean, high readability. Minimal color. Category icons in brand color. Success green for resolved.

### Component Overrides

- Avoid: Desktop-first causing mobile issues
- Avoid: No feedback during loading
- Avoid: Override system gestures

---

## Page-Specific Components

- No unique components for this page

---

## Recommendations

- Effects: Neon glow (text-shadow), glitch animations (skew/offset), scanlines (::before overlay), terminal fonts
- Responsive: Start with mobile styles then add breakpoints
- Feedback: Show spinner/skeleton for operations > 300ms
- Touch: Avoid horizontal swipe on main content
- CTA Placement: Search bar prominent + Contact CTA for unresolved questions

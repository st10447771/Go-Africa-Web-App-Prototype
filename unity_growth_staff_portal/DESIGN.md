---
name: Unity & Growth Staff Portal
colors:
  surface: '#f7faf8'
  surface-dim: '#d7dbd9'
  surface-bright: '#f7faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f2'
  surface-container: '#ebeeed'
  surface-container-high: '#e6e9e7'
  surface-container-highest: '#e0e3e1'
  on-surface: '#181c1c'
  on-surface-variant: '#414844'
  inverse-surface: '#2d3130'
  inverse-on-surface: '#eef1f0'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#1f6d1a'
  on-secondary: '#ffffff'
  secondary-container: '#a4f792'
  on-secondary-container: '#267320'
  tertiary: '#262624'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c3c39'
  on-tertiary-container: '#a7a6a2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#a4f792'
  secondary-fixed-dim: '#89da79'
  on-secondary-fixed: '#002201'
  on-secondary-fixed-variant: '#005303'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#f7faf8'
  on-background: '#181c1c'
  surface-variant: '#e0e3e1'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-label:
    fontFamily: Courier Prime
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid_columns: '12'
  gutter: 24px
  margin_desktop: 40px
  margin_tablet: 24px
  margin_mobile: 16px
  unit: 8px
  density_compact: 4px
  density_comfortable: 12px
---

## Brand & Style

The design system is a "Corporate Modern" evolution of the core brand, specifically engineered for high-density administrative workflows. It prioritizes the **Staff Persona**: professionals who require high data visibility, efficient navigation, and a sense of institutional stability.

The aesthetic balances **efficiency** with **warmth**. By combining a structured, grid-heavy layout with a soft, organic color palette, the interface reduces the coldness typically associated with enterprise software. It evokes an emotional response of organized calm, reliability, and growth.

**Key Principles:**
- **Information Density:** Optimized for desktop-first data management without sacrificing legibility.
- **Human-Centric Enterprise:** Softened edges and warm neutrals prevent "dashboard fatigue."
- **Institutional Authority:** Clear hierarchies and structured alignment provide a sense of security.

## Colors

The palette is anchored in the "Unity & Growth" identity, utilizing deep greens to represent stability and lighter greens for progress.

- **Primary:** A deep forest green used for navigation, primary actions, and brand presence.
- **Secondary:** A vibrant growth green used for focus states, success indicators, and highlighting growth metrics.
- **Neutral/Surface:** A warm off-white (`#F9F7F2`) serves as the primary canvas, reducing eye strain compared to pure white.
- **Semantic Palette:** High-contrast tones for administrative feedback. Success uses a rich green; Warning uses a legible amber; Error uses a muted but urgent red; Info uses a calm blue for system updates.

## Typography

The typography utilizes **Manrope** for its modern, geometric clarity and excellent legibility in high-density environments. 

For data-heavy tables and administrative panels, use `body-md` (14px) as the standard text size to maximize information per screen. `label-md` is reserved for table headers and metadata categories, utilizing an uppercase style to create clear visual separation from data. A secondary monospaced font is introduced for ID tags and numerical tracking codes to ensure alignment and character distinction.

## Layout & Spacing

This design system uses a **12-column fluid grid** for the main content area, with a fixed-width left navigation bar (240px). 

- **Data Tables:** Use the `density_compact` (4px) vertical padding for table rows to allow for "at-a-glance" scanning of large datasets.
- **Card Layouts:** Use `density_comfortable` (12px) or `unit` x 3 (24px) padding for dashboard widgets to allow the layout to breathe.
- **Breakpoints:** 
  - Desktop: 1440px+ (Full 12 columns)
  - Laptop: 1024px - 1439px (Adaptive gutters)
  - Tablet/Mobile: Reflow to single-column card-based views for essential notifications only.

## Elevation & Depth

To maintain a professional and clean aesthetic, the design system utilizes **Tonal Layering** supplemented by **Low-contrast Outlines**.

- **Level 0 (Background):** Warm off-white surface (`#F9F7F2`).
- **Level 1 (Cards/Tables):** Pure white surface with a 1px border in a muted neutral (`#E5E5E1`). No shadow.
- **Level 2 (Dropdowns/Modals):** Pure white surface with a soft, diffused ambient shadow (10% opacity, 12px blur) to indicate temporary overlay.
- **Interactivity:** Elements should not "lift" on hover; instead, use a subtle background color shift (e.g., from white to a very light green tint) to indicate focus.

## Shapes

The design system employs a **Soft** shape language (`roundedness: 1`). 

- **Standard Elements:** 4px (0.25rem) radius for buttons, input fields, and small cards. This provides a professional, "exact" feel while avoiding the harshness of sharp corners.
- **Containers:** 8px (0.5rem) radius for large dashboard panels and modal windows to gently frame the content.
- **Interactive Chips:** Fully rounded (pill-shaped) to distinguish them from functional buttons.

## Components

### Data Tables
The core of the portal. Rows feature a subtle hover state (`#F1F5F2`). Headers are sticky, using `label-md` typography. Data cells use `body-md`. Actions (Edit/View) are tucked into an overflow menu or represented by subtle ghost icons.

### Buttons
- **Primary:** Solid Primary Green with white text. 4px radius.
- **Secondary:** Outlined Primary Green with transparent background.
- **Tertiary:** Ghost style, using Primary Green text for low-priority actions.

### Form Fields
Inputs use a white background with a 1px solid border. Labels are placed above the field in `body-sm` (bold). Error states are indicated by a 2px border in the semantic error red.

### Status Chips
Used within tables to show record status. Small, pill-shaped with low-opacity backgrounds matching the semantic color (e.g., 10% opacity Green for "Active").

### Information Cards
Used for dashboard summaries. Include a "Growth" sparkline where applicable, using the Secondary Green for positive trends.
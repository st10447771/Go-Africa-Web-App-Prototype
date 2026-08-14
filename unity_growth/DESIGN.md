---
name: Unity & Growth
colors:
  surface: '#f9fbec'
  surface-dim: '#d9dbcd'
  surface-bright: '#f9fbec'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f5e6'
  surface-container: '#edefe1'
  surface-container-high: '#e7e9db'
  surface-container-highest: '#e1e4d6'
  on-surface: '#191d14'
  on-surface-variant: '#434939'
  inverse-surface: '#2e3228'
  inverse-on-surface: '#f0f2e4'
  outline: '#737967'
  outline-variant: '#c3c9b4'
  surface-tint: '#436900'
  primary: '#436900'
  on-primary: '#ffffff'
  primary-container: '#76a72f'
  on-primary-container: '#213700'
  inverse-primary: '#a2d659'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#ffce5b'
  on-secondary-container: '#745700'
  tertiary: '#983888'
  on-tertiary: '#ffffff'
  tertiary-container: '#dd73c7'
  on-tertiary-container: '#5f0055'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bdf372'
  primary-fixed-dim: '#a2d659'
  on-primary-fixed: '#112000'
  on-primary-fixed-variant: '#314f00'
  secondary-fixed: '#ffdf9c'
  secondary-fixed-dim: '#f0c04f'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#ffd7f1'
  tertiary-fixed-dim: '#fface9'
  on-tertiary-fixed: '#3a0033'
  on-tertiary-fixed-variant: '#7b1d6e'
  background: '#f9fbec'
  on-background: '#191d14'
  surface-variant: '#e1e4d6'
  leaf-green: '#86BC25'
  harvest-gold: '#C59E31'
  foundation-white: '#FFFFFF'
  clay-black: '#1C1C1C'
  earth-gray: '#F4F5F2'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
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
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.1px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.5px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  margin-mobile: 16px
  margin-tablet: 24px
  margin-desktop: 32px
  gutter: 16px
  card-padding: 20px
---

## Brand & Style

The design system is rooted in the "Unity & Growth" narrative, embodying an impactful, community-focused, and transparent personality. It leverages a modern **Corporate / Material 3** aesthetic with a strong emphasis on vibrancy and trustworthiness. The visual language uses high-quality typography and clean, card-based layouts to convey professionalism while maintaining an approachable, grassroots feel.

The emotional response should be one of optimism and reliability. By utilizing a "Tactile-Modern" hybrid approach, we use soft shadows and organic shapes to represent growth and human connection, while maintaining the rigorous grid and functional clarity required for a non-profit foundation.

## Colors

The palette is derived directly from the landscape and the foundation's logo. **Primary Green** (#76A72F) represents vitality, sustainability, and the foundation's growth-oriented mission. **Secondary Gold** (#B68C1C) symbolizes value, sun-drenched landscapes, and the excellence of the foundation’s educational initiatives.

The color system follows Material 3 logic, using tonal palettes to create accessible contrast. The primary green should be used for major call-to-action elements, while gold serves as a vibrant accent for highlights, iconography, and progress indicators. Backgrounds should remain clean using **Foundation White** or **Earth Gray** to ensure maximum legibility for impact reports and mission statements.

## Typography

This design system uses a dual-sans-serif pairing to balance modern professionalism with a welcoming tone. **Manrope** is used for all headlines; its geometric yet warm structure provides an authoritative voice for section titles and mission statements. **Plus Jakarta Sans** is used for body copy and labels, offering high legibility with soft, approachable curves that suit mobile interfaces.

Hierarchy is strictly enforced to guide users through dense information. Mobile headings are scaled down to ensure hero messages do not break across too many lines, maintaining visual impact on smaller Android devices.

## Layout & Spacing

The system utilizes a **Fluid Grid** model with an 8px baseline rhythm. For mobile, a 4-column grid is used, expanding to 8 columns for tablets and 12 columns for desktop environments. 

Layouts are primarily card-based, using a vertical stack on mobile that reflows into multi-column masonry or horizontal grids on larger screens. Generous white space between sections (using `64px` or `80px` gaps) is required to reflect the "transparency" brand value, ensuring that each initiative (Education, Medical, etc.) is given enough visual breathing room to be processed individually.

## Elevation & Depth

To maintain a modern Material Design feel, this design system uses **Tonal Layering** combined with **Ambient Shadows**. Instead of harsh black shadows, we use low-opacity shadows tinted with the primary green or neutral grays to create a "soft lift."

- **Surface Level 0:** The main background, typically #F4F5F2.
- **Surface Level 1 (Cards):** Pure white background with a 1px soft border (#E0E0E0) and a subtle 4px blur shadow.
- **Surface Level 2 (Floating Action Buttons/Modals):** Increased shadow depth (12px blur) to indicate high interactivity and urgent actions like "Donate Now."

Glassmorphism is used sparingly for top navigation bars (80% opacity with a 15px backdrop blur) to maintain context while scrolling through content-heavy pages.

## Shapes

The shape language is consistently **Rounded**, mirroring the organic circular elements found in the foundation's logo. This softness helps the UI feel community-focused and inclusive. 

- **Standard Elements:** 8px (0.5rem) corner radius for buttons and input fields.
- **Containers:** 16px (1rem) corner radius for cards and larger content modules.
- **Special Elements:** 24px (1.5rem) or fully pill-shaped for "Donate" chips and high-priority call-to-action buttons.

## Components

### Buttons
Primary buttons use the Primary Green background with White text and a pill-shaped radius. Secondary buttons should be outlined in Gold with Gold text. All buttons require a subtle lift shadow on hover/press to reinforce tactile feedback.

### Cards
Cards are the primary vehicle for "Our Initiatives." They must feature a 16px rounded corner, a white background, and a "kicker" label in Gold above the headline. The card padding should be a consistent 20px to ensure content does not feel cramped.

### Input Fields
Text inputs use a filled-style with a subtle bottom-border indicator (Material 3 style). The fill color should be a 5% opacity of the Primary Green to create a cohesive brand look.

### Chips & Tags
Use small, pill-shaped chips for categorizing initiatives (e.g., "Sustainability," "Community"). These should use a low-saturation version of the Primary Green with dark green text for high readability.

### Progress Bars
For fundraising or initiative tracking, use a thick 8px progress bar with a Gold fill and a light-gray track. This highlights "impact" through color prominence.
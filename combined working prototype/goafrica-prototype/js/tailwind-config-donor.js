// Shared Tailwind design tokens — GoAfrica DONOR-facing pages
// (sign in/up, donor dashboard, donor & student profile creation)
// Derived from unity_growth/DESIGN.md — edit colors here, not per-page.
tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "error": "#ba1a1a",
                    "on-error": "#ffffff",
                    "on-primary-fixed-variant": "#314f00",
                    "surface-bright": "#f9fbec",
                    "secondary": "#785a00",
                    "primary-fixed-dim": "#a2d659",
                    "primary-fixed": "#bdf372",
                    "tertiary-container": "#dd73c7",
                    "on-error-container": "#93000a",
                    "on-primary-fixed": "#112000",
                    "surface-variant": "#e1e4d6",
                    "surface-container-low": "#f3f5e6",
                    "surface": "#f9fbec",
                    "secondary-container": "#ffce5b",
                    "leaf-green": "#86BC25",
                    "on-primary-container": "#213700",
                    "on-primary": "#ffffff",
                    "tertiary-fixed-dim": "#fface9",
                    "on-secondary-container": "#745700",
                    "on-tertiary": "#ffffff",
                    "secondary-fixed-dim": "#f0c04f",
                    "surface-container-lowest": "#ffffff",
                    "tertiary": "#983888",
                    "inverse-on-surface": "#f0f2e4",
                    "on-secondary": "#ffffff",
                    "on-tertiary-container": "#5f0055",
                    "on-tertiary-fixed-variant": "#7b1d6e",
                    "secondary-fixed": "#ffdf9c",
                    "on-surface-variant": "#434939",
                    "surface-container-high": "#e7e9db",
                    "error-container": "#ffdad6",
                    "surface-container-highest": "#e1e4d6",
                    "outline": "#737967",
                    "on-secondary-fixed-variant": "#5b4300",
                    "surface-dim": "#d9dbcd",
                    "primary": "#436900",
                    "primary-container": "#76a72f",
                    "background": "#f9fbec",
                    "surface-container": "#edefe1",
                    "on-tertiary-fixed": "#3a0033",
                    "inverse-surface": "#2e3228",
                    "clay-black": "#1C1C1C",
                    "on-surface": "#191d14",
                    "outline-variant": "#c3c9b4",
                    "on-secondary-fixed": "#251a00",
                    "surface-tint": "#436900",
                    "tertiary-fixed": "#ffd7f1",
                    "inverse-primary": "#a2d659",
                    "harvest-gold": "#C59E31",
                    "earth-gray": "#F4F5F2",
                    "on-background": "#191d14",
                    "foundation-white": "#FFFFFF"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "gutter": "16px",
                    "margin-tablet": "24px",
                    "base": "8px",
                    "margin-mobile": "16px",
                    "margin-desktop": "32px",
                    "card-padding": "20px"
            },
            "fontFamily": {
                    "body-md": ["Plus Jakarta Sans"],
                    "headline-sm": ["Manrope"],
                    "body-lg": ["Plus Jakarta Sans"],
                    "headline-lg-mobile": ["Manrope"],
                    "body-sm": ["Plus Jakarta Sans"],
                    "label-md": ["Plus Jakarta Sans"],
                    "label-lg": ["Plus Jakarta Sans"],
                    "headline-lg": ["Manrope"],
                    "headline-md": ["Manrope"]
            },
            "fontSize": {
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "headline-sm": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                    "headline-lg-mobile": ["28px", {"lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                    "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
                    "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.5px", "fontWeight": "500"}],
                    "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.1px", "fontWeight": "600"}],
                    "headline-lg": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}]
            }
          }
        }
      }

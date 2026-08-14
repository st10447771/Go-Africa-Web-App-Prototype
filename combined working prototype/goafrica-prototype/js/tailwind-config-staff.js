// Shared Tailwind design tokens — GoAfrica STAFF-facing pages
// (role selection, staff sign in/registration, staff portal, student directory)
// Derived from unity_growth_staff_portal/DESIGN.md — edit colors here, not per-page.
tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "surface-container-low": "#f1f4f2",
                      "secondary-container": "#a4f792",
                      "on-primary-fixed-variant": "#274e3d",
                      "on-primary": "#ffffff",
                      "tertiary-fixed": "#e4e2dd",
                      "inverse-surface": "#2d3130",
                      "surface-dim": "#d7dbd9",
                      "on-tertiary-fixed": "#1b1c19",
                      "on-background": "#181c1c",
                      "outline-variant": "#c1c8c2",
                      "secondary-fixed": "#a4f792",
                      "on-error": "#ffffff",
                      "inverse-on-surface": "#eef1f0",
                      "on-secondary-fixed": "#002201",
                      "surface-container-lowest": "#ffffff",
                      "on-tertiary-container": "#a7a6a2",
                      "on-surface-variant": "#414844",
                      "on-error-container": "#93000a",
                      "primary-container": "#1b4332",
                      "error-container": "#ffdad6",
                      "primary-fixed": "#c1ecd4",
                      "surface-container-high": "#e6e9e7",
                      "on-tertiary-fixed-variant": "#474744",
                      "on-primary-container": "#86af99",
                      "primary": "#012d1d",
                      "tertiary-fixed-dim": "#c8c6c2",
                      "outline": "#717973",
                      "secondary-fixed-dim": "#89da79",
                      "inverse-primary": "#a5d0b9",
                      "surface": "#f7faf8",
                      "secondary": "#1f6d1a",
                      "surface-tint": "#3f6653",
                      "surface-container-highest": "#e0e3e1",
                      "on-secondary": "#ffffff",
                      "surface-container": "#ebeeed",
                      "tertiary-container": "#3c3c39",
                      "primary-fixed-dim": "#a5d0b9",
                      "background": "#f7faf8",
                      "surface-variant": "#e0e3e1",
                      "on-surface": "#181c1c",
                      "on-secondary-fixed-variant": "#005303",
                      "tertiary": "#262624",
                      "on-secondary-container": "#267320",
                      "on-primary-fixed": "#002114",
                      "error": "#ba1a1a",
                      "surface-bright": "#f7faf8",
                      "on-tertiary": "#ffffff"
              },
              "borderRadius": {
                      "DEFAULT": "0.125rem",
                      "lg": "0.25rem",
                      "xl": "0.5rem",
                      "full": "0.75rem"
              },
              "spacing": {
                      "density_comfortable": "12px",
                      "unit": "8px",
                      "margin_mobile": "16px",
                      "margin_desktop": "40px",
                      "density_compact": "4px",
                      "grid_columns": "12",
                      "margin_tablet": "24px",
                      "gutter": "24px"
              },
              "fontFamily": {
                      "headline-sm": [
                              "Manrope"
                      ],
                      "body-lg": [
                              "Manrope"
                      ],
                      "headline-lg": [
                              "Manrope"
                      ],
                      "label-md": [
                              "Manrope"
                      ],
                      "body-md": [
                              "Manrope"
                      ],
                      "display-lg": [
                              "Manrope"
                      ],
                      "mono-label": [
                              "Courier Prime"
                      ],
                      "body-sm": [
                              "Manrope"
                      ],
                      "headline-md": [
                              "Manrope"
                      ]
              },
              "fontSize": {
                      "headline-sm": [
                              "20px",
                              {
                                      "lineHeight": "28px",
                                      "fontWeight": "600"
                              }
                      ],
                      "body-lg": [
                              "16px",
                              {
                                      "lineHeight": "24px",
                                      "fontWeight": "400"
                              }
                      ],
                      "headline-lg": [
                              "32px",
                              {
                                      "lineHeight": "40px",
                                      "fontWeight": "700"
                              }
                      ],
                      "label-md": [
                              "12px",
                              {
                                      "lineHeight": "16px",
                                      "letterSpacing": "0.05em",
                                      "fontWeight": "600"
                              }
                      ],
                      "body-md": [
                              "14px",
                              {
                                      "lineHeight": "20px",
                                      "fontWeight": "400"
                              }
                      ],
                      "display-lg": [
                              "48px",
                              {
                                      "lineHeight": "56px",
                                      "letterSpacing": "-0.02em",
                                      "fontWeight": "800"
                              }
                      ],
                      "mono-label": [
                              "12px",
                              {
                                      "lineHeight": "16px",
                                      "fontWeight": "400"
                              }
                      ],
                      "body-sm": [
                              "13px",
                              {
                                      "lineHeight": "18px",
                                      "fontWeight": "400"
                              }
                      ],
                      "headline-md": [
                              "24px",
                              {
                                      "lineHeight": "32px",
                                      "fontWeight": "600"
                              }
                      ]
              }
      },
          },
        }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
  // Deep Petrol replaces old navy — same semantic role: hero bg, institutional headings
  primary: "#06333C",
  "primary-dark": "#04242B",   // Petrol Dark — top bar, high-contrast dark surfaces
  "primary-light": "#0E4A56",  // Petrol Light — card dividers, hover highlights

  // Marigold Gold — trust marks, SEC accreditation, tertiary accents
  "accent-gold": "#EBA92F",
  "accent-gold-light": "#F2C368", // lightened tint (not explicitly defined in doc — derived)

  // Fresh Lime — primary CTA color per the new system
  "accent-green": "#80BC2F",
  "accent-green-bright": "#B8F264", // High-Lime — stat emphasis, subtitles on dark canvas
  "accent-green-soft": "#EAF6DC",   // light tint (derived — not in doc)

  ink: "#333333",              // Foreground / Charcoal
  "ink-light": "#4B4B4B",      // derived mid-tone (not explicitly defined)
  "ink-muted": "#6B7280",      // derived mid-tone (not explicitly defined)

  hairline: "#E2E8F0",         // kept as-is — doc doesn't redefine border/hairline tokens
  "hairline-strong": "#CBD5E1",// kept as-is

  canvas: "#FFFFFF",
  "canvas-subtle": "#F8FAFC",
  "surface-soft": "#F1F5F9",

  // Ocean Blue — informational/region badge accents
  "badge-bg": "#E6F3F6",       // light tint of ocean blue (derived)
  "badge-text": "#15768D",     // Ocean Blue

  "badge-gold-bg": "#FCEFD8",  // light tint of Marigold Gold (derived)
  "badge-gold-text": "#06333C",// Deep Petrol on gold, for AAA contrast

  "badge-green-bg": "#EAF6DC", // light tint of Fresh Lime (derived)
  "badge-green-text": "#06333C", // Deep Petrol — matches doc's 5.92:1 pairing w/ Fresh Lime

  error: "#DC2626",            // unchanged — not covered by design doc
  warning: "#EBA92F",          // Marigold Gold
  success: "#80BC2F",          // Fresh Lime
},
      fontFamily: {
        display: ["Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        editorial: ["Merriweather", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 4.6vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg": ["clamp(1.875rem, 3.6vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.015em", fontWeight: "800" }],
        "display-md": ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "display-sm": ["1.75rem", { lineHeight: "1.25", fontWeight: "700" }],
        "title-lg": ["1.375rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
        "title-md": ["1.125rem", { lineHeight: "1.35", fontWeight: "700" }],
        "title-sm": ["1rem", { lineHeight: "1.4", fontWeight: "700" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.3", letterSpacing: "0.12em", fontWeight: "700" }],
        "body-lead": ["1.125rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-md": ["0.9375rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        btn: ["0.875rem", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "700" }],
        "nav-link": ["0.875rem", { lineHeight: "1.4", fontWeight: "600" }],
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      spacing: {
        xxs: "4px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        section: "80px",
        "section-lg": "104px",
      },
      boxShadow: {
        "lift": "0 10px 25px -5px rgba(10, 37, 64, 0.08), 0 8px 10px -6px rgba(10, 37, 64, 0.04)",
        "tilt": "0 20px 40px -15px rgba(10, 37, 64, 0.16), 0 0 0 1px rgba(217, 119, 6, 0.25)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

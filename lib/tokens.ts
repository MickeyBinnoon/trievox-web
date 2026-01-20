/**
 * Trievox Design Tokens
 * Dark theme with cyan-to-purple gradient signature
 * These mirror the CSS custom properties in globals.css
 */

export const colors = {
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#00d4ff", // Logo-aligned: brighter cyan
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344",
    DEFAULT: "#00d4ff",
  },
  purple: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#e879f9",
    400: "#d946ef",
    500: "#c026d3", // Logo-aligned: richer magenta
    600: "#a21caf",
    700: "#86198f",
    800: "#701a75",
    900: "#581c87",
    950: "#3b0764",
    DEFAULT: "#c026d3",
  },
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
  semantic: {
    success: "#22c55e",
    successLight: "rgba(34, 197, 94, 0.15)",
    warning: "#f59e0b",
    warningLight: "rgba(245, 158, 11, 0.15)",
    error: "#ef4444",
    errorLight: "rgba(239, 68, 68, 0.15)",
    info: "#22d3ee",
    infoLight: "rgba(34, 211, 238, 0.15)",
  },
} as const;

export const backgrounds = {
  primary: "#030b1a", // Deeper navy like logo
  secondary: "#071325",
  elevated: "#0c1829",
  surface: "#1a2642",
} as const;

export const gradients = {
  primary: "linear-gradient(135deg, #00d4ff 0%, #c026d3 100%)",
  primaryReverse: "linear-gradient(135deg, #c026d3 0%, #00d4ff 100%)",
  glow: "linear-gradient(135deg, #00d4ff 0%, #d946ef 100%)",
  text: "linear-gradient(90deg, #f8fafc 0%, #00d4ff 50%, #c026d3 100%)",
} as const;

export const glows = {
  cyan: "0 0 25px rgba(0, 212, 255, 0.5), 0 0 50px rgba(0, 212, 255, 0.25)",
  purple: "0 0 25px rgba(192, 38, 211, 0.5), 0 0 50px rgba(192, 38, 211, 0.25)",
  primary: "0 0 25px rgba(0, 212, 255, 0.4), 0 0 50px rgba(192, 38, 211, 0.25)",
  card: "0 0 35px rgba(0, 212, 255, 0.2), 0 0 70px rgba(192, 38, 211, 0.12)",
  text: "0 0 25px rgba(0, 212, 255, 0.6)",
  intense: "0 0 40px rgba(0, 212, 255, 0.6), 0 0 80px rgba(192, 38, 211, 0.35), 0 0 120px rgba(0, 212, 255, 0.2)",
} as const;

export const glass = {
  background: "rgba(12, 24, 41, 0.75)",
  backgroundLight: "rgba(12, 24, 41, 0.55)",
  border: "rgba(0, 212, 255, 0.08)",
  shadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
} as const;

export const animation = {
  duration: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "500ms",
  },
  easing: {
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export type CyanScale = keyof typeof colors.cyan;
export type PurpleScale = keyof typeof colors.purple;
export type SlateScale = keyof typeof colors.slate;
export type SemanticColor = keyof typeof colors.semantic;
export type Breakpoint = keyof typeof breakpoints;

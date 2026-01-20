import { Geist, Geist_Mono, Heebo } from "next/font/google";

/**
 * Primary sans-serif font for body text and UI.
 * Using Geist for modern, clean aesthetics.
 */
export const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Monospace font for code blocks and technical content.
 */
export const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Hebrew-optimized font for RTL text.
 * Heebo is designed for Hebrew with excellent Latin support.
 */
export const fontHeebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

/**
 * Combined font variable classes for use in root layout.
 */
export const fontVariables = `${fontSans.variable} ${fontMono.variable} ${fontHeebo.variable}`;

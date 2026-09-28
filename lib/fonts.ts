import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

export const display = localFont({
  src: [
    { path: "../public/fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "sans-serif"],
  // Tuned to Clash Display's metrics so the swap from fallback doesn't shift layout.
  adjustFontFallback: "Arial",
});

export const body = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  preload: true,
  fallback: ["ui-sans-serif", "sans-serif"],
  adjustFontFallback: "Arial",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

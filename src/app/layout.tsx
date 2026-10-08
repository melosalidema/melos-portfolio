import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Instrument_Sans } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { RouteCurtain } from "@/components/layout/RouteCurtain";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const description =
  "Melos Alidema is a full-stack developer in Kosovo building complete web products — marketplaces, storefronts and platforms — with React, Next.js, TypeScript and PostgreSQL.";

// Canonical origin comes from src/lib/site-url.ts (env var or live-domain fallback).
const metadataBase = new URL(SITE_URL);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Melos Alidema — Full-Stack Developer",
    template: "%s — Melos Alidema",
  },
  description,
  openGraph: {
    title: "Melos Alidema — Full-Stack Developer",
    description,
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melos Alidema — Full-Stack Developer",
    description,
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} ${geistMono.variable}`}>
      <body className="grain">
        {/* Entrance states are inline `opacity:0`; without JS they must not hide content. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1 !important}[style*="transform:translate"]{transform:none !important}`}</style>
        </noscript>
        <SmoothScroll>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-meta focus:uppercase focus:tracking-[0.14em] focus:text-paper-on-accent"
          >
            Skip to content
          </a>
          <Nav />
          <div className="relative z-10">
            {children}
            <Footer />
          </div>
          <RouteCurtain />
        </SmoothScroll>
      </body>
    </html>
  );
}

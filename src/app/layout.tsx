import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Instrument_Sans } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { FieldCanvas } from "@/components/layout/FieldCanvas";
import { RouteCurtain } from "@/components/layout/RouteCurtain";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

const description =
  "Melos Alidema is a full-stack developer in Kosovo building complete web products — marketplaces, storefronts and platforms — with React, Next.js, TypeScript and PostgreSQL.";

// TODO: set NEXT_PUBLIC_SITE_URL before launch
function parseSiteUrl(value: string | undefined): URL | undefined {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol === "http:" || url.protocol === "https:") return url;
  } catch {
    // fall through to the error below
  }
  throw new Error(`NEXT_PUBLIC_SITE_URL must be an absolute URL, got "${value}"`);
}

const metadataBase = parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
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
        <SmoothScroll>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-meta focus:uppercase focus:tracking-[0.14em] focus:text-paper-on-accent"
          >
            Skip to content
          </a>
          <FieldCanvas />
          <Nav />
          <div className="relative z-10">
            {children}
            <Footer />
          </div>
          <CustomCursor />
          <RouteCurtain />
        </SmoothScroll>
      </body>
    </html>
  );
}

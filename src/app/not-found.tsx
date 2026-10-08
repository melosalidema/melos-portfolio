import type { Metadata } from "next";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { TransitionLink } from "@/components/layout/TransitionLink";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main" tabIndex={-1} className="flex min-h-[100svh] flex-col justify-center px-gutter pt-28">
      <div className="mx-auto w-full max-w-[1500px]">
        <MetaLabel>Error — 404</MetaLabel>
        <h1 className="mt-6 font-display text-h1 leading-[1.02] tracking-[-0.015em]">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-6 max-w-[44ch] text-body text-ink-2">
          The link may be broken, or the page may have moved. Everything I&rsquo;ve shipped is one
          page back.
        </p>
        <TransitionLink
          href="/"
          className="group mt-10 inline-flex min-h-12 items-center gap-3 bg-accent px-7 font-mono text-meta uppercase tracking-[0.14em] text-paper-on-accent transition-colors hover:bg-accent-deep"
        >
          Back home
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M1 8h13M9 3l5 5-5 5" />
          </svg>
        </TransitionLink>
      </div>
    </main>
  );
}

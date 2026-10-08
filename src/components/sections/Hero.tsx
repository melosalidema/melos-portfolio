"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MaskedLines } from "@/components/ui/MaskedLines";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { LocalTime } from "@/components/layout/LocalTime";
import { DUR, EASE_OUT } from "@/lib/motion";
import { useReducedMotion } from "@/lib/useFinePointer";

export function Hero() {
  const reduced = useReducedMotion();
  const [greeting, setGreeting] = useState(true);
  const showGreeting = greeting && !reduced;

  useEffect(() => {
    if (reduced) return;
    const id = window.setTimeout(() => setGreeting(false), 1900);
    return () => window.clearTimeout(id);
  }, [reduced]);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-gutter pb-10 pt-28">
      {/* Visible grid rules — the editorial skeleton, hero only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mx-auto hidden w-full max-w-[1500px] px-gutter lg:block"
      >
        <div className="relative h-full">
          {["left-0", "left-1/4", "left-1/2", "left-3/4", "right-0"].map((pos) => (
            <span key={pos} className={`absolute inset-y-0 ${pos} w-px bg-line/70`} />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DUR.mid, ease: EASE_OUT, delay: 0.1 }}
          className="flex items-center justify-between gap-6"
        >
          <MetaLabel>Full-stack developer — Kosovo</MetaLabel>
          <MetaLabel className="hidden sm:block">Portfolio 2026</MetaLabel>
        </motion.div>

        <div>
          <MaskedLines
            as="h1"
            trigger="load"
            delay={0.25}
            lines={[
              <>Melos</>,
              <>
                Alidema<span className="text-accent">.</span>
              </>,
            ]}
            className="font-display text-display leading-[0.98] tracking-[-0.02em]"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DUR.mid, ease: EASE_OUT, delay: 0.7 }}
            className="mt-8 max-w-[54ch] text-body text-ink-2"
          >
            I build complete web products — marketplaces, storefronts, platforms — from the data
            model to the last hover state.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DUR.mid, ease: EASE_OUT, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6"
          >
            <Magnetic>
              <a
                href="#work"
                className="group inline-flex min-h-12 items-center gap-3 bg-accent px-7 font-mono text-meta uppercase tracking-[0.14em] text-paper-on-accent transition-colors hover:bg-accent-deep"
              >
                See the work
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
              </a>
            </Magnetic>
            <ArrowLink
              href="#contact"
              className="font-mono text-meta uppercase tracking-[0.14em] text-ink-2 hover:text-ink"
            >
              Get in touch
            </ArrowLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DUR.mid, delay: 1.1 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <MetaLabel className="inline-flex items-start gap-3">
            <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
            <AnimatePresence mode="wait" initial={false}>
              {showGreeting ? (
                <motion.span key="sq" exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
                  Përshëndetje
                </motion.span>
              ) : (
                <motion.span
                  key="en"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Available for work — Pozheran, Kosovo, <LocalTime />
                </motion.span>
              )}
            </AnimatePresence>
          </MetaLabel>
          <MetaLabel className="hidden md:block">05 projects — 2026</MetaLabel>
        </motion.div>
      </div>
    </section>
  );
}

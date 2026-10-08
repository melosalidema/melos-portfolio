"use client";
import { useEffect, useRef } from "react";
import { motion, type Variants } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import { getLenis } from "@/lib/useLenis";
import { site } from "@/content/site";
import { LocalTime } from "@/components/layout/LocalTime";
import { TransitionLink } from "@/components/layout/TransitionLink";
import type { RefObject } from "react";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export function MobileNav({
  open,
  onClose,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  triggerRef?: RefObject<HTMLButtonElement | null>;
}) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const lastLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
    else if (wasOpen.current) triggerRef?.current?.focus();
    wasOpen.current = open;
  }, [open, triggerRef]);

  useEffect(() => {
    if (!open) return;
    const query = window.matchMedia("(min-width: 64rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) onClose();
    };
    if (query.matches) onClose();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "Tab") {
        if (event.shiftKey && event.target === firstLinkRef.current) {
          event.preventDefault();
          lastLinkRef.current?.focus();
        } else if (!event.shiftKey && event.target === lastLinkRef.current) {
          event.preventDefault();
          firstLinkRef.current?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    getLenis()?.stop();
    return () => getLenis()?.start();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-35 bg-paper lg:hidden"
    >
      <motion.nav
        aria-label="Primary"
        variants={listVariants}
        initial="hidden"
        animate="show"
        data-lenis-prevent
        className="mx-auto flex h-full w-full max-w-[1500px] flex-col justify-center gap-2 overflow-y-auto px-gutter py-28"
      >
        {site.nav.map((item, index) => (
          <motion.div key={item.href} variants={itemVariants}>
            <TransitionLink
              ref={index === 0 ? firstLinkRef : undefined}
              href={item.href}
              onClick={() => {
                // Start Lenis before closing so its anchor handler (window click
                // listener, after React's) can smooth-scroll with the -64 offset.
                getLenis()?.start();
                onClose();
              }}
              className="inline-flex min-h-11 items-center font-display text-h2 font-medium tracking-[-0.01em] text-ink transition-colors hover:text-accent focus-visible:text-accent"
            >
              {item.label}
            </TransitionLink>
          </motion.div>
        ))}
        <motion.div variants={itemVariants} className="rule mt-10 pt-6">
          <div className="flex flex-col gap-2 font-mono text-meta uppercase tracking-[0.14em] text-ink-3">
            <a
              ref={lastLinkRef}
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center hover:text-ink"
            >
              {site.email}
            </a>
            <span className="inline-flex min-h-11 items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              Pozheran, Kosovo — <LocalTime />
            </span>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
}

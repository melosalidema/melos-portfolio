"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileNav } from "@/components/layout/MobileNav";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { getLenis } from "@/lib/useLenis";
import { useSectionSpy } from "@/lib/useSectionSpy";
import { site } from "@/content/site";

const SECTION_IDS = ["work", "about", "experience", "contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const active = useSectionSpy(onHome ? SECTION_IDS : []);

  const closeMenu = () => {
    getLenis()?.start();
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[height,background-color,border-color] duration-300 ${
          scrolled ? "h-14 border-line bg-paper" : "h-20 border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-[1500px] items-center justify-between gap-6 px-gutter">
          <TransitionLink
            href="/"
            onClick={closeMenu}
            className="inline-flex min-h-11 items-center font-display text-xl font-medium tracking-[-0.01em] text-ink"
          >
            Melos Alidema
          </TransitionLink>

          <div className="flex items-center gap-9">
            <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
              {site.nav.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <TransitionLink
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`group/nav inline-flex min-h-11 items-center font-mono text-meta uppercase tracking-[0.14em] transition-colors ${
                      isActive ? "text-accent" : "text-ink-2 hover:text-ink"
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover/nav:scale-x-100 group-focus-visible/nav:scale-x-100"
                      />
                    </span>
                  </TransitionLink>
                );
              })}
            </nav>

            <span className="hidden items-center gap-2 font-mono text-meta uppercase tracking-[0.14em] text-ink-2 xl:inline-flex">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              Available for work
            </span>

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span aria-hidden="true" className="relative block h-4 w-5">
                <span
                  className={`absolute inset-x-0 top-1/2 h-px bg-ink transition-transform duration-300 ${
                    open ? "rotate-45" : "-translate-y-[3px]"
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-1/2 h-px bg-ink transition-transform duration-300 ${
                    open ? "-rotate-45" : "translate-y-[3px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={open} onClose={closeMenu} triggerRef={triggerRef} />
    </>
  );
}

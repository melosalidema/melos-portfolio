"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "motion/react";
import { usePathname } from "next/navigation";
import { EASE_CUT, EASE_OUT } from "@/lib/motion";
import { getLenis } from "@/lib/useLenis";

let cover: (() => Promise<void>) | null = null;

/** Play the cover-wipe. Resolves once the screen is covered (or immediately if reduced motion). */
export function playRouteCurtain(): Promise<void> {
  return cover ? cover() : Promise.resolve();
}

/** Full-screen ink panel used as the route transition cover. */
export function RouteCurtain() {
  const controls = useAnimationControls();
  const pathname = usePathname();
  const previous = useRef(pathname);
  const covered = useRef(false);

  useEffect(() => {
    cover = async () => {
      if (covered.current) return;
      covered.current = true;
      await controls.start({ y: "0%", transition: { duration: 0.45, ease: EASE_CUT } });
    };
    return () => {
      cover = null;
    };
  }, [controls]);

  useEffect(() => {
    if (pathname === previous.current) return;
    previous.current = pathname;
    const hash = window.location.hash;

    requestAnimationFrame(() => {
      if (covered.current) {
        void controls
          .start({ y: "101%", transition: { duration: 0.55, ease: EASE_OUT, delay: 0.05 } })
          .then(() => {
            covered.current = false;
          });
      }
      const lenis = getLenis();
      const target = hash ? (document.querySelector(hash) as HTMLElement | null) : null;
      if (target) {
        if (lenis) {
          lenis.scrollTo(target, { offset: -64, immediate: true });
        } else {
          target.scrollIntoView();
        }
      } else if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    });
  }, [pathname, controls]);

  return (
    <motion.div
      aria-hidden="true"
      initial={{ y: "101%" }}
      animate={controls}
      className="pointer-events-none fixed inset-0 z-[70] bg-ink"
    />
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useFinePointer, useReducedMotion } from "@/lib/useFinePointer";

type CursorVariant = "default" | "link" | "view";

/**
 * Square cursor — matches the radius-0 language. A dot at rest, a ring over
 * links, a filled disc reading "View" over project plates.
 * Fine pointers only; disabled under reduced motion.
 */
export function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 1200, damping: 70, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 1200, damping: 70, mass: 0.35 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor");

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const el = target?.closest?.("[data-cursor], a, button, [role='button']");
      if (!el) {
        setVariant("default");
        return;
      }
      setVariant(el.getAttribute?.("data-cursor") === "view" ? "view" : "link");
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, true);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = variant === "view" ? 78 : variant === "link" ? 36 : 9;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[90]"
    >
      <div
        className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ring-1 ring-paper/60 transition-[width,height,opacity,background-color,border-color] duration-300 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        } ${
          variant === "view"
            ? "bg-accent"
            : variant === "link"
              ? "border border-accent bg-transparent"
              : "bg-accent"
        }`}
        style={{ width: size, height: size }}
      >
        {variant === "view" ? (
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-paper-on-accent">
            View
          </span>
        ) : null}
      </div>
    </motion.div>
  );
}

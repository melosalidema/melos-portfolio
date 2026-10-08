"use client";
import { useEffect, useState } from "react";
import { projects } from "@/content/projects";

/**
 * Fixed 01–08 rail that tracks which plate of the sticky work stack the
 * reader is on (xl and up, where the plates stack). An orientation aid
 * only — supplementary to the numbered plates themselves, so it is hidden
 * from assistive tech and never interactive.
 */
export function WorkIndex() {
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const section = document.getElementById("work");
    if (!section) return;
    const plates = Array.from(section.querySelectorAll("article"));
    const query = window.matchMedia("(min-width: 80rem)");
    let frame = 0;

    const measure = () => {
      frame = 0;
      if (!query.matches || plates.length === 0) {
        setCurrent(null);
        return;
      }
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // Only while the stack is the main act.
      if (rect.top >= vh * 0.35 || rect.bottom <= vh * 0.75) {
        setCurrent(null);
        return;
      }
      // The current plate is the last one that has entered the upper half.
      const threshold = vh * 0.45;
      let next = -1;
      for (let i = 0; i < plates.length; i += 1) {
        if (plates[i].getBoundingClientRect().top <= threshold) next = i;
      }
      setCurrent(next === -1 ? null : next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-5 top-1/2 z-20 hidden -translate-y-1/2 select-none transition-opacity duration-500 xl:block"
      style={{ opacity: current === null ? 0 : 1 }}
    >
      <ol className="flex flex-col items-end gap-2.5">
        {projects.map((project, index) => {
          const isCurrent = index === current;
          return (
            <li
              key={project.slug}
              className={`inline-flex items-center gap-1.5 font-mono text-meta uppercase tracking-[0.14em] transition-colors duration-300 ${
                isCurrent ? "text-accent" : "text-ink-3/60"
              }`}
            >
              <span
                className={`size-1 rounded-full bg-accent transition-[scale,opacity] duration-300 ${
                  isCurrent ? "scale-100 opacity-100" : "scale-50 opacity-0"
                }`}
              />
              {String(index + 1).padStart(2, "0")}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

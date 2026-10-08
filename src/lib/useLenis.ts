"use client";
import { useEffect } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return lenis;
}

export function useLenis(): void {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ autoRaf: true, anchors: { offset: -64 } });
    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}

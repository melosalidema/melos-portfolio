"use client";
import { MotionConfig } from "motion/react";
import { useLenis } from "@/lib/useLenis";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  useLenis();
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

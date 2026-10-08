"use client";
import { motion } from "motion/react";
import { revealVariants } from "@/lib/motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: revealVariants.hidden,
        // a variant's transition replaces the component transition prop, so delay must live here
        show: { ...revealVariants.show, transition: { ...revealVariants.show.transition, delay } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

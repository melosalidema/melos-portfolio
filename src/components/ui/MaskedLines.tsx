"use client";
import { motion } from "motion/react";
import { lineVariants, STAGGER } from "@/lib/motion";
import type { ReactNode } from "react";

const TAGS = { h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p } as const;

/**
 * Line-masked text reveal. Each line sits in an overflow-clip wrapper and
 * travels up from below on show. Use for display headings only.
 */
export function MaskedLines({
  lines,
  as = "h1",
  className,
  lineClassName,
  delay = 0,
  stagger = STAGGER,
  trigger = "inView",
}: {
  lines: ReactNode[];
  as?: keyof typeof TAGS;
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  trigger?: "inView" | "load";
}) {
  const Tag = TAGS[as];
  const show = trigger === "load" ? { animate: "show" as const } : { whileInView: "show" as const, viewport: { once: true, amount: 0.4 } };

  return (
    <Tag
      className={className}
      initial="hidden"
      {...show}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-clip pb-[0.08em] -mb-[0.08em] ${lineClassName ?? ""}`}>
          <motion.span className="block will-change-transform" variants={lineVariants}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

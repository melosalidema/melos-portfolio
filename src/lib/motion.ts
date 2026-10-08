export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_CUT = [0.7, 0, 0.2, 1] as const;
export const DUR = { fast: 0.3, mid: 0.6, slow: 0.9, boot: 1.2 } as const;
export const STAGGER = 0.06;

export const revealVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: DUR.mid, ease: EASE_OUT } },
};

/* Line-mask text reveal: wrapper clips, inner line travels up. */
export const lineVariants = {
  hidden: { yPercent: 110 },
  show: { yPercent: 0, transition: { duration: DUR.slow, ease: EASE_OUT } },
};

export const boot = {
  wipe: DUR.slow,
  fade: DUR.mid,
} as const;

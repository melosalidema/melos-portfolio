import type { ReactNode } from "react";

export function MetaLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-mono text-meta uppercase tracking-[0.14em] text-ink-3 ${className ?? ""}`}>
      {children}
    </span>
  );
}

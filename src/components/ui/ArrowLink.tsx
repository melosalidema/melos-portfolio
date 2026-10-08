import type { ReactNode } from "react";

/** Inline arrow link with a drawn-in underline and a travelling arrow. */
export function ArrowLink({
  href,
  children,
  className,
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={`group/al inline-flex min-h-11 items-center gap-2 ${className ?? ""}`}
    >
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover/al:scale-x-100 group-focus-visible/al:scale-x-100"
        />
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover/al:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 8h13M9 3l5 5-5 5" />
      </svg>
    </a>
  );
}

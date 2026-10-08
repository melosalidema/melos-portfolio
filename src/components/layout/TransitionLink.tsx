"use client";
import { usePathname, useRouter } from "next/navigation";
import { playRouteCurtain } from "@/components/layout/RouteCurtain";
import { useReducedMotion } from "@/lib/useFinePointer";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode, Ref } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
};

/**
 * Internal link that plays the cover-wipe before navigating.
 * Same-page hash links are left to Lenis; modified clicks stay native.
 */
export function TransitionLink({ href, children, className, ref, onClick, ...rest }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const reduced = useReducedMotion();

  // "#work" on a case-study page resolves to "/#work"
  const resolved = href.startsWith("#") && pathname !== "/" ? `/${href}` : href;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (resolved.startsWith("#")) return; // same page: Lenis anchors handle it
    if (!resolved.startsWith("/")) return; // external: native
    if (resolved === pathname) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    if (reduced) {
      router.push(resolved);
      return;
    }
    void playRouteCurtain().then(() => router.push(resolved));
  };

  return (
    <a ref={ref} href={resolved} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}

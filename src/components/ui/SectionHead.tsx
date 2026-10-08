import type { ReactNode } from "react";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { MaskedLines } from "@/components/ui/MaskedLines";

/** Section header: hairline rule, mono eyebrow with index, serif title, optional lede. */
export function SectionHead({
  index,
  eyebrow,
  title,
  lede,
  aside,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="rule pt-6">
      <div className="flex items-baseline justify-between gap-6">
        <MetaLabel>
          {index} — {eyebrow}
        </MetaLabel>
        {aside ? <div className="hidden md:block">{aside}</div> : null}
      </div>
      <MaskedLines
        as="h2"
        lines={[title]}
        className="font-display mt-7 text-h2 leading-[1.08] tracking-[-0.01em] max-w-[18ch]"
      />
      {lede ? <p className="mt-5 max-w-[56ch] text-body text-ink-2">{lede}</p> : null}
    </header>
  );
}

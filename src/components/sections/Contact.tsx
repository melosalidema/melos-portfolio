import { MaskedLines } from "@/components/ui/MaskedLines";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { LocalTime } from "@/components/layout/LocalTime";
import { site } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-gutter pb-28 pt-section">
      <div className="mx-auto w-full max-w-[1500px]">
        <div className="rule pt-6">
          <MetaLabel>06 — Contact</MetaLabel>
        </div>

        <MaskedLines
          as="h2"
          lines={["The next product", "starts with an email."]}
          className="mt-10 font-display text-h1 leading-[1.04] tracking-[-0.015em]"
        />

        <p className="mt-8 max-w-[52ch] text-body text-ink-2">
          I&rsquo;m open to full-stack roles and freelance work — especially products with real
          users and real constraints. Email is the fastest way to reach me; I answer within a day.
        </p>

        <div className="mt-12 flex flex-col items-start gap-10">
          <Magnetic max={8}>
            <a href={`mailto:${site.email}`} className="group inline-block font-display text-h3 font-medium">
              <span className="relative">
                {site.email}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
              </span>
            </a>
          </Magnetic>

          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            <ArrowLink
              href={site.links.github}
              external
              className="font-mono text-meta uppercase tracking-[0.14em] text-ink-2 hover:text-ink"
            >
              GitHub
            </ArrowLink>
            <ArrowLink
              href={site.links.linkedin}
              external
              className="font-mono text-meta uppercase tracking-[0.14em] text-ink-2 hover:text-ink"
            >
              LinkedIn
            </ArrowLink>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-11 items-center font-mono text-meta uppercase tracking-[0.14em] text-ink-2 transition-colors hover:text-ink pointer-fine:min-h-0"
            >
              {site.phone}
            </a>
          </div>
        </div>

        <div className="rule mt-24 flex flex-wrap items-center justify-between gap-3 pt-6">
          <MetaLabel className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            Available for work
          </MetaLabel>
          <MetaLabel>
            Pozheran, Kosovo — <LocalTime />
          </MetaLabel>
        </div>
      </div>
    </section>
  );
}

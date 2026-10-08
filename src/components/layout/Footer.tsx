import { ArrowLink } from "@/components/ui/ArrowLink";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { LocalTime } from "@/components/layout/LocalTime";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto w-full max-w-[1500px] px-gutter py-[clamp(3.5rem,8vw,6.5rem)]">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-h3 font-medium tracking-[-0.01em]">{site.wordmark}</p>
            <p className="mt-3 max-w-[36ch] text-body text-ink-2">
              Full-stack developer — Pozheran, Kosovo. Building complete web products, from the data
              model to the last hover state.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10">
            <div className="flex flex-col items-start gap-2">
              <MetaLabel className="mb-1">Contact</MetaLabel>
              <ArrowLink href={`mailto:${site.email}`} className="text-body pointer-fine:min-h-0">
                Email
              </ArrowLink>
              <ArrowLink href={site.links.github} external className="text-body pointer-fine:min-h-0">
                GitHub
              </ArrowLink>
              <ArrowLink href={site.links.linkedin} external className="text-body pointer-fine:min-h-0">
                LinkedIn
              </ArrowLink>
              <ArrowLink href={site.links.instagram} external className="text-body pointer-fine:min-h-0">
                Instagram
              </ArrowLink>
            </div>

            <div className="flex flex-col items-start gap-2">
              <MetaLabel className="mb-1">Menu</MetaLabel>
              {site.nav.map((item) => (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-body text-ink-2 transition-colors hover:text-ink pointer-fine:min-h-0"
                >
                  {item.label}
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>

        <div className="rule mt-14 flex flex-wrap items-center justify-between gap-3 pt-6">
          <MetaLabel>© {site.footer.year} Melos Alidema</MetaLabel>
          <MetaLabel>
            Pozheran, Kosovo — <LocalTime />
          </MetaLabel>
        </div>
      </div>
    </footer>
  );
}

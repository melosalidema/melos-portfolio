import { SectionHead } from "@/components/ui/SectionHead";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { Reveal } from "@/components/ui/Reveal";
import { certificates, education, languages } from "@/content/resume";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-gutter py-section">
      <div className="mx-auto w-full max-w-[1500px]">
        <SectionHead index="05" eyebrow="Education" title="Studied here." />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            {education.map((entry, index) => (
              <Reveal
                key={entry.school}
                delay={index * 0.05}
                className="rule flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div>
                  <h3 className="font-display text-h3 font-medium text-balance">{entry.school}</h3>
                  <p className="mt-1 text-ink-2">{entry.program}</p>
                </div>
                <MetaLabel className="shrink-0 whitespace-nowrap">
                  {entry.start} — {entry.end}
                </MetaLabel>
              </Reveal>
            ))}
          </div>

          <div className="space-y-12">
            <Reveal>
              <MetaLabel className="block">Certificates</MetaLabel>
              <ul className="mt-5 space-y-4">
                {certificates.map((certificate) => (
                  <li
                    key={certificate.name}
                    className="flex items-baseline justify-between gap-6 border-b border-line pb-4 text-ink-2"
                  >
                    <span>{certificate.name}</span>
                    <span className="shrink-0 font-mono text-meta uppercase tracking-[0.14em] text-ink-3">
                      {certificate.year}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <MetaLabel className="block">Languages</MetaLabel>
              <ul className="mt-5 space-y-4">
                {languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-baseline justify-between gap-6 border-b border-line pb-4"
                  >
                    <span className="text-ink-2">{language.name}</span>
                    <span className="shrink-0 font-mono text-meta uppercase tracking-[0.14em] text-ink-3">
                      {language.level}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

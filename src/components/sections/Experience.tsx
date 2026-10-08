import { SectionHead } from "@/components/ui/SectionHead";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/content/resume";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-gutter py-section">
      <div className="mx-auto w-full max-w-[1500px]">
        <SectionHead index="03" eyebrow="Experience" title="Where I've worked." />

        <div className="mt-16">
          {experience.map((job) => (
            <article key={job.company} className="rule grid gap-8 pt-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
              <Reveal>
                <h3 className="font-display text-h3 font-medium">{job.role}</h3>
                <p className="mt-2 text-ink-2">{job.company}</p>
                <MetaLabel className="mt-4 block">
                  {job.start} — {job.end} · {job.location}
                </MetaLabel>
              </Reveal>
              <Reveal delay={0.08}>
                <ul className="space-y-4">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="relative pl-7 text-body text-ink-2 before:absolute before:left-0 before:top-[0.68em] before:h-px before:w-3.5 before:bg-accent"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
                  {job.stack.map((item) => (
                    <li key={item} className="font-mono text-meta uppercase tracking-[0.14em] text-ink-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

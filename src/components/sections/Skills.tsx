import { SectionHead } from "@/components/ui/SectionHead";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/content/resume";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-gutter py-section">
      <div className="mx-auto w-full max-w-[1500px]">
        <SectionHead
          index="04"
          eyebrow="Skills"
          title="The toolkit."
          lede="What I reach for when I'm building, grouped by layer."
        />

        <div className="mt-14">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.label}
              delay={index * 0.04}
              className="rule grid gap-4 py-7 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <MetaLabel className="pt-1">{group.label}</MetaLabel>
              <ul className="flex flex-wrap gap-x-10 gap-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-body text-ink-2 transition-colors hover:text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

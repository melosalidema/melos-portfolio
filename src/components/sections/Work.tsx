import { SectionHead } from "@/components/ui/SectionHead";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { ProjectPlate } from "@/components/work/ProjectPlate";
import { WorkIndex } from "@/components/work/WorkIndex";
import { projects } from "@/content/projects";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-gutter py-section">
      <div className="mx-auto w-full max-w-[1500px]">
        <SectionHead
          index="01"
          eyebrow="Selected work"
          title="Seven products, designed and shipped."
          lede="Marketplaces, storefronts and platforms I designed and built end to end. Open a case study for the story behind it."
          aside={<MetaLabel>2026 — live</MetaLabel>}
        />
        <div className="mt-16 flex flex-col gap-10">
          {projects.map((project, index) => (
            <ProjectPlate key={project.slug} project={project} order={index} />
          ))}
        </div>
      </div>
      <WorkIndex />
    </section>
  );
}

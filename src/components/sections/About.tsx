import { Fragment, type ReactNode } from "react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

const facts: { label: string; value: ReactNode }[] = [
  { label: "Name", value: "Melos Alidema" },
  { label: "Based in", value: "Pozheran, Kosovo" },
  { label: "Focus", value: "Full-stack web products" },
  { label: "Core stack", value: "TypeScript · React · Next.js · PostgreSQL" },
  { label: "Languages", value: "Albanian (native) · English (B1/B2)" },
  {
    label: "Status",
    value: (
      <span className="inline-flex items-center gap-2">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
        Available for work
      </span>
    ),
  },
];

const principles = [
  {
    title: "Complete, not partial",
    text: "I take products from schema to deployment. If it ships, I understand all of it — that's the only way I can stand behind it.",
  },
  {
    title: "Details are the product",
    text: "Loading states, keyboard flows, empty states, error messages — the parts users actually feel are the parts most people skip.",
  },
  {
    title: "Fast by default",
    text: "A site should feel quick on a mid-range phone, not just on the machine it was built on.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-gutter py-section">
      <div className="mx-auto w-full max-w-[1500px]">
        <SectionHead index="02" eyebrow="About" title="I build complete products, not just interfaces." />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal className="max-w-[62ch] space-y-6 text-body text-ink-2">
            <p>
              I&rsquo;m Melos — a full-stack developer based in Pozheran, Kosovo. I study computer
              science at the University of Prishtina, and I spend most of my time building real
              products: marketplaces, storefronts, platforms. Five of them are live on this page.
            </p>
            <p>
              I like the whole stack — designing the schema, writing the API, building the
              interface, deploying it, then watching what real people do with it. I work mostly in
              TypeScript: React and Next.js on the front, Node, PostgreSQL and Prisma behind.
            </p>
            <p>
              Before code, I kept infrastructure alive as an IT administrator at Kosovo&rsquo;s
              Central Election Commission — through an election. It taught me what
              &ldquo;reliable&rdquo; actually has to mean.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="h-fit border border-line bg-surface p-6 lg:p-8">
            <dl className="grid grid-cols-[7.5rem_1fr] gap-x-4 gap-y-4">
              {facts.map((fact) => (
                <Fragment key={fact.label}>
                  <dt className="pt-0.5 font-mono text-meta uppercase tracking-[0.14em] text-ink-3">
                    {fact.label}
                  </dt>
                  <dd className="text-body">{fact.value}</dd>
                </Fragment>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="rule mt-16 grid gap-10 pt-10 md:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06}>
              <h3 className="font-display text-h3 font-medium">{principle.title}</h3>
              <p className="mt-3 max-w-[40ch] text-ink-2">{principle.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

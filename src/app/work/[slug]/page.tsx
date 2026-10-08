import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { MaskedLines } from "@/components/ui/MaskedLines";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { TransitionLink } from "@/components/layout/TransitionLink";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main id="main" tabIndex={-1} className="pt-28">
      <div className="px-gutter">
        <div className="mx-auto w-full max-w-[1500px]">
          <TransitionLink
            href="/#work"
            className="inline-flex min-h-11 items-center gap-2 font-mono text-meta uppercase tracking-[0.14em] text-ink-2 transition-colors hover:text-ink pointer-fine:min-h-0"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M15 8H2M7 3 2 8l5 5" />
            </svg>
            All work
          </TransitionLink>

          <div className="rule mt-6 flex items-baseline justify-between gap-6 pt-6">
            <MetaLabel>
              {project.index} / 05 — {project.type}
            </MetaLabel>
            <MetaLabel>{project.year}</MetaLabel>
          </div>

          <MaskedLines
            as="h1"
            trigger="load"
            delay={0.1}
            lines={[project.name]}
            className="mt-8 font-display text-h1 leading-[1.02] tracking-[-0.015em]"
          />
          <p className="mt-5 max-w-[52ch] text-body text-ink-2">{project.tagline}</p>

          <dl className="mt-12 grid gap-x-10 gap-y-8 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-mono text-meta uppercase tracking-[0.14em] text-ink-3">Role</dt>
              <dd className="mt-2 text-body text-ink-2">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-meta uppercase tracking-[0.14em] text-ink-3">Year</dt>
              <dd className="mt-2 text-body text-ink-2">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-meta uppercase tracking-[0.14em] text-ink-3">Type</dt>
              <dd className="mt-2 text-body text-ink-2">{project.type}</dd>
            </div>
            <div>
              <dt className="font-mono text-meta uppercase tracking-[0.14em] text-ink-3">Links</dt>
              <dd className="mt-2 flex flex-col items-start gap-1">
                {project.live ? (
                  <ArrowLink
                    href={project.live}
                    external
                    className="text-body text-ink transition-colors hover:text-accent pointer-fine:min-h-0"
                  >
                    Live site
                  </ArrowLink>
                ) : null}
                {project.repo ? (
                  <ArrowLink
                    href={project.repo}
                    external
                    className="text-body text-ink transition-colors hover:text-accent pointer-fine:min-h-0"
                  >
                    Repository
                  </ArrowLink>
                ) : null}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <Reveal className="mt-14 px-gutter">
        <div className="mx-auto w-full max-w-[1500px] overflow-hidden border border-line bg-surface">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, images intentionally unoptimized */}
          <img
            src={project.image}
            alt={project.alt}
            width={1440}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="w-full"
          />
        </div>
      </Reveal>

      <div className="px-gutter">
        <div className="mx-auto grid w-full max-w-[1500px] gap-8 py-section lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <MetaLabel className="pt-2">The story</MetaLabel>
          <div className="max-w-[68ch] space-y-6 text-body text-ink-2">
            {project.description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="px-gutter">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="rule grid gap-10 pt-10 md:grid-cols-2 md:gap-x-20">
            {project.features.map((feature, featureIndex) => (
              <Reveal key={feature.title} delay={featureIndex * 0.05}>
                <h2 className="font-display text-h3 font-medium">{feature.title}</h2>
                <p className="mt-3 max-w-[46ch] text-ink-2">{feature.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-gutter">
        <div className="mx-auto mt-section flex w-full max-w-[1500px] flex-col gap-12 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <div>
            <MetaLabel className="block">Stack</MetaLabel>
            <ul className="mt-5 flex max-w-[52ch] flex-wrap gap-x-8 gap-y-3">
              {project.stack.map((item) => (
                <li key={item} className="font-mono text-meta uppercase tracking-[0.14em] text-ink-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Reveal className="w-[220px] shrink-0 overflow-hidden border border-line bg-surface lg:w-[240px]">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, images intentionally unoptimized */}
            <img
              src={project.imageMobile}
              alt={`${project.name} on a phone`}
              width={390}
              height={844}
              loading="lazy"
              decoding="async"
              className="w-full"
            />
          </Reveal>
        </div>
      </div>

      <div className="px-gutter">
        <div className="mx-auto mt-section w-full max-w-[1500px] pb-24">
          <div className="rule pt-8">
            <MetaLabel className="block">Next project</MetaLabel>
            <TransitionLink
              href={`/work/${next.slug}`}
              className="group mt-4 inline-flex items-center gap-6"
            >
              <span className="font-display text-h2 font-medium tracking-[-0.01em] transition-colors group-hover:text-accent">
                {next.name}
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7 text-ink-3 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 12h19M14 5l7 7-7 7" />
              </svg>
            </TransitionLink>
          </div>
        </div>
      </div>
    </main>
  );
}

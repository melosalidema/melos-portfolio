"use client";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { MetaLabel } from "@/components/ui/MetaLabel";
import { projects, type Project } from "@/content/projects";

/**
 * A single numbered "plate" in the work stack. On large screens plates are
 * sticky and stack with a 12px offset per index so the edges show through;
 * on small screens they are plain stacked cards.
 */
export function ProjectPlate({ project, order }: { project: Project; order: number }) {
  return (
    <article className="lg:sticky" style={{ top: `calc(4.5rem + ${order * 12}px)` }}>
      <div className="border border-line bg-surface">
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
          <MetaLabel>
            {project.index} / {String(projects.length).padStart(2, "0")}
          </MetaLabel>
          <MetaLabel className="hidden sm:block">{project.type}</MetaLabel>
          <MetaLabel>{project.year}</MetaLabel>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden border-b border-line lg:border-b-0 lg:border-r">
            <TransitionLink
              href={`/work/${project.slug}`}
              aria-hidden="true"
              tabIndex={-1}
              className="group block h-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, images intentionally unoptimized */}
              <img
                src={project.image}
                alt=""
                width={1440}
                height={900}
                loading={order === 0 ? "eager" : "lazy"}
                fetchPriority={order === 0 ? "high" : undefined}
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </TransitionLink>
          </div>

          <div className="flex flex-col justify-between gap-8 p-6 lg:p-8">
            <div>
              <h3 className="font-display text-h3 font-medium tracking-[-0.01em]">
                <TransitionLink
                  href={`/work/${project.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {project.name}
                </TransitionLink>
              </h3>
              <p className="mt-2 text-body text-ink-2">{project.tagline}</p>
              <p className="mt-5 max-w-[48ch] text-ink-2">{project.summary}</p>
            </div>

            <div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {project.stack.slice(0, 5).map((item) => (
                  <li key={item} className="font-mono text-meta uppercase tracking-[0.14em] text-ink-3">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line pt-5">
                <TransitionLink
                  href={`/work/${project.slug}`}
                  className="group/vc inline-flex min-h-11 items-center gap-2 font-mono text-meta uppercase tracking-[0.14em] text-ink transition-colors hover:text-accent pointer-fine:min-h-0"
                >
                  View case
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover/vc:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M1 8h13M9 3l5 5-5 5" />
                  </svg>
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

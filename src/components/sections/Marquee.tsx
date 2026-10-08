const items = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Docker",
  "REST APIs",
  "Git",
];

export function Marquee() {
  // Four copies: translateX(-25%) advances exactly one copy; pr matches gap so
  // the seam is flush on wide viewports.
  const track = [...items, ...items, ...items, ...items];

  return (
    <div aria-hidden="true" className="select-none overflow-hidden border-y border-line py-4">
      <div className="flex w-max animate-marquee gap-12 pr-12 [--marquee-duration:90s] hover:[animation-play-state:paused]">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="whitespace-nowrap font-mono text-meta uppercase tracking-[0.14em] text-ink-3"
          >
            {item}
            <span className="pl-12 text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

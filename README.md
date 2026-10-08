# Melos Alidema — Portfolio

Personal portfolio and case studies for Melos Alidema, full-stack developer (Kosovo).

**Stack:** Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS v4 · Motion (React) · Lenis · next/font (Fraunces / Instrument Sans / Geist Mono)

## Commands

```bash
npm install
npm run dev        # develop at http://localhost:3000
npm run build      # build the static export into out/
npm run lint       # eslint
npx tsc --noEmit   # typecheck
npm run preview    # serve the built export
```

## Project structure

```
src/app/            layout (fonts, metadata, chrome) · page (home) · globals.css tokens
                    work/[slug]/  case studies · sitemap.ts · robots.ts
src/components/layout/   Nav · MobileNav · Footer · SmoothScroll · TransitionLink
                         RouteCurtain · CustomCursor · FieldCanvas · LocalTime
src/components/ui/       Reveal · MaskedLines · MetaLabel · Magnetic · ArrowLink · SectionHead
src/components/sections/ Hero · Marquee · Work · About · Experience · Skills · Education · Contact
src/components/work/     ProjectPlate (sticky numbered card)
src/content/        site.ts · projects.ts · resume.ts
src/lib/            motion.ts · useLenis.ts · useSectionSpy.ts · useFinePointer.ts
public/work/        project screenshots (WebP, captured from the live sites)
docs/plans/         implementation plan
```

## Before launch

- Set `NEXT_PUBLIC_SITE_URL` to the absolute site URL (locally in `.env`, in Netlify under
  Site configuration → Environment variables). Without it, canonical/OG URLs and the
  sitemap fall back to relative paths.
- Replace `/public/og.png` with a 1200×630 social image (a hero screenshot works).

## Deploying (Netlify)

`netlify.toml` builds `npm run build` and publishes `out/`. Every push to the production
branch goes live; PRs get preview URLs.

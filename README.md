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
                         RouteCurtain · LocalTime
src/components/ui/       Reveal · MaskedLines · MetaLabel · Magnetic · ArrowLink · SectionHead
src/components/sections/ Hero · Work · About · Experience · Skills · Education · Contact
src/components/work/     ProjectPlate (sticky numbered card)
src/content/        site.ts · projects.ts · resume.ts
src/lib/            motion.ts · useLenis.ts · useSectionSpy.ts · useFinePointer.ts
public/work/        project screenshots (WebP, captured from the live sites)
docs/plans/         implementation plan + refinement audit
```

## Before launch

- `NEXT_PUBLIC_SITE_URL` (Netlify → Site configuration → Environment variables) overrides the
  canonical origin; without it the site falls back to `https://melosalidema.netlify.app`.
- **Casa Sole:** `https://casasole.netlify.app/` currently returns 401 (Netlify visitor
  protection). Disable the protection so the live link works for visitors.
- Replace `/public/og.png` with a newer 1200×630 social image if the hero changes.
- `public/melos-alidema-cv.pdf` is the downloadable CV served by the hero CTA. When the CV
  changes, regenerate it and copy it over this file.

## Deploying (Netlify)

`netlify.toml` builds `npm run build` and publishes `out/`. Every push to the production
branch goes live; PRs get preview URLs.

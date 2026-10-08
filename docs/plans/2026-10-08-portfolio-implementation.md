# Melos Alidema — Portfolio Implementation Plan

> **For agentic workers:** executed inline in this session. Steps use checkbox syntax.

**Goal:** A premium, editorial personal portfolio for Melos Alidema — static-export Next.js site with 5 real case studies, tasteful motion, and production-grade a11y/SEO.

**Architecture:** Next.js 16 App Router static export (`output: "export"`). Tailwind CSS v4 with custom @theme tokens. Motion (React) + Lenis for animation. Content in typed TS modules. Case studies at `/work/[slug]` via `generateStaticParams`. All imagery is real captures of the live projects (`public/work/*.webp`).

**Tech Stack:** Next.js 16.3.7 · React 19 · TypeScript · Tailwind CSS v4 · Motion v13 · Lenis · next/font (Fraunces / Instrument Sans / Geist Mono).

---

## Design system (locked)

- **Direction:** Editorial Engineer — warm paper, deep ink, one deep-teal signal, hairline rules, radius 0.
- **Tokens:** defined in `src/app/globals.css` @theme. Every value used comes from there.
- **Motion language:** `src/lib/motion.ts` — eases (expo-out, cut), durations 0.3/0.6/0.9/1.2, stagger 0.06. Reveals are y+opacity (once), text is line-mask, images are clip-wipe, hovers are transform-only.
- **Background:** fixed canvas — ~90 fine ink particles drifting on a slow noise field, gentle mouse repel, ink @ low alpha; site-wide 4% grain overlay. Both disabled under reduced motion.
- **Signature moments:** (1) staged entrance + "Përshëndetje → Hello" status beat; (2) numbered sticky project plates with stacking + cursor "View" disc; (3) cover-wipe route transitions via TransitionLink; (4) case-study pages with editorial meta tables.

## File map

```
src/app/            layout.tsx (fonts, metadata, chrome) · page.tsx (home) · globals.css
                    work/[slug]/page.tsx · sitemap.ts · robots.ts
src/components/layout/   Nav · MobileNav · Footer · SmoothScroll · TransitionLink · CustomCursor · FieldCanvas
src/components/ui/       Reveal · MaskedLines · MetaLabel · Magnetic · ArrowLink · SectionHead
src/components/sections/ Hero · Marquee · Work · About · Experience · Skills · Education · Contact
src/components/work/     ProjectPlate (sticky card) · CaseStudy pieces
src/content/        site.ts · projects.ts · resume.ts
src/lib/            motion.ts · useLenis.ts · useSectionSpy.ts · useFinePointer.ts
public/             work/*.webp (10) · favicon.svg
```

## Tasks

- [ ] 1. Foundation: globals.css tokens + base + grain + reduced-motion; lib (motion, lenis, spies, pointer gate)
- [ ] 2. Chrome: layout.tsx (fonts/metadata/skip-link), SmoothScroll, Nav, MobileNav, Footer, TransitionLink + wipe, CustomCursor, FieldCanvas
- [ ] 3. UI kit: Reveal, MaskedLines, MetaLabel, Magnetic, ArrowLink, SectionHead
- [ ] 4. Hero (entrance choreography, greeting beat, grid rules) + Marquee
- [ ] 5. Work: sticky numbered plates, hover parallax, cursor disc, case-study links
- [ ] 6. About (bio + meta card + principles) · Experience (timeline) · Skills · Education (+certificates, languages)
- [ ] 7. Contact (magnetic email, socials, local time) 
- [ ] 8. Case studies `/work/[slug]`: hero, meta table, story, features, stack, mobile shot, next-project
- [ ] 9. SEO: metadata per page, OG image, favicon.svg, sitemap.ts, robots.ts, netlify.toml, README
- [ ] 10. Verify: `npm run build` + `tsc --noEmit` + `eslint` clean
- [ ] 11. Test: serve `out/`, CDP screenshots 1440/768/390 + reduced-motion pass, console-error audit, link check; fix all issues
- [ ] 12. Design review (ai-slop + interface rubric) and final polish

## Verification

```bash
npm run build && npx tsc --noEmit && npm run lint
npx serve out -l 4173   # then CDP screenshot audit
```

Checklist: no horizontal overflow at 320/390/768/1440; keyboard pass (skip link → nav → menu → cards → forms); focus visible; contrast AA (meta #6E6859 on paper = 4.99:1); reduced-motion disables canvas/cursor/lenis/boot; LCP image eager, rest lazy; no console errors.

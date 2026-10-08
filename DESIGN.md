# DESIGN.md — Melos Alidema Portfolio

**Art direction sentence:** Editorial Engineer — a 2026 print monograph of a software studio: warm uncoated paper, deep ink, one deep-teal signal, hairline rules, numbered plates, mono captions; motion is slow and directed; the only background treatment is a 4% grain on the paper.

**Brand attributes:** precise · warm · technical · calm · honest.

**Anti-references:** dark-purple gradient SaaS landing; glassmorphism everywhere; template portfolio hero with gradient blob; progress-bar skill meters; fake stats/logos/testimonials; "passionate developer" copy; moving tech marquees; custom cursor followers; drifting particle backgrounds.

## Palette (semantic tokens — `src/app/globals.css`)

| Token | Value | Role |
|---|---|---|
| `paper` | `#F5F3EE` | page ground |
| `surface` | `#FBF9F4` | raised plates |
| `ink` | `#191713` | primary text |
| `ink-2` | `#57534A` | secondary text (6.9:1) |
| `ink-3` | `#6E6859` | meta text (4.99:1 — AA) |
| `line` | `#DAD5CA` | hairlines |
| `accent` | `#0F5E63` | signal — links, CTA, cursor, ≤8% of surface (6.8:1) |
| `accent-deep` | `#0B474B` | accent hover |

## Typography roles

- **Display — Fraunces** (variable serif): h1/h2, project titles, the email link. Leading 0.98–1.08, tracking −0.02em, `text-display` clamp(3.5–8.5rem).
- **Body — Instrument Sans**: paragraphs, lede. `text-body` clamp(1–1.15rem), measure ≤68ch.
- **Meta — Geist Mono**: labels, indexes, dates, tags, buttons. Uppercase, tracking 0.14em, `text-meta` 0.78rem.

## Space, form, depth

- Gutter `clamp(1.25–4.5rem)`; section rhythm `clamp(5–9.5rem)`; hairline `.rule` separates blocks.
- **Radius 0 everywhere.** **No shadows.** Depth comes from hairlines and the surface tint.
- One visible grid: five vertical rules in the hero only — the editorial skeleton, shown once.

## Motion language (`src/lib/motion.ts`)

- Eases: expo-out for reveals, cut for the curtain. Durations 0.3 / 0.6 / 0.9 / 1.2s. Stagger 0.06.
- Reveals: y+opacity once (`Reveal`), line masks (`MaskedLines`), hover scale ≤1.03, magnetic CTAs ≤12px (fine pointers, reduced-motion gated), cover-wipe route transitions (`TransitionLink` + `RouteCurtain`).
- **Reduced motion:** curtain, Lenis, entrance choreography and magnetic drift are all disabled; `MotionConfig reducedMotion="user"` remains as a second net.
- **Work rail:** a fixed `01–08` index (`WorkIndex`, xl+ only) tracks the pinned plate while the work stack is active, with the current number in accent. Supplementary orientation only — aria-hidden, never interactive, moves only with the reader.
- **No continuous animation runs anywhere.** Nothing moves unless the reader moves or a link is followed.

## Background

One fixed 4% grain overlay (multiply) on the paper — the entire texture system. No canvas, no particles, no cursor follower; removed 2026-10-09 because they failed the "what does this express" test and contradicted the site's own "fast by default" principle.

## Responsive principles

- Container 1500px; breakpoints from content failure (lg = sticky stacking boundary, xl = availability chip).
- Work plates: sticky numbered stacking ≥lg; plain stack below.
- Mobile nav: full-screen paper overlay with focus trap, Esc, scroll lock.
- All type is clamp-scaled; grids collapse by re-composing (facts card, education columns), not by shrinking.

## Case-study imagery

Each case study carries two evidence plates: a full-bleed homepage capture, and one interior view of the live product (1440×900 WebP, lazy) with a mono caption stating exactly what it shows. Fixpoint (video-only) and Casa Sole (gated URL) carry no interior plate — no invented imagery.

## Intentional exceptions

- Hero shows the only visible grid; no other section repeats it.
- Project plates carry their own accent (from the project screenshot) — the site accent stays teal.

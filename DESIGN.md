# DESIGN.md — Melos Alidema Portfolio

**Art direction sentence:** Editorial Engineer — a 2026 print monograph of a software studio: warm uncoated paper, deep ink, one deep-teal signal, hairline rules, numbered plates, mono captions; motion is slow and directed; the only background effects are a 4% grain and a sparse ink particle field.

**Brand attributes:** precise · warm · technical · calm · honest.

**Anti-references:** dark-purple gradient SaaS landing; glassmorphism everywhere; template portfolio hero with gradient blob; progress-bar skill meters; fake stats/logos/testimonials; "passionate developer" copy.

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
- Reveals: y+opacity once (`Reveal`), line masks (`MaskedLines`), hover scale ≤1.03, magnetic CTAs ≤12px, cover-wipe route transitions (`TransitionLink` + `RouteCurtain`), square custom cursor that becomes a "View" disc over work.
- **Reduced motion:** canvas, cursor, Lenis, curtain and entrance choreography are all disabled; `MotionConfig reducedMotion="user"` remains as a second net.

## Background

`FieldCanvas`: ≤180 particles desktop / 70 mobile, ink at ≤0.11 alpha, 140px mouse repel, pauses when the tab is hidden, DPR ≤2. Plus a fixed 4% grain overlay (multiply). That is the entire background system — one field, one texture.

## Responsive principles

- Container 1500px; breakpoints from content failure (lg = sticky stacking boundary, xl = availability chip).
- Work plates: sticky numbered stacking ≥lg; plain stack below.
- Mobile nav: full-screen paper overlay with focus trap, Esc, scroll lock.
- All type is clamp-scaled; grids collapse by re-composing (facts card, education columns), not by shrinking.

## Intentional exceptions

- The custom cursor is square — it belongs to the radius-0 language.
- Hero shows the only visible grid; no other section repeats it.
- Project plates carry their own accent (from the project screenshot) — the site accent stays teal.

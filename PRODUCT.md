# PRODUCT.md — Melos Alidema Portfolio

## Offer

A personal portfolio and eight case studies for **Melos Alidema**, full-stack developer (Pozheran, Kosovo). Goal: win full-stack roles and freelance work by showing real, live products and the craft behind them.

## Users & jobs

| User | Context | Job |
|---|---|---|
| Recruiter / hiring manager | Skimming, 60 seconds | Decide if this person ships real things → open a live project |
| Potential client | Evaluating taste + reliability | See proof of work, understand the stack, make contact |
| Dev peer | Verifying craft | Check the details: motion, a11y, code quality, live links |

## Facts vs assumptions

**Facts (verifiable):**
- Eight products: stayinkosovo.netlify.app, nuraskincare-dev.netlify.app, codeviodev.netlify.app, godrivekorea.com, copperkitchen.netlify.app and geo-land.netlify.app — all verified live on 2026-10-08. casasole.netlify.app is currently Netlify-protected (owner action required); Fixpoint's public artifact is its demo video (the repository is private).
- stay-in-kosovo repository is public on GitHub.
- Role history, education, certificates, languages: from the user's own CV.
- Contact details: from the user's own CV; Instagram (https://www.instagram.com/melosalidema/) is portfolio-only and deliberately excluded from the CV.

**Assumptions (flagged for confirmation before launch):**
- "Available for work" status.
- "I answer within a day" response-time claim in the contact copy.

## Non-goals

No blog, no CMS, no fabricated testimonials, metrics, client logos or awards. Nothing on the page that cannot be traced to a live URL or the CV.

## Content gaps (designed around, easy to fill)

- **Portrait photo** — not available; the About section uses a facts card instead. A portrait slot can replace or sit beside it.
- **OG image** — a 1200×630 render of the hero (`public/og.png`); swap for a designed card later if desired.

## Accessibility target

WCAG 2.2 AA. Verified: keyboard pass with visible focus (skip link, nav, menu, plates), contrast (meta 4.99:1, accent 6.8:1), reduced-motion path, semantic landmarks, one h1 per page, alt text on all images.

## Success criteria

- A recruiter reaches a live product in ≤2 clicks from the hero.
- Zero console errors; no horizontal overflow at 320–1920px.
- The site still reads completely with JavaScript animations disabled.

# Refinement Audit & Plan — 2026-10-09

Follow-up pass on the 2026-10-08 redesign. The editorial identity, verified content, and
technical foundation are strong. This pass removes the remaining template reflexes,
fixes every unsupported/stale claim, deepens the case studies with real interior evidence,
and re-verifies the whole surface in a browser.

> **Status: executed.** All items below are implemented, built, and browser-verified.
> Verification record at the bottom of this document. Changes committed 2026-10-09.

## Audit — what still reads as generated, weak, or unverified

### A. Residual AI-template signals (all three are on the "avoid" list)
1. **Tech marquee under the hero** — a continuously moving strip of stack names. Decorative
   (`aria-hidden`), duplicated by the Skills ledger and every plate's stack row, never
   mentioned in DESIGN.md. The strongest remaining "template" gesture on the page.
2. **Custom cursor** — square dot/ring/"View" follower; hides the native cursor site-wide.
   Cursor followers are a known portfolio-template reflex and a small usability liability
   (text selection, motor accessibility). The plate hover already communicates "open".
3. **Animated particle field (FieldCanvas)** — 500 rAF particles at 3–8 % opacity, running
   forever on every page. Barely visible, real battery cost, and it contradicts the site's
   own stated principle ("Fast by default"). The static grain already carries the paper
   texture.

### B. Weak or stale copy
4. About: *"Five of them are live on this page."* — stale from the 5-project era; the site
   now documents eight. Factually loose (Casa Sole's URL is gated, Fixpoint's public
   artifact is a demo video).
5. Work heading: *"Eight products, shipped and live."* — shipped is true for eight; "live"
   is not for one gated URL. Wording should survive a skeptic.
6. Contact: *"I answer within a day."* — flagged in EVIDENCE.md as an unconfirmed
   assumption. Unverifiable forward promises don't ship.
7. Skills lede: *"roughly in what order"* — the ledger groups by layer and doesn't show
   order; the lede promises something the layout doesn't deliver.

### C. Missed evidence opportunity
8. Case studies show only the homepage capture + phone capture — the same two images the
   home plate uses. The products' interiors (Geo&Land's project register, Copper's menu,
   Godrive's inventory, Stay's mood discovery, Codevio's sprint cards, NŪRA's shop) are
   the actual proof of depth. One real interior plate per publicly reachable project.

### D. Technical
9. `metadataBase` build warning — no fallback URL when `NEXT_PUBLIC_SITE_URL` is unset, so
   OG/canonical URLs resolve against localhost.
10. Turbopack root warning — stray lockfile above the repo; pin `turbopack.root`.
11. Casa Sole live URL returns 401 (Netlify visitor protection). Owner action, tracked in
    EVIDENCE.md; the link stays but must be flagged before launch.

### E. Verified as sound (no change)
- No console errors; no horizontal overflow at 320/390/768/1024/1440/1920.
- All external links reachable (LinkedIn's 999 is its bot wall).
- Images are real captures, 23–105 KB WebP, dimensioned (`width`/`height`) — no CLS.
- Keyboard flows, focus rings, reduced-motion path, semantic landmarks all present.
- Motion system (expo-out reveals, line masks, cover wipe, sticky plates) is consistent and
  purposeful; Lenis + magnetic CTAs are subtle, fine-pointer-only, documented — keep.

## Plan (priority order)

1. **P1 — delete the three reflexes:** Marquee (+ its keyframes/token), CustomCursor
   (+ `custom-cursor` CSS + `data-cursor` attrs), FieldCanvas. Update README/DESIGN.
2. **P2 — copy truth pass:** About sentence, Work heading, Contact line, Skills lede;
   update EVIDENCE.md rows.
3. **P3 — case-study interiors:** capture 6 real interior views (stay, geo-land, godrive,
   copper, codevio, nūra), 1440×900 WebP, add `interior` to the Project type, render an
   editorial figure with mono caption after "The story".
4. **P4 — technical hygiene:** `metadataBase` fallback to the production URL; Turbopack
   root pin; comment cleanup.
5. **P5 — verify:** `npm run build` + `tsc --noEmit` + `eslint`; Playwright pass —
   axe-core (desktop + mobile), keyboard tab order, reduced-motion render, mobile menu,
   overflow sweep, internal/external link check, console audit; screenshot review of every
   changed surface; then the ai-slop re-read of the final page.
6. **P6 — docs + commit:** refresh PRODUCT/DESIGN/EVIDENCE/README, commit with clear
   messages. (Deploys on push to `main` via Netlify.)

## Decisions & rationale
- **Remove, don't restyle.** Marquee/cursor/particles are deleted rather than toned down:
  each fails the "what user need / what product truth" test, and the page's identity is
  stronger with one motion system rather than three.
- **Keep** Lenis (consistent anchor offsets, no touch smoothing, off under reduced motion),
  Magnetic (≤12 px, fine-pointer, reduced-motion-gated), route curtain, masked reveals.
- **Keep** the sticky plate stack — it is the page's signature moment and survives the
  substitution test.
- **Interiors are evidence, not decoration:** caption each with what it actually shows,
  after that claim is verified in the capture itself.

## Verification record (2026-10-09)

- `npm run build` clean; `tsc --noEmit` clean; `eslint` clean. `metadataBase` and Turbopack
  root warnings resolved.
- axe-core 4.10.2: **0 violations** on home (desktop 1440 + mobile 390) and case study (1440).
- Keyboard: skip link → wordmark → nav → hero CTAs → plates; every stop has a visible 2 px
  accent outline. Mobile menu traps focus (Shift+Tab wraps to the email link) and returns
  focus to the trigger on Escape.
- Reduced motion: hero, reveals, and case-study content all render complete; navigation works.
- No horizontal overflow at 320 / 390 / 768 / 1024 / 1440 / 1920 (scrollWidth ≤ clientWidth).
- No console errors on any of the 9 pages; all images resolve after scroll (8/8 home,
  3/3 per case study with interior).
- No-JS pass: content renders fully visible (noscript neutralizes entrance states).
- Links re-checked: 6 project sites 200, GitHub 200, Instagram 200, demo video 200;
  Casa Sole 401 (Netlify visitor protection — owner action required).
- Sitemap and robots now emit absolute URLs under the canonical origin.
- Page weight on first load (local, decoded): ~1.4 MB total, images 570 KB, JS 635 KB
  decoded (~200 KB over the wire with Netlify brotli).

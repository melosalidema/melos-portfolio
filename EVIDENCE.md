# EVIDENCE.md — claims ledger

Every externally verifiable claim on the site, its source, and where it appears.
Unsupported claims must not ship; flagged items need the owner's confirmation.

| Claim | Where it appears | Source | Confidence | Allowed wording |
|---|---|---|---|---|
| "Stay in Kosovo" is a live tourism & mobility platform | Home plate 01; `/work/stay-in-kosovo` | https://stayinkosovo.netlify.app/ (checked 2026-10-08; screenshot in `public/work/`) | high | as written |
| NŪRA Skin storefront is live | Home plate 06; case study | https://nuraskincare-dev.netlify.app/ (re-checked 2026-10-09) | high | as written |
| Fixpoint is a multi-app AI agent built for the Multi-App AI Agent Hackathon 2026 | Home plate 02; case study | Local repo `Codevio-FixPoint` (private) README + SUBMISSION.md; public demo video https://youtu.be/0u5WcobheGo (re-checked 2026-10-09) | high (existence) | as written |
| Fixpoint: "16/16 evaluation scenarios pass, zero unsafe mutations" | Fixpoint case study | The project's own SUBMISSION.md build output (reproducible via `python -m app.evals.runner`) | self-reported build result | as written |
| Codevio agency platform is live | Home plate 07; case study | https://codeviodev.netlify.app/ (re-checked 2026-10-09) | high | as written |
| GoDrive Korea marketplace is live | Home plate 05; case study | https://godrivekorea.com (re-checked 2026-10-09) | high | as written |
| Copper Kitchen platform is live | Home plate 08; case study | https://copperkitchen.netlify.app/ (re-checked 2026-10-09) | high | as written |
| Geo&Land Kosova website is live | Home plate 04; case study | https://geo-land.netlify.app/ (re-checked 2026-10-09) | high | as written |
| Casa Sole website exists and is built as described | Home plate 03; case study | Local repo `Casa-Sole` (React 19 + TypeScript + Vite); https://casasole.netlify.app/ returns **HTTP 401 (Netlify visitor protection) as of 2026-10-09 — owner must disable it before launch** | high (existence) | as written |
| Instagram profile | Contact section; footer (portfolio only — deliberately not on the CV) | https://www.instagram.com/melosalidema/ (user-provided) | high | as written |
| stay-in-kosovo source is public | Case study "Repository" link | https://github.com/melosalidema/stay-in-kosovo (re-checked 2026-10-09) | high | as written |
| Interior captures show the live products | Case studies (6 plates) | Direct 1440×900 captures of the live sites, taken 2026-10-09; each caption describes only what is visible in its capture | high | as written |
| IT Administrator at KQZ (Sep 2025 – Jun 2026) | Experience section | User CV (`Melos_Alidema_CV_Updated.docx`) | high | as written |
| University of Prishtina CS student since Sep 2023 | About, Education | User CV | high | as written |
| Certificates (Probit, Cisco CPA, MicroBit 3rd place) | Education | User CV | high | as written |
| Tech stacks per project | Plates + case studies | Project repositories on the user's machine (READMEs, package.json) | high | as written |
| "Available for work" | Nav, hero, About, contact | **Assumption — confirm before launch** | medium | keep or remove |

Notes:
- No metrics, client counts, testimonials or awards appear anywhere except the MicroBit certificate from the CV and Fixpoint's evaluation results, which are the project's own reproducible build output.
- Project screenshots in `public/work/` are direct captures of the live sites (homepage + interiors, taken 2026-10-08 / 2026-10-09; Casa Sole was captured from its local build because the Netlify site is protected).
- Removed 2026-10-09: "I answer within a day" response-time promise (unverifiable), "Five of them are live" line (stale), tech marquee, custom cursor, particle field.

export type ProjectFeature = { title: string; text: string };

export type ProjectInterior = { src: string; alt: string; caption: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  type: string;
  year: string;
  role: string;
  summary: string;
  description: string[];
  features: ProjectFeature[];
  stack: string[];
  live?: string;
  liveLabel?: string;
  repo?: string;
  image: string;
  imageMobile: string;
  interior?: ProjectInterior;
  alt: string;
  index: string;
};

export const projects: Project[] = [
  {
    slug: "stay-in-kosovo",
    name: "Stay in Kosovo",
    tagline: "A tourism & mobility platform for discovering Kosovo",
    type: "Full-stack product",
    year: "2026",
    role: "Full-stack developer — concept to deployment",
    summary:
      "A mobile-first platform that helps visitors find places worth their time in Kosovo — and shape a day around them.",
    description: [
      "Stay in Kosovo started as a simple question: what should someone actually do with their day here? The answer is a platform that treats a city like a living system — places, moods, events, transport and reviews feeding one experience.",
      "Built end to end: a Next.js App Router frontend, REST API routes validated with Zod, a Prisma/PostgreSQL schema covering users, businesses, places, itineraries and interactions, and an explainable recommendation engine whose scoring can be inspected rather than trusted blindly.",
    ],
    features: [
      {
        title: "Discover by mood",
        text: "Places filtered by vibe, category, budget and transport, with reviews and hidden-gem signals.",
      },
      {
        title: "AI day planner",
        text: "A deterministic recommendation engine scores places — vibe fit, distance, budget, quality, personalization — and builds a timed itinerary.",
      },
      {
        title: "City pulse",
        text: "Live demand zones, top vibes, transport health and business supply gaps for operators.",
      },
      {
        title: "Accounts & moderation",
        text: "Credentials auth, business onboarding, admin moderation queues, saved places and check-ins.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Zustand", "Tailwind CSS", "Docker"],
    live: "https://stayinkosovo.netlify.app/",
    repo: "https://github.com/melosalidema/stay-in-kosovo",
    image: "/work/stay-in-kosovo.webp",
    imageMobile: "/work/stay-in-kosovo-mobile.webp",
    interior: {
      src: "/work/stay-in-kosovo-interior.webp",
      alt: "Stay in Kosovo discover page — 'What are you in the mood for?' filter chips above recommendation cards",
      caption: "Inside — mood discovery, and the places it surfaces.",
    },
    alt: "Stay in Kosovo homepage — 'Find your next place in Kosovo' with an editorial layout and green accents",
    index: "01",
  },
  {
    slug: "fixpoint",
    name: "Fixpoint",
    tagline: "A multi-app AI agent that proves its work",
    type: "AI agent platform",
    year: "2026",
    role: "Design & full-stack development",
    summary:
      "An agent that resolves customer exceptions across billing, inbox, CRM, chat and docs — and proves it against real system state before claiming success.",
    description: [
      "Fixpoint handles the messy end of customer support — double charges, refunds, escalations — across five connected apps: Stripe, Gmail, Slack, HubSpot and Google Drive. Built for the Multi-App AI Agent Hackathon 2026.",
      "The engineering is in what stops it: a deny-by-default action gateway, HMAC-signed single-use approvals bound to an action hash, a hash-chained audit ledger, and an independent verifier that re-reads provider state after every mutation. An S1–S16 evaluation matrix scores every run — 16/16 passing, zero unsafe mutations.",
    ],
    features: [
      {
        title: "Sealed context",
        text: "Tenant, actor, capabilities and the amount envelope are assembled server-side; the model can never name a tenant or change its authority.",
      },
      {
        title: "Bound approvals",
        text: "Money above the envelope pauses for a human. Approvals are HMAC-signed, single-use, expiring — and any change voids them.",
      },
      {
        title: "Independent verification",
        text: "After every mutation, a verifier re-reads real provider state; claims that cannot be grounded fail the run.",
      },
      {
        title: "Tamper-evident audit",
        text: "Every plan, decision, tool call and verification is hash-chained — breaking one entry is detectable at the exact index.",
      },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker"],
    live: "https://youtu.be/0u5WcobheGo",
    liveLabel: "Demo video",
    image: "/work/fixpoint.webp",
    imageMobile: "/work/fixpoint-mobile.webp",
    alt: "Fixpoint operator console — a dark interface showing an agent run with approvals, verification and audit trail",
    index: "02",
  },
  {
    slug: "casa-sole",
    name: "Casa Sole",
    tagline: "A boutique hotel site built around the booking",
    type: "Hotel website",
    year: "2026",
    role: "Design & front-end development",
    summary:
      "A complete hotel website — rooms and room details, experiences, restaurant, story and contact — with a booking widget that quotes and confirms without leaving the page.",
    description: [
      "Casa Sole is built like a stay: photography first, quiet motion, and a booking bar at the foot of the hero. The type sets over full-bleed coastal imagery and gets out of the way.",
      "Eight routes cover the full guest journey — home, rooms, individual room pages, experiences, restaurant, story, contact and a 404 — built with React 19, TypeScript and Vite. The booking widget handles dates, guests, nightly quotes and availability logic, and the motion layer respects reduced-motion preferences.",
    ],
    features: [
      {
        title: "Full guest journey",
        text: "Home, rooms, room detail, experiences, restaurant, story and contact — every page a guest needs before booking.",
      },
      {
        title: "Booking that computes",
        text: "A widget with date and guest selection, nightly quotes, availability checks and a confirmation flow.",
      },
      {
        title: "Photography-led",
        text: "Full-bleed coastal imagery with type set over it — the property sells itself.",
      },
      {
        title: "Tested like production",
        text: "Vitest unit tests and Playwright end-to-end tests run against the built site.",
      },
    ],
    stack: ["React", "TypeScript", "Vite", "React Router", "Motion"],
    live: "https://casasole.netlify.app/",
    image: "/work/casa-sole.webp",
    imageMobile: "/work/casa-sole-mobile.webp",
    alt: "Casa Sole homepage — 'Find your own pace by the sea' in an italic serif over a coastal photograph seen through a cave opening",
    index: "03",
  },
  {
    slug: "geoland-kosova",
    name: "Geo&Land Kosova",
    tagline: "Website & CMS for a geoinformation company",
    type: "Business site & CMS",
    year: "2026",
    role: "Design & full development",
    summary:
      "A complete website for a Prishtina geoinformation company — six disciplines, a register of documented projects, and a CMS the team runs themselves.",
    description: [
      "Geo&Land works in land administration, cadastre, GIS and remote sensing across Kosovo and the Balkans. The site had to read like a survey instrument, not a brochure — document-like registers, measured typography, and the company's own fieldwork imagery.",
      "Every page carries a topographic contour texture generated for it, orthophoto plates are presented as documents, and a lightweight Python CMS with an admin interface, media handling and a content store lets the team publish projects and services without touching code.",
    ],
    features: [
      {
        title: "Project register",
        text: "Documented projects, filterable by discipline, each opening into a detail view with its evidence.",
      },
      {
        title: "Six disciplines, one system",
        text: "Services presented as numbered accordions with scope, deliverables and sector fit for each discipline.",
      },
      {
        title: "Built-in CMS",
        text: "A Python CMS with admin authentication, media uploads and content storage — the site is run by the team.",
      },
      {
        title: "Instrument-grade details",
        text: "Live coordinates, mono data labels and per-page contour textures drawn from the subject matter itself.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Python", "Netlify"],
    live: "https://geo-land.netlify.app/",
    image: "/work/geo-land.webp",
    imageMobile: "/work/geo-land-mobile.webp",
    interior: {
      src: "/work/geo-land-interior.webp",
      alt: "Geo&Land Kosova project register — documented projects with orthophoto plates and descriptions",
      caption: "Inside — the project register: the company's documented works.",
    },
    alt: "Geo&Land Kosova homepage — 'Ground truth, measured precisely' in bold grotesk over an orthophoto plate with topographic contour lines",
    index: "04",
  },
  {
    slug: "godrive-korea",
    name: "GoDrive Korea",
    tagline: "Live Korean car marketplace & import service",
    type: "Marketplace",
    year: "2026",
    role: "Full-stack developer",
    summary:
      "A marketplace for browsing, comparing and tracking used cars from South Korea — synced live from the Encar provider API and priced in EUR.",
    description: [
      "GoDrive Korea imports Korean cars to Europe, and the platform is the business: a live marketplace where every listing, price and spec comes straight from Korea's largest used-car market — synced daily, priced in EUR.",
      "Behind the storefront: a sync pipeline over the Encar provider API, PostgreSQL via Prisma with price-history tracking, Redis for caching and rate limiting, a bilingual English/Albanian UI, and a booking workflow with branded email notifications.",
    ],
    features: [
      {
        title: "Live inventory",
        text: "Daily sync from the Encar API with price-history tracking and premium-brand prioritization.",
      },
      {
        title: "Real filters",
        text: "Brand, model, price, mileage, body, engine, fuel, seller and year — plus sorting and pagination.",
      },
      {
        title: "Import workflow",
        text: "Favorites, saved-search alerts and booking requests with branded email notifications.",
      },
      {
        title: "Bilingual",
        text: "A complete English / Albanian interface, with WhatsApp and Viber contact built in.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Docker", "Nodemailer"],
    live: "https://godrivekorea.com",
    image: "/work/godrive-korea.webp",
    imageMobile: "/work/godrive-korea-mobile.webp",
    interior: {
      src: "/work/godrive-korea-interior.webp",
      alt: "GoDrive Korea listings page — a grid of used cars with EUR prices and mileage",
      caption: "Inside — live inventory: listings synced from Korea, priced in EUR.",
    },
    alt: "GoDrive Korea homepage — bold white type over a dark stage with a car silhouette and red accents",
    index: "05",
  },
  {
    slug: "nura-skin",
    name: "NŪRA Skin",
    tagline: "A clinical skincare storefront concept",
    type: "E-commerce front-end",
    year: "2026",
    role: "Design & front-end development",
    summary:
      "A production-quality storefront for a fictional clinical skincare brand — product pages, a routine builder, and a full mobile shopping experience.",
    description: [
      "NŪRA is a complete storefront concept for a fictional clinical skincare brand — built to demonstrate what e-commerce UX feels like when every detail is considered.",
      "Eight products, each with its own variants and stock; a routine builder that assembles a sequenced routine and prices the bundle; a cart drawer that survives navigation; and an editorial design system — parchment, Garamond, zero radius — that sets product data like a ledger, not a dashboard.",
    ],
    features: [
      {
        title: "Routine builder",
        text: "A three-question quiz assembles a sequenced routine, explains each step and applies 15% bundle pricing.",
      },
      {
        title: "Commerce that behaves",
        text: "Cart drawer with localStorage persistence, variant pricing and stock, quick-add from any grid.",
      },
      {
        title: "Accessible by default",
        text: "Keyboard-operable drawer and menu with focus trapping, aria-live updates, reduced-motion support.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://nuraskincare-dev.netlify.app/",
    image: "/work/nura-skin.webp",
    imageMobile: "/work/nura-skin-mobile.webp",
    interior: {
      src: "/work/nura-skin-interior.webp",
      alt: "NŪRA Skin shop page — 'The collection' with eight products and category filters",
      caption: "Inside — the shop: eight formulas, filterable by category.",
    },
    alt: "NŪRA Skin homepage — 'Know your skin better' in an editorial serif over warm product photography",
    index: "06",
  },
  {
    slug: "codevio",
    name: "Codevio",
    tagline: "The agency platform for our own studio",
    type: "Marketing site",
    year: "2026",
    role: "Front-end development",
    summary:
      "A responsive platform presenting Codevio's web development services — with an interactive animation layer and 3D visuals.",
    description: [
      "Codevio is the agency platform for our own studio — the place where client work starts with a conversation about what we build and how.",
      "A React + Vite front end with a Tailwind v4 token system, GSAP and Motion for the animation layer, and React Three Fiber moments used sparingly — 3D as punctuation, never wallpaper.",
    ],
    features: [
      {
        title: "Motion system",
        text: "GSAP and Motion-driven reveals, marquee and hover states tuned to one easing language.",
      },
      {
        title: "3D moments",
        text: "React Three Fiber scenes used as punctuation points in the scroll, not as decoration.",
      },
      {
        title: "Design system",
        text: "Tailwind CSS v4 tokens, Radix primitives, a single radius, and a type scale that holds up.",
      },
    ],
    stack: ["React", "Vite", "Tailwind CSS", "GSAP", "Motion", "Three.js"],
    live: "https://codeviodev.netlify.app/",
    image: "/work/codevio.webp",
    imageMobile: "/work/codevio-mobile.webp",
    interior: {
      src: "/work/codevio-interior.webp",
      alt: "Codevio launch sprints — four engagement cards with durations, prices and scope notes",
      caption: "Inside — launch sprints: fixed scope and timeline, priced up front.",
    },
    alt: "Codevio homepage — a 3D lanyard badge suspended over a red and black split stage",
    index: "07",
  },
  {
    slug: "copper-kitchen",
    name: "Copper Kitchen",
    tagline: "Restaurant platform with an owner admin",
    type: "Client platform",
    year: "2026",
    role: "Full-stack developer",
    summary:
      "A restaurant platform for a bistro in Bicester — a public site with online booking, and an admin dashboard where the owner manages everything.",
    description: [
      "Copper Kitchen is a restaurant platform for a real bistro in Bicester, England — the public site takes bookings, and the owner runs everything else from an admin dashboard: menu, hours, photos, reservations.",
      "Postgres is the single source of truth: the owner edits a dish and the public menu follows. The booking form builds its time slots from the opening hours, and the whole site ships as a static export with Restaurant and Menu structured data.",
    ],
    features: [
      {
        title: "Owner admin",
        text: "Menu, opening hours, photos and reservations managed without a redeploy.",
      },
      {
        title: "Bookings that work",
        text: "Time slots built from opening hours; reservations confirmed in the dashboard.",
      },
      {
        title: "Menu as data",
        text: "Postgres as the source of truth; public pages server-render with a graceful fallback.",
      },
      {
        title: "SEO & accessibility",
        text: "Restaurant and Menu structured data, semantic HTML, keyboard-accessible flows.",
      },
    ],
    stack: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Netlify"],
    live: "https://copperkitchen.netlify.app/",
    image: "/work/copper-kitchen.webp",
    imageMobile: "/work/copper-kitchen-mobile.webp",
    interior: {
      src: "/work/copper-kitchen-interior.webp",
      alt: "Copper Kitchen menu page — starters, mains and desserts with prices beside a food photograph",
      caption: "Inside — the menu, served from the owner's dashboard.",
    },
    alt: "Copper Kitchen homepage — a dark food photograph with elegant serif type and copper accents",
    index: "08",
  },
];

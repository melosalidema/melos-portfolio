export type ProjectFeature = { title: string; text: string };

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
  repo?: string;
  image: string;
  imageMobile: string;
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
    alt: "Stay in Kosovo homepage — 'Find your next place in Kosovo' with an editorial layout and green accents",
    index: "01",
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
    alt: "NŪRA Skin homepage — 'Know your skin better' in an editorial serif over warm product photography",
    index: "02",
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
    live: "https://codevio.net/",
    image: "/work/codevio.webp",
    imageMobile: "/work/codevio-mobile.webp",
    alt: "Codevio homepage — 'Build Full-Stack Applications Faster with codevio' on a dark stage with a red glow",
    index: "03",
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
    alt: "GoDrive Korea homepage — bold white type over a dark stage with a car silhouette and red accents",
    index: "04",
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
    alt: "Copper Kitchen homepage — a dark food photograph with elegant serif type and copper accents",
    index: "05",
  },
];

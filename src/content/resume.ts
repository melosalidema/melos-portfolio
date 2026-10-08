export const experience = [
  {
    company: "KQZ — Central Election Commission",
    role: "IT Administrator",
    start: "Sep 2025",
    end: "Jun 2026",
    location: "Kosovo",
    points: [
      "Provided technical support for staff and maintained IT infrastructure during the election process.",
      "Configured and supervised computer equipment and the local network.",
      "Resolved real-time technical issues to ensure operational continuity.",
    ],
    stack: ["IT infrastructure", "Networking", "Technical support"],
  },
] as const;

export const education = [
  {
    school: "University of Prishtina — Hasan Prishtina",
    program: "Bachelor's Degree in Computer Science",
    start: "Sep 2023",
    end: "Present",
  },
  {
    school: "Specialized Mathematical Gymnasium",
    program: "High school",
    start: "2020",
    end: "2023",
  },
] as const;

export const skillGroups = [
  { label: "Programming Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { label: "Backend", items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Prisma"] },
  { label: "Tools & Technologies", items: ["Git & GitHub", "Docker", "Netlify", "Cisco Packet Tracer"] },
  {
    label: "Other",
    items: ["AI-assisted development", "AI API integration", "TCP/IP & HTTP", "System design"],
  },
] as const;

export const certificates = [
  { name: "Probit Academy — Full-Stack Development", year: "In progress" },
  { name: "CPA: Programming Essentials in C++ — Cisco", year: "2019" },
  { name: "3rd Place in Kosovo — MicroBit Competition", year: "2018" },
] as const;

export const languages = [
  { name: "Albanian", level: "Native" },
  { name: "English", level: "B1 / B2 — Intermediate" },
] as const;

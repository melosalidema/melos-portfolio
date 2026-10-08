import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base || "/", changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}

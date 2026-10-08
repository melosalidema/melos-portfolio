import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    ...(base ? { sitemap: `${base}/sitemap.xml` } : {}),
  };
}

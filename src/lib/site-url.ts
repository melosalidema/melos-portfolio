/**
 * Single canonical origin for metadata, sitemap and robots.
 * `NEXT_PUBLIC_SITE_URL` (set in Netlify env) wins; otherwise fall back to the
 * live domain so absolute URLs are always emitted (sitemaps require them).
 */
const FALLBACK = "https://melosalidema.netlify.app";

function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK).replace(/\/+$/, "");
  try {
    const url = new URL(raw);
    if (url.protocol === "http:" || url.protocol === "https:") return raw;
  } catch {
    // fall through to the error below
  }
  throw new Error(`NEXT_PUBLIC_SITE_URL must be an absolute URL, got "${raw}"`);
}

export const SITE_URL = resolveSiteUrl();

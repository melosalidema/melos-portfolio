import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Pin the workspace root: a stray lockfile above the repo otherwise confuses Turbopack.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;

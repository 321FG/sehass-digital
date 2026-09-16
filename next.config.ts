import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained server in .next/standalone for container/App Service deploys.
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // 🚨 Ignores all TypeScript errors during `next build`
  },
};

export default nextConfig;

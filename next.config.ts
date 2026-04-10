import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Render memory guard: avoid server-side image optimization (Sharp) on a small instance.
    // Assets are served directly as static files/CDN responses instead.
    unoptimized: true,
  },
};

export default nextConfig;
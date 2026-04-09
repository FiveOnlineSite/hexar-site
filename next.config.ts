import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Keep WebP only for faster first-request encoding than AVIF.
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;

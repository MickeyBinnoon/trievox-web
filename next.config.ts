import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    // Modern image formats for better compression
    formats: ["image/avif", "image/webp"],

    // Remote image domains (add as needed)
    remotePatterns: [
      // Example: Allow images from your CDN
      // {
      //   protocol: "https",
      //   hostname: "cdn.trievox.com",
      // },
    ],

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for next/image component
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Experimental features
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ["@radix-ui/react-icons"],
  },
};

export default nextConfig;

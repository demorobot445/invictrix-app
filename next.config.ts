import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "ap-south-1.graphassets.com" }],
  },
};

export default nextConfig;

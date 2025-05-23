/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Optionally ignore ESLint errors during builds
  },
};

module.exports = nextConfig;

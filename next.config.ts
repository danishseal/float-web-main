import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/Market", destination: "/market" }];
  },
  async redirects() {
    return [
      { source: "/top100", destination: "/top200", permanent: true },
      { source: "/Top-100", destination: "/top200", permanent: true },
    ];
  },
};

export default nextConfig;

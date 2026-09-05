import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/Market", destination: "/market" },
      { source: "/top100", destination: "/Top-100" },
    ];
  },
};

export default nextConfig;

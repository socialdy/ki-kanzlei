import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.ibb.co" },
      { hostname: "ibb.co" },
      { hostname: "ki-kanzlei.at" },
    ],
  },
};

export default nextConfig;

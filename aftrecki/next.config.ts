import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/2024",
        destination: "/2024/index.html",
      },
    ];
  },
};

export default nextConfig;

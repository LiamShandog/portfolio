import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't pick up an unrelated
  // lockfile in a parent directory (e.g. C:\Users\liams\package-lock.json).
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

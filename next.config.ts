import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "192.168.1.10",
    "local-origin.dev",
    "*.local-origin.dev",
  ],
};

export default nextConfig;

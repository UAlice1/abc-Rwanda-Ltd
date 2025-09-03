/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      root: "./my-app", // 👈 change this if your real project root is inside my-app
    },
  },
};

module.exports = nextConfig;

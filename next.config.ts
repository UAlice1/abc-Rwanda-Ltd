/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      root: "./my-app", 
      // 👈 keep this if your real project root is inside my-app
    },
  },
  images: {
    domains: ['images.unsplash.com'], // 👈 moved out of experimental
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true ,
    domains: ["http://localhost:3000"],
    minimumCacheTTL: 31536000
  },
};

module.exports = nextConfig;

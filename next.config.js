/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["cdn-images-1.medium.com","medium.com"," https://cdn-images-1.medium.com"],
  },
};

module.exports = nextConfig;

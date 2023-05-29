/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { runtime: 'edge'}, 
  images: {
    domains : ['https://static-dev.shopcar.com.br'],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://static-dev.shopcar.com.br',
      },
    ],
  },


 };

module.exports = nextConfig

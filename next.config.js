/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  images: {
    domains: ["ibb.co", "i.ibb.co", "cdn.shopify.com"]
  },
}

module.exports = nextConfig

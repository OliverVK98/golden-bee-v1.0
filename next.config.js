/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["ibb.co", "i.ibb.co", "cdn.shopify.com"]
  }
}

module.exports = nextConfig

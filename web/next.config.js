/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");
const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_APP_URL,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
}

module.exports = nextConfig

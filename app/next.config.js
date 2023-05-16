/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate-plugin");
const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  },
}

module.exports = nextConfig

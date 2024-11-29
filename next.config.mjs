/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/mywebcards' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/mywebcards' : '',
  }
  
  module.exports = nextConfig
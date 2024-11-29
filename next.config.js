/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/mywebcards',
    assetPrefix: '/mywebcards',
    trailingSlash: true,
}

module.exports = nextConfig 
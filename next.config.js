// /** @type {import('next').NextConfig} */
// const nextConfig = {}
//
// module.exports = nextConfig


// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const nextConfig  = {
    output: 'export',
    assetPrefix: isProd ? '/nicolas/' : '',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
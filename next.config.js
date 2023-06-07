// https://github.com/gregrickaby/nextjs-github-pages

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    output: 'export',
    basePath: '/nicolas',
    experimental: {
        appDir: true,
    },
}

module.exports = nextConfig

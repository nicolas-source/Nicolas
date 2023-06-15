// https://github.com/gregrickaby/nextjs-github-pages
// nextConfig = {} for local dev

/**
 * @type {import('next').NextConfig}
 **/
// const nextConfig = {
//     output: 'export',
//     basePath: '/nicolas',
//     experimental: {
//         appDir: true,
//     },
// }

const repo = "nicolas";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
    trailingSlash: true,

    output: "export",
    basePath: basePath,
    assetPrefix: assetPrefix,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig

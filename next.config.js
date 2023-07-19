// https://github.com/gregrickaby/nextjs-github-pages


/**
 * @type {import('next').NextConfig}
 **/

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
// nextConfig = {} for local dev
module.exports = nextConfig

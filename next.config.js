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
module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */
// const nextConfig = {
//     // output: 'export',
//     // Optional: Add a trailing slash to all paths `/about` -> `/about/`
//     // trailingSlash: true,
//     // Optional: Change the output directory `out` -> `dist`
//     // distDir: 'dist',
// }

module.exports = nextConfig
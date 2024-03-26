const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // any configs you need
  distDir: './out',
  output: "export",
  basePath: "/carlos-michael-dot-com",
  images: {
    unoptimized: true,
  }
};


module.exports = withNextra(nextConfig);

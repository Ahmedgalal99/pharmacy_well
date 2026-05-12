/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // distDir: "build",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wellmedic2.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fra1.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  i18n: {
    locales: ["en", "rs"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;

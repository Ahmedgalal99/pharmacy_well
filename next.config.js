/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // distDir: "build",

  images: {
    domains: [
      "wellmedic2.s3.amazonaws.com",
      "inews.fra1.digitaloceanspaces.com",
      "fra1.digitaloceanspaces.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wellmedic2.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "inews.fra1.digitaloceanspaces.com",
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

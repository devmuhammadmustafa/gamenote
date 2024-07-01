/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: ["cdn.gamenotebaku.az"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/notebooks",
  //       destination: "/products?category=106",
  //     },
  //     {
  //       source: "/accesories",
  //       destination: "/products?category=115",
  //     },
  //     {
  //       source: "/monitors",
  //       destination: "/products?category=148",
  //     },
  //   ];
  // },
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

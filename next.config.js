const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "lib", "embed", "styles"),
    ],
    prependData: `$baseUrl: '${
      process.env.NODE_ENV === "production"
        ? "https://vlki.github.io/paq-ukrajina-mapy"
        : ""
    }';`,
  },

  assetPrefix: isProduction ? "/paq-ukrajina-mapy/" : "",
};

module.exports = nextConfig;

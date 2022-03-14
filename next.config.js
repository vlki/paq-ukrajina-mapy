const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [
      path.join(__dirname, "src", "pages_styles"),
      path.join(__dirname, "src", "embed", "styles"),
      path.join(__dirname, "src", "layout", "styles"),
    ],
    prependData: `$baseUrl: '${
      process.env.NODE_ENV === "production"
        ? "https://vlki.github.io/paq-ukrajina-mapy"
        : ""
    }';`,
  },

  basePath: isProduction ? "/paq-ukrajina-mapy" : "/",
  assetPrefix: isProduction ? "/paq-ukrajina-mapy/" : "",
};

module.exports = nextConfig;

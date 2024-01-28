/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },

  experimental: {
    serverActions: true,
  },

  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.(mp4|webm)$/,
  //     use: {
  //       loader: "file-loader",
  //       options: {
  //         publicPath: "/_next",
  //         outputPath: "static/media",
  //         name: "[name].[hash].[ext]",
  //       },
  //     },
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;

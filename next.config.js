module.exports = {
  //trailingSlash je neophodan kao u react _redirect
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
// process.env.NODE_ENV === 'production' || 'custom'

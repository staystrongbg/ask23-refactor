module.exports = {
  sswebpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    unoptimized: true,
  },
};
// process.env.NODE_ENV === 'production' || 'custom'

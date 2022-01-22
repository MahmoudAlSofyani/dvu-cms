module.exports = {
  images: {
    domains: ["picsum.photos"],
  },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
};

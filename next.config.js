module.exports = {
  images: {
    domains: ["picsum.photos", "localhost"],
  },
  webpack: (config) => {
    config.experiments = { topLevelAwait: true };
    return config;
  },
};

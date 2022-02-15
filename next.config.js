module.exports = {
  images: {
    domains: ["picsum.photos", "localhost"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

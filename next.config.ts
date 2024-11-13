const nextConfig = {
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
  },
  images: {
    domains: ['fastly.picsum.photos', 'example.com', 'anotherdomain.com', 'yetanotherdomain.com'],
  },
  experimental: {
    after: true,
  },
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;

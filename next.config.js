/** @type {import('next').NextConfig} */
const { withGluestackUI } = require('@gluestack/ui-next-adapter');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
    domains: ['miro.medium.com', 'static-00.iconduck.com', 'res.cloudinary.com'],
  },
};

module.exports = {
  // Your Next.js configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty', // This is to prevent an error with @fortawesome packages
      };
    }

    return config;
  },
};

module.exports = withGluestackUI(nextConfig);

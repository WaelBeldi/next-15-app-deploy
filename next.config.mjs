/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['www.sbsinformatique.com'],
    remotePatterns: [
      {
        hostname: 'www.sbsinformatique.com'
      },
    ],
  },
};

export default nextConfig;

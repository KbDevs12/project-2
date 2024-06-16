/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "global.ac.id",
      },
      {
        hostname: "i0.wp.com",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/projects/web",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

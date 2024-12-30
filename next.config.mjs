/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dzjg7lvewk7ln.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

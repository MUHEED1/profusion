/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "blog.polycolor.ch",
            // port: "",
            // pathname: "/account123/**",
          },
        ],
      },
};

export default nextConfig;

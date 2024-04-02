/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.scdn.co"],
    unoptimized: true,
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
};

export default nextConfig;

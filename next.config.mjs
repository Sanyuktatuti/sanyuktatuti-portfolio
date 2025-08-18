/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com', 'github.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  transpilePackages: ['react-vertical-timeline-component'],
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Static export configuration
  output: 'export',
  // Disable server-side features when exporting
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
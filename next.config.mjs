/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable image optimization globally
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
  // Enable static exports for Netlify
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com', 'github.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    unoptimized: process.env.NETLIFY === 'true', // Disable image optimization on Netlify
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
  output: 'export',
};

export default nextConfig;
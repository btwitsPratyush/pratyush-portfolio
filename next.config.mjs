/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
  },
  // Removed all Three.js/R3F specific transpilePackages and webpack configs
}

export default nextConfig

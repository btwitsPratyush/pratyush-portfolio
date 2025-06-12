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
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
}

export default nextConfig

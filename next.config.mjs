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
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', '@react-spring/three'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Explicitly prevent Three.js and related libraries from being bundled on the server
      config.resolve.alias = {
        ...config.resolve.alias,
        'three': false,
        '@react-three/fiber': false,
        '@react-three/drei': false,
        '@react-spring/three': false,
      };
    }
    return config;
  },
}

export default nextConfig

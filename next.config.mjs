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
      // Exclude Three.js and related libraries from the server bundle
      config.externals.push(
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        '@react-spring/three'
      );
    }
    return config;
  },
}

export default nextConfig

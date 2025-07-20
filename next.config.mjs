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
  // Ensure these packages are transpiled if they contain modern JS features
  // that older Node.js versions in the build environment might not support.
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', '@react-spring/three'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // 1. Mark these modules as external to prevent them from being bundled on the server.
      // This tells Webpack that these modules will be available at runtime (on the client).
      config.externals.push(
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        '@react-spring/three'
      );

      // 2. Explicitly alias these modules to `false` for server builds.
      // This is a more aggressive way to tell Webpack to completely ignore
      // any imports of these modules when building for the server,
      // preventing any accidental server-side evaluation.
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

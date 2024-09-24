/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizeCss: true, // Enable CSS optimization
    },
    compiler: {
        styledComponents: true,
      },
    output: 'export',
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 768, 1024, 1280, 1600], // Responsive image sizes
        imageSizes: [16, 32, 48, 64, 96], // Sizes for next/image
    },
    webpack: (config) => {
        // Additional optimizations can be added here
        config.optimization.splitChunks = {
          chunks: 'all',
          maxSize: 200000, // Split large chunks for smaller bundles
        };
        return config;
      },
    };
    
    export default nextConfig;
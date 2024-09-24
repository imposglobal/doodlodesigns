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
        formats: ['image/avif', 'image/webp']
    }
};

export default nextConfig;

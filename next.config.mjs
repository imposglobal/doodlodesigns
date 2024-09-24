/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        formats: ['image/avif', 'image/webp'], // Keep image optimization formats
        domains: ['https://doodlodesigns.com'], // Optional: Define allowed domains for external images
    }
};

export default nextConfig;

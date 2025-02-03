/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        optimizeCss: true, // Enable CSS optimization
    },
  
    output: 'export',
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 768, 1024, 1280, 1600], // Responsive image sizes
        imageSizes: [16, 32, 48, 64, 96], // Sizes for next/image
    },

     // Add the redirects configuration here
  async redirects() {
    return [
      {
        source: '/the-top-10-google-fonts-for-websites',  // Old URL
        destination: '/blog/the-top-10-google-fonts-for-websites',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/what-is-branding-how-to-take-advantage-of-the-potential-branding',  // Old URL
        destination: '/blog/what-is-branding-how-to-take-advantage-of-the-potential-branding',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/the-story-behind-the-doodlo-design',  // Old URL
        destination: '/blog/the-story-behind-the-doodlo-design',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/portfolio/al-hidayaha-academy/',  // Old URL
        destination: '/portfolio/alhidaya/',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/blog/our-story',  // Old URL
        destination: '/our-story',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/blog/faqs',  // Old URL
        destination: '/faqs',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/10-important-steps-to-successful-social-media-branding',  // Old URL
        destination: '/blog/10-important-steps-to-successful-social-media-branding',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/websites-that-tell-your-story-combining-design-and-function',  // Old URL
        destination: '/blog/websites-that-tell-your-story-combining-design-and-function',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/blogs',  // Old URL
        destination: '/blog',  // New URL
        permanent: true,  // Permanent redirect (301)
      },


      {
        source: '/importance-of-branding-for-small-businesses/',  // Old URL
        destination: '/blog/the-importance-of-branding-for-small-businesses-a-design-agencys-perspective/',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/services/doodle',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/category/branding',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',  // Old URL
        destination: '/blog/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',  // New URL
        permanent: true,  // Permanent redirect (301)
      },


      {
        source: '/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',  // Old URL
        destination: '/blog/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',  // New URL
        permanent: true,  // Permanent redirect (301)
      },


      {
        source: '/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',  // Old URL
        destination: '/blog/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',  // New URL
        permanent: true,  // Permanent redirect (301)
      },


      {
        source: '/how-to-design-effective-packaging-for-your-brand/',  // Old URL
        destination: '/blog/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',  // New URL
        permanent: true,  // Permanent redirect (301)
      },


      {
        source: '/why-you-need-a-creative-design-studio',  // Old URL
        destination: '/blog/why-you-need-a-creative-design-studio',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/portfolio/our-story',  // Old URL
        destination: '/our-story',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/portfolio/faqs',  // Old URL
        destination: '/faqs',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/services/design',  // Old URL
        destination: '/services',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/swiggy-portfolio',  // Old URL
        destination: '/portfolio/swiggy-x-the-bowl-company',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/portfolio/click-rnd',  // Old URL
        destination: '/portfolio/clickrnd',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/swiggy-x-the-bowl-company-portfolio',  // Old URL
        destination: '/portfolio/swiggy-x-the-bowl-company',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/storytelling-work-well-for-brands-and-marketing/feed',  // Old URL
        destination: '/blog/how-does-storytelling-work-well-for-brands-and-marketing',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/elementor-hf/coffee-table-book',  // Old URL
        destination: '/portfolio/coffee-table-book',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/elementor-hf/1205',  // Old URL
        destination: 'https://doodlodesigns.com/',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2023/01/',  // Old URL
        destination: 'https://doodlodesigns.com/',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2023/01s',  // Old URL
        destination: 'https://doodlodesigns.com/',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2023/03',  // Old URL
        destination: 'https://doodlodesigns.com/',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2022/07',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2023/05',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/lp',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2022/10',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/contact',  // Old URL
        destination: '/reach-us',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/coffee-table-book',  // Old URL
        destination: '/portfolio/coffee-table-book',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2022/09',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2023/08',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/contact',  // Old URL
        destination: '/reach-us',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2023/04',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/2023/06',  // Old URL
        destination: 'https://doodlodesigns.com',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

      {
        source: '/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship',  // Old URL
        destination: '/blog/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship',  // New URL
        permanent: true,  // Permanent redirect (301)
      },

    ]
  },
  // end of redirection
    
    };
    
    export default nextConfig;
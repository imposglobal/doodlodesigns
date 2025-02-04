'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {

    const router = useRouter();

  useEffect(() => {
    // Ensure the code runs only on the client side
    if (typeof window !== 'undefined') {
      // Define your redirects
      const redirects = {
        '/swiggy-x-the-bowl-company-portfolio': '/portfolio/swiggy-x-the-bowl-company',
        '/portfolio/click-rnd': '/portfolio/clickrnd',
        '/the-top-10-google-fonts-for-websites': '/blog/the-top-10-google-fonts-for-websites',
        '/what-is-branding-how-to-take-advantage-of-the-potential-branding': '/blog/what-is-branding-how-to-take-advantage-of-the-potential-branding',
        '/the-story-behind-the-doodlo-design': '/blog/the-story-behind-the-doodlo-design',
        '/portfolio/al-hidayaha-academy/': '/portfolio/alhidaya/',
        '/10-important-steps-to-successful-social-media-branding': '/blog/10-important-steps-to-successful-social-media-branding',
        '/websites-that-tell-your-story-combining-design-and-function': '/blog/websites-that-tell-your-story-combining-design-and-function',
        '/blogs': '/blog',
        '/importance-of-branding-for-small-businesses/': '/blog/the-importance-of-branding-for-small-businesses-a-design-agencys-perspective/',
        '/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game': '/blog/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',
        '/how-to-design-effective-packaging-for-your-brand/': '/blog/how-to-design-effective-packaging-for-your-brand',
        '/why-you-need-a-creative-design-studio': '/blog/why-you-need-a-creative-design-studio',
        '/storytelling-work-well-for-brands-and-marketing/feed': '/blog/how-does-storytelling-work-well-for-brands-and-marketing',
        '/category/branding': '/',
        '/lead-generation/': '/',
        '/services/doodle': '/',
        '/portfolio/our-story': '/our-story',
        '/portfolio/faqs': '/faqs',
        '/services/design': '/services',
        '/swiggy-portfolio': '/portfolio/swiggy-x-the-bowl-company',
        '/services/design': '/services',
        '/elementor-hf/coffee-table-book': '/portfolio/coffee-table-book',
        '/elementor-hf/1205': '/',
        '/2023/01': '/',
        '/2023/01s': '/',
        '/2023/03': '/',
        '/2022/07': '/',
        '/2023/05': '/',
        '/lp': '/',
        '/contact': '/reach-us',
        '/2022/10': '/',
        '/coffee-table-book': '/portfolio/coffee-table-book',
        '/2022/09': '/',
        '/2023/08': '/',
        '/2023/04': '/',
        '/2023/06': '/',
        '/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship': '/blog/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship',
       
      };
      // window.location.pathname gets the current path after the domain name
      const currentPath = window.location.pathname;  
      if (redirects[currentPath]) {
        // Redirect to the new URL if the old URL is matched
        router.push(redirects[currentPath]);
      }
   
      // if (redirects[currentPath]) {
      //   // Set a timer for the redirect (e.g., 1 seconds delay)
      //   setTimeout(() => {
      //     // Redirect after 1 seconds
      //     router.push(redirects[currentPath]);
      //   }, 1000);  // 1000 ms = 1 seconds
      // }
    }
  }, [router]);

  return null; // Since we're handling redirects, there's no need to render anything

};

export default NotFound;
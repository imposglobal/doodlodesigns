'use client';
import { useRouter } from 'next/navigation';
import {useState, useEffect} from 'react';
import styles from "./notfound.module.css";
import Menu from "@/app/Component/Menu";
import Logo from "@/app/Images/logo";
import Link from "next/link"
import Image from "next/image";


const NotFound = () => {
   const [inactive, setInactive] = useState(true); // Set initial state to true
        
        const toggleClass = () => {
            setInactive(!inactive);
         };
    const router = useRouter();
   

  useEffect(() => {
    // Ensure the code runs only on the client side
    if (typeof window !== 'undefined') {
      // Define your redirects
      const redirects = {
        '/the-top-10-google-fonts-for-websites/': '/blog/the-top-10-google-fonts-for-websites',
        '/the-top-10-google-fonts-for-websites': '/blog/the-top-10-google-fonts-for-websites',

        '/what-is-branding-how-to-take-advantage-of-the-potential-branding/': '/blog/what-is-branding-how-to-take-advantage-of-the-potential-branding',
        '/what-is-branding-how-to-take-advantage-of-the-potential-branding': '/blog/what-is-branding-how-to-take-advantage-of-the-potential-branding',

        '/the-story-behind-the-doodlo-design/': '/blog/the-story-behind-the-doodlo-design',
        '/the-story-behind-the-doodlo-design': '/blog/the-story-behind-the-doodlo-design',

        '/storytelling-work-well-for-brands-and-marketing/': '/blog/how-does-storytelling-work-well-for-brands-and-marketing',
        '/storytelling-work-well-for-brands-and-marketing': '/blog/how-does-storytelling-work-well-for-brands-and-marketing/',

        '/portfolio/al-hidayaha-academy/': '/portfolio/alhidaya',
        '/portfolio/al-hidayaha-academy': '/portfolio/alhidaya',

        '/10-important-steps-to-successful-social-media-branding/': '/blog/10-important-steps-to-successful-social-media-branding',
        '/10-important-steps-to-successful-social-media-branding': '/blog/10-important-steps-to-successful-social-media-branding',

        '/top-10-packaging-design-mistakes-to-avoid/': '/blog/top-10-packaging-design-mistakes-to-avoid',
        '/top-10-packaging-design-mistakes-to-avoid': '/blog/top-10-packaging-design-mistakes-to-avoid',

        '/websites-that-tell-your-story-combining-design-and-function/': '/blog/websites-that-tell-your-story-combining-design-and-function',
        '/websites-that-tell-your-story-combining-design-and-function': '/blog/websites-that-tell-your-story-combining-design-and-function',

        '/bringing-concepts-to-life-the-art-of-illustration-in-design-studios/': '/blog/from-idea-to-image-the-role-of-illustration-in-design-studios',
        '/bringing-concepts-to-life-the-art-of-illustration-in-design-studios': '/blog/from-idea-to-image-the-role-of-illustration-in-design-studios',

        '/importance-of-branding-for-small-businesses/': '/blog/what-is-branding-how-to-take-advantage-of-the-potential-branding',
        '/importance-of-branding-for-small-businesses': '/blog/what-is-branding-how-to-take-advantage-of-the-potential-branding',

        '/flash-card-illustration-and-packaging/': '/portfolio/flash-card-illustration-and-packaging',
        '/flash-card-illustration-and-packaging': '/portfolio/flash-card-illustration-and-packaging',

        '/the-top-10-google-fonts-for-websites/feed/': '/blog/the-top-10-google-fonts-for-websites',
        '/the-top-10-google-fonts-for-websites/feed': '/blog/the-top-10-google-fonts-for-websites',

        '/calls-to-action-the-game-changing-element-of-high-performing-campaigns/': '/blog',
        '/calls-to-action-the-game-changing-element-of-high-performing-campaigns': '/blog',

        '/portfolio/privacy-policy/': '/portfolio',
        '/portfolio/privacy-policy': '/portfolio',

        '/how-to-design-effective-packaging-for-your-brand/feed/': '/blog/how-to-design-effective-packaging-for-your-brand',
        '/how-to-design-effective-packaging-for-your-brand/feed': '/blog/how-to-design-effective-packaging-for-your-brand',

        '/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship/feed/': '/our-story',
        '/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship/feed': '/our-story',

        '/author/admin/': '/our-story',
        '/author/admin': '/our-story',

        '/lead-generation/': '/',
        '/lead-generation': '/',
        
        '/blogs/': '/blog',
        '/blogs': '/blog',

        '/portfolio/al-hidayah-academy/': '/portfolio/alhidaya',
        '/portfolio/al-hidayah-academy': '/portfolio/alhidaya',

        '/services/doodle/': '/',
        '/services/doodle': '/',

        '/category/branding/': '/',
        '/category/branding': '/',

        '/design-trends-to-watch-in-2023/': '/blog/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',
        '/design-trends-to-watch-in-2023': '/blog/design-trends-to-watch-in-2023-how-to-stay-ahead-of-the-game',

        '/how-to-design-effective-packaging-for-your-brand/': '/blog/how-to-design-effective-packaging-for-your-brand',
        '/how-to-design-effective-packaging-for-your-brand': '/blog/how-to-design-effective-packaging-for-your-brand',

        '/why-you-need-a-creative-design-studio/': '/blog/why-you-need-a-creative-design-studio',
        '/why-you-need-a-creative-design-studio': '/blog/why-you-need-a-creative-design-studio',

        '/portfolio/our-story/': '/our-story',
        '/portfolio/our-story': '/our-story',

        '/portfolio/faqs/': '/faqs',
        '/portfolio/faqs': '/faqs',

        '/services/design/': '/services',
        '/services/design': '/services',

        '/swiggy-portfolio/': '/portfolio/swiggy-x-the-bowl-company',
        '/swiggy-portfolio': '/portfolio/swiggy-x-the-bowl-company',
        
        '/portfolio/click-rnd/': '/portfolio/clickrnd',
        '/portfolio/click-rnd': '/portfolio/clickrnd',

        '/portfolio/case-study-click-rd-by-doodlo-designs/': '/portfolio/clickrnd',
        '/portfolio/case-study-click-rd-by-doodlo-designs': '/portfolio/clickrnd',

        '/swiggy-x-the-bowl-company-portfolio/': '/portfolio/swiggy-x-the-bowl-company',
        '/swiggy-x-the-bowl-company-portfolio': '/portfolio/swiggy-x-the-bowl-company',

        '/portfolio/swiggy-x-the-bowl-company-portfolio/': '/portfolio/swiggy-x-the-bowl-company',
        '/portfolio/swiggy-x-the-bowl-company-portfolio': '/portfolio/swiggy-x-the-bowl-company',

        '/storytelling-work-well-for-brands-and-marketing/feed/': '/blog/how-does-storytelling-work-well-for-brands-and-marketing',
        '/storytelling-work-well-for-brands-and-marketing/feed': '/blog/how-does-storytelling-work-well-for-brands-and-marketing',

        '/elementor-hf/coffee-table-book/': '/portfolio/coffee-table-book',
        '/elementor-hf/coffee-table-book': '/portfolio/coffee-table-book',

        '/elementor-hf/1205/': '/',
        '/elementor-hf/1205': '/',

        '/2023/01/': '/',
        '/2023/01': '/',

        '/2023/03/': '/',
        '/2023/03': '/',

        '/contact-1/': '/reach-us',
        '/contact-1': '/reach-us',

        '/2022/07/': '/',
        '/2022/07': '/',

        '/2023/05/': '/',
        '/2023/05': '/',
     
        '/lp/': '/',
        '/lp': '/',
        
        '/2022/10/': '/',
        '/2022/10': '/',

        '/contact/': '/reach-us',
        '/contact': '/reach-us',

        '/coffee-table-book/': '/portfolio/coffee-table-book',
        '/coffee-table-book': '/portfolio/coffee-table-book',

        '/2022/09/': '/',
        '/2022/09': '/',

        '/2023/08/': '/',
        '/2023/08': '/',

        '/2023/04/': '/',
        '/2023/04': '/',

        '/2023/06/': '/',
        '/2023/06': '/',

        '/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship/': '/blog/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship',
        '/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship': '/blog/a-story-of-successful-design-project-the-importance-of-a-strong-client-and-designer-relationship',      
      };
      // window.location.pathname gets the current path after the domain name
      const currentPath = window.location.pathname;  
      if (redirects[currentPath]) {
        // Redirect to the new URL if the old URL is matched
        router.push(redirects[currentPath]);
      }
      // else {
      //   // If the current path does not match any redirect, show 404 page
      //   router.push('/404');
      // }
   
      if (redirects[currentPath]) {
     // Set a timer for the redirect (e.g., 100 microseconds delay, but it will be at least 1 millisecond)
      setTimeout(() => {
      // Redirect after 1 second (1000 milliseconds)
      router.push(redirects[currentPath]);
     }, 1); // 1 millisecond is the smallest practical delay for this
      }
    }
  }, [router]);

  // return null; // Since we're handling redirects, there's no need to render anything
  
return(
  <div>
    <div id="wrapper">
      <div className={`menuwrap ${inactive ? 'inactive' : ''} doodbg`}>
        <div className="menusec">
          <div className="menurow">
            <div className="mcol1">
            <div className="menuitem">
              <Link href="/" className="mitem ">
                Home
              </Link>
             
            </div>

            <div className="menuitem">
              <Link href="/portfolio" className="mitem active">
                Portfolio
              </Link>
            </div>

            <div className="menuitem">
              <Link href="/services" className="mitem">
                Our Services
              </Link>
            </div>

            <div className="menuitem">
              <Link href="/our-story" className="mitem">
                Our Story
              </Link>
            </div>

            <div className="menuitem">
              <Link href="/reach-us" className="mitem">
                Reach us
              </Link>
            </div>

            <div className="menuitem">
              <Link href="/blog" className="mitem">
                Blogs
              </Link>
            </div>

            <div className="menuitem">
              <Link href="https://doodlocomics.com/" className="mitem">
                Shop
              </Link>
            </div>

            </div>
            <div className="mcol2">
              <div className="socialsec">
                <p className="gtt">Get in touch </p>
                <Link href="https://in.linkedin.com/company/doodlodesign">
                                    <Image
                                    className="msocial"
                                    src="/home/social/flinked.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    </Link>
                                    <Link href="https://www.instagram.com/doodlo_design/">
                                    <Image
                                    className="msocial"
                                    src="/home/social/finsta.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/13436743">
                                    <Image
                                    className="msocial"
                                    src="/home/social/ffb.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mcopy">
        <p>© 2025 Doodlo | All Rights Reserved | <Link href="/terms-of-use" className="lcopy">Terms of Use</Link> |<Link href="/privacy-policy" className="lcopy"> Privacy Policy </Link> </p>
        </div>
      </div>
    </div>
    {/* Menu end */}

        <div className={`${styles.row} ${styles.mobrow}`}>
        <div className={styles.column1}>
            <div className={`${styles.logosec} ${styles.mlsec}`}>
            <Logo />
            </div>
        </div>
        <div className={styles.column2}>
            <div className={styles.logosec}>
            <Menu className={styles.menuicon} onClick={toggleClass} />
            </div>
        </div>
        </div>
        {/* end */}
  <div className={styles.custom}>
      <h2 className={styles.whtitle}>Whoops!</h2>
      <h4 className={styles.whdesc}>Looks like you've reached a page that doesn't exist.</h4> 
      <a className={styles.whbtn} href="/">Back to Home</a>
  </div>
  </div>
);


};

export default NotFound;
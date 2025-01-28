"use client";
import Link from "next/link";
import Accordion from "../Component/Faq/Accordion";
import Menu from "../Component/Menu";
import Logo from "../Images/logo";
import styles from "./page.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import {useState, useEffect} from 'react';

const Faqs = () => {

  useEffect(() => {
    document.title = "Doodlo Designs – Everything You Need to Know About Design Services";

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Discover Doodlo Design’s FAQs and our full range of creative services, including web design, branding, packaging, illustrations, & digital marketing."
      );
    }

    // Update the meta keywords dynamically
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute("content", "");
    }

    const metaTitleTag = document.querySelector('meta[name="title"]');
    if (metaTitleTag) {
      metaTitleTag.setAttribute("content", "Doodlo Designs – Everything You Need to Know About Design Services");
    }
  }, []);

    useEffect(() =>{
        AOS.init({
          duration: 1000, // Customize the duration of the animations
          once: false,     // Whether animation should happen only once - while scrolling down
        });
      }, []);
   
    const [inactive, setInactive] = useState(true); // Set initial state to true
  
    const toggleClass = () => {
      setInactive(!inactive);
    };
  
    
   
    return(
        <section>
                   {/* Menu start */}
                   <div id="wrapper">
      <div className={`menuwrap ${inactive ? 'inactive' : ''} doodbg`}>
        <div className="menusec">
          <div className="menurow">
            <div className="mcol1">
            <div className="menuitem">
              <Link href="/" className="mitem">
                Home
              </Link>
              
            </div>

            <div className="menuitem">
              <Link href="/portfolio" className="mitem">
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
        <p>© 2024 Doodlo | All Rights Reserved | Terms of Use | Privacy Policy</p>
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

            <div className={styles.faqsec}>
            {/* <h2 data-aos="fade-up" className={styles.text_stroke_hover}>Everything you </h2>
            <h2 data-aos="fade-up" className={styles.text_title}>need to know </h2> */}

            <h1 data-aos="fade-up" className={styles.text_stroke_hover}>Everything you <br></br><span data-aos="fade-up" className={styles.text_title}>need to know</span></h1>
            </div>
            <Accordion />
        </section>
    );
};
export default Faqs;
"use client";
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/public/bricks.json'; 
import Link from "next/link"
import Image from "next/image";
import styles from "./blackb.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";

const Blackb = () => {

    useEffect(() => {
        document.title = "Black B Finance - Doodlo Designs Studio";
      }, []);

    //   lottie Controls
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
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
              <div className="border-bottom"></div>
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
        {/* Menu End */}
        {/* main Content */}
        <div className={styles.blackb}>
        <Image src="/home/portfolios/blackb/blackb.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
        </div>
        <div className={styles.about}>
            <div className={styles.row}>
                <div className={styles.col1}>
                    <Image src="/home/portfolios/blackb/blackb2.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
                </div>
                <div className={styles.col1}>
                    <div className={styles.content}>
                        <h3 className={styles.atitle}>About </h3>
                        <p className={styles.adesc}>
                        We had the pleasure of working with Black B Financial Services to create a sleek, user-friendly website. Our goal was to design a site that reflected their professionalism while ensuring it was easy for users to navigate and access the financial services they offer.
                        </p>
                        <div className={styles.iconlist}>
                            <h3 className={styles.icontitle}>CHALLENGES</h3>
                            <p className={styles.icondesc}>
                            The main challenge was to create a sleek, professional look that communicated trust and expertise, while also being user-friendly.
                            </p>
                        </div>
                        <div className={styles.iconlist}>
                            <h3 className={styles.icontitle}>SOLUTIONS</h3>
                            <p className={styles.icondesc}>
                            We used a simple and clean UI design language, emphasizing easy navigation and clear, concise information, ensuring a seamless user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.about}>
            <div className={styles.row}>
            <div className={styles.col1}>
                    <div className={styles.content}>
                        <h3 className={`${styles.atitle} ${styles.mart}`}>Our Process </h3>
                        <div className={styles.iconlist}>
                            <h3 className={styles.icontitles}>Research & Discovery</h3>
                            <h3 className={styles.icontitles}>Sitemap & User Flow</h3>
                            <h3 className={styles.icontitles}>Ideation & Concepts</h3>
                            <h3 className={styles.icontitles}>Wireframe Design</h3>
                            <h3 className={styles.icontitles}>Moodboard</h3>
                            <h3 className={styles.icontitles}>Wireframe Design</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.col1}>
                    <Image src="/home/portfolios/blackb/blackb3.webp" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.divider}></div>
            </div>
            <div className={styles.colorpal}>
                <h3 className={styles.colorp}>Color Palette</h3>
                <Image src="/home/portfolios/blackb/birds.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            </div>
            <div className={styles.row}>
                <div className={styles.divider}></div>
            </div>
            <h3 className={styles.typef}>Typeface</h3>
            <div className={styles.row}>
            <Image className={styles.font1} src="/home/portfolios/blackb/Montserrat.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            <Image className={styles.font} src="/home/portfolios/blackb/Aa.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            <Image className={styles.font} src="/home/portfolios/blackb/Aa-1.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            </div>
            <div className={styles.row}>
                <div className={styles.divider}></div>
            </div>
            <h3 className={styles.typef}>UI Element</h3>
            <div className={styles.images}>
            <Image className={styles.imgs} src="/home/portfolios/blackb/img1.webp" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            <Image className={styles.imgs} src="/home/portfolios/blackb/img2.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            <Image className={styles.imgs} src="/home/portfolios/blackb/img3.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            <Image className={styles.imgs} src="/home/portfolios/blackb/img4.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            <Image className={styles.imgs} src="/home/portfolios/blackb/img5.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            <Image className={styles.imgs} src="/home/portfolios/blackb/img6.webp" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            <Image className={styles.imgs} src="/home/portfolios/blackb/img7.png" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
            <Image className={styles.imgs} src="/home/portfolios/blackb/img8.webp" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />

            </div>
        </div>
        <div className={styles.bimg}>
        <Image src="/home/portfolios/blackb/blackb4.webp" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
        </div>
        <div className={styles.bbvideo}>
        <VideoComponent videoSrc="/home/portfolios/blackb/blackbv.mp4" />
        </div>
        <div className={styles.bimg}>
        <Image src="/home/portfolios/blackb/blackb5.webp" alt="Next.js Logo" layout="responsive"  width={100} height={37} priority />
        </div>
        <div className={styles.thanky}>
          <p className={styles.msg}>
          Thanks for taking the time to check out our project for Black B Financial Services. We hope you enjoyed the tour and got a glimpse of how we bring simplicity and functionality together in web design. If you have any questions or need a custom website, feel free to reach out to us at Doodlo Design Studio!
          </p>
          <div className={styles.tmsg}>
          Thanks for watching!
          </div>
        </div>
        {/* Main End */}
        </div>
    );
}
export default Blackb;

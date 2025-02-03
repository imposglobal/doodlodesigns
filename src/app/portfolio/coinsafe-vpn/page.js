"use client";
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/public/bricks.json'; 
import Link from "next/link"
import Image from "next/image";
import styles from "./coinsafe.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";

const coinsafe = () => {

    useEffect(() => {
        document.title = "Coinsafe VPN | Website & App Design | Doodlo Design Studio";

        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
          descriptionTag.setAttribute(
            "content",
            "Check out Doodlo Design’s website and app design portfolio for Coinsafe VPN, featuring user-friendly interfaces and secure, innovative digital solutions."
          );
        }
    
        // Update the meta keywords dynamically
        const keywordsTag = document.querySelector('meta[name="keywords"]');
        if (keywordsTag) {
          keywordsTag.setAttribute("content", " ");
        }
    
        const metaTitleTag = document.querySelector('meta[name="title"]');
        if (metaTitleTag) {
          metaTitleTag.setAttribute("content", "Coinsafe VPN | Website & App Design | Doodlo Design Studio");
        }
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
        <div className={styles.video}>
        <VideoComponent videoSrc="/home/portfolios/coinsafe/Coinsafe-Logo-Reveal-1.mp4" />
        </div>
        <div className={styles.rowsec}>
            <div className={styles.col1}>
                <Image
                       
                        src="/home/portfolios/coinsafe/laptop.png"
                        alt="Next.js Logo"
                        layout="responsive"
                        width={100}
                        height={37}
                        priority
                   />
            </div>
            <div className={styles.col2}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                    Coinsafe VPN - 
                    Innovative Website & App Design by Doodlo Design
                    </h1>
                    <p className={styles.desc}>
                    Collaborating with Coinsafe VPN, a leading provider of cybersecurity solutions, to craft a brand identity and website that truly reflect their commitment to security and innovation.


                    </p>
                </div>
            </div>
        </div>
        <div className={styles.rowsecs}>
            <div className={styles.col2}>
            <h3 className={styles.title}>
            Branding:
                    </h3>
                <div className={styles.branding}>
                <Image
                       
                       src="/home/portfolios/coinsafe/equal.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
            </div>
            </div>
            <div className={styles.coinsafe}>
                <Image
                       
                       src="/home/portfolios/coinsafe/coinsafe.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
            <div className={styles.typo}>
                <Image
                       
                       src="/home/portfolios/coinsafe/typo.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
            <div className={styles.rowcb}>
                <div className={styles.colb1}>
                    <Image
                       src="/home/portfolios/coinsafe/black.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
                <div className={styles.colb2}>
                <Image
                       src="/home/portfolios/coinsafe/color.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
            </div>
            <div className={styles.rowimgs}>
                <div className={styles.columns1}>
                    <div className={styles.row}>
                        <div className={styles.col1}>
                    <Image
                       src="/home/portfolios/coinsafe/1.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                        </div>
                        <div className={styles.col2}>
                        <Image
                       src="/home/portfolios/coinsafe/2.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                        </div>
                    </div>
                    <div className={styles.row}>
                    <Image
                       src="/home/portfolios/coinsafe/3.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                    </div>
                </div>
                <div className={styles.columns2}>
                <Image
                       className={styles.fimg}
                       src="/home/portfolios/coinsafe/4.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
            </div>
            <div className={styles.lottiesec}>
            <Lottie options={defaultOptions}  />
            </div>
            <div className={styles.rowsecw}>
            <div className={styles.col2}>
            <h3 className={styles.title}>
            Website Design:
                    </h3>
                <div className={styles.webdesign}>
                <Image
                       
                       src="/home/portfolios/coinsafe/websdesign.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                  <div className={styles.webdesc}>
                  For their website, we aimed to create an intuitive and user-friendly experience that reflects Coinsafe VPN’s values while showcasing their services effectively. Our team meticulously designed and developed each element, from the sleek layout to the engaging content, ensuring a seamless browsing experience for visitors.
                  </div>
                </div>
            </div>
            </div>
        <div className={styles.video2}>
        <VideoComponent videoSrc="/home/portfolios/coinsafe/video2.mp4" />
        </div>
        <div className={styles.desktop}>
                <Image
                       
                       src="/home/portfolios/coinsafe/desktop.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
            <div className={styles.video2}>
            <h3 className={styles.titles}>
            App:
                    </h3>
        <VideoComponent videoSrc="/home/portfolios/coinsafe/app.mp4" />
        </div>
        <div className={styles.approw}>
            <div className={styles.col1}>
            <Image
                      
                       src="/home/portfolios/coinsafe/app.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
            <div className={styles.col2}>
                <div className={styles.appcont}>
                    <p className={styles.appdesc}>
                    With a blend of captivating visuals, persuasive copy, and seamless functionality, the Coinsafe VPN website and app serve as powerful tools for engaging users and driving conversions.
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.thank}>
            <h3 className={styles.titleapp} style={{ textAlign: 'center' }}>
            Thanks for watching
                    </h3>
                    <div>
                    <Image 
                      
                       src="/home/portfolios/coinsafe/thank.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                    </div>
        </div>
        </div>
    );
}
export default coinsafe;

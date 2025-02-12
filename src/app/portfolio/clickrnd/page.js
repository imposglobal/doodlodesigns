"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./clickrnd.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";

const clickrnd = () => {

    useEffect(() => {
        document.title = "Click R&D Branding Case Study by Doodlo Designs";

        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
          descriptionTag.setAttribute(
            "content",
            "ClickRnd's innovative branding and web design, created by Doodlo Designs, offering a modern & responsive user experience for their digital presence."
          );
        }
    
        // Update the meta keywords dynamically
        const keywordsTag = document.querySelector('meta[name="keywords"]');
        if (keywordsTag) {
          keywordsTag.setAttribute("content", "Case Study Click R&D");
        }

        // Add the canonical tag 
       const canonicalTag = document.querySelector('link[rel="canonical"]');
       if (canonicalTag) {
       canonicalTag.setAttribute("href", "https://doodlodesigns.com/portfolio/clickrnd"); 
      } 
      }, []);

      const [inactive, setInactive] = useState(true); // Set initial state to true
      
      const toggleClass = () => {
          setInactive(!inactive);
        };
  return (
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
        {/* end */}
        
{/*****************************/}
        <div className={styles.spacing}>
               <div className='heroimgsec'>
               <Image
                src="/home/portfolios/clickrnd/clickrnd.webp"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
               </div>
               {/*****************************/}
               <div  className={styles.contentsec}>
                  <h1 className={styles.contentheading}>Challenge</h1>
                  <p className={styles.description}>The Tax Credit Expert company needed a complete branding and website redesign. Our challenge was to create a fresh, modern design that resonated with their target audience.</p>
                  <h2 className={styles.contentheading}>Solution</h2>
                  <p className={styles.description}>We conducted a comprehensive brand audit and worked closely with the client to develop a fresh, modern design that resonated with their target audience. Our team then built a responsive website with easy navigation and engaging visuals to showcase their expertise and services.</p>
               </div>
                {/*****************************/}
               <div className={styles.imagesec}>
               <Image
                src="/home/portfolios/clickrnd/image.webp"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
               </div>
        {/*****************************/}

        <div className={styles.videosec}>
        <VideoComponent  videoSrc="https://php.imposglobal.com/wp-content/uploads/2023/02/Untitled.mp4" autoPlay muted loop controls={false}/>
        </div>
          {/*****************************/}
               <div className={styles.lastsec}>
               <Image
                src="/home/portfolios/clickrnd/image1.webp"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
               </div>
        {/*****************************/}
    </div>
    </div>
  )
}

export default clickrnd
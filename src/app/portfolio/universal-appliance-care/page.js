"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./appliancecare.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';
import Slidercomponent from '@/app/Component/Slider/Slidercomponent';

const appliancecare = () => {
    useEffect(() => {
        document.title = "Portfolio - Doodlo Designs Studio";
      }, []);


      const images = [
        { src: "/home/portfolios/universal-appliance-care/slide1.webp", alt: "Slide 1", caption: "" },
        { src: "/home/portfolios/universal-appliance-care/slide2.webp", alt: "Slide 2", caption: "" },
        { src: "/home/portfolios/universal-appliance-care/slide3.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/universal-appliance-care/slide4.webp", alt: "Slide 3", caption: "" },
       
       
      ];

      
  const settings = {
    slidesPerView: 1, // Custom settings if needed
    spaceBetween: 20,
    autoplay: { delay: 5000 },
  };

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
              <div className={styles.heroimgsec}>
               <Image
                src="/home/portfolios/universal-appliance-care/hero.webp"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
               </div>
            {/*****************************/}
            <div className={styles.contentsec}>
                <p className={styles.description}>Universal Appliance Care is a brand we’ve been a part of since its inception, from the identity to the visual language to the website and marketing collateral. So we were very excited when it came to translating the brand into an amazing experience.</p>
                <p className={styles.description}>A globe or circle with a house in the centre with electric plug, representing the company’s global reach and expertise in appliance repair and maintenance. A combination of orange and green to convey dependability, trustworthiness, and environmental friendliness.</p>
            </div>
            {/*****************************/}
            <div className={styles.imagesec}>
               <Image
                src="/home/portfolios/universal-appliance-care/image1.webp"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
            </div>
            {/*****************************/}
            <div className={styles.rowsec}>
                <p className={styles.title}>Logo Design</p>
                <p className={styles.description}>We conjured up a captivating logo that encapsulates the essence of Universal Appliance Care’s expertise and reliability, casting a spell of trust upon their customers.</p>
            </div>
            {/*****************************/}
            <div className={styles.himgsec}>
               <Image
                src="/home/portfolios/universal-appliance-care/image2.webp"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
            </div>
            {/*****************************/}
            <div className={styles.rowsec}>
                <h3 className={styles.title}>Merchandising Magic</h3>
                <p className={styles.description}>From branded magnets that stick around to quirky keychains that unlock a world of appliance care, we created merchandise that adds a touch of personality to their customers’ everyday lives.</p>
            </div>
             {/*****************************/}
            <div className={styles.slider}>
            <Slidercomponent images={images} settings={settings} />
            </div>
             {/*****************************/}
             <div className={styles.websec}>
             <h3 className={styles.title}>Web Design Wonder</h3>
             <p className={styles.description}>Our web-slinging wizards spun a web of seamless functionality and eye-catching aesthetics with a website that showcases Universal Appliance Care’s services, ensuring they stay ahead in the digital realm.</p>
             </div>
             {/*****************************/}
             <div className={styles.carsec}>
               <Image
                src="/home/portfolios/universal-appliance-care/image3.webp"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
            </div>
             {/*****************************/}
             <div className={styles.carsec}>
               <Image
                src="/home/portfolios/universal-appliance-care/image5.webp"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
            </div>
            {/*****************************/}
            <div className={styles.repairsec}>
               <Image
                src="/home/portfolios/universal-appliance-care/image6.webp"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
            </div>
        </div>
    </div>
  )
}

export default appliancecare
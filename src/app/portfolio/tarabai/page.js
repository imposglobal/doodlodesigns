"use client";
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/public/bricks.json'; 
import Link from "next/link"
import Image from "next/image";
import styles from "./tarabai.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";
import Slidercomponent from '@/app/Component/Slider/Slidercomponent';

const Tarabai = () => {

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

         const images = [
        { src: "/home/portfolios/tarabai/slide1.webp", alt: "Slide 1", caption: "" },
        { src: "/home/portfolios/tarabai/slide2.webp", alt: "Slide 2", caption: "" },
        { src: "/home/portfolios/tarabai/slide3.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/tarabai/slide4.webp", alt: "Slide 4", caption: "" },
      ];
      const images_s = [
        { src: "/home/portfolios/tarabai/slider1.webp", alt: "Slide 1", caption: "" },
        { src: "/home/portfolios/tarabai/slider2.jpg", alt: "Slide 2", caption: "" },
        { src: "/home/portfolios/tarabai/slider3.webp", alt: "Slide 3", caption: "" },
      ];

      
  const settings = {
    slidesPerView: 1, // Custom settings if needed
    spaceBetween: 20,
    autoplay: { delay: 5000 },
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
        {/* Menu End */}
        {/* main Content */}
        <div className={styles.maincont}>
            <div>
                    <Image
                       src="/home/portfolios/tarabai/tarabai.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
            <div className={styles.talesec}>
                <h3 className={styles.talet}>
                The TaraBai Tale: Tradition to Trendsetting Collaboration
                </h3>
                <p className={styles.talep}>
                Discover our journey with TaraBai, a fashion clothing brand that seamlessly blends the vibrant essence of Rajasthan and Marwari culture with a contemporary twist. Our team at Doodlo Design Studio had the pleasure of working with TaraBai, bringing their vision to life.
                </p>

                <p className={styles.talep2}>
                We crafted a captivating Logo Design that reflects the brand’s essence and captures the essence of Rajasthan’s heritage. Additionally, we designed eye-catching Marketing Collaterals for their exhibitions, creating a buzz and leaving a lasting impression on attendees.
                </p>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                <Image
                       src="/home/portfolios/tarabai/tarabai1.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
                <div className={styles.col1}>
                <Image
                       src="/home/portfolios/tarabai/tarabai2.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
            </div>
            <div className={styles.slidert}>
                <Slidercomponent images={images} settings={settings} />
            </div>
            <div className={styles.talesec}>
                <p className={styles.talep}>
                Ensuring every detail is as exquisite as their clothing, we also created packaging that speaks volumes about the brand’s commitment to quality and style.
                </p>
            </div>
            <div className={styles.slidert}>
                <Slidercomponent images={images_s} settings={settings} />
            </div>
            <div className={styles.talesec}>
                <p className={styles.talep}>
                Join us on this cultural style odyssey as we showcase TaraBai’s journey from traditional roots to a fashion-forward future!
                </p>
                <div className={styles.thankyou}>
                <Image className={styles.thimg}
                       src="/home/portfolios/tarabai/thank.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
            </div>
        </div>
        {/* Main End */}
        </div>
    );
}
export default Tarabai;

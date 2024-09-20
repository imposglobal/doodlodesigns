"use client";
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/public/bricks.json'; 
import Link from "next/link"
import Image from "next/image";
import styles from "./nutibee.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";
import Slidercomponent from '@/app/Component/Slider/Slidercomponent';

const Nutribee = () => {

    useEffect(() => {
        document.title = "Nutribee - Doodlo Designs Studio";
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
        { src: "/home/portfolios/citibank/slide1.webp", alt: "Slide 1", caption: "" },
        { src: "/home/portfolios/citibank/slide2.webp", alt: "Slide 2", caption: "" },
        { src: "/home/portfolios/citibank/slide3.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/citibank/slide4.webp", alt: "Slide 4", caption: "" },
        { src: "/home/portfolios/citibank/slide5.webp", alt: "Slide 4", caption: "" },
      ];
      const images_s = [
        { src: "/home/portfolios/citibank/citi1.webp", alt: "Slide 1", caption: "" },
        { src: "/home/portfolios/citibank/citi2.webp", alt: "Slide 2", caption: "" },
      ];
      const images_ss = [
        { src: "/home/portfolios/citibank/work1.webp", alt: "Slide 1", caption: "" },
        { src: "/home/portfolios/citibank/work2.webp", alt: "Slide 2", caption: "" },
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
            <div className={styles.talesecs}>
            <h3 className={styles.talet}>
            Whole Wheat Rusk Packaging & Illustration
                </h3>
                <p className={styles.talep}>
                Design Problem: The packaging and illustration for the whole wheat rusk product are unappealing and fail to effectively communicate the product’s key features and benefits to potential customers. Additionally, the current design may not stand out on shelves compared to competing products.<br></br><br></br>

                Solution: Doodlo Design Studio can create a new packaging and illustration design for the whole wheat rusk product that better conveys its health benefits, such as being high in fiber and whole grains. The design should also be visually appealing and use color and imagery to catch the attention of potential customers. By creating a new design, Doodlo Design Studio can help the product stand out on shelves and attract more customers.
                </p>
            </div>
            <div className={styles.row}>
                <div className={styles.col1}>
                <Image
                                    src="/home/portfolios/nutribee/nutri1.webp"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                </div>
                <div className={styles.col1}>
                <Image
                                    src="/home/portfolios/nutribee/nutri2.webp"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                </div>
                
            </div>
            <div className={styles.nutri}>
            <Image
                                    src="/home/portfolios/nutribee/rusk.webp"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
            </div>
                
           <div className={styles.imagessec}>
           <Image
                       src="/home/portfolios/nutribee/thanku.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       className={styles.imgss}
                       width={100}
                       height={37}
                       priority
                  />
           </div>
            
        </div>
        {/* Main End */}
        </div>
    );
}
export default Nutribee;

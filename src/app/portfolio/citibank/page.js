"use client";
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/public/bricks.json'; 
import Link from "next/link"
import Image from "next/image";
import styles from "./citibank.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";
import Slidercomponent from '@/app/Component/Slider/Slidercomponent';

const CitiBank = () => {

    useEffect(() => {
        document.title = "Doodle Illustration Collaboration with Citi Bank - Doodlo Designs";

        if (descriptionTag) {
          descriptionTag.setAttribute(
            "content",
            "We are thrilled to present our recent Doodle Illustration collaboration with Citi Bank Mumbai BKC."
          );
        }
    
        // Update the meta keywords dynamically
        const keywordsTag = document.querySelector('meta[name="keywords"]');
        if (keywordsTag) {
          keywordsTag.setAttribute("content", "Doodle Illustration Collaboration");
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
            <div>
                    <Image
                       src="/home/portfolios/citibank/citibank.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
            <div className={styles.talesecs}>
                <h3 className={styles.talet}>
                Doodle Illustration Collaboration with Citi Bank Mumbai BKC
                </h3>
                <p className={styles.talep}>
                We are thrilled to present our recent collaboration with Citi Bank Mumbai BKC, where we brought together the power of doodle illustrations and the corporate world. Through this project, we aimed to infuse creativity, playfulness, and innovation into the corporate environment, bridging the gap between the traditional and the contemporary.
                </p>
            </div>
            <div className={styles.rowp}>
                <div className={styles.cols1}>
                <h3 className={styles.taletp}>
                Corporate Culture Doodles:
                </h3>   
                </div>
                <div className={styles.cols2}>
                <p className={styles.talep}>
                We are thrilled to present our recent collaboration with Citi Bank Mumbai BKC, where we brought together the power of doodle illustrations and the corporate world. Through this project, we aimed to infuse creativity, playfulness, and innovation into the corporate environment, bridging the gap between the traditional and the contemporary.
                </p>
                </div>
            </div>
            <div className={styles.slidert}>
                <Slidercomponent images={images} settings={settings} />
            </div>

            <div className={styles.slidert}>
                <Slidercomponent images={images_s} settings={settings} />
            </div>
            <div className={styles.rowp}>
                <div className={styles.cols1}>
                <h3 className={styles.taletp}>
                Internal Communication Materials:
                </h3>   
                </div>
                <div className={styles.cols2}>
                <p className={styles.talep}>
                To enhance internal communication, we developed doodle illustrations for various print and digital materials, such as newsletters, emailers, and presentations. These illustrations brought life to important messages, making them more engaging and memorable for the employees.
                </p>
                </div>
            </div>
            <div className={styles.slidert}>
                <Slidercomponent images={images_ss} settings={settings} />
            </div>
            <div className={styles.rowp}>
                <div className={styles.cols1}>
                <h3 className={styles.taletp}>
                Inspirational Wall Art:
                </h3>   
                </div>
                <div className={styles.cols2}>
                <p className={styles.talep}>
                Inspirational Wall Art: We designed captivating doodle illustrations that were transformed into large-scale wall art, adorning the office spaces. These pieces served as constant reminders of motivation, positivity, and creativity, fostering a productive and inspiring work environment.
                </p>
                </div>
            </div>
            <div className={styles.talesec}>
                <div className={styles.secc}>
                <Image 
                       src="/home/portfolios/citibank/last.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                   <Image className={styles.thimg}
                       src="/home/portfolios/citibank/thankyou.webp"
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
export default CitiBank;

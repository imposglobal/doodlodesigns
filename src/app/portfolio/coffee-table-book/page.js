"use client";
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/public/bricks.json'; 
import Link from "next/link"
import Image from "next/image";
import styles from "./wurth.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";
import Slidercomponent from '@/app/Component/Slider/Slidercomponent';

const Wurth = () => {

    useEffect(() => {
        document.title = "Wuerth India | Coffee Table Book Design | Doodlo Design Studio";
        const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Check out how Doodlo Design infused Indian culture into the German technology company, Wuerth, highlighting their 12-year journey, achievements, and growth."
      );
    }

    // Update the meta keywords dynamically
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute("content", "Best Collage artwork");
    }

    // Add the canonical tag 
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
    canonicalTag.setAttribute("href", "https://doodlodesigns.com/portfolio/coffee-table-book"); 
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
                       src="https://imagedelivery.net/QeqoqeJCeBWIeVC5sxQgpw/8585819a-fd4e-4841-1cbf-1100bfe64200/public"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
            <div className={styles.talesecs}>
            {/* <h3 className={styles.talet}>
                Wuerth Industries/ Celebrating 12 years Anniversary with a coffee Table Book
                </h3> */}
                <h1 className={styles.talet}>Celebrating 12 Years of Wuerth Industries - A Fusion of Indian Culture and German Technology</h1>
                <p className={styles.talep}>
                For the past 12 year of manufacturing unit establishment in Pune. This Coffee Table Book has remained dedicated to the growth and success for this Wuerth unit. Alleviating all areas of manufacture and enhancing their quality in industry. This limited edition coffee table book celebrates the organization 12th anniversary and their extra ordinary achievements that led to their success and become the leaders in market. 
                </p>
                <h2 className={styles.taleth}>The Challenge</h2>
                <p className={styles.talep}>To give a Indian touch to their German technology which encourage the upcoming years to work towards company goals.</p>
            </div>
            <Image
                       src="https://imagedelivery.net/QeqoqeJCeBWIeVC5sxQgpw/52bf7e2e-e50e-4c15-fc98-89ca7ac6d000/public"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />

                <Image
                       src="https://imagedelivery.net/QeqoqeJCeBWIeVC5sxQgpw/0d8212d9-beef-49f7-b257-168090db5500/public"
                       alt="Next.js Logo"
                       layout="responsive"
                       className={styles.imgss}
                       width={100}
                       height={37}
                       priority
                  />
                  <Image
                       src="https://imagedelivery.net/QeqoqeJCeBWIeVC5sxQgpw/9749893c-73d9-49c7-3347-9cb8a185d000/public"
                       alt="Next.js Logo"
                       layout="responsive"
                       className={styles.imgss}
                       width={100}
                       height={37}
                       priority
                  />
                   <Image
                       src="https://imagedelivery.net/QeqoqeJCeBWIeVC5sxQgpw/4becbff4-64a3-4d4c-8b6e-1056b4102a00/public"
                       alt="Next.js Logo"
                       layout="responsive"
                       className={styles.imgss}
                       width={100}
                       height={37}
                       priority
                  />
                  <Image
                       src="https://imagedelivery.net/QeqoqeJCeBWIeVC5sxQgpw/ac0f1388-bd3f-406b-7018-b7fe814f1f00/public"
                       alt="Next.js Logo"
                       layout="responsive"
                       className={styles.imgss}
                       width={100}
                       height={37}
                       priority
                  />

            <div className={styles.talesecs}>
                <p className={styles.talep}>
                <b>Results:</b><br></br>
                We have designed a coffee table book that celebrates their journey through the years of establishment. This book serves the purpose of celebrating their employee’s through and collage artwork as the back cover of the book.
                The Indian touch to the book showcasing form man made charkha to the hospitality of a hand gesture as Namaste led our path to the entire design of the book.
                </p>
            </div>    
            <Image
                       src="https://imagedelivery.net/QeqoqeJCeBWIeVC5sxQgpw/ec40751c-f39f-4bdb-782e-1bbf28b2bc00/public"
                       alt="Next.js Logo"
                       layout="responsive"
                       className={styles.imgss}
                       width={100}
                       height={37}
                       priority
                  />
            
        </div>
        {/* Main End */}
        </div>
    );
}
export default Wurth;

"use client";
import Link from "next/link"
import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../Images/logo";
import Menu from "../Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import BrandAnimated from "../Component/Brandlineanimation";
import WorkAnimationlr from "../Component/WorkAnimatedLR";
import ReachusAnimated from "../Component/ReachusAnimation";
import ContactForm from "../Component/ContactForm";

const Ourstory = () => {

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
                    <h1>Content</h1>
                </div>
                </div>
       
        <div className={styles.row}>
            <div className={styles.column1}>
                <div className={styles.logosec}>
                <Logo />
                </div>
            </div>
            <div className={styles.column2}>
                <div className={styles.logosec}>
                <Menu className={styles.menuicon} onClick={toggleClass} />
                </div>
            </div>
        </div>

        <div className={styles.contacthero}>
            <div className={styles.row}>
                <div className={styles.colcont1}>
                <h2 data-aos="fade-up" className={styles.text_stroke_hover}>GET</h2>
                <h2 data-aos="fade-up" className={styles.text_title}>in touch</h2>
                <Image data-aos="fade-up"
                                    className={styles.contimg}
                                    src="/home/contact-img.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                </div>
                <div className={styles.colcont2}>
                    <div className={styles.addsec}>
                        <div data-aos="fade-up" className={styles.row}>
                            <div className={styles.country}>
                            <Image data-aos="fade-up"
                                    className={styles.contimg}
                                    src="/home/india.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                            </div>
                            <div className={styles.coladd2}>
                                <h3 className={styles.ctitle}>IND</h3>
                                <p className={styles.cdesc}>911-914, Clover Hills Plaza, Pune, Maharashra 411048</p>
                                <p className={styles.cmob}>+91 9756374789</p>

                            </div>
                        </div>
                        <br/><br/> 
                        <div data-aos="fade-up" className={styles.row}>
                            <div className={styles.country}>
                            <Image data-aos="fade-up"
                                    className={styles.contimg}
                                    src="/home/uk.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                            </div>
                            <div className={styles.coladd2}>
                                <h3 className={styles.ctitle}>UK</h3>
                                <p className={styles.cdesc}>7 Bell Yard, London, England, WC2A 2JR</p>
                                <p className={styles.cmob}>+91 9756374789</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* contact hero end */}
        {/* section Reach Us animated */}
        <div className={styles.reachsec}>
        <div className={styles.wokeani}>
            <div>
                    <ReachusAnimated />
                </div>
            </div>

            <div className={styles.wokeanilr}>
                <div>
                <ReachusAnimated />
                </div>
            </div>
        </div>

         {/* contact form section */}
        <div data-aos="fade-up">
        <ContactForm  />
        </div>
    {/* contac Form End */}
    </div>
    );
};

export default Ourstory;
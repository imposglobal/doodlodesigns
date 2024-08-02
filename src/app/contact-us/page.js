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
                </div>
                <div className={styles.colcont2}></div>
            </div>
        </div>
    </div>
    );
};

export default Ourstory;
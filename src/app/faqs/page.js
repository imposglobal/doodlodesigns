"use client";
import Accordion from "../Component/Faq/Accordion";
import Menu from "../Component/Menu";
import Logo from "../Images/logo";
import styles from "./page.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';

const Faqs = () => {

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
        <section>
            <div id="wrapper">
                <div className={`menuwrap ${inactive ? 'inactive' : ''} doodbg`}>
                    <h1>Content</h1>
                </div>
                </div>
                <div className={styles.faqsecs}>
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
                </div>

            <div className={styles.faqsec}>
            <h2 data-aos="fade-up" className={styles.text_stroke_hover}>Everything you </h2>
            <h2 data-aos="fade-up" className={styles.text_title}>need to know </h2>
            </div>
            <Accordion />
        </section>
    );
};
export default Faqs;
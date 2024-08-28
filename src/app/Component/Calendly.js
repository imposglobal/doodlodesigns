"use client()";
import Image from "next/image";
import styles from './component.module.css';
import React, { useEffect } from 'react';

const Calendly = () => {
   
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
    return(
        <div className={styles.calendlysec}>
            <h2 data-aos="fade-up" className={styles.text_stroke_hoverc}>LETS TALK ABOUT  </h2>
            <h2 data-aos="fade-up" className={styles.text_titlec}>YOUR NEXT BIG PROJECT </h2>
            <h5 className="meeting">Schedule A Meeting</h5>
            <div className="calendly-inline-widget" data-url="https://calendly.com/doodlodesign/30min?hide_gdpr_banner=1" style={{ minWidth: 'auto', height: '700px' }}></div>

        </div>
    );
};

export default Calendly;
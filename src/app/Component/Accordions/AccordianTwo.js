"use client";
// components/WorkAnimated.js
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './accordion.module.css';
import AOS from 'aos';
import Image from "next/image";
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

const AccordianTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration of the animations
      once: false,    // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const paneltsRef = useRef([]);

  const initializeScrollTriggers = () => {
    // Clean up any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    paneltsRef.current.forEach((panelt, index) => {
      if (!panelt) return; // Skip if panelt is not yet available

      const content = panelt.querySelector('.content');

      // Set initial state
      gsap.set(content, { height: '0', opacity: 0, duration: 0.5 });

      // Create ScrollTrigger for each panelt
      ScrollTrigger.create({
        trigger: panelt,
        start: 'top 20%',
        end: 'top 40%', // Adjust this as needed
        onEnter: () => gsap.to(content, { height: '324px', opacity: 1, duration: 1 }),
        onLeaveBack: () => gsap.to(content, { height: '0', opacity: 0, duration: 1 }),
        markers: true, // Add markers for debugging
      });
    });

    // Refresh ScrollTrigger to account for dynamic content
    ScrollTrigger.refresh();
  };

  useLayoutEffect(() => {
    initializeScrollTriggers();
  }, [paneltsRef]);

  return (
    <div >
      {/* accordionstart */}
      <div className="panelt" ref={el => paneltsRef.current[1] = el}>
        <div data-aos="fade-up" className={styles.row}>
          <div className={styles.column1}>
            <h3 className={styles.sevices_heading}>Branding Experience</h3>
          </div>
          <div className={styles.column2}>
            <p className={styles.sevices_subheading}>Transform your brand with our expert touch. We craft memorable identities that resonate and captivate your audience.</p>
          </div>
        </div>
        <div className="content">
          <div data-aos="fade-up" className={styles.row}>
            <div className={styles.column1}>
              <p className={styles.service_list}>1. Research & Brand Strategy</p>
              <p className={styles.service_list}>2. Brand Guidelines</p>
              <p className={styles.service_list}>3. Brand Identity & Positioning</p>
              <p className={styles.service_list}>4. Naming & Domain</p>
              <div className={styles.nwmr}>
                <a className={styles.servies_know_more}>Know More</a>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.gridsec}>
                <div className={styles.grimg1}>
                  <Image
                    className={styles.grid_item_img}
                    src="/home/brandin1.jpg"
                    alt="Branding Image 1"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
                </div>
                <div className={styles.grid_container}>
                  <div className={styles.grid_item}>
                    <Image
                      className={`${styles.grid_item_img} ${styles.brimg2}`}
                      src="/home/branding2.jpg"
                      alt="Branding Image 2"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                    <Image
                      className={`${styles.grid_item_img} ${styles.brimg3}`}
                      src="/home/branding3.jpg"
                      alt="Branding Image 3"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                  </div>
                  <div className={styles.grid_item}>
                    <Image
                      className={`${styles.grid_item_img} ${styles.brimg4}`}
                      src="/home/branding4.jpg"
                      alt="Branding Image 4"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                    <Image
                      className={`${styles.grid_item_img} ${styles.brimg5}`}
                      src="/home/branding5.png"
                      alt="Branding Image 5"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                    <Image
                      className={`${styles.grid_item_img} ${styles.brimg6}`}
                      src="/home/branding6.jpg"
                      alt="Branding Image 6"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* accordionENd */}
    </div>
  );
};

export default AccordianTwo;

"use client";
import { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './accordion.module.css';
import AOS from 'aos';
import Image from "next/image";
import 'aos/dist/aos.css';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const AccordionOne = () => {
  const [activePanel, setActivePanel] = useState(null);
  const panelRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useLayoutEffect(() => {
    // Clean up any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const isMobile = window.innerWidth <= 768; // Define breakpoint for mobile

    panelRefs.current.forEach((panel, index) => {
      if (panel) {
        const content = panel.querySelector('.content');
        const height = isMobile ? 'auto' : '324px'; // Set height based on screen size

        // Set initial state for each panel
        gsap.set(content, { height: '0', opacity: 0, duration: 0.5 });

        // Create ScrollTrigger for each panel
        ScrollTrigger.create({
          trigger: panel,
          start: 'top 30%',
          end: 'top 60%',
          onEnter: () => {
            setActivePanel(index);
            gsap.to(content, { height, opacity: 1, duration: 0.5, ease: 'power2.out' });
            panel.classList.add(styles.active); // Add the active class
          },
          onLeaveBack: () => {
            if (activePanel === index) {
              setActivePanel(null);
              gsap.to(content, { height: '0', opacity: 0, duration: 0.5, ease: 'power2.out' });
              panel.classList.remove(styles.active); // Remove the active class
            }
          },
          markers: false,
        });
      }
    });

    // Refresh ScrollTrigger to account for dynamic content
    ScrollTrigger.refresh();
  }, [activePanel]);

  return (
    <div>
      {/* Accordion start */}
      <div className={`${"panel"} ${activePanel === 0 ? styles.open : ''}`} ref={el => (panelRefs.current[0] = el)}>
        <div className={styles.row}>
          <div className={styles.column1}>
            {/* <h3 className={`${styles.services_heading} ${styles.desktopv}`}>Branding Experience</h3>
            <h3 className={`${styles.services_heading} ${styles.mobilev}`}>Branding <br/>Experience  </h3> */}
            <h3 className={`${styles.services_heading}`}>Branding <br/> Experience</h3> 
          </div>
          <div className={`${styles.column2}`}>
           <div className={styles.arrsec}>
           <p className={styles.services_subheading}>
              Transform your brand with our expert touch. We craft memorable identities that resonate and captivate your audience.
            </p>
            <Image
                    className="arrowd"
                    src="/home/dwn.svg"
                    alt="Branding Image 1"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
           </div>
          </div>
        </div>
        <div className="content">
          <div className={styles.row}>
            <div className={styles.column1}>
              <p className={styles.service_list}>1. Research & Brand Strategy</p>
              <p className={styles.service_list}>2. Brand Guidelines</p>
              <p className={styles.service_list}>3. Brand Identity & Positioning</p>
              <p className={styles.service_list}>4. Naming & Domain</p>
              <div className={styles.nwmr}>
              <Link className="boton_elegante" href="/reach-us">
              KNOW MORE
              </Link>
              </div>
            </div>
            <div className={`${styles.column2}`}>
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
                      className={`${styles.grid_item_img} ${styles.brimg2} ${styles.desktopv}`}
                      src="/home/branding2.jpg"
                      alt="Branding Image 2"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                    <Image
                      className={`${styles.grid_item_img} ${styles.brimg3} ${styles.desktopv}`}
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
                      className={`${styles.grid_item_img} ${styles.brimg2} ${styles.mobilev}`}
                      src="/home/branding2.jpg"
                      alt="Branding Image 2"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                    <Image
                      className={`${styles.grid_item_img} ${styles.brimg3} ${styles.mobilev}`}
                      src="/home/branding3.jpg"
                      alt="Branding Image 3"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
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

      {/* Accordion start */}
      <div className={`${"panel"} ${activePanel === 0 ? styles.open : ''}`} ref={el => (panelRefs.current[1] = el)}>
        <div className={styles.row}>
          <div className={styles.column1}>
          {/* <h3 className={`${styles.services_heading} ${styles.desktopv}`}>Digital Experience  </h3>
          <h3 className={`${styles.services_heading} ${styles.mobilev}`}>Digital <br/>Experience  </h3> */}
          <h3 className={`${styles.services_heading}`}>Digital <br/>Experience</h3> 
          </div>
          <div className={`${styles.column2}`}>
            <div className={styles.arrsec}>
            <p className={styles.services_subheading}>Engage your visitors with stunning web designs. Our user-friendly, visually striking websites turn clicks into loyal customers.</p>
            <Image
                    className="arrowd"
                    src="/home/dwn.svg"
                    alt="Branding Image 1"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
           </div>
          </div>
        </div>
        <div className="content">
          <div className={styles.row}>
            <div className={styles.column1}>
            <p className={styles.service_list}>1. Website Design & UI</p>
            <p className={styles.service_list}>2. Web Hosting</p>
            <p className={styles.service_list}>3. Website Development</p>
            <p className={styles.service_list}>4. Performance Optimisation</p>

            <div className={styles.nwmr}>
            <Link className="boton_elegante" href="/reach-us">
            KNOW MORE
            </Link>
            </div>
            </div>
            <div className={`${styles.column2}`}>
            <div className={styles.digiimgsec}>
        <Image
            className={styles.digiimg}
            src="/home/digi1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.digiimg}
            src="/home/digi2.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.digiimg}
            src="/home/digi3.png"
            alt="Next.js Logo"
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

      {/* Accordion start */}
      <div className={`${"panel"} ${activePanel === 0 ? styles.open : ''}`} ref={el => (panelRefs.current[2] = el)}>
        <div className={styles.row}>
          <div className={styles.column1}>
          {/* <h3 className={`${styles.services_heading} ${styles.desktopv}`}>Packaging Experience</h3>
          <h3 className={`${styles.services_heading} ${styles.mobilev}`}>Packaging <br/>Experience  </h3> */}
          <h3 className={`${styles.services_heading}`}>Packaging <br/>Experience</h3>
          </div>
          <div className={`${styles.column2}`}>
          <div className={styles.arrsec}>
          <p className={styles.services_subheading}>
            Stand out on the shelves with our eye-catching packaging designs. We blend form and function to make your products irresistible.
            </p>
            <Image
                    className="arrowd"
                    src="/home/dwn.svg"
                    alt="Branding Image 1"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
           </div>
          </div>
        </div>
        <div className="content">
          <div className={styles.row}>
            <div className={styles.column1pkg} >
            <p className={styles.service_list}>1. Brand Strategy Development</p>
            <p className={styles.service_list}>2. Product Positioning</p>
            <p className={styles.service_list}>3. Packaging design for Hero Products</p>
            <p className={styles.service_list}>4. Guideline formulation</p>

            <div className={styles.nwmr}>
            <Link className="boton_elegante" href="/reach-us">
            KNOW MORE
            </Link>
            </div>
            </div>
            <div className={`${styles.column2}`}>
            <div className={styles.digiimgsec}>
        <Image
            className={styles.digiimg}
            src="/home/pkg1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.digiimg}
            src="/home/pkg2.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.digiimg}
            src="/home/pkg3.png"
            alt="Next.js Logo"
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
            {/* Accordion start */}
            <div className={`${"panel"} ${activePanel === 0 ? styles.open : ''}`} ref={el => (panelRefs.current[3] = el)}>
        <div className={styles.row}>
          <div className={styles.column1}>
            {/* <h3 className={`${styles.services_heading} ${styles.desktopv}`}>Ecommerce Experience</h3>
            <h3 className={`${styles.services_heading} ${styles.mobilev}`}>Ecommerce <br/>Experience  </h3> */}
            <h3 className={`${styles.services_heading}`}>Ecommerce <br/>Experience</h3>
          </div>
          <div className={`${styles.column2}`}>
            
            <div className={styles.arrsec}>
            <p className={styles.services_subheading}>
            Boost your online sales with our seamless eCommerce solutions. From design to launch, we create digital storefronts that convert.
            </p>
            <Image
                    className="arrowd"
                    src="/home/dwn.svg"
                    alt="Branding Image 1"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
           </div>
          </div>
        </div>
        <div className="content">
          <div className={styles.row}>
            <div className={styles.column1}>
            <p className={styles.service_list}>1. Brand roadmap</p>
            <p className={styles.service_list}>2. Communication Design</p>
            <p className={styles.service_list}>3. E-com store Set up Strategy</p>
            <p className={styles.service_list}>4. Front-end & Back-end development</p>
            <div className={styles.nwmr}>
            <Link className="boton_elegante" href="/reach-us">
            KNOW MORE
            </Link>
            </div>
            </div>
            <div className={`${styles.column2}`}>
            <div className={styles.digiimgsec}>
        <Image
            className={`${styles.ecommimg} ${styles.ecommimgmob}`}
            src="/home/ecomm1.png"
            alt="Next.js Logo"
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
  );
};

export default AccordionOne;

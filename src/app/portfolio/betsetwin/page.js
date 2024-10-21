"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./betsetwin.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';

const betsetwin = () => {
    useEffect(() => {
        document.title = "Portfolio - Doodlo Designs Studio";
      }, []);

      const [inactive, setInactive] = useState(true); // Set initial state to true
      
      const toggleClass = () => {
          setInactive(!inactive);
        };
  return (
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
        {/* end */}
    
    {/*****************************/}
        <div className={styles.herosec}>
                <Image
                src="/home/portfolios/betsetwin/image1.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
                <div className={styles.herotext}>
                    <div>
                    <Image
                    src="/home/portfolios/betsetwin/image3.png"
                    alt="Next.js"
                    layout="responsive"
                    width={100}
                    height={100}
                    className={styles.simage}
                    priority
                    /> 
                    </div>
                    <div>
                    <p className={styles.stext}>
                    Designing a better sports betting & Gambling experience. How we helped Betsetwin put its brand values front a fun and exciting experience and define it’s brand value to get more visibility through our design. The ups  Downs of playful banter between friends and the opportunity to win a cash are what draws users in.
                    </p>
                    </div>
                </div>
        </div>
{/*****************************/}
  
  <div className={styles.rolesec}>
         <div className={styles.btnsec}>
              <div className={styles.btncol1}><h3 className={styles.roletitle}>OUR ROLES</h3></div>
              <div className={styles.btncol2}>
                <button className={styles.btnelegant}>
                 Brand Strategy
                </button>   
                <button className={styles.btnelegant1}>
                 Creative Content
                </button>    
                <button className={styles.btnelegant}>
                  Designing
                </button>      
              </div> 

              <div className={styles.btncol3}>
                <button className={styles.btnelegant2}>
                   Social Media Strategy
                </button>   
                 
                <button className={styles.btnelegant2}>
                  Web Design &<br>
                  </br>
                  Surrogate Websites.
                </button>      
             </div>         
         </div>
  </div>
           
{/*****************************/}

    </div>
  )
}

export default betsetwin
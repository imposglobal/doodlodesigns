"use client";
import React from 'react';
import Link from "next/link"
import Image from "next/image";
import styles from "./swiggy.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';

const Swiggy = () => {

    useEffect(() => {
        document.title = "Swiggy & The Bowl Company | Packaging Solutions | Doodlo Design Studio";

        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
          descriptionTag.setAttribute(
            "content",
            "Read more about Doodlo Design's collaboration with Swiggy and The Bowl Company, creating unique branding and packaging solutions that enhance customer experiences."
          );
        }
    
        // Update the meta keywords dynamically
        const keywordsTag = document.querySelector('meta[name="keywords"]');
        if (keywordsTag) {
          keywordsTag.setAttribute("content", " ");
        }
    
        // Add the canonical tag 
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
    canonicalTag.setAttribute("href", "https://doodlodesigns.com/portfolio/swiggy-x-the-bowl-company"); 
   } 
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
              <Link href="/blog" className="mitem">
                Blogs
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
        <p>© 2025 Doodlo | All Rights Reserved | <Link href="/terms-of-use" className="lcopy">Terms of Use</Link> |<Link href="/privacy-policy" className="lcopy"> Privacy Policy </Link> </p>
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

     {/* hero section start */}
     <div className={styles.herosec}>
     <Image
      src="/home/portfolios/swiggy/heroimg.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
     {/* hero section end */}

     {/* second section start */}
     <div className={styles.rowsec}>
     <div className={styles.col1}>
        <div className={styles.content}>
            <h1 className={styles.aboutheading}>ABOUT</h1>
            <p className={styles.apara}>We teamed up with Swiggy and Bowl Company to design eye-catching packaging for their latest campaign.
            </p>
            <h3 className={styles.challengeheading}>Challenges</h3>
            <p className={styles.apara}>
            The challenge was to adapt the campaign design seamlessly across all mediums, from packaging to billboards.
            </p>
            <h3 className={styles.challengeheading}>
            Solutions
            </h3>
            <p className={styles.apara}>
            We created a vibrant, attention-grabbing design language that worked beautifully on packaging, coasters, stickers, hoardings, and billboards throughout the city.
            </p>
        </div>
     </div>

     <div className={styles.col2}>
     <Image
      src="/home/portfolios/swiggy/bowl.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
      className={styles.bowlimg}
     />
     </div>
     </div>
     {/* second section end */}


     {/* third section start */}
     <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/swiggy/image1.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
     {/* third section start */}

     {/* fourth section */}
     <div className={styles.whitebgsec}>
     <Image
      src="/home/portfolios/swiggy/image2.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>

     {/* fourth section end*/}
   

     {/* fifth section */}
     <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/swiggy/image3.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
     {/* fifth section */}

      {/* sixth section */}
      <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/swiggy/image4.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>  
    {/* sixth section */}

      

       {/* seventh section */}
       <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/swiggy/image5.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
      {/* seventh section */}

       {/* eighth section */}
       <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/swiggy/image6.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
      
      {/* eighth section */}

       {/* ninth section */}
       <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/swiggy/image7.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
      
      {/* ninth section */}

      {/* tenth section */}
      <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/swiggy/image8.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>     
      {/* tenth section */}

       {/* last section */}
      <div className={styles.fsec}>
      <div className={styles.fimg}>
        <Image
      src="/home/portfolios/swiggy/image9.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
        </div>
    
     </div>
      
      {/* last section */}

    </div>
  )
}

export default Swiggy
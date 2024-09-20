"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./alhidaya.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";



const alhidaya = () => {
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
     
     {/* main content start */}
      {/* hero section start */}
     <div className={styles.herosec}>
     <Image
      src="/home/portfolios/alhidaya/heroimage.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
     {/* hero section end */}
     {/* second section */}
     <div className={styles.contentsec}>
           <p className={styles.paragraph}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum tempus ipsum, ut vestibulum dolor commodo sit amet. Nulla at tellus elementum, suscipit libero quis, luctus lectus. Aenean dignissim placerat velit, id cursus metus iaculis sit amet. 
           </p>
     </div>
    {/* second section */}
    {/* third section */}
    <div className={styles.rowcenter}>
    <div className={styles.rowsec}>
        <div className={styles.col1}>
              <h2 className={styles.typefacehead}>Typeface:</h2>

         <div className={styles.typeface}>
            <div className={styles.tface1}>
               <h3 className={styles.anhead}>Aa</h3>
               <h4 className={styles.dmnhead}>DM Serif Display</h4>
               <h5 className={styles.rehead}>Regular</h5>
            </div>
            <div className={styles.tface2}>
               <h3 className={styles.aihead}>Aa</h3>
               <h4 className={styles.dmihead}>DM Serif Display</h4>
               <h5 className={styles.ihead}>Italic</h5>
            </div>
         </div>
         <h3 className={styles.header_heading}>This is the Header</h3>
         <p className={styles.header_para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum tempus ipsum, ut vestibulum dolor commodo sit amet. Nulla at tellus elementum, suscipit libero quis, luctus lectus. Aenean dignissim placerat velit, id cursus metus iaculis sit amet. </p>
         <h3 className={styles.header_number}>1234567890</h3>
        </div>
        <div className={styles.col2}>
        <h2 className={styles.centerhead}>Color Palette:</h2>
        <div className={styles.vectorimg}>
             
              <div className={styles.ctext}>
              <Image
              src="/home/portfolios/alhidaya/Vector1.jpg"
              alt="Next.js Logo"
              layout="responsive"
              width={100}
              height={100}
              priority 
              className={styles.img}
              />
              <h5 className={styles.darkbluetext}>02495F</h5>              
              </div>
              <div className={styles.ctext}>
              <Image
              src="/home/portfolios/alhidaya/Vector2.png"
              alt="Next.js Logo"
              layout="responsive"
              width={100}
              height={100}
              priority 
              className={styles.img}
              />
              <h5 className={styles.bluetext}>02495F</h5>
              </div>
              <div className={styles.ctext}>
              <Image
              src="/home/portfolios/alhidaya/Vector3.png"
              alt="Next.js Logo"
              layout="responsive"
              width={100}
              height={100}
              priority 
              className={styles.img}
              />
             <h5 className={styles.greentext}>02495F</h5>
             </div>
        </div>
        </div>
    </div>
    </div>
    {/* third section */}
    {/* fourth section */}
    <div className={styles.contentrow}>
        <div className={styles.contentcol1}>
           <div className={styles.centertext}>
           
            <h2 className={styles.white_heading}>Lorem ipsum </h2>
            <p className={styles.white_para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum tempus ipsum, ut vestibulum dolor commodo sit amet. Nulla at tellus elementum, suscipit libero quis, luctus lectus. Aenean dignissim placerat velit, id cursus metus iaculis sit amet. </p>
           </div>
        </div>
        <div className={styles.contentcol2}>
             <Image
              src="/home/portfolios/alhidaya/image1.png"
              alt="Next.js Logo"
              layout="responsive"
              width={100}
              height={100}
              priority 
             
              />
        </div>
    </div>
    {/* fourth section */}
    {/* fifth section */}
    <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/alhidaya/image2.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
    {/* fifth section */}
    {/* sixth section */}
    <div className={styles.imagerow}>
        <div className='imgcol1'>
        <Image
              src="/home/portfolios/alhidaya/image4.jpg"
              alt="Next.js Logo"
              layout="responsive"
              width={100}
              height={100}
              priority 
             
              />
        </div>
        <div className='imgcol2'>
             <Image
              src="/home/portfolios/alhidaya/image3.png"
              alt="Next.js Logo"
              layout="responsive"
              width={100}
              height={100}
              priority 
             
              />
        </div>
    </div>
   {/* sixth section */}

    {/* seventh section */}
    <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/alhidaya/image10.png"
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
      src="/home/portfolios/alhidaya/image6.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
    {/* eighth section */}

    {/* ninth section */}
    <div className={styles.videosec}>
     <VideoComponent className={styles.avideo} videoSrc="/home/portfolios/alhidaya/Alhidaya-video.mp4" autoPlay muted loop controls={false}/>
     </div>
    {/* ninth section */}

    {/* tenth section */}
    <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/alhidaya/image8.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      className={styles.mtop}
      priority
     />
     </div>
    {/* tenth section */}
     {/* eleventh section */}
     <div className={styles.imagesec}>
     <Image
      src="/home/portfolios/alhidaya/image9.png"
      alt="Next.js Logo"
      layout="responsive"
      width={100}
      height={100}
      priority
     />
     </div>
    {/* eleventh section */}
    {/* twelth section */}
    <div className={styles.thanksec}>
       
        <h4 className={styles.thankhead}>Thanks for watching</h4>
      
     </div>
    {/* twelth section*/}

     {/* main content end */}
    </div>
  )
}

export default alhidaya
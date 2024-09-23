"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./yolomart.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";
import Slidercomponent from '@/app/Component/Slider/Slidercomponent';

const yolomart = () => {
    useEffect(() => {
        document.title = "Portfolio - Doodlo Designs Studio";
      }, []);


      const images = [
        { src: "/home/portfolios/yolo-mart/hoodie.webp", alt: "Slide 1", caption: ""},
        { src: "/home/portfolios/yolo-mart/cap1.webp", alt: "Slide 2", caption: "" },
        { src: "/home/portfolios/yolo-mart/BASKET.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/yolo-mart/reflector-jacket.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/yolo-mart/icard.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/yolo-mart/keychain.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/yolo-mart/yolomart-tshirt.webp", alt: "Slide 3", caption: "" },
      ];


      // const images = [
      //   { src: "/home/portfolios/yolo-mart/hoodie.webp", alt: "Slide 1", caption: "", className:"yoloslideimg" },
      //   { src: "/home/portfolios/yolo-mart/cap1.webp", alt: "Slide 2", caption: "", className:"yoloslideimg" },
      //   { src: "/home/portfolios/yolo-mart/BASKET.webp", alt: "Slide 3", caption: "", className:"yoloslideimg"},
      //   { src: "/home/portfolios/yolo-mart/reflector-jacket.webp", alt: "Slide 3", caption: "", className:"yoloslideimg" },
      //   { src: "/home/portfolios/yolo-mart/icard.webp", alt: "Slide 3", caption: "", className:"yoloslideimg" },
      //   { src: "/home/portfolios/yolo-mart/keychain.webp", alt: "Slide 3", caption: "", className:"yoloslideimg" },
      //   { src: "/home/portfolios/yolo-mart/yolomart-tshirt.webp", alt: "Slide 3", caption: "", className:"yoloslideimg" },
      // ];

      
  const settings = {
    slidesPerView: 4, 
    spaceBetween: 20,
    autoplay: { delay: 5000 },
  };


  // const settings = () => 
  //   {
  //   let config = {
  //       slidesPerView: 4,
  //       spaceBetween: 20,
  //       autoplay: { delay: 5000 },
  //   };

  //   if (window.innerWidth < 768) {
  //       config.slidesPerView = 1;
  //   }
  //   return config;
  // };

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


        <div className={styles.spacing}>
        <div className={styles.herosec}>
        <Image
           src="/home/portfolios/yolo-mart/heroimg.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>
{/********************/}
        <div className={styles.rowsec}>
            <div className={styles.rowcontent}>
              <h1 className={styles.title}>
                YoloMart Branding Project
              </h1>
              <hr className={styles.hrwidth}></hr>
              <p className={styles.description}>
              Our collaboration with YoloMart on their branding project was an exhilarating journey that allowed
us to infuse their brand with creativity, playfulness, and innovation. As Doodlo Design Studio, we
aimed to create a cohesive and visually captivating brand identity that would resonate with
YoloMart’s target audience and set them apart in the retail industry.
              </p>
            </div>
        </div>
        {/********************/}
        <div className={styles.imagesec}>
        <Image
           src="/home/portfolios/yolo-mart/image1.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>
        {/********************/}

        <div className={styles.contentsec}>
            <div className={styles.content1}>
            <h2 className={styles.logotitle}>
            Logo Design
            </h2>  
            <hr className={styles.hrlogo}></hr>
            <p className={styles.logodesc}>
            Our collaboration with YoloMart on their branding project was an exhilarating journey that allowed us to infuse their brand with creativity, playfulness, and innovation. As Doodlo Design Studio, we aimed to create a cohesive and visually captivating brand identity that would resonate with YoloMart’s target audience and set them apart in the retail industry.
              </p>
            </div>
            <div className={styles.content2}>
            <Image
           src="/home/portfolios/yolo-mart/image2.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
            </div>
        </div>


         {/********************/}
         <div className={styles.yolosec}>
            <Image
           src="/home/portfolios/yolo-mart/yolomart.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.yoloimg}
           priority
          />
        </div>
         {/********************/}

         <div className={styles.yoloiamgesec}>
            <div className={styles.yolocol1}>
            <Image
           src="/home/portfolios/yolo-mart/yologreen.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
          
           priority
          />
          </div>
           <div className={styles.yolocol2}>
           <Image
           src="/home/portfolios/yolo-mart/yoloyellow.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}         
           priority
          />
          </div>
           
        </div>
        {/********************/}
        <div className={styles.contentsec}>
            <div className={styles.content1}>
                <div className={styles.pt50}>
            <h2 className={styles.logotitle}>
            Brand Guidelines
            </h2>  
            <hr className={styles.hrlogo}></hr>
            <p className={styles.logodesc}>
            We developed comprehensive brand guidelines that provided a roadmap for YoloMart’s visual identity. These guidelines encompassed logo usage, color palettes, typography, and overall design. principles.
              </p>
              </div>
            </div>
            <div className={styles.content2}>
            <Image
           src="/home/portfolios/yolo-mart/brand.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
            </div>
        </div>
         {/********************/}
         <div className={styles.imagesec}>
         <Image
           src="/home/portfolios/yolo-mart/stationery.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>
         {/********************/}
         <div className={styles.storesec}>
          <div className={styles.storecontent}>
          <h2 className={styles.storetitle}>Merchandise</h2>
          <hr className={styles.storehr}></hr>
          <p className={styles.storedesc}>
          We transformed YoloMart’s physical spaces into immersive and engaging environments. By incorporating doodle illustrations into in-store signage, displays, and wall art, we created a lively and captivating atmosphere.
              </p>
          </div>
        </div>
        {/********************/}

        {/* Gallerysection */}
        <div className={styles.slidersec}>
        <div className={styles.slider}>
        <Slidercomponent images={images} settings={settings} />
        </div>
        </div>
         {/* Gallerysection */}
        {/********************/}
        <div className={styles.storesec}>
          <div className={styles.storecontent}>
          <h2 className={styles.storetitle}>Store Environment</h2>
          <hr className={styles.storehr}></hr>
          <p className={styles.storedesc}>
          We transformed YoloMart’s physical spaces into immersive and engaging environments. By incorporating doodle illustrations into in-store signage, displays, and wall art, we created a lively and captivating atmosphere.
              </p>
          </div>
        </div>
        {/********************/}
        <div className={styles.imagesec}>
         <Image
           src="/home/portfolios/yolo-mart/signage-board.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>
        {/********************/}
        <div className={styles.imagesec}>
         <Image
           src="/home/portfolios/yolo-mart/transport.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>
         {/********************/}
         <div className={styles.imagesec}>
         <Image
           src="/home/portfolios/yolo-mart/standees.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>
  {/********************/}
        <div className={styles.rowsec}>
            <div className={styles.rowcontent}>
              <h1 className={styles.onlineptitle}>
              Online Presence
              </h1>
              <hr className={styles.hrwidth}></hr>
              <p className={styles.description}>
              We developed a visually striking and user-friendly website for
              YoloMart, ensuring a seamless digital experience for customers and captivating social media channels.
              </p>
            </div>
        </div>
        {/********************/}
        <div className={styles.imagesec}>
         <Image
           src="/home/portfolios/yolo-mart/image3.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>

         {/********************/}
        <div className={styles.videosec}>
        <VideoComponent  videoSrc="https://php.imposglobal.com/wp-content/uploads/2024/04/Ym-Web-Clip.mp4" autoPlay muted loop controls={false}/>
        </div>
    
         {/********************/}
         <div className={styles.convsec}>
         <Image
           src="/home/portfolios/yolo-mart/convenience.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>

         {/********************/}
         <div className={styles.thanksec}>
         <div className={styles.thankcontent}>
         <Image
           src="/home/portfolios/yolo-mart/thankyou.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
          </div>
        </div>
        {/* spacing */}
        </div>

    </div>
  )
}

export default yolomart
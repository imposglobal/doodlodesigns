"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./royalwedding.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';

const royalwedding = () => {

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
    <div className={styles.spacing}>
    {/* <div className={styles.colsec}>      
          <Image
           src="/home/portfolios/royal-weddings/royal-wedding.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.royalimg}
           priority
          />
             
        <Image
           src="/home/portfolios/royal-weddings/Memories-are-rare_.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.memoriesimg}
           priority
          />
        
        
        <Image
           src="/home/portfolios/royal-weddings/pattern1.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
      
        
        <Image
           src="/home/portfolios/royal-weddings/pattern2.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.patternimg}
           priority
          />


        <Image
           src="/home/portfolios/royal-weddings/image2.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.ganeshimg}
           priority
          />
    </div> */}


      <div className={styles.colsec}>
        <div>   
          <Image
           src="/home/portfolios/royal-weddings/royal-wedding.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.royalimg}
           priority
          />
          </div>  
          <div>   
        <Image
           src="/home/portfolios/royal-weddings/Memories-are-rare_.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.memoriesimg}
           priority
          />
            </div>  
            <div> 
        <Image
           src="/home/portfolios/royal-weddings/pattern1.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
       </div>  
       <div> 
        <Image
           src="/home/portfolios/royal-weddings/pattern2.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
  </div>  
  <div> 
        <Image
           src="/home/portfolios/royal-weddings/image2.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.ganeshimg}
           priority
          />
           </div>  
    </div> 

    {/***********************/}
    <div className={styles.rowsec}> 
           <div className={styles.row1}>
           <Image
           src="/home/portfolios/royal-weddings/image4.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.estdimg}
           priority
          />
           </div>
           <div className={styles.row2}>
           <div className={styles.rowcontent}>
           <Image
           src="/home/portfolios/royal-weddings/Project.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.proimg}
           priority
          />
          <p className={styles.prodesc}>A wedding photographer needed a brand identity that was minimal and iconic, with romanticized colors that would appeal to clients in the wedding industry.</p>
          <Image
           src="/home/portfolios/royal-weddings/Solution.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.solutionimg}
           priority
          />
          <p className={styles.prodesc}>We created a brand identity that consisted of a minimal, iconic logo, using motif typography and a couple symbol to represent love and romance. The color palette included soft, romantic hues such as blush, lavender, and ivory, reflecting the wedding industry’s aesthetic. The overall design was elegant and sophisticated, appealing to the brand’s target audience of brides and grooms who value high-quality photography and attention to detail. The resulting brand identity captured the essence of the wedding photographer’s style, while also appealing to potential clients in the industry.</p>
           </div>
           </div>
    </div>

     {/***********************/}
     <div className={styles.imagesec}>
           <div className={styles.imagerow}>
           <div className={styles.gap}>
           <Image
           src="/home/portfolios/royal-weddings/image5.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.royalimg}
           priority
          />
          </div>
          <div className={styles.gap}>
          <Image
           src="/home/portfolios/royal-weddings/image6.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.plusimg}
           priority
          />
          </div>
          <div className={styles.gap}>
          <Image
           src="/home/portfolios/royal-weddings/image7.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.cameraimg}
           priority
          />
          </div>
          <div className={styles.gap}>
          <Image
           src="/home/portfolios/royal-weddings/image8.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.equalimg}
           priority
          />
          </div>
          <div className={styles.gap}>
          <Image
           src="/home/portfolios/royal-weddings/image9.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.weddingimg}
           priority
          />
          </div>
           </div>
     </div> 
     {/****************************/}
     <div className={styles.patternsec}>
     <Image
           src="/home/portfolios/royal-weddings/pattern3.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
     </div>
       {/****************************/}
       <div className={styles.textsec}>
           <div className={styles.typeface}>            
           <Image
           src="/home/portfolios/royal-weddings/Typeface.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.typefaceimg}
           priority
           /> 
            <div className={styles.typefacerow}>
            <div className={styles.tf1}>
            <div className={styles.tf1column}>
            <Image
           src="/home/portfolios/royal-weddings/Heading.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.headingimg}
           priority
           /> 
           <Image
           src="/home/portfolios/royal-weddings/Elsie-Swash-Caps.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.Elsieimg}
           priority
           /> 
           <Image
           src="/home/portfolios/royal-weddings/Black.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.blackimg}
           priority
           /> 
           </div>
            </div>
            <div className={styles.tf2}>
            <div className={styles.tf1column}>
                 <h2 className={styles.Body}>Body</h2>
                 <h3 className={styles.Poppins}>Poppins</h3> 
                 <h4 className={styles.Medium}>Medium</h4>
           </div>

            </div>
            </div>

           </div>
           <div className={styles.color}>
            <div className={styles.colorcolumn}>
            <Image
           src="/home/portfolios/royal-weddings/Color.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.colorimg}
           priority
           /> 

           <Image
           src="/home/portfolios/royal-weddings/color.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.colorpallateimg}
           priority
           /> 
          </div>
          
          
           </div>
        </div>

         {/****************************/}
         <div className={styles.imagerow}>
         <div className={styles.imagerow1}>
         <Image
           src="/home/portfolios/royal-weddings/image10.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
           />  
         </div>
         <div className={styles.imagerow2}>
         <Image
           src="/home/portfolios/royal-weddings/image11.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
           />  
         </div>
        
         </div>
          {/****************************/}
          <div className={styles.lastrow}>
          <Image
           src="/home/portfolios/royal-weddings/image12.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
           />  
            </div>

    {/* end of spacing */}
    </div>

    </div>
  )
}

export default royalwedding
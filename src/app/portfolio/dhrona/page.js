"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./dhrona.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';

const dhrona = () => {
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

    {/***************/}
    <div className={styles.herosec}>
        <Image
        src="/home/portfolios/dhrona/dhrona.png"
        alt="Next.js"
        layout="responsive"
        width={100}
        height={100}
        className={styles.dhronaimg}
        priority
        />
    </div>
     {/***************/}

      
      <div className={styles.aboutsec}>
            <div className={styles.aboutpb}>
                <h1 className={styles.atitle}>Dhrona</h1>
                <hr></hr>
            </div>
            <div className={styles.aboutcontent}>    
               <div className={styles.abcol1}>

                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Industry</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                Lorem Ipsum
                </button>
                <button className={styles.btnelegant1}>
                 Lorem Ipsum
                </button>
                </div>
                </div>


                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Purpose</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                 Packaging
                </button>                              
                </div>
                </div>


                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Creative</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                  Illustration
                </button>   
                <button className={styles.btnelegant1}>
                 Packaging Design
                </button>        
                </div>
              
                </div>
               </div>
            <div className={styles.abcol2}>
              <h3 className={styles.heading}>About</h3>
              <p className={styles.desc}>Sed tincidunt felis eget aliquam gravida. Fusce iaculis vel nisl ut aliquet. Etiam dapibus est in ante auctor tincidunt. Integer ut ullamcorper diam. Quisque fermentum, dui pellentesque efficitur porttitor, tortor tellus porttitor lectus, vitae pretium risus purus a quam.</p>
              <h3 className={styles.heading}>Challenges</h3>
              <p className={styles.desc}>Sed tincidunt felis eget aliquam gravida. Fusce iaculis vel nisl ut aliquet. Etiam dapibus est in ante auctor tincidunt. Integer ut ullamcorper diam. Quisque fermentum, dui pellentesque efficitur porttitor, tortor tellus porttitor lectus, vitae pretium risus purus a quam.</p>
              <h3 className={styles.heading}>Solutions</h3>
              <p className={styles.desc}>Sed tincidunt felis eget aliquam gravida. Fusce iaculis vel nisl ut aliquet. Etiam dapibus est in ante auctor tincidunt. Integer ut ullamcorper diam. Quisque fermentum, dui pellentesque efficitur porttitor, tortor tellus porttitor lectus, vitae pretium risus purus a quam.</p>
            </div>
            </div>
         </div>

          {/****************/}
        <div className={styles.illutrationsec}>
        <Image
        src="/home/portfolios/dhrona/image1.png"
        alt="Next.js"
        layout="responsive"
        width={100}
        height={100}
        className={styles.descimg}
        priority
        />     
         <Image
        src="/home/portfolios/dhrona/dhronaress.png"
        alt="Next.js"
        layout="responsive"
        width={100}
        height={100}
        className={styles.resimg}
        priority
        />     
         </div>
     {/****************/}
     <div className={styles.gifsec}>
            <div className={styles.gifrow1}>
            <Image
            src="/home/portfolios/dhrona/Dhrona Packaging Gif.gif"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority
            />     
            </div>
            <div className={styles.gifrow2}>
            <div className={styles.gifcoloum}>
                <div> <Image
            src="/home/portfolios/dhrona/image2.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority
            />    </div>
                <div>
                <Image
            src="/home/portfolios/dhrona/image3.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority
            />    
                </div>
                <div>
                <Image
            src="/home/portfolios/dhrona/image4.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority
            />    
                </div>
            </div>
            </div>
     </div>
  {/****************/}
 <div className={styles.mockupsec}>
    <div>
    <Image
            src="/home/portfolios/dhrona/image5.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority
            />    
    </div>
    <div>
    <Image
            src="/home/portfolios/dhrona/image6.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority
            />    
    </div>
 </div>

  {/****************/}
  <div className={styles.imagesec}>
    <Image
     src="/home/portfolios/dhrona/image7.png"
     alt="Next.js"
     layout="responsive"
     width={100}
     height={100}
     priority
     />   
  </div>

  {/****************/}
  <div className={styles.imagesec}>
    <Image
     src="/home/portfolios/dhrona/image8.png"
     alt="Next.js"
     layout="responsive"
     width={100}
     height={100}
     priority
     />   
  </div>
  {/****************/}
  <div className={styles.imagesec}>
    <Image
     src="/home/portfolios/dhrona/image9.png"
     alt="Next.js"
     layout="responsive"
     width={100}
     height={100}
     priority
     />   
  </div>
   {/****************/}
   <div className={styles.imagesec}>
    <Image
     src="/home/portfolios/dhrona/image10.png"
     alt="Next.js"
     layout="responsive"
     width={100}
     height={100}
     priority
     />   
  </div>
  {/****************/}
  <div className={styles.thanksec}>
        <h4 className={styles.thtitle}>Thanks for scrolling!</h4> 
        <h6 className={styles.thdesc}>Got a project in mind? Let’s create something awesome together.</h6>  
  </div>
  {/****************/}
    </div>
  )
}

export default dhrona
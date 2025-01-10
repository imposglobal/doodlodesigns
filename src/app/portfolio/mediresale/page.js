"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./mediresale.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';

const mediresale = () => {
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
    

         <div className={styles.herosec}>
                <Image
                src="/home/portfolios/mediresale/Group1.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
        </div>

        <div className={styles.imgsec}>
                <Image
                src="/home/portfolios/mediresale/Group2.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
        </div>


         {/****************/}
         <div className={styles.aboutsec}>
            <div className={styles.aboutpb}>
                <h1 className={styles.atitle}>Mediresale</h1>
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
                Website Re-vamp
                </button>                              
                </div>
                </div>


                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Creative</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                Website Re-Design
                </button>   
                <button className={styles.btnelegant1}>
                Social Media
                </button>        
                </div>
                <div>
                <button className={styles.btnelegant2}>
                Website Development
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

          <div className={styles.brandingsec}>
            <div className={styles.brandpb}>
                <h1 className={styles.brandtitle}>Branding</h1>
                <Image
                src="/home/portfolios/mediresale/Group2.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                className={styles.hrimg}
                priority
                />
            </div>

            <div className={styles.medirow}>
                 <div><h3 className={styles.mheading}>MK HEALTHCARE</h3></div>
                 <div className={styles.arrowp}> 
                <Image
                src="/home/portfolios/mediresale/Arrow.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                className={styles.arrowimg}
                priority
                />
                </div>
                 <div><h3 className={styles.mheading}>MEDIRESALE</h3></div>
            </div>

            <div className={styles.wordmarkrow}>
                <div className={styles.wmcol1}>
                <Image
                src="/home/portfolios/mediresale/Group3.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                className={styles.wordmarkimg}
                priority
                />
                </div>
                <div className={styles.wmcol2}>
                <h4 className={styles.wmtitle}>Wordmark</h4>
                <Image
                src="/home/portfolios/mediresale/Group4.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                className={styles.wmimage}
                priority
                />
                <p className={styles.wmdesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed vulputate massa, vitae dapibus nisi. Donec non imperdiet diam, eu tincidunt ante. Suspendisse quis nunc vel purus blandit fringilla. </p>   
                 </div>
            </div>
          </div>

        {/****************/}

        <div className={styles.resalesec}>
        <div className={styles.resalerow1}>
               <Image
                src="/home/portfolios/mediresale/image1.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
              
                priority
                />        
        </div>
        <div className={styles.resalerow2}>
               <Image
                src="/home/portfolios/mediresale/image2.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />  
        </div>
        </div>

         {/****************/}

     

        <div className={styles.colorsec}>
        <div className={styles.colorrow1}>
               <Image
                src="/home/portfolios/mediresale/MRColor.gif"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />        
        </div>
        <div className={styles.colorrow2}>
               <Image
                src="/home/portfolios/mediresale/color.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                className={styles.colorimage}
                priority
                />  
        </div>
        </div>
         {/****************/}

         <div className={styles.imgsec}>
                <Image
                src="/home/portfolios/mediresale/medi.svg"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
        </div>
         {/****************/}
         <div className={styles.mockupsec}>
                <Image
                src="/home/portfolios/mediresale/Mockup1.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
        </div>
        {/****************/}
        <div className={styles.mrowsec}>
          <div>
                <Image
                src="/home/portfolios/mediresale/Mockup2.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
          <div className={styles.pt5}>
                <Image
                src="/home/portfolios/mediresale/Mockup3.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
          <div className={styles.pt5}>
                <Image
                src="/home/portfolios/mediresale/Mockup4.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>               
        </div>
         {/****************/}
         <div className={styles.imgsec}>
               <Image
                src="/home/portfolios/mediresale/Mockup5.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
         </div>
           {/****************/}
         <div className={styles.mocksec}>
          <div>
               <Image
                src="/home/portfolios/mediresale/Mockup7.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
          <div className={styles.pt5}>
          <Image
                src="/home/portfolios/mediresale/Mockup8.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
         </div>
         {/****************/}

         <div className={styles.mocksec}>
          <div>
               <Image
                src="/home/portfolios/mediresale/Mockup9.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
          <div className={styles.pt5}>
          <Image
                src="/home/portfolios/mediresale/Mockup10.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
         </div>
 {/****************/}

 <div className={styles.mocksec}>
          <div>
               <Image
                src="/home/portfolios/mediresale/Mockup11.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
          <div className={styles.pt5}>
          <Image
                src="/home/portfolios/mediresale/Mockup12.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
         </div>
 {/****************/}
          <div className={styles.medisec}>
               <Image
                src="/home/portfolios/mediresale/Mockup13.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
         </div>
     
            {/*****************/}
        <div className={styles.thanksec}>
        <h4 className={styles.thtitle}>Thanks for scrolling!</h4> 
        <h6 className={styles.thdesc}>Got a project in mind? Let’s create something awesome together.</h6>  
       </div>
         {/*****************/}
    </div>
  )
}

export default mediresale
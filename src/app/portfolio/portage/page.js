"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./portage.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';

const portage = () => {
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
                src="/home/portfolios/portage/portage.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
        </div>
        {/*****************/}
        <div className={styles.aboutsec}>
            <div className={styles.aboutpb}>
                <h1 className={styles.atitle}>Portage</h1>
                <hr></hr>
            </div>
            <div className={styles.aboutcontent}>    
               <div className={styles.abcol1}>

                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Industry</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                Full Truck Load Transport
                </button>
                <button className={styles.btnelegant1}>
                Logistics
                </button>
                </div>
                </div>


                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Purpose</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                Effective Brand Identity
                </button>                              
                </div>
                </div>


                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Creative</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                Branding
                </button>   
                <button className={styles.btnelegant1}>
                Brochure
                </button>        
                </div>
                
                </div>
               </div>
            <div className={styles.abcol2}>
              <h3 className={styles.heading}>About</h3>
              <p className={styles.desc}>Portage is a trusted name in the logistics sector, specializing in full truckload transport solutions. They streamline freight operations with a commitment to efficiency, reliability, and scalability.
              </p>
              <h3 className={styles.heading}>Challenges</h3>
              <ul className={styles.aboutul}>
                <li className={styles.aboutli}>Creating a distinctive and professional brand identity for a competitive logistics market.</li>
                <li className={styles.aboutli}>Designing a brochure that effectively communicates their expertise and services.</li>
                <li className={styles.aboutli}>Developing comprehensive brand guidelines for consistent communication across channels.</li>
              </ul>
              <h3 className={styles.heading}>Solutions</h3>
              <ul className={styles.aboutul}>
                <li className={styles.aboutli}>Crafted a modern, impactful logo and brand identity reflecting Portage’s core values.</li>
                <li className={styles.aboutli}>Designed a compelling, easy-to-navigate brochure highlighting their services and strengths.</li>
                <li className={styles.aboutli}>Delivered detailed brand guidelines to maintain consistency in visuals and messaging.</li>
              </ul>
            </div>
            </div>
         </div>
         {/*****************/}

         <div className={styles.brandingsec}>
             <div>
                <h1 className={styles.btitle}>Branding</h1>              
            </div>

            <div className={styles.buttonsec}>
            <Image
                src="/home/portfolios/portage/portage3.svg"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                className={styles.buttondesc}
                priority
                />

                 <Image
                src="/home/portfolios/portage/branding.svg"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                className={styles.buttonres}
                priority
                />          
            </div>            
         </div>
          {/*****************/}

          {/* <div className={styles.conceptsec}>
            <div>
                <h4 className={styles.ctitle}>Concepts:</h4>              
            </div>

            <div className={styles.conrow1}>
               <div className={styles.con1}>
               <Image
                src="/home/portfolios/portage/portage1.gif"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />   
               </div>
               <div className={styles.con1}>
               <Image
                src="/home/portfolios/portage/portage1.gif"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />   
               </div>
               <div className={styles.con1}>
               <Image
                src="/home/portfolios/portage/portage1.gif"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />   
               </div>
               <div className={styles.con1}>
               <Image
                src="/home/portfolios/portage/portage1.gif"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />   
               </div>
            </div>


            <div className={styles.conrow2}>
               <div className={styles.con2}>
               <Image
                src="/home/portfolios/portage/portage1.gif"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />   
               </div>
               <div className={styles.con3}>
               <Image
                src="/home/portfolios/portage/portage7.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />   
               </div>
            
            
      
            </div>          
         </div> */}
        {/*****************/}

         <div className={styles.elementsec}>
              <div className={styles.elementcol1}>
                <Image
                src="/home/portfolios/portage/portage1.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                className={styles.portageimg}
                priority
                /> 
              </div>
              <div className={styles.elementcol2}>
                <p className={styles.edesc}><strong>Geometric Shape:</strong> Represents a sense of stability and Structure</p>
                <p className={styles.edesc}><strong>Element:</strong> Represents the abstract form of alphabet ‘P’</p>
                <Image
                src="/home/portfolios/portage/portage2.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                /> 
              </div>
           
         </div>

        {/*****************/}
      <div className={styles.imagesec}>
            <div className={styles.imagecol1}> 
            <Image
                src="/home/portfolios/portage/tshirt.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                /> 
            </div>
            <div className={styles.imagecol2}>  
               <div className={styles.imagecoloum}>
                         <div className={styles.imgcol1}>
                         <Image
                         src="/home/portfolios/portage/cap.png"
                         alt="Next.js"
                         layout="responsive"
                         width={100}
                         height={100}
                         priority
                         /> 
                         </div>
                         <div className={styles.imgcol1}>
                         <Image
                         src="/home/portfolios/portage/keychain.png"
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
 {/*****************/}

 <div className={styles.mockupsec}>
                <Image
                src="/home/portfolios/portage/deliver.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
        </div>
{/*****************/}
 <div className={styles.brochuresec}>
            <div className={styles.bcol1}> 
            <Image
                src="/home/portfolios/portage/brochure.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                /> 
            </div>
            <div className={styles.bcol2}>  
               <div className={styles.brocol}>
                         <div className={styles.brocol1}>
                         <Image
                         src="/home/portfolios/portage/mockup1.png"
                         alt="Next.js"
                         layout="responsive"
                         width={100}
                         height={100}
                         priority
                         /> 
                         </div>
                         <div className={styles.brocol2}>
                         <Image
                         src="/home/portfolios/portage/mockup2.png"
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

       {/*****************/}
       <div className={styles.mockupsec}>
                <Image
                src="/home/portfolios/portage/mockup3.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
        </div>
        {/*****************/}
        <div className={styles.portagesec}>
          <div className={styles.pcol1}>
               <Image
                src="/home/portfolios/portage/mockup4.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
          <div className={styles.pcol2}>
               <Image
                src="/home/portfolios/portage/mockup5.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
          </div>
        {/*****************/}
       
       <div className={styles.mockupsec}>
                <Image
                src="/home/portfolios/portage/mockup6.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
        </div>
       
                
      {/*****************/}

      <div className={styles.tsec}>
          <div className={styles.tcol1}>
               <Image
                src="/home/portfolios/portage/mockup7.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
          <div className={styles.tcol2}>
               <Image
                src="/home/portfolios/portage/mockup8.png"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
          </div>
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

export default portage
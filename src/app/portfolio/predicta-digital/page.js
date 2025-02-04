"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./predicta.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';

const predicta = () => {
    useEffect(() => {
        document.title = "Predicta Digital Portfolio | Web Design & Development | Doodlo Design Studio";

        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
          descriptionTag.setAttribute(
            "content",
            "Check out Doodlo Design’s work with Predicta Digital, creating impactful digital solutions and a strong brand identity that drives growth and innovation."
          );
        }
    
        // Update the meta keywords dynamically
        const keywordsTag = document.querySelector('meta[name="keywords"]');
        if (keywordsTag) {
          keywordsTag.setAttribute("content", " ");
        }
    
        const metaTitleTag = document.querySelector('meta[name="title"]');
        if (metaTitleTag) {
          metaTitleTag.setAttribute("content", "Predicta Digital Portfolio | Web Design & Development | Doodlo Design Studio");
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
                src="/home/portfolios/predicta-digital/predicta.png"
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
                <h1 className={styles.atitle}>Predicta and Doodlo Design Collaboration - Empowering Growth with Innovative Design Solutions</h1>
                <hr></hr>
            </div>
            <div className={styles.aboutcontent}>    
               <div className={styles.abcol1}>

                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Industry</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                 Marketing
                </button>
                 <button className={styles.btnelegant1}>
                 Automation
                </button>
                </div>
                </div>


                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Location</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                Australia
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
              <p className={styles.desc}>Predicta Digital is a leading marketing and automation agency in Australia, known for its innovative solutions and proprietary marketing automation product. They empower businesses to streamline campaigns and drive measurable growth.</p>
              <h3 className={styles.heading}>Challenges</h3>
            
              <ul className={styles.aboutul}>
                <li className={styles.aboutli}>Creating a user-centric interface for a highly technical automation platform.</li>
                <li className={styles.aboutli}>Seamlessly integrating complex functionalities while maintaining design simplicity.</li>
                <li className={styles.aboutli}>Enhancing responsiveness for a flawless user experience across devices.</li>
              </ul>
              <h3 className={styles.heading}>Solutions</h3>
              <ul className={styles.aboutul}>
                <li className={styles.aboutli}>Designed an intuitive Web UI focused on user engagement and ease of navigation.</li>
                <li className={styles.aboutli}>Developed a responsive, fast-loading website aligned with their branding and product features</li>
                <li className={styles.aboutli}>implemented scalable web development solutions to support future product expansions.</li>
              </ul>
            </div>
            </div>
         </div>

          {/****************/}

          <div className={styles.imagerow}>
                  <div>
                  <Image
                  src="/home/portfolios/predicta-digital/image1.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  /> 
                  </div>
                  <div>
                  <Image
                  src="/home/portfolios/predicta-digital/image2.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  /> 
                  </div>
          </div>
          {/****************/}
          
       <div className={styles.interrow}>
       <div className={styles.intercol1}>
             <div className={styles.textrow}>
             <div className={styles.abcdcol}>
             <p className={styles.abcdtext}>
                                ABCDEFGHIJKLMNOPQRSTUVEWXYZ
                                ABCDEFGHIJKLMNOPQRSTUVEWXYZ<br></br>
                                1234567890!@#$%&  
                                </p>
             </div>
             <div className={styles.aacol}>
                <h3 className={styles.aatext}>Aa</h3> 
                <span><h6 className={styles.stext}>inter</h6></span>
             </div>
             </div>
             <div className={styles.titlerow}>
             <h3 className={styles.intertext}>INTER</h3>
             </div>
       </div>

       <div className={styles.intercol2}>
              <div className={styles.introw}>
              <div className={styles.introw1}>
                 <Image
                  src="/home/portfolios/predicta-digital/Rectangle1.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  /> 
                 </div>
                 <div className={styles.introw2}>
                 <Image
                  src="/home/portfolios/predicta-digital/Rectangle2.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  /> 
                 </div>
                 <div className={styles.introw3}>
                 <Image
                  src="/home/portfolios/predicta-digital/Rectangle3.png"
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

        <div className={styles.headerrow}>
        <div className={styles.headerimage}>
              <div className={styles.headertext}>


                <div className={styles.workheading}>
                <h5 className={styles.head}>Heading:</h5>
                </div>

                <div className={styles.workcoloum}>
                <h5 className={styles.whychooseus}>WHY CHOOSE US</h5>
                <h4 className={styles.workshowcase}>WORK SHOWCASE</h4>
                </div>


                <div className={styles.workborder}>
                <h5 className={styles.fs15}>15PX</h5>
                <h4 className={styles.fs40}>40PX</h4>
                </div>
              
              </div>   
        </div>
        </div>


         {/****************/}

         <div className={styles.bodyrow}>
        <div className={styles.bodyimage}>
              <div className={styles.headertext}>


                <div className={styles.workheading}>
                <h5 className={styles.head}>Bodytext:</h5>
                </div>

                <div className={styles.predesc}>              
                <p className={styles.description}> Predicta Digital is an experienced digital agency offering result-oriented digital marketing solutions for over a decade. Our team of skilled professionals delivers outcome-focused digital marketing solutions to businesses worldwide. We have a comprehensive understanding of the global marketplace and are well-versed in achieving exceptional results for our clients in a fiercely competitive digital landscape. </p>
                </div>


                <div className={styles.workborder}>
              
                <h4 className={styles.fs20}>20PX</h4>
                </div>
              
              </div>   
        </div>
        </div>

          {/********************* */}

          <div className={styles.austinrow}>
           <Image
                  src="/home/portfolios/predicta-digital/textimage.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  />  
           </div>

           {/********************* */}
           <div className={styles.marketingsec}>
              <div className={styles.marketingrow}>
                     <div className={styles.mrow1}>
                     <Image
                  src="/home/portfolios/predicta-digital/color.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  /> 
                     </div>

                     <div className={styles.mrow1_responsive}>
                     <Image
                  src="/home/portfolios/predicta-digital/color_res.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  /> 
                     </div>
                     <div className={styles.mrow2}>
                      <div className={styles.mcoloum}>
                        <div>
                        <Image
                  src="/home/portfolios/predicta-digital/image7.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  /> 
                        </div>
                        <div>
                        <Image
                  src="/home/portfolios/predicta-digital/image8.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  /> 
                        </div>
                      </div>
                     </div>


                     <div className={styles.mrow3}>
                     <div className={styles.tcoloum}>

                        <div className={styles.tcol1}>
                            <div>
                           <h6 className={styles.listicle}>Listicle</h6>
                        </div>
                        <div>
                           <h3 className={styles.marketing}>Marketing Analytics Dashboard and reporting</h3>
                        </div>
                        <div>
                           <ul className={styles.listingul}>
                            <li className={styles.listingli}>Predicta Analytics serves as a comprehensive solution for reporting and analytics requirements all areas of Digital Marketing i.e SEO, SMM, PPC</li>
                            <li className={styles.listingli}>Its data modeling and provisioning architecture facilitate data ingestion and extraction from diverse sources, i.e. GA4, SEO Audit tools, SMM & PPC channels </li>
                            <li className={styles.listingli}>The platform enables advanced interactive visualization and reporting solutions</li>
                           </ul>
                        </div>                     
                        </div>


                  <div className={styles.tcol2}>
                  <Image
                  src="/home/portfolios/predicta-digital/PDGif.gif"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  className={styles.gifclass}
                  priority
                  /> 
                  </div>
                      
                    </div>
                     </div>
              </div>
          </div>
            {/********************* */}

          <div className={styles.graphicrow}>
           <Image
                  src="/home/portfolios/predicta-digital/Graphic.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  />  
           </div>

           {/********************* */}

           <div className={styles.macbookrow}>
           <Image
                  src="/home/portfolios/predicta-digital/FloatingMacbook.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  />  
           </div>

           {/********************* */}

           <div className={styles.macrow}>
           <Image
                  src="/home/portfolios/predicta-digital/macbook2.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  />  
           </div>

             {/********************* */}

            <div className={styles.macrow}>
           <Image
                  src="/home/portfolios/predicta-digital/macbook3.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  />  
           </div>
         
 {/********************* */}

 <div className={styles.maccoloum}>
  <div className={styles.maccol1}>
  <Image
                  src="/home/portfolios/predicta-digital/macbook4.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  />  
  </div>

  <div className={styles.maccol2}>
  <Image
                  src="/home/portfolios/predicta-digital/macbook5.png"
                  alt="Next.js"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  />  
  </div>
           
  </div>

   {/*****************/}
  
   <div className={styles.visitsec}>
    <h4 className={styles.vtitle}>Explore the full experience — <Link href="https://www.predictadigital.com/" target="_blank" className={styles.vweb}>visit the live Website</Link></h4> 
   </div>
   
   
    {/*****************/}

   {/*****************/}
   <div className={styles.thanksec}>
        <h4 className={styles.thtitle}>Thanks for scrolling!</h4> 
        <h6 className={styles.thdesc}>Got a project in mind? Let’s create something awesome together.</h6>  
       </div>
         {/*****************/}

  


           




              {/* end */}
             </div>
    
   
  )
}

export default predicta
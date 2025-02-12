"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./eMed.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import Slidercomponent from '@/app/Component/Slider/Slidercomponent';
import {useState, useEffect} from 'react';

const eMed = () => {
     useEffect(() => {
            document.title = "eMed Branding Portfolio | Innovative Branding Solutions";

            const descriptionTag = document.querySelector('meta[name="description"]');
            if (descriptionTag) {
              descriptionTag.setAttribute(
                "content",
                "Check out our collaboration with eMed, where we designed a user-friendly digital platform with innovative solutions to enhance the healthcare experience."
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
    canonicalTag.setAttribute("href", "https://doodlodesigns.com/portfolio/emed"); 
   } 
          }, []);
    
          const [inactive, setInactive] = useState(true); // Set initial state to true
          
          const toggleClass = () => {
              setInactive(!inactive);
            };


            const images = [
              { src: "/home/portfolios/eMed/slider1.png", alt: "Slide 1", caption: "" },
              { src: "/home/portfolios/eMed/slider2.png", alt: "Slide 2", caption: "" },
              { src: "/home/portfolios/eMed/slider3.png", alt: "Slide 3", caption: "" },
            ];
            const settings = {
              slidesPerView: 1, // Custom settings if needed
              spaceBetween: 20,
              autoplay: { delay: 5000 },
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
                src="/home/portfolios/eMed/heroimg.png"
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
                <h1 className={styles.atitle}>eMed - Innovative Branding & Design Solutions by Doodlo Design</h1>
                <hr></hr>
            </div>
            <div className={styles.aboutcontent}>    
               <div className={styles.abcol1}>

                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Industry</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                Telehealth & Healthcare
                </button>
                {/* <button className={styles.btnelegant1}>
                Lorem Ipsum
                </button> */}
                </div>
                </div>


                <div className={styles.aboutpb}>
                <h3 className={styles.heading}>Purpose</h3>
                <div className={styles.btnrow}>              
                <button className={styles.btnelegant}>
                User friendly website
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
                Website Development
                </button>        
                </div>
                
                </div>
               </div>
            <div className={styles.abcol2}>
              <h3 className={styles.heading}>About</h3>
              <p className={styles.desc}>eMed Specialist Pty Ltd. connects patients with specialists via a secure telehealth platform. It ensures timely, accessible, and effective consultations from the comfort of home, revolutionizing specialist care in Australia.
              </p>
              <h3 className={styles.heading}>Challenges</h3>
              <ul className={styles.aboutul}>
                <li className={styles.aboutli}>Existing platform lacked user-friendly design, leading to lower engagement.</li>
                <li className={styles.aboutli}>Booking and consultation processes were cumbersome for users.</li>
                <li className={styles.aboutli}>Branding didn’t align with the modern telehealth approach.</li>
              </ul>
             
              <h3 className={styles.heading}>Solutions</h3>
               <ul className={styles.aboutul}>
                <li className={styles.aboutli}>Designed a seamless, mobile-responsive platform for effortless navigation.</li>
                <li className={styles.aboutli}>Simplified the booking flow with easy-to-access forms and call-to-actions.</li>
                <li className={styles.aboutli}>Incorporated a modern design with a professional color palette to reflect trust.</li>
                <li className={styles.aboutli}>Added patient testimonials and case studies to build credibility and engagement.</li>
                <li className={styles.aboutli}>Create a user-friendly telehealth platform for seamless consultations, bookings, and enhanced patient-specialist experiences across Australia.</li>
              </ul>
             
            </div>
            </div>
         </div>
         {/*****************/}

         <div className={styles.colorsec}>
              <div className={styles.row1}>
                   <Image
                   src="/home/portfolios/eMed/abcdef.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority
                   className={styles.abcdef}
                   /> 
                   </div>
              <div className={styles.row2}>
                  <div className={styles.textsec}>
                    <div className={styles.trow1}>
                        <div className={styles.inline}>
                        <Image
                   src="/home/portfolios/eMed/Ellipse.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority
                   className={styles.ellipse}
                   /> 
                    <h3 className={styles.color}>
                        Color & Typography
                        </h3>
                        </div>
                        
                        <h4 className={styles.brand}>
                          Brand Colors:
                        </h4>
                    </div>
                    <div className={styles.trow2}>
                        <h3 className={styles.brand}>
                        Typography:
                        </h3>
                       
                        <h4 className={styles.typography}>
                        Aa
                        </h4>
                        <h6 className={styles.manrope}>Manrope</h6>
                       
                       
                    </div>
                  </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.headerimg}>
                <Image
                   src="/home/portfolios/eMed/image2.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority
                   
                   /> 
                </div>
                <div className={styles.headertext}>
                <div className={styles.predesc}>              
                <p className={styles.eheading}>THIS IS A HEADER </p>
                </div>


                <div className={styles.workborder}>             
                <h4 className={styles.fs20}>40PX</h4>
                </div>
                </div>

                <div className={styles.headertext1}>
                <div className={styles.predesc}>              
                <p className={styles.description}>Sed tincidunt felis eget aliquam gravida. Fusce iaculis vel nisl ut aliquet. Etiam dapibus est in ante auctor tincidunt. Integer ut ullamcorper </p>
                </div>


                <div className={styles.workborder}>             
                <h4 className={styles.fs18}>24PX</h4>
                </div>
                </div>
                
                </div>   
         </div>

 {/********responsive view*********/}


 <div className={styles.colorres}>
   <div className={styles.rescol1}>
   <div className={styles.inline}>
                        <Image
                   src="/home/portfolios/eMed/Ellipse.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority
                   className={styles.ellipse}
                   /> 
                    <h3 className={styles.color}>
                        Color & Typography
                        </h3>
                        </div>
   </div>
   <div className={styles.rescol2}>
                <div className={styles.flexres}>
                <div className={styles.resrow1}>
                  <Image
                   src="/home/portfolios/eMed/abcdef.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority
                   className={styles.abcdef}
                   /> 
                  </div>


                  <div className={styles.resrow2}>
   
                        <div className={styles.inline}>
                          <div>
                          <h4 className={styles.brand}>
                          Brand Colors:
                        </h4>
                          </div>
                        <div>
                        <Image
                   src="/home/portfolios/eMed/colorres.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority
                   className={styles.colorresimg}
                   
                   /> 
                        </div>
                        
                        </div>
                        <div className={styles.trow2}>
                        <h3 className={styles.brand}>
                        Typography:
                        </h3>
                        <div className={styles.textcenter}>
                        <h4 className={styles.typography}>
                        Aa
                        </h4>
                        <h6 className={styles.manrope}>Manrope</h6>
                        </div>
                    </div>
                    <div className={styles.headertext}>
                <div className={styles.predesc}>              
                <p className={styles.eheading}>THIS IS A HEADER </p>
                </div>


                <div className={styles.workborder}>             
                <h4 className={styles.fs20}>40PX</h4>
                </div>
                </div>

                <div className={styles.headertext1}>
                <div className={styles.predesc}>              
                <p className={styles.description}>Sed tincidunt felis eget aliquam gravida. Fusce iaculis vel nisl ut aliquet. Etiam dapibus est in ante auctor tincidunt. Integer ut ullamcorper </p>
                </div>


                <div className={styles.workborder}>             
                <h4 className={styles.fs18}>24PX</h4>
                </div>
                </div>
                       
   
    </div> 

                </div>
   </div>

 
   
    
 </div>

  {/*********end********/}
 <div className={styles.gifsec}>
                <Image
                src="/home/portfolios/eMed/elaptop.gif"
                alt="Next.js"
                layout="responsive"
                width={100}
                height={100}
                priority
                />
        </div>
 {/*****************/}
 <div className={styles.uisec}>
  <div className={styles.uicol1}>
  <div className={styles.inline}>
                        <Image
                   src="/home/portfolios/eMed/Ellipse.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority
                   className={styles.uiellipse}
                   /> 
                    <h3 className={styles.color}>
                    UI Language
                        </h3>
                        </div>
                        <h4 className={styles.brandcolor}>
                        Icon Style:
                        </h4>
  </div>
  <div className={styles.uicol2}>
                  <Image
                   src="/home/portfolios/eMed/icongif.gif"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
  </div>
  </div>
   {/*****************/}
  <div className={styles.grasec}>
 
    <h4 className={styles.graphic}>
     Graphic Style:
    </h4>

    <h5 className={styles.vector}>
    Vectors for different specialties
    </h5>
  
  <div className={styles.grarow}>
  
       <div>
       <Image
                   src="/home/portfolios/eMed/graphic1.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
       <div>
       <Image
                   src="/home/portfolios/eMed/graphic2.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
       <div>
       <Image
                   src="/home/portfolios/eMed/graphic3.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
       <div>
       <Image
                   src="/home/portfolios/eMed/graphic4.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
       <div>
       <Image
                   src="/home/portfolios/eMed/graphic5.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
  </div>
  </div>

   {/*********responsive view********/}
   <div className={styles.grares}>
   <h4 className={styles.graphic}>
     Graphic Style:
    </h4>

    <h5 className={styles.vector}>
    Vectors for different specialties
    </h5>

   <div className={styles.graressec}>
   
   <div>
       <Image
                   src="/home/portfolios/eMed/graphic1.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
       <div>
       <Image
                   src="/home/portfolios/eMed/graphic2.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
       <div>
       <Image
                   src="/home/portfolios/eMed/graphic3.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
   </div>
   <div className={styles.graressec1}>
   <div>
       <Image
                   src="/home/portfolios/eMed/graphic4.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
       <div>
       <Image
                   src="/home/portfolios/eMed/graphic5.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
       </div>
   </div>
 
   </div>

   {/***********end******/}
    <div className={styles.imagesec}>
    <div className={styles.imgcol1}>
    <Image
                   src="/home/portfolios/eMed/vec1.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   className={styles.vec1}
                   priority                  
                   /> 
    </div>
    <div className={styles.imgcol2}>
    <Image
                   src="/home/portfolios/eMed/vec2.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   className={styles.vec2}
                   priority                  
                   /> 
    </div>
   </div> 
    {/*****************/}
    <div className={styles.vectorsec}>
    <h5 className={styles.vectorspe}>
    Vectors for different Disorders
    </h5>
      <div className={styles.vectorrow}>
      <Image
                   src="/home/portfolios/eMed/vector1.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                   <Image
                   src="/home/portfolios/eMed/vector2.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                   <Image
                   src="/home/portfolios/eMed/vector3.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   />  
                   <Image
                   src="/home/portfolios/eMed/vector4.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                 
                   <Image
                   src="/home/portfolios/eMed/vector6.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                   <Image
                   src="/home/portfolios/eMed/vector7.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                   <Image
                   src="/home/portfolios/eMed/vector8.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                   <Image
                   src="/home/portfolios/eMed/vector9.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector10.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector11.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector12.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector13.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector14.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector15.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector16.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector17.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector18.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector19.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector20.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector21.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector22.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector23.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector24.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector25.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector26.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector27.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector28.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector29.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector30.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector31.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector32.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector33.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
                    <Image
                   src="/home/portfolios/eMed/vector35.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 

      </div>
                  
    </div>
     {/*****************/}
     <div className={styles.uidesignsec}>
     <div className={styles.inline}>
                   <Image
                   src="/home/portfolios/eMed/Ellipse.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority
                   className={styles.uiimg}
                   /> 
                  <h3 className={styles.color}>
                    UI DESIGN
                  </h3>
                       
                        </div>
                        <Image
                   src="/home/portfolios/eMed/PSD.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
     </div>
    {/********responsive view of uidesignsec*********/}
    <div className={styles.uidesignres}>
     <div className={styles.inline}>
                   <Image
                   src="/home/portfolios/eMed/Ellipse.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority
                   className={styles.uiimg}
                   /> 
                  <h3 className={styles.color}>
                    UI DESIGN
                  </h3>
                       
      </div>
      <Slidercomponent images={images} settings={settings} />    
     </div>

     {/* <div className={styles.slider}>
        <Slidercomponent images={images} settings={settings} />
      </div> */}

    {/*****************/}

    <div className={styles.formsec}>
            <h3 className={styles.formtitle}>Start your appointment request here</h3>
            <p className={styles.formdesc}>Your information will be forwarded to a scheduling specialist who will contact you.</p>
                  <Image
                   src="/home/portfolios/eMed/appoinment.gif"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
    </div>
    {/*****************/}
    <div className={styles.psdsec}>
           
                  <Image
                   src="/home/portfolios/eMed/psd1.png"
                   alt="Next.js"
                   layout="responsive"
                   width={100}
                   height={100}
                   priority                  
                   /> 
    </div>

    {/*****************/}
    <div className={styles.prowsec}>
     <div>
       <Image
            src="/home/portfolios/eMed/psd2.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority                  
            /> 
     </div>
     <div>
     <Image
            src="/home/portfolios/eMed/psd3.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority                  
            /> 
     </div>
          
   </div>
    {/*****************/}
    <div className={styles.psdrowsec}>
     
     <div>
     <Image
            src="/home/portfolios/eMed/psd4.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority                  
            /> 
     </div>
     <div>
     <Image
            src="/home/portfolios/eMed/psd5.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority                  
            /> 
     </div>
      <div>
     <Image
            src="/home/portfolios/eMed/psd6.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority                  
            /> 
     </div>
          
   </div>
    {/*****************/}
    <div className={styles.psd7sec}>  
           <Image
            src="/home/portfolios/eMed/psd7.png"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority                  
            /> 
      </div>
  {/*****************/}
  <div className={styles.psd7sec}>  
           <Image
            src="/home/portfolios/eMed/psdgif.gif"
            alt="Next.js"
            layout="responsive"
            width={100}
            height={100}
            priority 
            className={styles.psd7img}                 
            /> 
      </div>

       {/*****************/}
    <div className={styles.visitbg}>
   <div className={styles.visitsec}>
    <h4 className={styles.vtitle}>Explore the full experience — <Link href="https://emedspecialist.com.au/" target="_blank" className={styles.vweb}>visit the live Website</Link></h4> 
   </div>
   </div>
    {/*****************/}
      {/*****************/}
      <div className={styles.thanksec}>
        <h4 className={styles.thtitle}>Thanks for scrolling!</h4> 
        <h6 className={styles.thdesc}>Got a project in mind? Let’s create something awesome together.</h6>  
       </div>


      
    </div>
  )
}

export default eMed
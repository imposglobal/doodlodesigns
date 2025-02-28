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
    
    {/*****************************/}
<div className={styles.herosec}>
 <div className={styles.herotext}>
    <Image
     src="/home/portfolios/betsetwin/image3.png"
     alt="Next.js"
     layout="responsive"
     width={100}
     height={100}
     className={styles.simage}
     priority
     /> 
    <p className={styles.stext}>
     Designing a better sports betting & Gambling experience. How we helped Betsetwin put its brand values front a fun and exciting experience and define it’s brand value to get more visibility through our design. The ups  Downs of playful banter between friends and the opportunity to win a cash are what draws users in.
    </p>  
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
                <button className={styles.btnelegant3}>
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
{/* <div className={styles.challengesec}>
      <div className={styles.chrow1}>
      <div className={styles.chflexc}>
           
           <div>
               <h3 className={styles.chtitle}>
               Challenges
               </h3>
                <p className={styles.chdesc}>
                To make Betsetwin India's most trusted Online Casino & betting platform. 
                </p>
           </div>

           <div>
               <h3 className={styles.chtitle}>
               Challenges
               </h3>
                <p className={styles.chdesc}>
                Designing a Strong Brand Identity by gaining trust of players with 24/7 Customer support 
                </p>
           </div>

        </div>
      </div>

      <div className={styles.chrow2}>
           <div className={styles.chflexr}>
           <div>
           <Image
           src="/home/portfolios/betsetwin/comma.png"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.commaimg}
           priority
           />    
           </div>
           <div>
                <p className={styles.chdesc}>
                People love to gamble & India is known for it’s sports betting. We are trying to reach out through masses and gain their confidence that you can surely gain money playing the skillful casino & betting games.
                </p>
           </div>
         </div>
        
      </div>
</div> */}


{/*****************************/}

<div className={styles.betsetsec}>
    <Image
    src="/home/portfolios/betsetwin/betsetwin.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    className={styles.betsetimg}
    priority
    />    
</div>
{/*****************************/}
<div className={styles.bswsec}>
    <Image
    src="/home/portfolios/betsetwin/image4.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    className={styles.bswimg}
    priority
    />    
</div>
{/*****************************/}
<div className={styles.fontsec}>
     <div className={styles.fontcol1}>
      <div className={styles.frow1}>
      <h3 className={styles.bfont}>Bebas New Bold</h3>
      <h3 className={styles.afont}>AA</h3>
      </div>
     </div>
     <div className={styles.fontcol2}>
     <div className={styles.frow2}>
      <div>
       <h3 className={styles.ofont}>OPEN SANS</h3>
      </div>
      
      <div className={styles.colsec}>
            <div className={styles.colp}>
            <h3 className={styles.regfont}>Aa</h3>
            <h3 className={styles.srfont}>Regular</h3>
            </div>
            <div className={styles.colp}>
            <h3 className={styles.boldfont}>Aa</h3>
            <h3 className={styles.sbfont}>Bold</h3>
            </div>
      </div>
         
      </div>
     </div>
</div>
{/*****************************/}
<div className={styles.colorsec}>
      <div>
        <h2 className={styles.pritext}>
        Primary colors
        </h2>
       </div>
       <div>
       <Image
    src="/home/portfolios/betsetwin/image5.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    priority
    />   
       </div>

       <div>
        <h2 className={styles.pritext}>
        Secondary colors
        </h2>
       </div>
       <div className={styles.textcenter}>
    <Image
    src="/home/portfolios/betsetwin/image6.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    className={styles.dimg}
    priority
    />   
       </div>
</div>
{/*****************************/}

<div className={styles.livesec}>
  <div>
  <Image
    src="/home/portfolios/betsetwin/livecasino.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    priority
    />   
  </div>
  <div>
  <Image
    src="/home/portfolios/betsetwin/sports.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    priority
    />   
  </div>
  <div>
  <Image
    src="/home/portfolios/betsetwin/casino.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    priority
    />   
  </div>
</div>
{/*****************************/}
<div className={styles.imgsec}>
<Image
    src="/home/portfolios/betsetwin/image7.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    priority
    />     
</div>
{/*****************************/}
<div className={styles.ptsec}>
<Image
    src="/home/portfolios/betsetwin/image8.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    priority
    />     
</div>
{/*****************************/}
<div className={styles.websec}>
       <h2 className={styles.wtitle}>
       Website Design
       </h2>
       <p className={styles.wdesc}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum tempus ipsum, ut vestibulum dolor commodo sit amet. Nulla at tellus elementum, suscipit libero quis, luctus lectus. Aenean dignissim placerat velit, id cursus metus iaculis sit amet. 
       </p>
       <div className={styles.imgsec}>
<Image
    src="/home/portfolios/betsetwin/image10.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    priority
    />     
</div>
</div>
{/*****************************/}
<div className={styles.mobilesec}>
    <div className={styles.mcol1}>
    <Image
    src="/home/portfolios/betsetwin/image9.png"
    alt="Next.js"
    layout="responsive"
    width={100}
    height={100}
    priority
    />     
      </div>
      <div className={styles.mcol2}>
        <h2 className={styles.mtitle}>
        Mobile App <br></br>Design
        </h2>
        <p className={styles.mdesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum tempus ipsum, ut vestibulum dolor commodo sit amet. Nulla at tellus elementum, suscipit libero quis, luctus lectus. Aenean dignissim placerat velit, id cursus metus iaculis sit amet. 
        </p>
      </div>
</div>

{/*****************************/}
</div>
  )
}

export default betsetwin
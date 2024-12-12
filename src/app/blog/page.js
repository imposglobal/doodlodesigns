"use client";
import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import WorkAnimationlr from "../Component/WorkAnimatedLR";



const blog = () => {


  useEffect(() => {
    document.title = "blog - Doodlo Designs Studio";
  }, []);

  const [inactive, setInactive] = useState(true); // Set initial state to true
  
  const toggleClass = () => {
      setInactive(!inactive);
   };


  //  to get the blog api

    const [userdata, setData] = useState([]); 
    useEffect(() => {
      axios.get("https://doodlodesign.com/wp-json/wp/v2/posts?_embed")
        .then((response) => {
          console.log(response);
          setData(response.data); 
        })
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
    }, []);


    // Helper function to get category name from class list
const getCategoryFromClassList = (classList) => {
  if (Array.isArray(classList)) {
    // Look for class that contains 'category-' prefix (e.g. 'category-illustration')
    const categoryClass = classList.find(className => className.startsWith('category-'));
    if (categoryClass) {
      // Extract category name (without 'category-' prefix)
      return categoryClass.replace('category-', '');
    }
  }
  return "No Category"; // Return a default value if no category is found
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


          <div className={styles.mainsec}>
          <div className={styles.titlesec}>
          <h2 className={styles.mainheading}>OUR</h2>
          <h2 className={styles.sec_heading}>BLOGS</h2>
          </div>


          <div className={styles.blogsec}>
               {userdata.map((data) => (
                <a className={styles.link} href={`/blog/${data.slug}`} key={data.id}>     
                <div className={styles.blogrow} >
                {data._embedded && data._embedded['wp:featuredmedia'] && data._embedded['wp:featuredmedia'][0] && (
                <Image
                src={data._embedded['wp:featuredmedia'][0].source_url} 
                alt={data.title.rendered} 
                layout="responsive"
                width={100} 
                height={100}
                priority
                className={styles.bimg}
                />
                )}
                <h3 className={styles.date}>{new Date(data.date).toLocaleDateString()} | {getCategoryFromClassList(data.class_list)}</h3>
                </div> 
                </a>
               
                 ))}  
           </div>

           </div>


           {/* blog section end */}

           <div className={styles.blackbg}>
{/* Subscribe section */}
           <div className={styles.desktopv}>
       
       <div data-aos="fade-up" className={`${styles.pointer}`}>
        <div className={styles.discuss_row}>
        <h2 className={styles.mainheadingdis}>NEVER</h2>
          <h2 className={styles.sec_headingdis}>MISS AN UPDATE</h2>
          <p className={styles.disdesc}>Sign up for our newsletter to stay in the loop, Join our newsletter.  </p>
        
           <div className={styles.searchbar}>
    <input type="text" className={styles.subscribei}  placeholder="Email Address"/>
    <button className={styles.subscribtn}>Subscribe</button>
  </div>
          <div className={styles.booknow}>
            <div className={styles.bookwrap}>
            <WorkAnimationlr />
            </div>
            <div className={styles.bookwrap1}>
            <WorkAnimationlr />
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className={styles.mobilev}>
       {/* Subscribe section */}
       <div data-aos="fade-up" className={`${styles.pointer}`}>
        <div className={styles.discuss_row}>
        <div className={styles.booknow}>
            <div className={styles.bookwrap}>
            <WorkAnimationlr />
            </div>
            <div className={styles.bookwrap1}>
            <WorkAnimationlr />
            </div>
          </div>
        <h2 className={styles.mainheadingdis}>NEVER</h2>
          <h2 className={styles.sec_headingdis}>MISS AN UPDATE</h2>
          <p className={styles.disdesc}>Sign up for our newsletter to stay in the loop, Join our newsletter.</p>
          <div className={styles.searchbar}>
    <input type="text" className={styles.subscribei}  placeholder="Email Address"/>
    <button className={styles.subscribtn}>Subscribe</button>
  </div>   
        </div>
      </div>
      </div>
    
          </div>
            {/*Subscribe section End */}

         
      

    </div>
  )
}

export default blog
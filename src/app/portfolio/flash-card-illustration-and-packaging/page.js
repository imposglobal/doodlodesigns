"use client";
import React from 'react'
import Link from "next/link"
import Image from "next/image";
import styles from "./flashcard.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import {useState, useEffect} from 'react';

const flashcard = () => {

    useEffect(() => {
        document.title = "Little Learner's Trove | Flash Card & Illustration Design | Doodlo Design Studio";
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
        descriptionTag.setAttribute(
        "content",
        "Check out Doodlo Design's work with Little Learners Trove, creating playful, educational flashcards with vibrant designs that make learning fun for kids."
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
        canonicalTag.setAttribute("href", "https://doodlodesigns.com/portfolio/flash-card-illustration-and-packaging"); 
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


        <div className={styles.spacing}>
        <div className={styles.imagesec}>
        <Image
           src="https://imagedelivery.net/QeqoqeJCeBWIeVC5sxQgpw/d71ef5df-ad67-4bd1-4e49-12f5b9f99900/public"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>
        <div className={styles.imagesec1}>
        <Image
           src="https://imagedelivery.net/QeqoqeJCeBWIeVC5sxQgpw/5f997d7c-5f34-4271-b101-d91208b01f00/public"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>
        {/*********************************************/}

        <div className={styles.contentsec}>
         <h1 className={styles.title}>Little Learners Trove Flashcard Designs by Doodlo Design</h1>
         <h2 className={styles.subtitle}>Branding, Flash Card Illustration & Packaging</h2>
         <p className={styles.description}>
         Towards the beginning of 2021 Mumbai-based Little Learners Trove brand got in touch to develop their toddler educational product-based brand. They needed a modern but naive, colorful, and playful brand to take on international markets with a design-driven product line, but without losing focus on their Indian origins. We ended up developing a brand that, although modern, retains a naive feeling through the use of color and Flash Card illustration style.
         </p>
         <p className={styles.description}>
         The brand planning to launch flashcards that are educationally based for Indian Customers.
         </p>
        </div>

         {/*********************************************/}

         <div className={styles.rowsec}>
           <div className={styles.col1}>
           <Image
           src="/home/portfolios/flashcard/image1.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           className={styles.img}
           priority
          />
           </div>
           <div className={styles.col2}>
            <hr className={styles.rowhr}></hr>
            <p className={styles.rowdescription}>Our idea is to create a playful and niche brand, as the brand focuses on kids at the early stage to learn through flashcards, The shapes are geometrical made using clay dough and replicate as the building blocks of learning. It was arranged with a tower to make it more playful.</p>
            <p className={styles.rowdescription}>It started with creating a simple branding identity that is fun and memorable, with a bright color scheme and a funky logotype.</p>
           </div>
        </div>

        {/******************************/}
        <div className={styles.imagesec1}>
        <Image
           src="/home/portfolios/flashcard/FlashCard.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>

        {/***********************/}
       

        <div className={styles.Learnersec}>
          <p className={styles.Learnerdesc}>
          Little Learner Trove is on a mission that every product is designed with retaining your little one’s loves to hold them amused, involved, and entertained at the same time as they learn. Theses Brand is creating educational flashcards for kids from age 3 to onward. Their aim is to make kids learn with a playful activity of the fun session.
          </p>
          <p className={styles.Learnerdesc}>
          Introducing our Hindu Deities edition set that includes all the information to keep your little one excited and involved. Learn more about who are these gods about, and their offerings with the help of illustrations.
          </p>
        </div>

        {/***********************/}

        <div className={styles.imagesec1}>
        <Image
           src="/home/portfolios/flashcard/Mockup1.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>
          {/***********************/}

        <div className={styles.imagesec1}>
        <Image
           src="/home/portfolios/flashcard/Mockup2.webp"
           alt="Next.js"
           layout="responsive"
           width={100}
           height={100}
           priority
          />
        </div>

        {/* end of spacing */}
        </div>



   {/* end of div */}
    </div>
  )
}

export default flashcard
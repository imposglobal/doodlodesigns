"use client";
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '/public/bricks.json'; 
import Link from "next/link"
import Image from "next/image";
import styles from "./mahatee.module.css";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import VideoComponent from "@/app/Component/VideoComponent";
import Slidercomponent from '@/app/Component/Slider/Slidercomponent';

const Mahatee = () => {

    useEffect(() => {
        document.title = "Creative Solutions for Mahatee Interactives - Doodlo Designs";

        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
          descriptionTag.setAttribute(
            "content",
            "Branding Bonanza: We sprinkled our creative magic to craft a unique identity that screams â€˜Mahatee Interactives."
          );
        }
    
        // Update the meta keywords dynamically
        const keywordsTag = document.querySelector('meta[name="keywords"]');
        if (keywordsTag) {
          keywordsTag.setAttribute("content", "Creative Solutions");
        }

        // Add the canonical tag 
        const canonicalTag = document.querySelector('link[rel="canonical"]');
        if (canonicalTag) {
        canonicalTag.setAttribute("href", "https://doodlodesigns.com/portfolio/mahatee"); 
       } 
      }, []);

      const images = [
        { src: "/home/portfolios/mahatee/pen.webp", alt: "Slide 1", caption: "" },
        { src: "/home/portfolios/mahatee/notebook.webp", alt: "Slide 2", caption: "" },
        { src: "/home/portfolios/mahatee/envolope.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/mahatee/box.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/mahatee/letter.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/mahatee/email.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/mahatee/stipe.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/mahatee/badge.webp", alt: "Slide 3", caption: "" },
        { src: "/home/portfolios/mahatee/tape.webp", alt: "Slide 3", caption: "" },
      ];

      
  const settings = {
    slidesPerView: 1, // Custom settings if needed
    spaceBetween: 20,
    autoplay: { delay: 5000 },
  };
    //   lottie Controls
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
        useEffect(() =>{
            AOS.init({
              duration: 1000, // Customize the duration of the animations
              once: false,     // Whether animation should happen only once - while scrolling down
            });
          }, []);
       
        const [inactive, setInactive] = useState(true); // Set initial state to true
      
        const toggleClass = () => {
          setInactive(!inactive);
        };
    return(
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
        <div className={styles.video}>
        <VideoComponent videoSrc="/home/portfolios/mahatee/mahatee.mp4" />
        </div>
        <div className={styles.mahateesec}>
            <div className={styles.row}>
                <div className={styles.col1}>
                <h3 className={styles.headtext}>Creative Solutions for Mahatee Interactives</h3>
                <p className={styles.desc}>
                Mahatee Interactives, a dynamic children’s content company, needed a complete branding overhaul, including logo animation, website design, social media templates, and even engaging storybooks for kids. To give their audience a consistent and memorable experience, and reflects the essence of Indian culture and storytelling.
                </p>
                <p className={styles.highlight}><b>Industry</b> : E-commerce for Kids & Parents, Bedtime stories, and Playful Toys</p>
                <p className={styles.highlight}><b>Industry</b> : E-commerce for Kids & Parents, Bedtime stories, and Playful Toys</p>
                </div>
                <div className={styles.col2}>
                <Image
                       className={styles.childimg}
                       src="/home/portfolios/mahatee/image1.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>   
            </div>
            <div>
            <p className={styles.desc}><b>Branding</b> : Doodlo Design Studio weaved Mahatee Interactives spirit into a unique brand identity of Interaction between Parents & kids. The logo, a delightful fusion of storytelling which reflected their dedication to child-friendly content.</p>
            </div>
        </div>
        <div className={styles.branding}> 
        <Image
                       className={styles.brandimg}
                       src="/home/portfolios/mahatee/branding.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            <Image
                       className={styles.mahateeb}
                       src="/home/portfolios/mahatee/mahateeb.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                  <Image
                       className={styles.color}
                       src="/home/portfolios/mahatee/color.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                  <Image
                       className={styles.color}
                       src="/home/portfolios/mahatee/typo.jpeg"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                  <Image
                       className={styles.color}
                       src="/home/portfolios/mahatee/sticks.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
        </div>
        <div className={styles.booksection}>
            <div className={styles.row}>
                <div className={styles.col1}>
                <Image
                       className={styles.book}
                       src="/home/portfolios/mahatee/book.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
                <div className={styles.col2}>
                    <h3 className={styles.brandt}>
                    Brand Guideline
                    </h3>
                    <p className={styles.descbt}>
                    Branding Bonanza: We sprinkled our creative magic to craft a unique identity that screams <b>‘Mahatee Interactives’!</b> From a captivating logo to harmonious blend of colors, the rhythm of design, and the touch of wonder that define Mahatee’s identity.
                    </p>
                    <div className={styles.frame}>
                    <Image
                       src="/home/portfolios/mahatee/frame.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.slider}>
        <Slidercomponent images={images} settings={settings} />
        </div>
        <div className={styles.soicialsec}>
            <div>
                <h3 className={styles.socialt}>Social Media
                </h3>
                <p className={styles.socialdesc}>
                Doodlo Design Studio created a set of vibrant templates that reflect the brand’s identity, making it easy for Mahatee Interactives to maintain a visually appealing and cohesive social media feed.
                </p>
                <div className={styles.socialimg}>
                    <Image
                       src="/home/portfolios/mahatee/mobile.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
            </div>
        </div>
        <div className={styles.websec}>
            <div>
                <h3 className={styles.webt}>Website Design and Development
                </h3>
                <p className={styles.webdescs}>
                We developed a website with an intuitive interface, interactive elements, and captivating visuals, ensuring a seamless experience for visitors. Crafted a website that was more than a digital space – it was a vibrant playground, where Mahatee’s offerings unfolded with grace.
                </p>
                <div className={styles.webimg}>
                    <Image
                       src="/home/portfolios/mahatee/laptop.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
                </div>
            </div>
        </div>
        <div className={styles.bookdesignsec}>
          <h3 className={styles.bookdesignt}>Book Design and Illustration</h3>
          <p className={styles.webdescs}>Doodlo Design Studio ventured into the world of storytelling. With skillful illustrations and captivating book design, they transformed narratives into captivating visual journeys for young readers.</p>
        </div>
        <div className={styles.bdprocess}>
          <div className={styles.row}>
            <div className={styles.bdcol1}>
            <h3 className={styles.bdtext}>Book Design and Illustration</h3>
            <ol className={styles.olist}>
              <li>Story Book Research & Conceptualization</li>
              <li>Define your Illustration Style Explorations</li>
              <li>Character Development</li>
              <li>First Draft of Storyboarding</li>
              <li>Detailed Illustration Based on Feedbacks</li>
              <li>Color and Mood</li>
              <li>Layout and Design</li>
              <li>Review and Iteration</li>
              <li>Finalization</li>
              <li>Cover Book Design</li>
            </ol>

            </div>
            <div className={styles.bdcol2}></div>
          </div>
        </div>
        <div className={styles.storybsec}>
          <div className={styles.rowsb}>
            <div className={styles.scol1}>
            <Image
                       src="/home/portfolios/mahatee/ganpati.png"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
            <div className={styles.scol2}>
              <h3 className={styles.sbtext}>Ganesha Stories Board Books</h3>
              <p className={styles.sbdesc}>
              Based on<br></br>
              Purāṇas and<br></br>
              Ancient scriptures.
              </p>
            </div>
            <div className={styles.scol3}>
            <Image
                       src="/home/portfolios/mahatee/frame1.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
          </div>
        </div>
        <div className={styles.books}>
            <div className={styles.rowsb}>
            <div className={styles.bocol1}>
           <p className={styles.bodesc}>
           With our skillful illustrations and captivating book design, We transformed narratives into captivating visual journeys for young readers.<br></br><br></br>

From branding to storybooks, our creativity resonated with Mahatee Interactives’ vision, leaving an indelible mark on hearts and imaginations.
           </p>
            </div>
            <div className={styles.bocol2}>
            <Image      className={styles.gimg}
                       src="/home/portfolios/mahatee/ganpati2.webp"
                       alt="Next.js Logo"
                       layout="responsive"
                       width={100}
                       height={37}
                       priority
                  />
            </div>
            </div>
        </div>
        <div className={styles.thanku}>
          <h3>Thank You For Watching
          </h3>
        </div>
        </div>
    );
}
export default Mahatee;

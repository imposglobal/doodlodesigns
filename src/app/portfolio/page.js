"use client";
import Link from "next/link"
import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../Images/logo";
import Menu from "../Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import BrandAnimated from "../Component/Brandlineanimation";
import WorkAnimation from "../Component/WorkAnimated";
import Arrows from "../Component/Arrowanimation";
import WorkAnimationlr from "../Component/WorkAnimatedLR";

const Portfolio = () => {
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

    const portfolioItems = [
      {no:"01.",  id: 1, title: "SWIGGY + BOWL COMPANY", category: "Packaging | Collaterals", imageUrl: "/home/portfolio/1.png" },
      {no:"02.",  id: 2, title: "BLACK R FINANCE", category: "Branding | Website Design", imageUrl: "/home/portfolio/2.png" },
      {no:"03.",  id: 3, title: "CONSAFE VPN", category: "Branding | Website Design", imageUrl: "/home/portfolio/3.png" },
      {no:"04.",  id: 4, title: "MAHAIT INTERACTIVES", category: "Branding | Interactive Installations", imageUrl: "/home/portfolio/4.png" },
      {no:"05.",  id: 5, title: "TARBARI", category: "Packaging", imageUrl: "/home/portfolio/5.png" },
      {no:"06.",  id: 6, title: "CITIBANK", category: "Handbook | Poster", imageUrl: "/home/portfolio/6.png" },
      {no:"07.",  id: 7, title: "YOLOMART", category: "Branding | Retail Store", imageUrl: "/home/portfolio/7.png" },
      {no:"08.",  id: 8, title: "coffee table book", category: "Illustration | Publication ", imageUrl: "/home/portfolio/8.png" },
      {no:"09.",  id: 9, title: "Nutribee", category: "Packaging | Illustration ", imageUrl: "/home/portfolio/10.png" },
      {no:"10.",  id: 9, title: "Royal Wedding ", category: "Branding", imageUrl: "/home/portfolio/11.png" },
      {no:"11.",  id: 9, title: "Littile learners trove", category: "Branding | Flashcards Illustration | Packaging ", imageUrl: "/home/portfolio/12.png" },
      // Add more items as needed
  ];

  // State to track the number of items to display
  const [visibleItems, setVisibleItems] = useState(6);

  // Function to load more items
  const loadMore = () => {
      setVisibleItems(prevCount => prevCount + 6);
  };

    return (
      <div>
        <div className={styles.portfolio}>
            {/* Menu start */}
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
              <Link href="/our-services" className="mitem">
                Our Services
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
                <Link href="https://www.facebook.com/DoodloDesign">
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
            <div className={styles.logosec}>
            <Logo />
            </div>
        </div>
        <div className={styles.column2}>
            <div className={styles.logosec}>
            <Menu className={styles.menuicon} onClick={toggleClass} />
            </div>
        </div>
        </div>
        <div className={styles.booknow}>
            <div className={styles.bookwrap}>
            <WorkAnimation />
            </div>
            <div className={styles.bookwrap1}>
            <WorkAnimation />
            </div>
          </div>
          {/* Porfolio Section */}
          
        </div>
        <div className={styles.portsec}>
            <div className={styles.grid}>
              <div className={styles.texta}>
              <h2 data-aos="fade-up" className={styles.title}>Our 
              <Image data-aos="fade-up"
            className={styles.homestar}
            src="/home/homestar.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
            onClick={toggleClass}
          />
              </h2>
              <h2 data-aos="fade-up" className={styles.sec_heading}>Portfolio</h2>
              </div>
              <div>
              
              </div>
                {portfolioItems.slice(0, visibleItems).map((item, index) => (
                    <div
                        key={item.id}
                        className={`${styles.card}`}
                    >
                      <h2 data-aos="fade-up" className={styles.titles}>{item.no} </h2>
                        <img data-aos="fade-up" src={item.imageUrl} alt={item.title} className={styles.image} />
                        <div data-aos="fade-up" className={styles.textContainer}>
                            <h2 className={styles.itemTitle}>{item.title}</h2>
                            <p className={styles.category}>{item.category}</p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleItems < portfolioItems.length && (
                <button className={styles.loadMore} onClick={loadMore}>
                    Load More
                </button>
            )}
        </div>
          {/* Lets Discuss section */}
       <div data-aos="fade-up" className={`${styles.pointer}`}>
        <div className={styles.discuss_row}>
        <h2 className={styles.mainheadingdis}>Ready to Take Your</h2>
          <h2 className={styles.sec_headingdis}>Brand to the Next Level?</h2>
          <p className={styles.disdesc}>Contact Doodlo Design Studio today for a free consultation!</p>
          <a className="boton_elegante mtbtn">Schedule a Free Consultation</a>
          <div className={styles.booknows}>
            <div className={styles.bookwraps}>
            <WorkAnimationlr />
            </div>
            <div className={styles.bookwraps1}>
            <WorkAnimationlr />
            </div>
          </div>
        </div>
      </div>
      {/* Lets Discuss section End */}
      </div>
    );
};

export default Portfolio;

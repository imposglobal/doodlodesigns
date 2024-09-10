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
  useEffect(() => {
    document.title = "Portfolio - Doodlo Designs Studio";
  }, []);

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
      {no:"01",  id: 1, title: "SWIGGY + BOWL COMPANY", category: "Packaging Design | Marketing collaterals | Advertising ", imageUrl: "/home/portfolio/1.png" },
      {no:"02",  id: 2, title: "COINSAFE VPN", category: "Branding | Website UI | Web Development | Application | Marketing Collaterals", imageUrl: "/home/portfolio/csafe.gif" },
      {no:"03",  id: 3, title: "TARABAI", category: "Branding | Packaging | Retail Branding | Marketing Collaterals | Social Media", imageUrl: "/home/portfolio/5.png" },
      {no:"04",  id: 4, title: "BLACK B FINANCE", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/blackb.gif" },
      {no:"05",  id: 5, title: "YOLOMART", category: "Branding | Retail Branding | Marketing Collateral | Packaging | Website UI | Web Development | Social Media", imageUrl: "/home/portfolio/yolomart.png" },
      {no:"06",  id: 6, title: "MAHATEE INTERACTIVES", category: "Branding | Website UI | Shopify Development | Ecommerce Setup | Illustrations | Publication & Book Design | Social Media", imageUrl: "/home/portfolio/mahatee.gif" },
      {no:"07",  id: 7, title: "Click R & D", category: "Branding | Website UI | Social Media", imageUrl: "/home/portfolio/clickrnd.jpg" },
      {no:"08",  id: 8, title: "CITIBANK", category: "Illustrations | Presentation | Wall Graffiti", imageUrl: "/home/portfolio/6.png" },
      {no:"09",  id: 9, title: "Nutribee", category: "Illustration | Packaging Design", imageUrl: "/home/portfolio/10.png" },
      {no:"10",  id: 10, title: "Littile learners trove", category: "Branding | Illustrations | Product Design | Packaging Design | Social Media", imageUrl: "/home/portfolio/12.png" },
      {no:"11",  id: 11, title: "Wuerth Industries", category: "Publication - Coffee Table Book Design | Corporate Giftings", imageUrl: "/home/portfolio/8.png" },
      {no:"12",  id: 12, title: "Royal Wedding ", category: "Branding | Business Collaterals", imageUrl: "/home/portfolio/11.png" },
      
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
              <Link href="/services" className="mitem">
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
                    <div id={item.id}
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
          <p className={styles.disdesc}>Contact Doodlo Design Studio today for your brand consultation!</p>
          <Link href="/reach-us#calendly" className="boton_elegante mtbtn">Schedule a Free Consultation</Link>
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

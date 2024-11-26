"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../Images/logo";
import Menu from "../Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import WorkAnimation from "../Component/WorkAnimated";
import WorkAnimationlr from "../Component/WorkAnimatedLR";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio - Doodlo Designs Studio";
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration of the animations
      once: false,     // Whether animation should happen only once - while scrolling down
    });
  }, []);
   
  const [inactive, setInactive] = useState(true); // Set initial state to true

  const toggleClass = () => {
    setInactive(!inactive);
  };

  // const portfolioItems = [
  //   { url: "/portfolio/alhidaya", id: 13, title: "Alhidaya", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/alhidaya.gif" },
  //   { url: "#", id: 14, title: "Bet Set Win", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/bsw.gif" },
  //   { url: "/portfolio/predicta-digital", id: 15, title: "Predicta Digital", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/predicta.png" },
  //   { url: "/portfolio/swiggy-x-the-bowl-company", id: 1, title: "SWIGGY + BOWL COMPANY", category: "Packaging Design | Marketing collaterals | Advertising ", imageUrl: "/home/portfolio/1.png" },
  //   { url: "/portfolio/coinsafe-vpn", id: 2, title: "COINSAFE VPN", category: "Branding | Website UI | Web Development | Application | Marketing Collaterals", imageUrl: "/home/portfolio/csafe.gif" },
  //   { url: "/portfolio/tarabai", id: 3, title: "TARABAI", category: "Branding | Packaging | Retail Branding | Marketing Collaterals | Social Media", imageUrl: "/home/portfolio/5.png" },
  //   { url: "/portfolio/blackb-finance-services", id: 4, title: "BLACK B FINANCE", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/blackb.gif" },
  //   { url: "portfolio/yolo-mart", id: 5, title: "YOLOMART", category: "Branding | Retail Branding | Marketing Collateral | Packaging | Website UI | Web Development | Social Media", imageUrl: "/home/portfolio/yolomart.png" },
  //   { url: "/portfolio/mahatee", id: 6, title: "MAHATEE INTERACTIVES", category: "Branding | Website UI | Shopify Development | Ecommerce Setup | Illustrations | Publication & Book Design | Social Media", imageUrl: "/home/portfolio/mahatee.gif" },
  //   { url: "portfolio/clickrnd", id: 7, title: "Click R & D", category: "Branding | Website UI | Social Media", imageUrl: "/home/portfolio/clickrnd.jpg" },
  //   { url: "portfolio/citibank", id: 8, title: "CITIBANK", category: "Illustrations | Presentation | Wall Graffiti", imageUrl: "/home/portfolio/6.png" },
  //   { url: "/portfolio/nutribee", id: 9, title: "Nutribee", category: "Illustration | Packaging Design", imageUrl: "/home/portfolio/10.png" },
  //   { url: "portfolio/flash-card-illustration-and-packaging", id: 10, title: "Littile learners trove", category: "Branding | Illustrations | Product Design | Packaging Design | Social Media", imageUrl: "/home/portfolio/12.png" },
  //   { url: "/portfolio/coffee-table-book", id: 11, title: "Wuerth Industries", category: "Publication - Coffee Table Book Design | Corporate Giftings", imageUrl: "/home/portfolio/8.png" },
  //   { url: "/portfolio/royal-weddings", id: 12, title: "Royal Wedding ", category: "Branding | Business Collaterals", imageUrl: "/home/portfolio/11.png" },
  
  // ];


   const portfolioItems = [
    { url: "/portfolio/predicta-digital", id: 15, title: "Predicta Digital", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/predicta.png" },
    { url: "/portfolio/swiggy-x-the-bowl-company", id: 1, title: "SWIGGY + BOWL COMPANY", category: "Packaging Design | Marketing collaterals | Advertising ", imageUrl: "/home/portfolio/1.png" },
    { url: "/portfolio/portage", id: 16, title: "Portage", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/portage.png" },
    { url: "/portfolio/dhrona", id: 17, title: "Dhrona", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/dhrona.png" },
    { url: "/portfolio/tarabai", id: 3, title: "TARABAI", category: "Branding | Packaging | Retail Branding | Marketing Collaterals | Social Media", imageUrl: "/home/portfolio/5.png" },
    { url: "/portfolio/mahatee", id: 6, title: "MAHATEE INTERACTIVES", category: "Branding | Website UI | Shopify Development | Ecommerce Setup | Illustrations | Publication & Book Design | Social Media", imageUrl: "/home/portfolio/mahatee.gif" },
    { url: "/portfolio/alhidaya", id: 13, title: "Alhidaya", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/alhidaya.gif" },
    { url: "/portfolio/coinsafe-vpn", id: 2, title: "COINSAFE VPN", category: "Branding | Website UI | Web Development | Application | Marketing Collaterals", imageUrl: "/home/portfolio/csafe.gif" },
    { url: "/portfolio/blackb-finance-services", id: 4, title: "BLACK B FINANCE", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/blackb.gif" },
    { url: "portfolio/yolo-mart", id: 5, title: "YOLOMART", category: "Branding | Retail Branding | Marketing Collateral | Packaging | Website UI | Web Development | Social Media", imageUrl: "/home/portfolio/yolomart.png" },
    { url: "portfolio/clickrnd", id: 7, title: "Click R & D", category: "Branding | Website UI | Social Media", imageUrl: "/home/portfolio/clickrnd.jpg" },
    { url: "portfolio/citibank", id: 8, title: "CITIBANK", category: "Illustrations | Presentation | Wall Graffiti", imageUrl: "/home/portfolio/6.png" },
    { url: "/portfolio/nutribee", id: 9, title: "Nutribee", category: "Illustration | Packaging Design", imageUrl: "/home/portfolio/10.png" },
    { url: "portfolio/flash-card-illustration-and-packaging", id: 10, title: "Littile learners trove", category: "Branding | Illustrations | Product Design | Packaging Design | Social Media", imageUrl: "/home/portfolio/12.png" },
    { url: "/portfolio/coffee-table-book", id: 11, title: "Wuerth Industries", category: "Publication - Coffee Table Book Design | Corporate Giftings", imageUrl: "/home/portfolio/8.png" },
    { url: "/portfolio/royal-weddings", id: 12, title: "Royal Wedding ", category: "Branding | Business Collaterals", imageUrl: "/home/portfolio/11.png" },
    { url: "#", id: 14, title: "Bet Set Win", category: "Branding | Website UI | Web Development", imageUrl: "/home/portfolio/bsw.gif" },
  
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
                    <Link href="/" className="mitem ">Home</Link>
                  </div>
                  <div className="menuitem">
                    <Link href="/portfolio" className="mitem active">Portfolio</Link>
                    <div className="border-bottom"></div>
                  </div>
                  <div className="menuitem">
                    <Link href="/services" className="mitem">Our Services</Link>
                  </div>
                  <div className="menuitem">
                    <Link href="/our-story" className="mitem">Our Story</Link>
                  </div>
                  <div className="menuitem">
                    <Link href="/reach-us" className="mitem">Reach us</Link>
                  </div>
                  <div className="menuitem">
                    <Link href="https://doodlocomics.com/" className="mitem">Shop</Link>
                  </div>
                </div>
                <div className="mcol2">
                  <div className="socialsec">
                    <p className="gtt">Get in touch </p>
                    <Link href="https://in.linkedin.com/company/doodlodesign">
                      <Image className="msocial" src="/home/social/flinked.svg" alt="LinkedIn" layout="responsive" width={100} height={37} priority />
                    </Link>
                    <Link href="https://www.instagram.com/doodlo_design/">
                      <Image className="msocial" src="/home/social/finsta.svg" alt="Instagram" layout="responsive" width={100} height={37} priority />
                    </Link>
                    <Link href="https://www.linkedin.com/company/13436743">
                      <Image className="msocial" src="/home/social/ffb.svg" alt="Facebook" layout="responsive" width={100} height={37} priority />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mcopy">
              <p>© 2024 Doodlo | All Rights Reserved | Terms of Use | Privacy Policy</p>
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
        {/* Portfolio Section */}
      </div>
      <div className={styles.portsec}>
        <div className={styles.grid}>
          <div className={styles.texta}>
            <h2 data-aos="fade-up" className={styles.title}>Our 
              <Image data-aos="fade-up" className={styles.homestar} src="/home/homestar.png" alt="Star" layout="responsive" width={100} height={37} priority onClick={toggleClass} />
            </h2>
            <h2 data-aos="fade-up" className={styles.sec_heading}>Portfolio</h2>
          </div>
          <div></div>
          {portfolioItems.slice(0, visibleItems).map((item, index) => (
            <div id={item.id} key={item.id} className={`${styles.card}`}>
              <h2 data-aos="fade-up" className={styles.titles}>{String(index + 1).padStart(2, '0')}</h2>
              <Link className={styles.hurl} href={item.url}>
                <img data-aos="fade-up" src={item.imageUrl} alt={item.title} className={styles.image} />
                <div data-aos="fade-up" className={styles.textContainer}>
                  <h2 className={styles.itemTitle}>{item.title}</h2>
                  <p className={styles.category}>{item.category}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {visibleItems < portfolioItems.length && (
          <button className={styles.loadMore} onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

"use client";
import Link from "next/link"
import Image from "next/image";
import Logo from "./Images/logo";
import styles from "./page.module.css";
import ImageRow from './Images/ImageRow';
import Menu from "./Component/Menu"
import { useEffect,useState,useRef,useLayoutEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WorkAnimated from './Component/WorkAnimated';
import Carousel from "./Component/Carousel";
import Gallery from "./Component/Gallery";
import ImageFlip from "./Component/FlipImage";
import Arrows from "./Component/Arrowanimation";
import WorkAnimationlr from "./Component/WorkAnimatedLR";
import BrandAnimated from "./Component/Brandlineanimation";
import ReachusAnimated from "./Component/ReachusAnimation";
import ContactForm from "./Component/ContactForm";
import AccordionOne from "./Component/Accordions/AccordianOne";
import VideoComponent from "./Component/VideoComponent";
import Head from "next/head";



const Home = () => {
  const [selectedOption, setSelectedOption] = useState('someOption');

  useEffect(() => {
    document.title = "Doodlo Designs Studio";
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration of the animations
      once: false,    // Whether animation should happen only once - while scrolling down
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const imagesRow1 = [
    "/home/nrow1img1.png",
    "/home/row1img1.jpg",
    "/home/row1img2.jpg",
    "/home/row1img3.jpg",
    "/home/nrow1last.png",
    "/home/nrow1img1.png",
    "/home/row1img1.jpg",
    "/home/row1img2.jpg",
    "/home/row1img3.jpg",
    "/home/nrow1last.png",
  ];

  const imagesRow2 = [
    "/home/nrow2img1.png",
    "/home/row2img1.jpg",
    "/home/row2img2.jpg",
    "/home/row2img3.jpg",
    "/home/row2last.png",
    "/home/row2img1.jpg",
    "/home/row2img2.jpg",
    "/home/row2img3.jpg",
    "/home/row2last.png",
    "/home/row2img1.jpg",
    "/home/row2img2.jpg",
    "/home/row2img3.jpg",
  ];

  const imagesRow3 = [
    "/home/nrow3img1.png",
    "/home/nrow3img2.png",
     "/home/row3img1.jpg",
     "/home/row3img2.jpg",
      "/home/row2img4.jpg",
      "/home/nrow3img1.png",
      "/home/nrow3img2.png",
     "/home/row3img1.jpg",
     "/home/row3img2.jpg",
      "/home/row2img4.jpg",
   ];


   const items = [
    { id: 1, ids: 'fimg1', ptitle:'Yolomart', pdesc:'Branding | UI | Social Media', name: 'Item 1', image: '/home/gallery/gal1.png', category: 'category1' },
    { id: 2, ids: 'fimg2', ptitle:'Black B', pdesc:'UI', name: 'Item 2', image: '/home/gallery/gal2.png', category: 'category2' },
    { id: 3, ids: 'fimg3', ptitle:'Swiggy', pdesc:'Packaging', name: 'Item 3', image: '/home/gallery/gal3.png', category: 'category2' },
    { id: 4, ids: 'fimg4', ptitle:'Coinsafe', pdesc:'Branding | UI ', name: 'Item 4', image: '/home/gallery/gal4.png', category: 'category1' },
    { id: 5, ids: 'fimg5', ptitle:'Nutribee', pdesc:'Packaging', name: 'Item 5', image: '/home/gallery/gal5.png', category: 'category2' },
    { id: 6, ids: 'fimg6', ptitle:'Mahati', pdesc:'Branding | UI | Illustration', name: 'Item 6', image: '/home/gallery/gal6.png', category: 'category1' },
    { id: 7, ids: 'fimg7', ptitle:'Wurth', pdesc:'Publication', name: 'Item 7', image: '/home/gallery/gal7.png', category: 'category1' },
    { id: 8, ids: 'fimg8', ptitle:'Betsetwin', pdesc:'Branding | UI ', name: 'Item 8', image: '/home/gallery/gal8.png', category: 'category1' },
    { id: 9, ids: 'fimg9', ptitle:'Tarabai', pdesc:'Branding', name: 'Item 9', image: '/home/gallery/gal9.png', category: 'category2' },
    { id: 10, ids: 'fimg10', ptitle:'Little Learners Trove', pdesc:'Illustration | Packaging', name: 'Item 10', image: '/home/gallery/gal10.png', category: 'category2' },
    { id: 11, ids: 'fimg11', ptitle:'Click r&D', pdesc:'Branding | UI ', name: 'Item 11', image: '/home/gallery/gal11.png', category: 'category2' },
    // Add more items with appropriate categories
  ];

  const [hoverText, setHoverText] = useState('PROJECTS THAT MAKE A DIFFERENCE');

  const handleMouseEnter = (text) => {
    setHoverText(text);
  };

  const handleMouseLeave = () => {
    setHoverText('PROJECTS THAT MAKE A DIFFERENCE');
  };
  const [inactive, setInactive] = useState(true); // Set initial state to true

  const toggleClass = () => {
    setInactive(!inactive);
  };

  
  
  return (
    <section>
    {/* Menu start */}
     <div id="wrapper">
      <div className={`menuwrap ${inactive ? 'inactive' : ''} doodbg`}>
        <div className="menusec">
          <div className="menurow">
            <div className="mcol1">
            <div className="menuitem">
              <Link href="/" className="mitem active">
                Home
              </Link>
              <div className="border-bottom"></div>
            </div>

            <div className="menuitem">
              <Link href="/portfolio" className="mitem">
                Portfolio
              </Link>
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
    {/* Mobile Menu */}
    <div className={styles.mobmenu}>
      <div className={styles.row}>
        <div className={styles.mobcol}>
          <div className={styles.moblogo}>
          <Logo />
          </div>
          </div>
        <div className={styles.mobcol}>
        <Menu onClick={toggleClass} />
        </div>
      </div>
    </div>
    {/* mobile menu end */}
    <div className={styles.home_bg}>
      <div className={styles.logo_col}>
        <Logo />
      </div>
      
    <div className={styles.scrollimg}>
        {/* First row of images */}
        <div className={styles.img_row_col}>
      <ImageRow images={imagesRow1} />
      </div>
      {/* Second row of images */}
      <div className={styles.img_row_col2}>
        <ImageRow images={imagesRow2} />
      </div>
       {/* Third row of images */}
       <div className={styles.img_row_col3}>
      <ImageRow images={imagesRow3} />
      </div>
    </div>
     <div className={styles.home_hero_content}> 
      <div className={styles.deskmenu}  onClick={toggleClass} >
      <Menu />
      </div>
     
     <div className={styles.block}>
      <Image data-aos="fade-up"
            className={styles.homestar}
            src="/home/homestar.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
     </div>
      <h2 data-aos="fade-up" className={styles.text_stroke_hover}>We're your go-to</h2>
      <h2 data-aos="fade-up" className={styles.text_title}>Creative Studio</h2>
      <p data-aos="fade-up" className={styles.home_hero_desc}>Of course we're into Branding, Web<br/> Design, Packaging, Illustrations,<br/> publication, social media & what not!</p>
      <div data-aos="fade-up">
      <Link className="boton_elegante" href="/our-services">
      EXPLORE MORE
      </Link>
      </div>
      <div data-aos="fade-up">
      <Image
            className={styles.trustp}
            src="/home/trustp.svg"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <p className={styles.trustdesc}>TrustScore <b>4.1</b> | <b>347</b> Reviews</p>
      </div>
     </div>
     </div>
    
    {/* Our services */}
    
    
    <div data-aos="fade-up" className={`${styles.services} ${styles.srv_scroller}`}>
    <div className={styles.service_hight}>
    <h2 className={styles.mainheading}>OUR</h2>
    <h2 className={styles.sec_heading}>SERVICES</h2>
    <div className="accordion">
    <AccordionOne />  
    </div>
    </div>
   </div>

   {/* section work animated */}
    <div className={styles.wokeani}>
      <div>
            <WorkAnimated />
          </div>
      </div>

    <div className={styles.wokeanilr}>
        <div>
        <WorkAnimated />
        </div>
    </div>

    <div data-aos="fade-up" className={styles.filtergal}>
    <div className={styles.galtitle}>
    <h2 className={styles.mainheading}>OUR</h2>
    <h2 className={styles.sec_heading}>Portfolio</h2>
    </div>
      <Gallery items={items} />
    </div>

    <div className={styles.clientle}>
      <h2 data-aos="fade-up" className={styles.mainheading}>OUR</h2>
      <h2 data-aos="fade-up" className={styles.sec_heading}>clientele</h2>
      <div data-aos="fade-up">
      <ImageFlip  />
      </div>
      
      <div data-aos="fade-up" className={styles.divider}>Partnered with</div>
      <div data-aos="fade-up" className={styles.partnerimgsec}>
      <Image
            className={styles.partnerimg}
            src="/home/partner/part1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.partnerimg}
            src="/home/partner/part2.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.partnerimg}
            src="/home/partner/part3.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.partnerimg}
            src="/home/partner/part4.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
      </div>
    </div>

   {/* review slider */}
   <div className="testimonial">
    <h2 data-aos="fade-up" className={styles.mainheading}>Client</h2>
      <h2 data-aos="fade-up" className={styles.sec_heading}>Feedback</h2>
      </div>
    <Carousel />
    {/* review slider End*/}
    
    <div data-aos="fade-up" className={styles.setsapart}>
    <h2 className={styles.mainheading}>What</h2>
      <h2 className={styles.sec_heading}>Sets us apart</h2>
      <div className={styles.rowpart}>
        <div className={styles.columnpart1}>
          <Arrows />
        </div>
        <div className={styles.columnpart2}>
        {/* pointer start */}
          <div data-aos="fade-up" className={`${styles.pointer} ${styles.pmar}`}>
            <div className={styles.pointer_inner}>
              <div className={styles.pnum}>
                01.
              </div>
              <div className={styles.pimg}>
                  <Image
                  className={styles.ppimg}
                  src="/home/pointers/pimg1.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
              </div>
              <div className={styles.pdesc}>
                <h2>Tailored Approach</h2>
                <p>Custom solutions that fit your brand perfectly.</p>
              </div>
            </div>
          </div>
          {/* pointer end */}

          {/* pointer start */}
          <div data-aos="fade-up" className={styles.pointers}>
            <div className={styles.pointer_inner}>
              <div className={styles.pnum}>
                02.
              </div>
              <div className={styles.pimg}>
                  <Image
                  className={styles.ppimg}
                  src="/home/pointers/pimg2.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
              </div>
              <div className={styles.pdesc}>
                <h2>End to End Solution</h2>
                <p>From concept to launch, we’ve got you covered.</p>
              </div>
            </div>
          </div>
          {/* pointer end */}

          {/* pointer start */}
          <div data-aos="fade-up" className={`${styles.pointer}`}>
            <div className={styles.pointer_inner}>
              <div className={styles.pnum}>
                03.
              </div>
              <div className={styles.pimg}>
                  <Image
                  className={styles.ppimg}
                  src="/home/pointers/pimg3.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
              </div>
              <div className={styles.pdesc}>
                <h2>Industry Expertise</h2>
                <p>Extensive expertise across diverse industries.</p>
              </div>
            </div>
          </div>
          {/* pointer end */}

          {/* pointer start */}
          <div data-aos="fade-up" className={styles.pointers}>
            <div className={styles.pointer_inner}>
              <div className={styles.pnum}>
                04.
              </div>
              <div className={styles.pimg}>
                  <Image
                  className={styles.ppimg}
                  src="/home/pointers/pimg4.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
              </div>
              <div className={styles.pdesc}>
                <h2>Client - Centric focus </h2>
                <p>Your needs drive our creativity.</p>
              </div>
            </div>
          </div>
          {/* pointer end */}

          {/* pointer start */}
          <div data-aos="fade-up" className={styles.pointers}>
            <div className={styles.pointer_inner}>
              <div className={styles.pnum}>
                05.
              </div>
              <div className={styles.pimg}>
                  <Image
                  className={styles.ppimg}
                  src="/home/pointers/pimg5.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
              </div>
              <div className={styles.pdesc}>
                <h2>Quality & Efficiency</h2>
                <p>High standards, fast turnaround.</p>
              </div>
            </div>
          </div>
          {/* pointer end */}

        </div>
        
      </div>
      <div className={styles.desktopv}>
       {/* Lets Discuss section */}
       <div data-aos="fade-up" className={`${styles.pointer}`}>
        <div className={styles.discuss_row}>
        <h2 className={styles.mainheadingdis}>Let’s Discuss </h2>
          <h2 className={styles.sec_headingdis}>Your next project</h2>
          <p className={styles.disdesc}><b>Ready to turn your vision into reality?</b> Whether you need branding, web design, packaging, or digital marketing, we’re here to help. Let’s brainstorm, create, and bring your ideas to life.</p>
          <a className="boton_elegante mtbtn">Book an appointment </a>
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
       {/* Lets Discuss section */}
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
        <h2 className={styles.mainheadingdis}>Let’s Discuss </h2>
          <h2 className={styles.sec_headingdis}>Your next project</h2>
          <p className={styles.disdesc}><b>Ready to turn your vision into reality?</b> Whether you need branding, web design, packaging, or digital marketing, we’re here to help. Let’s brainstorm, create, and bring your ideas to life.</p>
          <a className="boton_elegante mtbtn">Book an appointment </a>
          
        </div>
      </div>
      </div>
      {/* Lets Discuss section End */}

      {/* Our Story section start */}
      <div className={styles.story}>
        <div className={styles.rowstory}>
          <div className={styles.columnst1}>
          <h2 data-aos="fade-up" className={styles.mainheading}>Our</h2>
          <h2 data-aos="fade-up" className={styles.sec_heading}>Story</h2>
          <div className={`${styles.stimg} ${styles.mobilev}`}>
            <Image data-aos="fade-up"
                  className={styles.ppimg}
                  src="/home/storyimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            </div>
          <p data-aos="fade-up" className={styles.storydesc}>
          At Doodlo, we're storytellers at heart. We believe brands are powerful narratives, and we craft them with simplicity and impact. We don't just design, we translate your vision into actionable solutions that resonate with your audience.<br/><br/>

          <b>Decoding Brands, Website & Designs driven<br/> bypassion & Possibilities.</b><br/><br/>

          Our love for life, color, and endless possibilities fuels our creative fire. It's what we call the "Doodlo 3D's": Doodle, Design, Develop. We guide you through every step of the storytelling journey, from brainstorming to flawless execution. We craft user experiences that are not only beautiful but also functional. With a healthy dose of passion, flexibility, and precision, we build brands that achieve results.
          </p>
          </div>
          <div className={styles.columnst2}>
            <div className={`${styles.stimg} ${styles.desktopv}`}>
            <Image data-aos="fade-up"
                  className={styles.ppimg}
                  src="/home/storyimg.png"
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
      {/* Our Story section end */}
     
      </div>
      <div className={styles.brandanim}>
        <BrandAnimated/>
      </div>

    {/* Project Diffrence */}
    <div className={`${styles.prodiff} ${styles.desktopv}`} data-aos="fade-up">
      <div className={`${styles.rowstory} ${styles.projrow}`}>
        <div data-aos="fade-up" className={styles.columnpdiff1}>
        <h2>{hoverText}</h2>
        </div>
        <div data-aos="fade-up" className={styles.columnpdiff2}>
          <h3 data-aos="fade-up" id="fnum" className={styles.prtitle}>387+</h3>
          <p data-aos="fade-up" className={styles.prdesc}>Project Delivered & Counting</p>
        </div>
      </div>
      <div className={`${styles.rowstory} ${styles.projrowp}`} id={styles.proj}>
        <div className={styles.columnpdiff3} onMouseEnter={() => handleMouseEnter('22+ Years of Combined Experience')} onMouseLeave={handleMouseLeave}>
        <h3 data-aos="fade-up" className={styles.prtitle}>22+</h3>
          <p data-aos="fade-up" className={styles.prdesc}>Years of Combined Experience </p>
        </div>
        <div className={styles.columnpdiff4} onMouseEnter={() => handleMouseEnter('22+ Brands Shaped')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle} data-aos="fade-up">65+</h3>
          <p className={styles.prdesc} data-aos="fade-up">Brands Shaped </p>
        </div>
        <div className={styles.columnpdiff5} onMouseEnter={() => handleMouseEnter('7+ Happy Clients')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle} data-aos="fade-up">9/10</h3>
          <p className={styles.prdesc} data-aos="fade-up">Happy Clients</p>
        </div>
        <div className={styles.columnpdiff6} onMouseEnter={() => handleMouseEnter('14+ Industries Served')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle} data-aos="fade-up">14+</h3>
          <p className={styles.prdesc} data-aos="fade-up">Industries served</p>
        </div>
      </div>
    </div>

    <div className={`${styles.prodifff} ${styles.mobilev}`} data-aos="fade-up">
  <div className={styles.gridContainer}>
    <div className={styles.gridItem}>
      <h2 className={styles.overtext}>{hoverText}</h2>
    </div>
    <div className={styles.gridItem}>
      <h3 id="fnum" className={styles.prtitle}>387+</h3>
      <p className={styles.prdesc}>387+ Project Delivered & Counting</p>
    </div>
    <div className={styles.gridItem} onMouseEnter={() => handleMouseEnter('22+ Years of Combined Experience')} onMouseLeave={handleMouseLeave}>
      <h3 className={styles.prtitle}>22+</h3>
      <p className={styles.prdesc}>Years of Combined Experience</p>
    </div>
    <div className={styles.gridItem} onMouseEnter={() => handleMouseEnter('65+ Brands Shaped')} onMouseLeave={handleMouseLeave}>
      <h3 className={styles.prtitle}>65+</h3>
      <p className={styles.prdesc}>Brands Shaped</p>
    </div>
    <div className={styles.gridItem} onMouseEnter={() => handleMouseEnter('9/10 Happy Clients')} onMouseLeave={handleMouseLeave}>
      <h3 className={styles.prtitle}>9/10</h3>
      <p className={styles.prdesc}>Happy Clients</p>
    </div>
    <div className={styles.gridItem} onMouseEnter={() => handleMouseEnter('14+ Industries Served')} onMouseLeave={handleMouseLeave}>
      <h3 className={styles.prtitle}>14+</h3>
      <p className={styles.prdesc}>Industries served</p>
    </div>
  </div>
</div>



    <div className={styles.videosec} >
    <div>
      {/* Other components or content */}
      <VideoComponent />
      {/* More content */}
    </div>
    </div>

   {/* section Reach Us animated */}
   <div className={styles.wokeani}>
      <div>
            <ReachusAnimated />
          </div>
      </div>

    <div className={styles.wokeanilr}>
        <div>
        <ReachusAnimated />
        </div>
    </div>

    {/* contact form section */}
    <div></div>
    <ContactForm />
    {/* contac Form End */}

    {/* Doodlo Shop Section */}
    <div className={styles.shopsec} data-aos="fade-up">
      <div className={styles.shoprow}>
        <div className={styles.shopcol1}>
          <div className={styles.shoprowinn}>
          <div className={styles.shopwi1}>
          <Image
                  className={styles.ppimgs}
                  src="/home/crow1.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow2.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow3.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                 <Image
                  className={styles.ppimgs}
                  src="/home/crow1.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow2.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow3.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                 <Image
                  className={styles.ppimgs}
                  src="/home/crow1.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow2.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow3.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow1.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow2.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow3.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
          </div>
          <div className={styles.shopwi2}>
          <Image
                  className={styles.ppimgs}
                  src="/home/crow21.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow22.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow23.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                 <Image
                  className={styles.ppimgs}
                  src="/home/crow24.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                 <Image
                  className={styles.ppimgs}
                  src="/home/crow21.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow22.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow23.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                 <Image
                  className={styles.ppimgs}
                  src="/home/crow24.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                 <Image
                  className={styles.ppimgs}
                  src="/home/crow21.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow22.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow23.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                 <Image
                  className={styles.ppimgs}
                  src="/home/crow24.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                 <Image
                  className={styles.ppimgs}
                  src="/home/crow21.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow22.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.ppimgs}
                  src="/home/crow23.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                 <Image
                  className={styles.ppimgs}
                  src="/home/crow24.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                
                 
          </div>
          </div>
        </div>
        <div className={styles.shopcol2}>
          <div className={styles.shoprow}>
        <h2 data-aos="fade-up" className={styles.mainheadingdc}>Shop</h2>
                <Image data-aos="fade-up"
                  className={styles.starim}
                  src="/home/startdc.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
        </div>
        <h2 data-aos="fade-up" className={styles.sec_headingdc}>For Cute Goodies</h2>
        <p data-aos="fade-up" className={styles.dcdesc}>Wanna buy some cute stuff? Explore our selection online, then visit our store for even more amazing finds!</p>
        <div data-aos="fade-up">
        <a  href="" className={styles.dcbtn}>Shop doodlo comics </a>
        </div>
        
        </div>
      </div>
    </div>

   
    </section>
  );
};

export default Home;
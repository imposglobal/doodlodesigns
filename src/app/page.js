"use client";
import Image from "next/image";
import Logo from "./Images/logo";
import styles from "./page.module.css";
import ImageRow from './Images/ImageRow';
import Menu from "./Component/Menu"
import { useEffect,useState } from 'react';
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


const Home = () => {
  const [selectedOption, setSelectedOption] = useState('someOption');

  useEffect(() =>{
    AOS.init({
      duration: 1000, // Customize the duration of the animations
      once: false,     // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const imagesRow1 = [
    "/home/row1img1.jpg",
    "/home/row1img2.jpg",
    "/home/row1img3.jpg",
    "/home/row1img4.jpg",
    "/home/row1img1.jpg",
    "/home/row1img2.jpg",
    "/home/row1img3.jpg",
    "/home/row1img4.jpg",
  ];

  const imagesRow2 = [
    "/home/row2img1.jpg",
    "/home/row2img2.jpg",
    "/home/row2img3.jpg",
    "/home/row2img4.jpg",
    "/home/row2img1.jpg",
    "/home/row2img2.jpg",
    "/home/row2img3.jpg",
    "/home/row2img4.jpg",
    "/home/row2img1.jpg",
    "/home/row2img2.jpg",
    "/home/row2img3.jpg",
    "/home/row2img4.jpg",
  ];

  const imagesRow3 = [
     "/home/row3img1.jpg",
     "/home/row3img2.jpg",
     "/home/row3img3.jpg",
     "/home/row3img4.jpg",
     "/home/row3img1.jpg",
     "/home/row3img2.jpg",
     "/home/row3img3.jpg",
     "/home/row3img4.jpg",
   ];


   const items = [
    { id: 1, ids: 'fimg1', name: 'Item 1', image: '/home/gallery/gal1.png', category: 'category1' },
    { id: 2, ids: 'fimg2', name: 'Item 2', image: '/home/gallery/gal2.png', category: 'category2' },
    { id: 3, ids: 'fimg3', name: 'Item 3', image: '/home/gallery/gal3.png', category: 'category2' },
    { id: 4, ids: 'fimg4', name: 'Item 4', image: '/home/gallery/gal4.png', category: 'category1' },
    { id: 5, ids: 'fimg5', name: 'Item 5', image: '/home/gallery/gal5.png', category: 'category2' },
    { id: 6, ids: 'fimg6', name: 'Item 6', image: '/home/gallery/gal6.png', category: 'category1' },
    { id: 7, ids: 'fimg7', name: 'Item 7', image: '/home/gallery/gal7.png', category: 'category1' },
    { id: 8, ids: 'fimg8', name: 'Item 8', image: '/home/gallery/gal8.png', category: 'category1' },
    { id: 9, ids: 'fimg9', name: 'Item 9', image: '/home/gallery/gal9.png', category: 'category2' },
    { id: 10, ids: 'fimg10', name: 'Item 10', image: '/home/gallery/gal10.png', category: 'category2' },
    // Add more items with appropriate categories
  ];

  const [hoverText, setHoverText] = useState('PROJECTS THAT MAKE A DIFFERENCE');

  const handleMouseEnter = (text) => {
    setHoverText(text);
  };

  const handleMouseLeave = () => {
    setHoverText('PROJECTS THAT MAKE A DIFFERENCE');
  };

  return (
    <section>
    <div className={styles.home_bg}>
      <div className={styles.logo_col}>
        <Logo />
      </div>
      
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
     <div className={styles.home_hero_content}> 
     <Menu />
     <Image
            className={styles.homestar}
            src="/home/homestar.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
      <h2 data-aos="flip-up" className={styles.text_stroke_hover}>We're your go-to</h2>
      <h2 data-aos="flip-up" className={styles.text_title}>Creative Studio</h2>
      <p className={styles.home_hero_desc}>Of course we're into Branding, Web<br/> Design, Packaging, Illustrations,<br/> publication, social media & what not!</p>
      <a className="boton_elegante">EXPLORE MORE</a>
     </div>
     </div>
    
    {/* Our services */}
    <div className={`${styles.services} ${styles.srv_scroller}`}>
    <div className={styles.service_hight}>
    <h2 className={styles.mainheading}>OUR</h2>
    <h2 className={styles.sec_heading}>SERVICES</h2>
    {/* section 1  */}
     <div data-aos="fade-up" className={styles.row}>
      <div className={styles.column1} >
        <h3 className={styles.sevices_heading}>Branding  Experience </h3>
        <p className={styles.service_list}>1. Research & Brand Strategy</p>
        <p className={styles.service_list}>2. Brand Guidelines</p>
        <p className={styles.service_list}>3. Brand Identity & Positioning</p>
        <p className={styles.service_list}>4. Naming & Domain</p>

        <div className={styles.nwmr}>
          <a className={styles.servies_know_more}>Know More</a>
        </div>
        </div>
      <div className={styles.column2} >
        <p className={styles.sevices_subheading}>Transform your brand with our expert touch. We craft memorable identities that resonate and captivate your audience..</p>
        <div className={styles.gridsec}>
        <div className={styles.grimg1}>
          <Image
            className={styles.grid_item_img}
            src="/home/brandin1.jpg"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
        </div>
        <div className={styles.grid_container}>
          <div className={styles.grid_item}> <Image
            className={`${styles.grid_item_img} ${styles.brimg2}`}
            src="/home/branding2.jpg"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={`${styles.grid_item_img} ${styles.brimg3}`}
            src="/home/branding3.jpg"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          </div>
          <div className={styles.grid_item}> <Image
            className={`${styles.grid_item_img} ${styles.brimg4}`}
            src="/home/branding4.jpg"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={`${styles.grid_item_img} ${styles.brimg5}`}
            src="/home/branding5.jpg"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={`${styles.grid_item_img} ${styles.brimg6}`}
            src="/home/branding6.jpg"
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
    </div>
    </div>
    {/* section 1 end */}
    {/* section 2  */}
  <div className={styles.service_hight}>
    <div data-aos="fade-up" className={styles.row}>
      <div className={styles.column1} >
        <h3 className={styles.sevices_heading}>Digital Experience  </h3>
        <p className={styles.service_list}>1. Website Design & UI</p>
        <p className={styles.service_list}>2. Web Hosting</p>
        <p className={styles.service_list}>3. Website Development</p>
        <p className={styles.service_list}>4. Performance Optimisation</p>

        <div className={styles.nwmr}>
          <a className={styles.servies_know_more}>Know More</a>
        </div>
        </div>
      <div className={styles.column2} >
        <p className={styles.sevices_subheading}>Engage your visitors with stunning web designs. Our user-friendly, visually striking websites turn clicks into loyal customers.</p>
        <div className={styles.digiimgsec}>
        <Image
            className={styles.digiimg}
            src="/home/digi1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.digiimg}
            src="/home/digi2.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.digiimg}
            src="/home/digi3.png"
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
    {/* section 2 end */}
     {/* section 2  */}
  <div className={styles.service_hight}>
    <div data-aos="fade-up" className={styles.row}>
      <div className={styles.column1pkg} >
        <h3 className={styles.sevices_heading}>Packaging  Experience  </h3>
        <p className={styles.service_list}>1. Brand Strategy Development</p>
        <p className={styles.service_list}>2. Product Positioning</p>
        <p className={styles.service_list}>3. Packaging design for Hero Products</p>
        <p className={styles.service_list}>4. Guideline formulation</p>

        <div className={styles.nwmr}>
          <a className={styles.servies_know_more}>Know More</a>
        </div>
        </div>
      <div className={styles.column2} >
        <p className={styles.sevices_subheading}>Stand out on the shelves with our eye-catching packaging designs. We blend form and function to make your products irresistible.</p>
        <div className={styles.digiimgsec}>
        <Image
            className={styles.digiimg}
            src="/home/pkg1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.digiimg}
            src="/home/pkg2.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.digiimg}
            src="/home/pkg3.png"
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
    {/* section 3 end */}

       {/* section 2  */}
  <div className={styles.service_hight}>
    <div data-aos="fade-up" className={styles.row}>
      <div className={styles.column1pkg} >
        <h3 className={styles.sevices_heading}>Ecommerce  Experience </h3>
        <p className={styles.service_list}>1. Brand roadmap</p>
        <p className={styles.service_list}>2. Communication Design</p>
        <p className={styles.service_list}>3. E-com store Set up Strategy</p>
        <p className={styles.service_list}>4. Front-end & Back-end development</p>

        <div className={styles.nwmr}>
          <a className={styles.servies_know_more}>Know More</a>
        </div>
        </div>
      <div className={styles.column2} >
        <p className={styles.sevices_subheading}>Boost your online sales with our seamless eCommerce solutions. From design to launch, we create digital storefronts that convert.</p>
        <div className={styles.digiimgsec}>
        <Image
            className={styles.ecommimg}
            src="/home/ecomm1.png"
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
    {/* section 3 end */}
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
      <Gallery items={items} />
    </div>

    <div className={styles.clientle}>
      <h2 className={styles.mainheading}>OUR</h2>
      <h2 className={styles.sec_heading}>clientele</h2>
      <ImageFlip />

      <div className={styles.divider}>Partnered with</div>
      <div className={styles.partnerimgsec}>
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
    <h2 className={styles.mainheading}>Client</h2>
      <h2 className={styles.sec_heading}>Feedback</h2>
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
      {/* Lets Discuss section End */}

      {/* Our Story section start */}
      <div className={styles.story}>
        <div className={styles.rowstory}>
          <div className={styles.columnst1}>
          <h2 className={styles.mainheading}>Our</h2>
          <h2 className={styles.sec_heading}>Story</h2>
          <p className={styles.storydesc}>
          At Doodlo, we're storytellers at heart. We believe brands are powerful narratives, and we craft them with simplicity and impact. We don't just design, we translate your vision into actionable solutions that resonate with your audience.<br/><br/>

          <b>Decoding Brands, Website & Designs driven<br/> bypassion & Possibilities.</b><br/><br/>

          Our love for life, color, and endless possibilities fuels our creative fire. It's what we call the "Doodlo 3D's": Doodle, Design, Develop. We guide you through every step of the storytelling journey, from brainstorming to flawless execution. We craft user experiences that are not only beautiful but also functional. With a healthy dose of passion, flexibility, and precision, we build brands that achieve results.
          </p>
          </div>
          <div className={styles.columnst2}>
            <div className={styles.stimg}>
            <Image
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
    <div className={styles.prodiff} data-aos="fade-up">
      <div className={styles.rowstory}>
        <div className={styles.columnpdiff1}>
        <h2>{hoverText}</h2>
        </div>
        <div className={styles.columnpdiff2}>
          <h3 className={styles.prtitle}>260+</h3>
          <p className={styles.prdesc}>260+ Project Delivered & Counting</p>
        </div>
      </div>
      <div className={styles.rowstory} id={styles.proj}>
        <div className={styles.columnpdiff3} onMouseEnter={() => handleMouseEnter('6 Years of Design Operations')} onMouseLeave={handleMouseLeave}>
        <h3 className={styles.prtitle}>6</h3>
          <p className={styles.prdesc}>Years of Design Operations </p>
        </div>
        <div className={styles.columnpdiff4} onMouseEnter={() => handleMouseEnter('56+ Happy Clients')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle}>56+</h3>
          <p className={styles.prdesc}>Happy Clients </p>
        </div>
        <div className={styles.columnpdiff5} onMouseEnter={() => handleMouseEnter('7+ Professional Designers')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle}>7+</h3>
          <p className={styles.prdesc}>Professional Designers</p>
        </div>
        <div className={styles.columnpdiff6} onMouseEnter={() => handleMouseEnter('14+ Industries Served')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle}>14+</h3>
          <p className={styles.prdesc}>Industries served</p>
        </div>
      </div>
    </div>

    <div className={styles.videosec}>
    <Image
                  className={styles.ppimg}
                  src="/home/video.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
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
    <ContactForm />
    </section>
  );
};

export default Home;
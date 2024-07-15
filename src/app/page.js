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
import WorkAnimatedlr from './Component/WorkAnimatedLR';


const Home = () => {
  const [selectedOption, setSelectedOption] = useState('someOption');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    console.log('Selected option:', newValue);
    // You can perform other actions here based on the selected option
  };
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

    {/* Filter section */}
    <div className={styles.filtersec}>
      <div className={styles.rowfilter}>
        <div className={styles.fcolumn1}>
          <h4 className={styles.fhead}>Curious how we can turn your brand into a game-changer?</h4>
          <p className={styles.fdesc}>Discover the impact of our work. Check out our case studies and portfolio to see how we’ve transformed brands across various industries.</p>
        </div>
        <div className={styles.fcolumn2}>
          <select className={styles.filterdrop} value={selectedOption} onChange={handleChange}>
            <option value="someOption">All</option>
            <option value="otherOption">Other option</option>
          </select>
        </div>
      </div>
    </div>
    <div className={styles.filtergal}>
      <div className={styles.columngal}>
        <Image
            className={styles.ecommimg}
            src="/home/ecomm1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.ecommimg}
            src="/home/ecomm1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
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
        <div className={styles.columngal}>
        <Image
            className={styles.ecommimg}
            src="/home/ecomm1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.ecommimg}
            src="/home/ecomm1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
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
        <div className={styles.columngal}>
        <Image
            className={styles.ecommimg}
            src="/home/ecomm1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <Image
            className={styles.ecommimg}
            src="/home/ecomm1.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
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
    </section>
  );
};

export default Home;
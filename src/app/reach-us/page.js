"use client";
import Link from "next/link"
import Image from "next/image";
import Head from 'next/head'
import styles from "./page.module.css";
import Logobw from "../Images/logobw";
import Menu from "../Component/Menu";
import ImageFlip from "../Component/FlipImage";
import Gallery from "../Component/Gallery";
import Portfolio from "../Component/Portfolio";
import AccordionOne from "../Component/Accordions/AccordianOne";
import BrandAnimated from "../Component/Brandlineanimation";
import Calendly from "../Component/Calendly";
import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';
import Logoslide from "../Component/Logoslider";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useFetchCountries from "../Component/useFetchCountries";

gsap.registerPlugin(ScrollTrigger);

const Reachus = () => {
  useEffect(() => {
    document.title = "Reach us - Doodlo Designs Studio";
  }, []);

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


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  //form drop and citirs
  const { countries, loading, error } = useFetchCountries();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { id: 'branding', label: 'Branding' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'website', label: 'Website' },
    { id: 'publication', label: 'Publication' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'ecommerce', label: 'Ecommerce' },
  ];
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedOptions(prev =>
      checked
        ? [...prev, value]
        : prev.filter(option => option !== value)
    );
  };

    //gallery
    const items = [
      { id: 1, ids: 'fimg1', ptitle:'Yolomart', pdesc:'Branding | Retail Branding | Marketing Collateral | Packaging | Website UI | Web Development | Social Media', name: 'Item 1', image: '/home/gallery/gal1.png', category: 'category1' },
      { id: 2, ids: 'fimg2', ptitle:'Black B Finance', pdesc:'Branding | Website UI | Web Development', name: 'Item 2', image: '/home/gallery/gal2.png', category: 'category2' },
      { id: 3, ids: 'fimg3', ptitle:'Swiggy + Bowl Company', pdesc:'Packaging Design | Marketing collaterals | Advertising ', name: 'Item 3', image: '/home/gallery/gal3.png', category: 'category2' },
      { id: 4, ids: 'fimg4', ptitle:'Coinsafe', pdesc:'Branding | Website UI | Web Development | Application | Marketing Collaterals ', name: 'Item 4', image: '/home/gallery/gal4.png', category: 'category1' },
      { id: 5, ids: 'fimg5', ptitle:'Nutribee', pdesc:'Illustration | Packaging Design', name: 'Item 5', image: '/home/gallery/gal5.png', category: 'category2' },
      { id: 6, ids: 'fimg6', ptitle:'Mahatee Interactives', pdesc:'Branding | Website UI | Shopify Development | Ecommerce Setup | Illustrations | Publication & Book Design | Social Media', name: 'Item 6', image: '/home/gallery/gal6.png', category: 'category1' },
      { id: 7, ids: 'fimg7', ptitle:'Wuerth Industries', pdesc:'Publication - Coffee Table Book Design | Corporate Giftings', name: 'Item 7', image: '/home/gallery/gal7.png', category: 'category1' },
      { id: 8, ids: 'fimg8', ptitle:'Betsetwin', pdesc:'Branding | Website UI | Social Media', name: 'Item 8', image: '/home/gallery/gal8.png', category: 'category1' },
      { id: 9, ids: 'fimg9', ptitle:'Tarabai', pdesc:'Branding | Packaging | Retail Branding | Marketing Collaterals | Social Media', name: 'Item 9', image: '/home/gallery/gal9.png', category: 'category2' },
      { id: 10, ids: 'fimg10', ptitle:'Little Learners Trove', pdesc:'Branding | Illustrations | Product Design | Packaging Design | Social Media', name: 'Item 10', image: '/home/gallery/gal10.png', category: 'category2' },
      { id: 11, ids: 'fimg11', ptitle:'Click r&D', pdesc:'Branding | UI ', name: 'Item 11', image: '/home/gallery/gal11.png', category: 'category2' },
      // Add more items with appropriate categories
    ];

  
      const [index, setIndex] = useState(0);
      const textRef = useRef(null);
      const texts = ['brand', 'Website', 'Next Story Book','Social Media Presence','Packaging Design'];
    
      useEffect(() => {
        const interval = setInterval(() => {
          if (textRef.current) {
            // Trigger the slide-out animation by changing the text
            textRef.current.classList.add(styles.slideOut);
    
            // Change the text after the slide-out animation
            setTimeout(() => {
              setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    
              if (textRef.current) {
                // Reset the animation class and trigger slide-up in
                textRef.current.classList.remove(styles.slideOut);
                textRef.current.classList.add(styles.slideIn);
    
                // Remove the slide-in class after the animation ends
                setTimeout(() => {
                  if (textRef.current) {
                    textRef.current.classList.remove(styles.slideIn);
                  }
                }, 800); // Duration of the slide-in animation
              }
            }, 800); // Duration of the slide-out animation
          }
        }, 3000); // Change text every 3 seconds
    
        return () => clearInterval(interval);
      }, [texts.length]);
    
    // image scroll 
    const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.2); // Adjust the rotation speed as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   
    return(
        <section>
          {/* Menu start */}
     <div id="wrapper">
      <div className={`menuwrap ${inactive ? 'inactive' : ''} doodbg`}>
        <div className="menusec">
          <div className="menurow">
            <div className="mcol1">
            <div className="menuitem">
              <Link href="/" className="mitem">
                Home
              </Link>
              
            </div>

            <div className="menuitem">
              <Link href="/portfolio" className="mitem">
                Portfolio
              </Link>
            </div>

            <div className="menuitem">
              <Link href="/services" className="mitem">
                Our Services
              </Link>
            </div>

            <div className="menuitem">
              <Link href="/reach-us" className="mitem active">
                Reach us
              </Link>
              <div className="border-bottom"></div>

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
              <div className={styles.mobrow}>
                <div className={styles.mobcol}>
                  <div className={styles.moblogo}>
                  <Logobw />
                  </div>
                  </div>
                <div className= {`${styles.mobcol} ${styles.reachuslogo}`}>
                <Menu onClick={toggleClass} />
                </div>
              </div>
            </div>
          {/* mobile menu end */}
        <div className={styles.reachhero}>
             
            <div className={styles.row}>
                <div className={styles.column1}>
                    <div className={styles.logosec}>
                    <Logobw />
                    </div>
                    <div className={styles.innersec}>
                    <div>
                </div>
                <div className={styles.container} data-aos="fade-up">
      <h1 className={styles.text}>
        LET’S BUILD Your <span className={styles.rotatingText} ref={textRef}>{texts[index]}</span>
      </h1>
    </div>
      <div data-aos="fade-up" className={styles.search}>
        <div className={styles.typewriterContainer}>
        <Image data-aos="fade-up"
                                    className={styles.rsearch}
                                    src="/home/rsearch.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
        <p data-aos="fade-up" className={styles.typing}>Branding & Web Design Agency </p>
      </div>
      </div>
                    <div className={styles.row}>
                        <div className={styles.innercolumn1}>
                            <div className={styles.rowimg}>
                                
                                    <Image data-aos="fade-up"
                                    className={styles.reachimg1}
                                    src="/home/reach/reach1.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                
                                    <Image data-aos="fade-up"
                                    className={styles.reachimg2}
                                    src="/home/reach/reach2.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                            </div>
                            <div className={styles.rowimg}>
                            <Image data-aos="fade-up"
                                    className={styles.reachimg3}
                                    src="/home/reach/reach3.jpg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                            </div>
                        </div>
                        <div className={styles.innercolumn2}>
                        <div className={styles.rowimg}>
                                
                                <Image data-aos="fade-up"
                                className={styles.reachimg}
                                src="/home/reach/reachuslast.png"
                                alt="Next.js Logo"
                                layout="responsive"
                                width={100}
                                height={37}
                                priority
                                />
                                </div>
                        </div>
                    </div>
                    <div className={styles.partnersec}>
                      <p  className={styles.partnerh}>Partnered with </p>
                      <div className={styles.partnerimgsec}>
                        <div className={styles.shopify}>
                        <Image 
                                  className={styles.shopify}
                                  src="/home/partner/shopify.svg"
                                  alt="Next.js Logo"
                                  layout="responsive"
                                  width={100}
                                  height={37}
                                  priority
                                  />
                        </div>
                        <div className={styles.partnerimg}>
                        <Image 
                                  src="/home/partner/uber.svg"
                                  alt="Next.js Logo"
                                  layout="responsive"
                                  width={100}
                                  height={37}
                                  priority
                                  />
                        </div>
                        <div className={styles.partnerimg}>
                        <Image 
                                  src="/home/partner/google.svg"
                                  alt="Next.js Logo"
                                  layout="responsive"
                                  width={100}
                                  height={37}
                                  priority
                                  />
                        </div>
                        <div className={styles.partnerimg}>
                        <Image 
                                  src="/home/partner/word.svg"
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
                <div className= {`${styles.column2} ${styles.secondsec}`}>
                  <Menu onClick={toggleClass} />
                
                  <div className={styles.formcontainer}>
                    <h3 className={styles.formhead}>Get A Free Design Audit</h3>
                    <p className={styles.formdesc}>
                    Fill in the details to know more
                    </p>
                    <form data-aos="fade-up" onSubmit={handleSubmit} netlify>
              <div className={styles.formInput}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Hi, I am"
                />
              </div>
              <div className={styles.formInput}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="My Email Is"
                />
              </div>
              <div className={`${styles.formInput} ${styles.flexs}`}>
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <select
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    id="country-code-select"
                    className={styles.dropdown}
                  >
                    <option>Country</option>
                    {countries.map((country) => (
                      <option
                        key={country.cca2}
                        value={country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "")}
                      >
                        {country.name.common} ({country.idd.root}
                        {country.idd.suffixes ? country.idd.suffixes[0] : ""})
                      </option>
                    ))}
                  </select>
                )}
                <input
                  className={styles.phone}
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="& My Mobile Number is"
                />
              </div>
              <div className={`${styles.formInput} ${styles.flexs}`}>
                <button type="button" className={styles.dropdownButton} onClick={toggleDropdown}>
                I am looking for
                </button>
                {isOpen && (
                  <div className={styles.dropdownContent}>
                    {options.map(option => (
                      <label key={option.id} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          value={option.id}
                          checked={selectedOptions.includes(option.id)}
                          onChange={handleCheckboxChange}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.formInput}>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Brief about the Project"
                />
              </div>
              <button type="submit" className={styles.subsbtns}>Submit</button>
            </form>
                </div>
               <div className={styles.caassec}>
               <Image
                className={styles.cass}
                src="/home/saasc.svg"
                alt="Next.js Logo"
                layout="responsive"
                width={100}
                height={37}
                priority
                style={{ transform: `rotate(${rotation}deg)` }}
               />
               </div>
                </div>
            </div>
        </div>
        <div className={styles.clientle}>
            <h2 className={styles.mainheading}>OUR</h2>
            <h2 className={styles.sec_heading}>clientele</h2>
            <div className={styles.desktopv}>
            <ImageFlip  />
            </div>
            <div className={styles.mobilev}>
            <Logoslide />
            </div>
       </div>
       <div data-aos="fade-up" className={styles.filtergal}>
        <div className={styles.featured}>
        <h2 className={styles.mainheadingf}>Our</h2>
        <h2 className={styles.sec_headingf}>Portfolio</h2>
        </div>
        <Portfolio items={items} />
        </div>


        <div className={`${styles.services} ${styles.srv_scroller}`}>
    <div className={styles.service_hight}>
    <h2 className={styles.mainheading}>OUR</h2>
    <h2 className={styles.sec_heading}>SERVICES</h2>
    <div className="accordion">
    <AccordionOne />  
    </div>
    </div>
   </div>


   <div className={styles.brandanim}>
        <BrandAnimated />
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
        <div className={styles.columnpdiff3} onMouseEnter={() => handleMouseEnter('Years of Crafting Creative Solutions')} onMouseLeave={handleMouseLeave}>
        <h3 data-aos="fade-up" className={styles.prtitle}>22+</h3>
          <p data-aos="fade-up" className={styles.prdesc}>Years of Combined Experience </p>
        </div>
        <div className={styles.columnpdiff4} onMouseEnter={() => handleMouseEnter('Brands That We’ve Shaped')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle} data-aos="fade-up">65+</h3>
          <p className={styles.prdesc} data-aos="fade-up">Brands Shaped </p>
        </div>
        <div className={styles.columnpdiff5} onMouseEnter={() => handleMouseEnter('Clients who loved our Designs')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle} data-aos="fade-up">4.2+</h3>
          <p className={styles.prdesc} data-aos="fade-up">Trust Score</p>
        </div>
        <div className={styles.columnpdiff6} onMouseEnter={() => handleMouseEnter('Design Excellence Across 14+ Industries')} onMouseLeave={handleMouseLeave}>
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
    <div className={styles.gridItem} onMouseEnter={() => handleMouseEnter('Years of Crafting Creative Solutions')} onMouseLeave={handleMouseLeave}>
      <h3 className={styles.prtitle}>22+</h3>
      <p className={styles.prdesc}>Years of Combined Experience</p>
    </div>
    <div className={styles.gridItem} onMouseEnter={() => handleMouseEnter('Brands That We’ve Shaped')} onMouseLeave={handleMouseLeave}>
      <h3 className={styles.prtitle}>65+</h3>
      <p className={styles.prdesc}>Brands Shaped</p>
    </div>
    <div className={styles.gridItem} onMouseEnter={() => handleMouseEnter('Clients who loved our Designs')} onMouseLeave={handleMouseLeave}>
      <h3 className={styles.prtitle}>4.2+</h3>
      <p className={styles.prdesc}>Trust Score</p>
    </div>
    <div className={styles.gridItem} onMouseEnter={() => handleMouseEnter('Design Excellence Across 14+ Industries')} onMouseLeave={handleMouseLeave}>
      <h3 className={styles.prtitle}>14+</h3>
      <p className={styles.prdesc}>Industries served</p>
    </div>
  </div>
</div>
      {/* calendly sec */}
      <div id="calendly">
      <Calendly />
      </div>
      <style jsx>{`
      @media only screen and (max-width: 600px) {
          .jsx-6aef31e2b66eceb3 .gallery-item {
              position: relative;
              width: auto !important;
              margin: 12px 0 !important;
          }
      }
      `}</style>
        </section>
       
    );
};

export default Reachus;
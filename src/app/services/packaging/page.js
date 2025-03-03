"use client";
import Link from "next/link"
import Image from "next/image";
import styles from "./packaging.module.css";
import Logobw from "../../Images/logobw";
import Menu from "../../Component/Menu";
import AccordionOne from "../../Component/Accordions/AccordianOne";
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useFetchCountries from "../../Component/useFetchCountries";
import SerProcess from "../../Component/ServiceProcess/SerProcess";
import ResProcess from "../../Component/ServiceResPro/ResProcess";
import WorkAnimationlr from "../../Component/WorkAnimatedLR";

gsap.registerPlugin(ScrollTrigger);

const packaging = () => {

  // Meta tags
       useEffect(() => {
          document.title = "Leading Packaging Design Agency | Custom Packaging Solutions";
          const descriptionTag = document.querySelector('meta[name="description"]');
          if (descriptionTag) {
          descriptionTag.setAttribute(
          "content",
          "Strengthen your brand with a top packaging design agency in India & UK. Doodlo Design Studio crafts custom packaging solutions that stand out."
          );
          }
      
          // Update the meta keywords dynamically
          const keywordsTag = document.querySelector('meta[name="keywords"]');
          if (keywordsTag) {
          keywordsTag.setAttribute("content", " ");
          }
      
          const canonicalTag = document.querySelector('link[rel="canonical"]');
          if (canonicalTag) {
          canonicalTag.setAttribute("href", "https://doodlodesigns.com/services/packaging"); 
          } 
        }, []);


  const steps = [
    { title: 'Unique, Bespoke Packaging Designs', image: '/home/services/packaging/p1.webp' },
    { title: 'Functional & User-Centric Packaging Solutions', image: '/home/services/packaging/p2.webp' },
    { title: 'Sustainable & Market-Ready Packaging', image: '/home/services/packaging/p3.webp' },
    { title: 'Proven Track Record in Various Industries', image: '/home/services/packaging/p4.webp' },
  ];


  const slides = [
  {
    id: 1,
    image: '/home/services/packaging/p1.webp', 
    title: 'Unique, Bespoke Packaging Designs',
    
  },
  {
    id: 2,
    image: '/home/services/packaging/p2.webp', 
    title: 'Functional & User-Centric Packaging Solutions',
    
  },
  {
    id: 3,
    image: '/home/services/packaging/p3.webp', 
    title: 'Sustainable & Market-Ready Packaging',
   
  },
  {
    id: 4,
    image: '/home/services/packaging/p4.webp', 
    title: 'Proven Track Record in Various Industries',
    
  },
];
   

  // comprehensive solutions box toggle 
        // const [openBox, setOpenBox] = useState(null); // this line Tracks which box is open
        const [openBox, setOpenBox] = useState(1); // Initialize with 1 to keep Box 1 open by default
      
        const toggleBox = (boxNumber) => {
          setOpenBox(openBox === boxNumber ? null : boxNumber); // toggleBox Closes if already open, else open the selected box
        };

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
    name: "",
    email: "",
    message: "",
    code: "",
    phone: "",
    services: []
  });


  const { countries, loading: countriesLoading, error: countriesError } = useFetchCountries();
  // get data from IP
  const [ip, setIp] = useState('');
const [country, setCountry] = useState('');
const [phoneCode, setPhoneCode] = useState('');

// Fetch IP and location data
useEffect(() => {
  async function fetchData() {
    try {
      // Fetch IP address
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipRes.json();
      setIp(ipData.ip);

      // Fetch location information based on IP
      const locationRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
      const locationData = await locationRes.json();
      setCountry(locationData.country_name || 'Unknown');
      
      // Use country_calling_code from ipapi response
      const phoneCode = locationData.country_calling_code || 'Unknown';
      setPhoneCode(phoneCode);

      // Update formData.code to reflect the phoneCode value
      setFormData(prevData => ({
        ...prevData,
        code: phoneCode
      }));

    } catch (error) {
      console.error('Error fetching data:', error);
      setPhoneCode('Unknown');
    }
  }

  fetchData();
}, []);
  // end

  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(false);  // Loading state
  const [successMessage, setSuccessMessage] = useState("");  // Success message state
  const [errorMessage, setErrorMessage] = useState("");  // Error message state
  const [formError, setFormError] = useState("");  // Form validation error state

  const options = [
    { id: 'branding', label: 'Branding' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'website', label: 'Website' },
    { id: 'publication', label: 'Publication' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'ecommerce', label: 'Ecommerce' },
    { id: 'digital-marketing', label: 'Digital Marketing' },
    { id: 'others', label: 'Others' },
  ];

  // Handle changes to select input
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
};
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");  // Reset form error
    setLoading(true);  // Set loading to true

    // Validation
    if (!formData.name || !formData.email || !formData.message  || !formData.phone) {
      setFormError("Please fill in all required fields.");
      setLoading(false);  // Set loading to false
      return;
    }

    // Add selected options to formData
    setFormData(prevData => ({
      ...prevData,
      services: selectedOptions
    }));

    try {
        const response = await fetch("https://dds.doodlo.in/API/doodloapi.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        setSuccessMessage("<b>Inbox Adventure!</b> <br/> Your message is on a journey to our team. We’ll be in touch before the adventure ends!");
        setFormData({
          name: "",
          email: "",
          message: "",
          code: "",
          phone: "",
          services: []
        }); // Clear form data
        setSelectedOptions([]); // Clear selected options

        // Show success message in alert
        //alert(`Success: ${JSON.stringify(result)}`);
        
    } catch (error) {
        console.error('Error submitting form:', error);
        setErrorMessage(`Error submitting form: ${error.message}`);
        alert(`Error submitting form: ${error.message}`); // Show error message in alert
    } finally {
        setLoading(false);  // Set loading to false
    }
  };

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

  useEffect(() => {
    // Sync selectedOptions with formData.services
    setFormData(prevData => ({
      ...prevData,
      services: selectedOptions
    }));
  }, [selectedOptions]);

    
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


  // comprehensive solutions box toggle 
   

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
              <Link href="/services" className="mitem active">
                Our Services
              </Link>
              <div className="border-bottom"></div>
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
      LET’S PACKAGE <br></br><span className={styles.rotatingText}>YOUR Product</span>
      </h1>
    </div>
      
                    <div className={styles.row}>
                        <div className={styles.innercolumn1}>
                            <div className={styles.rowimg}>
                                
                                    <Image data-aos="fade-up"
                                    className={styles.reachimg1}
                                    src="/home/services/packaging/pac1.webp"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                
                                    <Image data-aos="fade-up"
                                    className={styles.reachimg2}
                                    src="/home/services/packaging/pac2.webp"
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
                                    src="/home/services/packaging/pac3.webp"
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
                                src="/home/services/packaging/pac4.webp"
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
                    {formError && <p className={styles.formError}>{formError}</p>}
            {loading && <div className={styles.loading}>Loading...</div>}
            {successMessage && <p className={styles.successMessage} dangerouslySetInnerHTML={{ __html: successMessage }} />}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <form data-aos="fade-up" onSubmit={handleSubmit}>
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
                {countriesLoading ? (
                  <p>Loading countries...</p>
                ) : countriesError ? (
                  <p>{countriesError}</p>
                ) : (
                  <select
                    name="code"
                    value={formData.phoneCode}  // Use value from formData
                    onChange={handleChange}  // Update formData.code on change
                    id="country-code-select"
                    className={styles.dropdown}
                  >
                    <option se value={phoneCode}>{phoneCode} ({country})</option>
                    {countries.map((country) => (
                      <option
                      key={country.cca2}
                      value={country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "")}
                    >
                      {country.idd.root}
                      {country.idd.suffixes ? country.idd.suffixes[0] : ""} ({country.name.common})
                    </option>
                    ))}
                  </select>
                )}
                 {/* Additional logic for India */}
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
              <button type="submit" className={styles.subsbtns}>
              {loading ? 'Submitting...' : 'Submit'}
              </button>
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
                priority={true}
                style={{ transform: `rotate(${rotation}deg)` }}
               />
               </div>
                </div>
            </div>
        </div>
       
      
   {/* have to remove this section  */}

    <div className={`${styles.services} ${styles.srv_scroller}`}>
    <div className={styles.service_hight}>
    <h2 className={styles.mainheading}>OUR <br></br> <span className={styles.sec_heading}>SERVICES</span></h2>
    <div className="accordion">
    <AccordionOne />  
    </div>
    </div>
   </div>

 {/* have to remove this section  */}

 <div className={styles.brandsec}>
  <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Packaging <br></br><span className={styles.stext_title}>Experience</span></h2>

  <h4 className={styles.shead}>Turn Your Products Into Shelf-Stoppers</h4>
  <p className={styles.sdesc}>Great packaging isn’t just about aesthetics; it’s about storytelling, functionality, and making an impact at first sight. Doodlo Design Studio specializes in crafting packaging designs that not only look stunning but also communicate your brand’s message effectively. From eco-friendly materials to eye-catching visuals, we design for all industries and products.</p>
  <h4 className={styles.yhead}>Built for Creative, Performance & Marketing Teams</h4>

  <div className={styles.brandrow}>
    <div className={styles.brow1}>
      <Image 
                                    
                                    src="/home/services/packaging/packaging.webp"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={270}
                                    height={260}
                                    priority
                                    />
    </div>
    <div className={styles.brow2}>
    <h4 className={styles.phead}>Custom Packaging & Merch for Leading Brands</h4>
      <p className={styles.bdesc}>From posters and label designs to magazines, apparel, books, tradeshow graphics, and more—Doodlo has got you covered. a dedicated design team, delivering exceptional and consistent concepts.</p>  
    </div>
  </div>
  </div>


  {/* accordian section */}

  <div className={styles.compsec}>
   <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>adaptive solutions <br></br><span className={styles.stext_title}>Holistic packaging & Merchandise services</span></h2>
   </div>

  <div className={styles.comprow} data-aos="fade-up">
    {/* Box 1 */}
    <div className={styles.row1} onClick={() => toggleBox(1)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 1 ? styles.openHeader : ''}`}>
            Product Packaging Design
            </h2>
          </div>
          {/* Arrow Icon */}
          <div className={`${styles.arrow} ${openBox === 1 ? styles.open : ''}`}>
          <img
            src={openBox === 1 ? '/home/services/up.webp' : '/home/services/down.webp'}
            alt="Arrow Icon"
            className={styles.arrowImage}
            />
          </div>
        </div>
        <div className={`${styles.sectionContent} ${openBox === 1 ? styles.showContent : ''}`}>
          {openBox === 1 && (
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                Creating high-impact packaging for retail, FMCG, cosmetics, and more.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/packaging/pack1.webp"
                  alt="Brand Development"
                  layout="responsive"
                  width={100}
                  height={100}
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Box 2 */}
    <div className={styles.row2} onClick={() => toggleBox(2)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 2 ? styles.openHeader : ''}`}>
            Custom Label Design
            </h2>
          </div>
          {/* Arrow Icon */}
          <div className={`${styles.arrow} ${openBox === 2 ? styles.open : ''}`}>
          <img
            src={openBox === 2 ? '/home/services/up.webp' : '/home/services/down.webp'}
            alt="Arrow Icon"
            className={styles.arrowImage}
            />
          </div>
        </div>
        <div className={`${styles.sectionContent} ${openBox === 2 ? styles.showContent : ''}`}>
          {openBox === 2 && (
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                Unique, detail-rich labels that grab attention.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/packaging/pack2.webp"
                  alt="Brand Design"  
                  className="object-cover"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Box 3 */}

    <div className={styles.row2} onClick={() => toggleBox(3)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 3 ? styles.openHeader : ''}`}>
            Box & Cartoon Packaging
            </h2>
          </div>
          {/* Arrow Icon */}
          <div className={`${styles.arrow} ${openBox === 3 ? styles.open : ''}`}>
          <img
            src={openBox === 3 ? '/home/services/up.webp' : '/home/services/down.webp'}
            alt="Arrow Icon"
            className={styles.arrowImage}
            />
          </div>
        </div>
        <div className={`${styles.sectionContent} ${openBox === 3 ? styles.showContent : ''}`}>
          {openBox === 3 && (
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                Structural packaging solutions tailored to your product.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/packaging/pack3.jpg"
                  alt="Brand Design"  
                  className="object-cover"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Box 4 */}

    <div className={styles.row2} onClick={() => toggleBox(4)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 4 ? styles.openHeader : ''}`}>
            Sustainable Packaging Solutions
            </h2>
          </div>
          {/* Arrow Icon */}
          <div className={`${styles.arrow} ${openBox === 4 ? styles.open : ''}`}>
          <img
            src={openBox === 4 ? '/home/services/up.webp' : '/home/services/down.webp'}
            alt="Arrow Icon"
            className={styles.arrowImage}
            />
          </div>
        </div>
        <div className={`${styles.sectionContent} ${openBox === 4 ? styles.showContent : ''}`}>
          {openBox === 4 && (
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                Eco-friendly designs that align with green initiatives.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/packaging/pack4.webp"
                  alt="Brand Design"  
                  className="object-cover"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

{/* Box 5 */}

<div className={styles.row2} onClick={() => toggleBox(5)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 5 ? styles.openHeader : ''}`}>
            Luxury & Premium Packaging
            </h2>
          </div>
          {/* Arrow Icon */}
          <div className={`${styles.arrow} ${openBox === 5 ? styles.open : ''}`}>
          <img
            src={openBox === 5 ? '/home/services/up.webp' : '/home/services/down.webp'}
            alt="Arrow Icon"
            className={styles.arrowImage}
            />
          </div>
        </div>
        <div className={`${styles.sectionContent} ${openBox === 5 ? styles.showContent : ''}`}>
          {openBox === 5 && (
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                High-end design for exclusive products.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/packaging/pack5.webp"
                  alt="Brand Design"  
                  className="object-cover"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Box 6 */}
    <div className={styles.row2} onClick={() => toggleBox(6)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 6 ? styles.openHeader : ''}`}>
            Merchandise Design
            </h2>
          </div>
          {/* Arrow Icon */}
          <div className={`${styles.arrow} ${openBox === 6 ? styles.open : ''}`}>
          <img
            src={openBox === 6 ? '/home/services/up.webp' : '/home/services/down.webp'}
            alt="Arrow Icon"
            className={styles.arrowImage}
            />
          </div>
        </div>
        <div className={`${styles.sectionContent} ${openBox === 6 ? styles.showContent : ''}`}>
          {openBox === 6 && (
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                From digital assets to physical merchandise, we create designs that seamlessly integrate with your brand identity and leave a lasting impact on your audience
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/packaging/pack6.webp"
                  alt="Brand Design"  
                  className="object-cover"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Box 7 */}
    <div className={styles.row2} onClick={() => toggleBox(7)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 7 ? styles.openHeader : ''}`}>
            3D Packaging Mockups
            </h2>
          </div>
          {/* Arrow Icon */}
          <div className={`${styles.arrow} ${openBox === 7 ? styles.open : ''}`}>
          <img
            src={openBox === 7 ? '/home/services/up.webp' : '/home/services/down.webp'}
            alt="Arrow Icon"
            className={styles.arrowImage}
            />
          </div>
        </div>
        <div className={`${styles.sectionContent} ${openBox === 7 ? styles.showContent : ''}`}>
          {openBox === 7 && (
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                Realistic previews before final production.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/packaging/pack7.webp"
                  alt="Brand Design"  
                  className="object-cover"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    {/* Box 8 */}
    <div className={styles.row2} onClick={() => toggleBox(8)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 8 ? styles.openHeader : ''}`}>
            Regulatory & Compliance Assistance
            </h2>
          </div>
          {/* Arrow Icon */}
          <div className={`${styles.arrow} ${openBox === 8 ? styles.open : ''}`}>
          <img
            src={openBox === 8 ? '/home/services/up.webp' : '/home/services/down.webp'}
            alt="Arrow Icon"
            className={styles.arrowImage}
            />
          </div>
        </div>
        <div className={`${styles.sectionContent} ${openBox === 8 ? styles.showContent : ''}`}>
          {openBox === 8 && (
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                Ensuring your packaging meets industry standards.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/packaging/pack8.webp"
                  alt="Brand Design"  
                  className="object-cover"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Box 9 */}
    
    <div className={styles.row6} onClick={() => toggleBox(9)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 9 ? styles.openHeader : ''}`}>
            Event Collaterals
            </h2>
          </div>
          {/* Arrow Icon */}
          <div className={`${styles.arrow} ${openBox === 9 ? styles.open : ''}`}>
          <img
            src={openBox === 9 ? '/home/services/up.webp' : '/home/services/down.webp'}
            alt="Arrow Icon"
            className={styles.arrowImage}
            />
          </div>
        </div>
        <div className={`${styles.sectionContent} ${openBox === 9 ? styles.showContent : ''}`}>
          {openBox === 9 && (
            <div className={styles.contentWrapper}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                Ensure your brand stands out at every event with eye-catching collateral that demands attention and strengthens your brand presence.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/packaging/pack9.webp"
                  alt="Brand Design"  
                  className="object-cover"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  </div>
  {/* our work section  start*/}


<div className={styles.worksec}>
  <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>our <br></br><span className={styles.stext_title}>work</span></h2>
  <h4 className={styles.worksubhead}>These brands have already stepped up their game with our Packaging expertise.</h4>
  <p className={styles.workdesc}>Join them and build a powerful Packaging that stands out.</p>
</div>

<div className={styles.workimages}>
      <div className={styles.workimg}>
        <Image
          src="/home/services/packaging/work1.webp"
          alt="Brand Development"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.workimg}>
          <Image
            src="/home/services/packaging/work2.webp"
            alt="Logo Design"
            layout="responsive"
            width={100}
            height={100}
            priority
          />
      </div>
      <div className={styles.workimg}>
        <Image
          src="/home/services/packaging/work3.webp"
          alt="Brand Guidelines"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.workimg}>
        <Image
          src="/home/services/packaging/work4.webp"
          alt="Brand Story Development"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>

    </div>
    <div className={styles.btncenter}>  
      <Link href="/portfolio" className={styles.explorebtn}>Explore More</Link>
    </div>
{/* our work section ends */}

{/* logos section end */}

  {/* Process */}
        <div className={styles.prosec}>
        <div className={styles.serdesktopv}>
        <SerProcess  steps={steps}/>
        </div>

        <div className={styles.sermobilev}>
        <ResProcess slides={slides}/>
        </div>
       
          </div>
         {/* Process */}


          {/* lets discuss section starts */}

 <div className={styles.desktopv}>
       {/* Lets Discuss section */}
       <div data-aos="fade-up" className={`${styles.pointer}`}>
        <div className={styles.discuss_row}>
        <h2 className={styles.mainheadingdis}>Your product deserves</h2>
          <h2 className={styles.sec_headingdis}>packaging that sells!</h2>
          <p className={styles.disdesc}><b>Make a lasting impression with packaging </b>that captivates and converts. Elevate your brand with designs that speak for themselves!</p>
          <div className="space">
          <Link href="/reach-us" className="boton_elegante mtbtn">Let’s Design Something Amazing</Link>
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
        <h2 className={styles.mainheadingdis}>Your product deserves</h2>
          <h2 className={styles.sec_headingdis}>packaging that sells!</h2>
          <p className={styles.disdesc}><b>Make a lasting impression with packaging</b>that captivates and converts. Elevate your brand with designs that speak for themselves!</p>
          <div className="space">
          <Link href="#" className="boton_elegante mtbtn">Let’s Design Something Amazing</Link>
          </div>
          
        </div>
      </div>
      </div>
      {/* Lets Discuss section End */}

        </section>
       
    );
};

export default packaging;
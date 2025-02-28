"use client";
import Link from "next/link"
import Image from "next/image";
import styles from "./branding.module.css";
import Logobw from "../../Images/logobw";
import Menu from "../../Component/Menu";
import AccordionOne from "../../Component/Accordions/AccordianOne";
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useFetchCountries from "../../Component/useFetchCountries";
import SerProcess from "../../Component/ServiceProcess/SerProcess";
import ResProcess from "../../Component/ServiceResPro/ResProcess";
import SerResLogo from "../../Component/SerResLogo";
import WorkAnimationlr from "../../Component/WorkAnimatedLR";

gsap.registerPlugin(ScrollTrigger);

const branding = () => {


  const steps = [
    { title: 'Custom-Tailored Branding Solutions', image: '/home/services/branding/spro1.png' },
    { title: 'Data-Driven & Market-Researched Designs', image: '/home/services/branding/spro2.png' },
    { title: 'Unique, Creative & Timeless Visual Identity', image: '/home/services/branding/spro3.png' },
    { title: 'End-to-End Support from Concept to Execution', image: '/home/services/branding/spro4.png' },
  ];


  const slides = [
  {
    id: 1,
    image: '/home/services/branding/spro1.png', 
    title: 'Custom-Tailored Branding Solutions',
    
  },
  {
    id: 2,
    image: '/home/services/branding/spro2.png', 
    title: 'Data-Driven & Market-Researched Designs',
    
  },
  {
    id: 3,
    image: '/home/services/branding/spro3.png', 
    title: 'Unique, Creative & Timeless Visual Identity',
   
  },
  {
    id: 4,
    image: '/home/services/branding/spro4.png', 
    title: 'End-to-End Support from Concept to Execution',
    
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
        LET’S BUILD  <br></br><span className={styles.rotatingText}>Your Brand</span>
      </h1>
    </div>
      
                    <div className={styles.row}>
                        <div className={styles.innercolumn1}>
                            <div className={styles.rowimg}>
                                
                                    <Image data-aos="fade-up"
                                    className={styles.reachimg1}
                                    src="/home/services/branding/b2.webp"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                
                                    <Image data-aos="fade-up"
                                    className={styles.reachimg2}
                                    src="/home/services/branding/b3.webp"
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
                                    src="/home/services/branding/b4.webp"
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
                                src="/home/services/branding/b1.webp"
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
                priority
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
  <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Branding <br></br><span className={styles.stext_title}>Experience</span></h2>

  <h4 className={styles.shead}>Strategic Branding for Every Business</h4>
  <p className={styles.sdesc}>Brands are fueled by a mixture of emotion and strategy. The true art of branding design is combining both—to stand out from the competition and forge memorable connections.</p>
  <h4 className={styles.yhead}>Your brand is more than just a logo—it's an experience.</h4>

  <div className={styles.brandrow}>
    <div className={styles.brow1}>
      <Image 
                                    
                                    src="/home/services/branding/brand.webp"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={270}
                                    height={260}
                                    priority
                                    />
    </div>
    <div className={styles.brow2}>
      <p className={styles.bdesc}>As Doodlers, we craft cohesive brand identities that capture your essence, resonate with your audience, and leave a lasting impact. Whether you’re a startup looking for a fresh identity or an established business needing a rebrand, we bring strategic creativity to the table.</p>  
    </div>
  </div>
  </div>


  {/* accordian section */}

  <div className={styles.compsec}>
   <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>comprehensive solutions <br></br><span className={styles.stext_title}>full-scope branding services</span></h2>
   </div>

  <div className={styles.comprow} data-aos="fade-up">
    {/* Box 1 */}
    <div className={styles.row1} onClick={() => toggleBox(1)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 1 ? styles.openHeader : ''}`}>
              Brand Development
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
                  Starting from scratch? Craft a robust, one-of-a-kind foundation that ensures engagement and resonance across all platforms and audiences.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/branding/comprehension.png"
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
              Brand Design
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
                  From fundamentals like logos, colors, and typography to templates and custom image libraries, get the tools you need to get to market faster.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/branding/branddesign.png"
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
            Logo Design
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
                Need help updating existing logos or creating new ones? Create a range of options, including static and animated logos suitable for a range of platforms.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/branding/logo_design.png"
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
            Brand Guidelines
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
                Ensure brand consistency, capture your distinct voice and tone, and gather ad templates, logos, images, and iconography all in one place for ease of use.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/branding/brand_guidelines.png"
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
            Brand Story Development
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
                Your brand has a feel as well as a look. Develop a narrative that speaks to this essence and can be expressed time and again.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/branding/brand_story.png"
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

    <div className={styles.row6} onClick={() => toggleBox(6)}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.textContent}>
            <h2 className={`${styles.brandtitle} ${openBox === 6 ? styles.openHeader : ''}`}>
            Rebranding Services
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
                From a refresh to a full rebrand, revitalize your brand seamlessly with a global network of branding talent that brings diverse perspectives and strategies.
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <Image
                  src="/home/services/branding/rebranding.png"
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

 {/* accordian section */}
  {/*************** comprehension solutions ***************/}

  {/* <div className={styles.compsec}>
   <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>comprehensive solutions <br></br><span className={styles.stext_title}>full-scope branding services</span></h2>
   </div>

   <SerAccordian/>  */}


  {/* our work section  start*/}


<div className={styles.worksec}>
  <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>our <br></br><span className={styles.stext_title}>work</span></h2>
  <h4 className={styles.worksubhead}>These brands have already stepped up their game with our branding expertise.</h4>
  <p className={styles.workdesc}>Join them and build a powerful brand identity that resonates and converts.</p>
</div>

<div className={styles.workimages}>
      <div className={styles.workimg}>
        <Image
          src="/home/services/branding/gif1.gif"
          alt="Brand Development"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.workimg}>
        <Image
          src="/home/services/branding/gif2.gif"
          alt="Logo Design"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.workimg}>
        <Image
          src="/home/services/branding/gif3.gif"
          alt="Brand Guidelines"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.workimg}>
        <Image
          src="/home/services/branding/gif4.gif"
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

{/* logos section start */}
  <div className={styles.desktopv}>
<div className={styles.logoimages}>
      <div className={styles.logoimg}>
        <Image
          src="/home/services/branding/impos.png"
          alt="Brand Development"
          width={170}
          height={30}
        />
      </div>
      <div className={styles.logoimg}>
        <Image
          src="/home/services/branding/yolomart.png"
          alt="Logo Design"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.logoimg}>
        <Image
          src="/home/services/branding/med.png"
          alt="Brand Guidelines"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.logoimg}>
        <Image
          src="/home/services/branding/portage.png"
          alt="Brand Story Development"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.logoimg}>
        <Image
          src="/home/services/branding/mahatee.png"
          alt="Brand Story Development"
          layout="responsive"
          width={100}
          height={100}
          priority
        />
      </div>

    </div>
    </div>
    {/* responsive */}

    <div className={styles.mobilev}>
        <SerResLogo />
        </div>

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
        <h2 className={styles.mainheadingdis}>Let’s CREATE A brand  </h2>
          <h2 className={styles.sec_headingdis}>THAT speaks volumes!</h2>
          <p className={styles.disdesc}><b>Build a brand</b> that commands attention and leaves a lasting impact. Let’s bring your vision to life with creativity and strategy!</p>
          <div className="space">
          <Link href="/reach-us" className="boton_elegante mtbtn">Get Started Today</Link>
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
        <h2 className={styles.mainheadingdis}>Let’s CREATE A brand</h2>
          <h2 className={styles.sec_headingdis}>THAT speaks volumes!</h2>
          <p className={styles.disdesc}><b>Build a brand</b> that commands attention and leaves a lasting impact. Let’s bring your vision to life with creativity and strategy!</p>
          <div className="space">
          <Link href="#" className="boton_elegante mtbtn">Get Started Today</Link>
          </div>
          
        </div>
      </div>
      </div>
      {/* Lets Discuss section End */}

        </section>
       
    );
};

export default branding;
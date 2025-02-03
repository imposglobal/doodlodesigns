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
import WorkAnimationlr from "../Component/WorkAnimatedLR";
import Arrows from "../Component/Arrowanimation";
import Process from "../Component/Process";
import OurProcess from "../Component/Ourprocess";

const Ourstory = () => {

    useEffect(() => {
        document.title = "Designing Services in India & UK | Web Design | UI/UX | Branding";
        const descriptionTag = document.querySelector('meta[name="description"]');
        if (descriptionTag) {
        descriptionTag.setAttribute(
        "content",
        "Creative Design Solutions by Doodlo Design Studio. We offer Web design & development, Branding, Packaging, & Illustrations services for impactful brand experiences."
        );
        }

        // Update the meta keywords dynamically
        const keywordsTag = document.querySelector('meta[name="keywords"]');
        if (keywordsTag) {
        keywordsTag.setAttribute("content", " ");
        }

        const metaTitleTag = document.querySelector('meta[name="title"]');
        if (metaTitleTag) {
        metaTitleTag.setAttribute("content", "Designing Services in India & UK | Web Design | UI/UX | Branding");
       }
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
  
    
   
    return(
        <div>
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

        <div className={styles.storyhero}>
            <div className={styles.row}>
                <div className={styles.columnst1}>
                <h1 data-aos="fade-up" className={styles.text_stroke_hover}>Tailor Design Services for <br></br><span className={styles.text_title}>your  business Needs</span></h1>
                </div>
                <div className={styles.columnst2}>
                    <p data-aos="fade-up" className={styles.desc}>Decoding Your Brand story. Crafting seamless & scalable digital experiences. Bringing bespoke doodles and illustrations to life.</p>
                   <div data-aos="fade-up">
                   <Link className="boton_elegante" href="/reach-us">
                    Reach Us
                    </Link>
                   </div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={`${styles.imgcol}`} >
                    {/* card */}
                    <div data-aos="fade-up"  className={`${styles.scard} `}>
                        <h2 className={styles.sstitle}>Craft Your Brand Identity</h2>
                        <div className={styles.iconss}>
                        <Image 
                                    className={styles.iconimg}
                                    src="home/tool/notion.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    <Image 
                                    className={styles.iconimg}
                                    src="home/tool/ai.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    <Image 
                                    className={styles.iconimg}
                                    src="/home/tool/figma.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                        </div>
                        <Image 
                                    className={styles.ourimg1}
                                    src="/home/service/service1.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />

                    </div>
                    {/* card end */}
                    
                </div>
                <div data-aos="fade-up" className={`${styles.imgcol} ${styles.paddt}`}>
                    {/* card */}
                    <div className={`${styles.scard}`}>
                        <h2 className={styles.sstitle}>Engage with Stunning Website</h2>
                        <div className={styles.iconss}>
                        <Image 
                                    className={styles.iconimg}
                                    src="home/tool/figma.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    <Image 
                                    className={styles.iconimg}
                                    src="home/tool/xd.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                        </div>
                        <Image 
                                    className={styles.ourimg1}
                                    src="/home/service/service2.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />

                    </div>
                    {/* card end */}
                </div>
                <div data-aos="fade-up" className={styles.imgcol}>
                     {/* card */}
                    <div className={styles.scard}>
                        <h2 className={styles.sstitle}>Design That Stands Out</h2>
                        <div className={styles.iconss}>
                        <Image 
                                    className={styles.iconimg}
                                    src="home/tool/ai.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    <Image 
                                    className={styles.iconimg}
                                    src="home/service/star.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                        </div>
                        <Image 
                                    className={styles.ourimg1}
                                    src="/home/service/service3.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />

                    </div>
                    {/* card end */}
                </div>
                <div data-aos="fade-up" className={`${styles.imgcol} ${styles.paddt}`}>
                     {/* card */}
                    <div className={styles.scard}>
                        <h2 className={styles.sstitle}>Take Your Ecom Store Live</h2>
                        <div className={styles.iconss}>
                        <Image 
                                    className={styles.iconimg}
                                    src="home/tool/shopify.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    <Image 
                                    className={styles.iconimg}
                                    src="home/tool/wix.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                        </div>
                        <Image 
                                    className={styles.ourimg1}
                                    src="/home/service/service4.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />

                    </div>
                    {/* card end */}
                </div>
            </div>        
        </div>


        <div className={styles.servicesec}>
             {/* Branding experience 1*/}
             <div className={styles.serviceinner}>
                <div className={styles.row}>
                    <div className={styles.sertcol1}>
                    {/* <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Branding </h2>
                    <h2 data-aos="fade-up" className={styles.stext_title}>Experience</h2> */}

        <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Branding <br></br><span className={styles.stext_title}>Experience</span></h2>
                    </div>
                    <div className={styles.sertcol2}>
                    <p data-aos="fade-up" className={styles.stext_stroke_hovers}>01 </p>
                    </div>
                </div> 
                <div className={styles.row}>
                    <div>
                    <h4 data-aos="fade-up" className={styles.stitle}>Decode your Brand Story with us!</h4>
                    <p data-aos="fade-up" className={styles.sdesc}>Our branding services are designed to create a strong, memorable identity for your business. We focus on crafting cohesive brand experiences that resonate with your audience. Good branding builds trust, improves recognition, and connects your values with like-minded audiences.</p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.sercol1}>
                        <div data-aos="fade-up" className={styles.serbox}>
                        <h4  className={styles.sbtitle}><div className={styles.num}> 01</div> Research & Brand Strategy</h4>
                        <p className={styles.sbdesc1}>Comprehensive research and strategic planning to position your brand effectively.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 02</div> Brand Identity</h4>
                        <p className={styles.sbdesc}>Creating a unique and memorable identity that resonates with your audience.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div data-aos="fade-up" className={styles.sercol1}>
                        <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 03</div> Brand Guidelines</h4>
                        <p className={styles.sbdesc}>Establish cohesive guidelines to ensure consistency across all your brand touchpoints.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 04</div> Naming & Domain</h4>
                        <p className={styles.sbdesc4}>Create a powerful name and secure a domain that aligns with your brand’s vision.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.process} data-aos="fade-up">
                {/* <div className="process-container">
                        <div className="process-title">Our Process</div>
                        <div className="process-steps">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>

                            <div className="step step1">
                                <div data-aos="fade-up" className="step-title">Discovery</div>
                                <div data-aos="fade-up" className="step-description">Understanding your brand, goals, & audience.</div>
                            </div>
                            <div className="step step2">
                                <div data-aos="fade-up" className="step-title">Research</div>
                                <div data-aos="fade-up" className="step-description">Conducting market analysis & identifying opportunities.</div>
                            </div>
                            <div className="step step3">
                                <div data-aos="fade-up" className="step-title">Strategy</div>
                                <div data-aos="fade-up" className="step-description">Developing a tailored brand strategy.</div>
                            </div>
                            <div className="step step2">
                                <div data-aos="fade-up" className="step-title">Design</div>
                                <div data-aos="fade-up" className="step-description">Creating unique & cohesive brand elements.</div>
                            </div>
                            <div className="step step4">
                                <div data-aos="fade-up" className="step-title">Implementation</div>
                                <div data-aos="fade-up" className="step-description mdesc">Applying your new brand identity across all channels.</div>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.pmidd}>
                        <h4 data-aos="fade-up" className={styles.promtext}>Decode your Brand Story with us!</h4>
                        <div data-aos="fade-up">
                        <Link className="boton_elegante" href="/reach-us">
                        Reach Us
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Branding experience 1*/}

            {/* Branding experience 2*/}
            <div className={styles.serviceinner}>
                <div className={styles.row}>
                    <div className={styles.sertcol1}>
                    {/* <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Digital </h2>
                    <h2 data-aos="fade-up" className={styles.stext_title}>Experience</h2> */}
                    <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Digital <br></br><span className={styles.stext_title}>Experience</span></h2>
                    </div>
                    <div className={styles.sertcol2}>
                    <p data-aos="fade-up" className={styles.stext_stroke_hovers}>02 </p>
                    </div>
                </div> 
                <div className={styles.row}>
                    <div>
                    <h4 data-aos="fade-up" className={styles.stitle}>Crafting easy & scalable digital experiences</h4>
                    <p data-aos="fade-up" className={styles.sdesc}>We don't just design websites, we craft unforgettable digital experiences that elevate your brand and engage your audience. Our comprehensive suite of digital services empowers you to establish a strong online presence and achieve your marketing goals. 
                        <br/>Engage and convert visitors with visually stunning and user-centric digital experiences.</p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.sercol1}>
                        <div data-aos="fade-up" className={styles.serbox}>
                        <h4  className={styles.sbtitle}><div className={styles.num}> 01</div> Website UI Design</h4>
                        <p className={styles.sbdesc1}>Create visually stunning and user-friendly websites that captivate your audience and enhance user experience.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 02</div> Website Development</h4>
                        <p className={styles.sbdesc}>Develop robust and scalable websites tailored to your business needs, ensuring functionality and performance.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div data-aos="fade-up" className={styles.sercol1}>
                        <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 03</div> Web Hosting</h4>
                        <p className={styles.sbdesc}>Provide reliable and secure web hosting solutions to keep your website accessible and running smoothly.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 04</div> Performance Optimization</h4>
                        <p className={styles.sbdesc4}>Optimize your website for speed and SEO, ensuring fast load times and high search engine rankings.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.process} data-aos="fade-up">
                {/* <div className="process-container">
                        <div className="process-title">Our Process</div>
                        <div className="process-steps">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>

                            <div className="step step1">
                                <div data-aos="fade-up" className="step-title">Discovery & Strategy</div>
                                <div data-aos="fade-up" className="step-description">Understand your goals & develop a strategic plan.</div>
                            </div>
                            <div className="step step2">
                                <div data-aos="fade-up" className="step-title">Design & Prototype</div>
                                <div data-aos="fade-up"s className="step-description">Create wireframes & prototypes to visualize your website.</div>
                            </div>
                            <div className="step step3">
                                <div data-aos="fade-up" className="step-title">Development</div>
                                <div data-aos="fade-up" className="step-description mdesd">Build a custom website using the latest technologies & wireframes.</div>
                            </div>
                            <div className="step step2">
                                <div data-aos="fade-up" className="step-title">Testing & Launch</div>
                                <div data-aos="fade-up" className="step-description mdesd">Conduct thorough testing to ensure flawless performance.</div>
                            </div>
                            <div className="step step4">
                                <div data-aos="fade-up" className="step-title">Optimization & Maintenance</div>
                                <div data-aos="fade-up"s className="step-description">Continuously optimize and maintain your website for peak performance.</div>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.pmidd}>
                        <h4 data-aos="fade-up" className={styles.promtext}>Transform Your Digital Presence with Us!</h4>
                        <div data-aos="fade-up">
                        <Link className="boton_elegante" href="/reach-us">
                        Reach Us
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Branding experience 2*/}
            
            {/* Branding experience 3*/}
            <div className={styles.serviceinner}>
                <div className={styles.row}>
                    <div className={styles.sertcol1}>
                    {/* <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Packaging </h2>
                    <h2 data-aos="fade-up" className={styles.stext_title}>Experience</h2> */}
                    <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Packaging<br></br><span className={styles.stext_title}>Experience</span></h2>
                    </div>
                    <div className={styles.sertcol2}>
                    <p data-aos="fade-up" className={styles.stext_stroke_hovers}>03 </p>
                    </div>
                </div> 
                <div className={styles.row}>
                    <div>
                    <h4 data-aos="fade-up" className={styles.stitle}>Transforming products with exceptional Packaging</h4>
                    <p data-aos="fade-up" className={styles.sdesc}>We go beyond mere aesthetics to create packaging that delivers strategic value. Our packaging experiences tell your brand's story, connect with your target audience, and drive sales. Each design is informed by market research, consumer psychology, and brand strategy.</p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.sercol1}>
                        <div data-aos="fade-up" className={styles.serbox}>
                        <h4  className={styles.sbtitle}><div className={styles.num}> 01</div> Brand Strategy Development</h4>
                        <p className={styles.sbdesc1}>crafting a strategic foundation to align with your brand’s vision and market goals.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 02</div> Product Positioning</h4>
                        <p className={styles.sbdesc}>Strategically position your products to ensure maximum market impact and consumer engagement.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div data-aos="fade-up" className={styles.sercol1}>
                        <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 03</div> Packaging Design for Hero Products</h4>
                        <p className={styles.sbdesc}>Design unique, eye-catching packaging that makes your hero products irresistible.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 04</div> Guideline Formulation</h4>
                        <p className={styles.sbdesc4}>Establish clear and consistent packaging guidelines to maintain brand integrity across all products.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.process} data-aos="fade-up">
                {/* <div className="process-container">
                        <div className="process-title">Our Process</div>
                        <div className="process-steps">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>

                            <div className="step step1">
                                <div data-aos="fade-up" className="step-title">Discovery & Research</div>
                                <div data-aos="fade-up"s className="step-description">Understand your brand, market, and consumer needs.</div>
                            </div>
                            <div className="step step2">
                                <div data-aos="fade-up" className="step-title">Strategy & Planning</div>
                                <div data-aos="fade-up"s className="step-description">Develop a cohesive brand strategy and product positioning plan.</div>
                            </div>
                            <div className="step step3">
                                <div data-aos="fade-up" className="step-title">Design & Prototyping</div>
                                <div data-aos="fade-up" className="step-description mdesd">Create innovative packaging designs and prototypes.</div>
                            </div>
                            <div className="step step2">
                                <div data-aos="fade-up" className="step-title">Review & Refinement</div>
                                <div data-aos="fade-up" className="step-description mdesd">Iterate & refine based on feedback to ensure the best outcome.</div>
                            </div>
                            <div className="step step4">
                                <div data-aos="fade-up" className="step-title">Finalization & Implementation</div>
                                <div data-aos="fade-up"s className="step-description">Finalize designs and oversee the production process to ensure top quality.</div>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.pmidd}>
                        <h4 data-aos="fade-up" className={styles.promtext}>Wrap Your Products in Creativity!</h4>
                        <div data-aos="fade-up">
                        <Link className="boton_elegante" href="/reach-us">
                        Reach Us
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Branding experience 3*/}

            {/* Branding experience 4*/}
            <div className={styles.serviceinner}>
                <div className={styles.row}>
                    <div className={styles.sertcol1}>
                    {/* <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Ecommerce </h2>
                    <h2 data-aos="fade-up" className={styles.stext_title}>Experience</h2> */}
                    <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Ecommerce<br></br><span className={styles.stext_title}>Experience</span></h2>
                    </div>
                    <div className={styles.sertcol2}>
                    <p data-aos="fade-up" className={styles.stext_stroke_hovers}>04 </p>
                    </div>
                </div> 
                <div className={styles.row}>
                    <div>
                    <h4 data-aos="fade-up" className={styles.stitle}>Build your end to end eCommerce solutions</h4>
                    <p data-aos="fade-up" className={styles.sdesc}>End-to-End eCommerce Solutions by Doodlo Design Studio. From crafting a captivating brand identity to developing a user-friendly platform and managing the back-end to Front end, we handle everything, ensuring a seamless journey for both you and your customers.</p>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.sercol1}>
                        <div data-aos="fade-up" className={styles.serbox}>
                        <h4  className={styles.sbtitle}><div className={styles.num}> 01</div> Brand Roadmap</h4>
                        <p className={styles.sbdesc1}>Develop a strategic roadmap to define and achieve your eCommerce goals.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 02</div> Communication Design</h4>
                        <p className={styles.sbdesc}>Craft compelling visuals and messaging that resonate with your audience.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div data-aos="fade-up" className={styles.sercol1}>
                        <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 03</div> E-commerce Store Setup Strategy</h4>
                        <p className={styles.sbdesc}>Implement effective strategies to launch and optimize your online store.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><div className={styles.num}> 04</div> Front-end & Back-end Development</h4>
                        <p className={styles.sbdesc4}>Build robust and scalable eCommerce platforms for seamless customer experiences.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.process} data-aos="fade-up">
                {/* <div className="process-container custh">
                        <div className="process-title">Our Process</div>
                        <div className="process-steps">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>

                            <div className="step step1">
                                <div className="step-title titlemt">Discovery & Planning</div>
                                <div data-aos="fade-up"s className="step-description">Understand your business goals and target audience.</div>
                            </div>
                            <div className="step step2">
                                <div data-aos="fade-up" className="step-title">Design & Development</div>
                                <div data-aos="fade-up"s className="step-description">Create a tailored eCommerce solution that meets your specific needs.</div>
                            </div>
                            <div className="step step3 titlemt">
                                <div data-aos="fade-up" className="step-title">Design & Prototyping</div>
                                <div data-aos="fade-up" className="step-description mdesd">Create innovative packaging designs and prototypes.</div>
                            </div>
                            <div className="step step2">
                                <div data-aos="fade-up" className="step-title">Testing & Launch</div>
                                <div data-aos="fade-up" className="step-description mdesd">Rigorous testing to ensure a flawless user experience before launch.</div>
                            </div>
                            <div className="step step4">
                                <div data-aos="fade-up" className="step-title">Optimization & Growth</div>
                                <div data-aos="fade-up"s className="step-description">Continuously optimize your eCommerce platform for improved performance and growth.</div>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.pmidd}>
                        <h4 data-aos="fade-up" className={styles.promtext}>Launch Your Online Store with Us!</h4>
                        <div data-aos="fade-up">
                        <Link className="boton_elegante" href="/reach-us">
                        Reach Us
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Branding experience 4*/}

            {/* Additional Service section start */}
            <div className={styles.addsec}>
            <div className={styles.row}>
                <div className={styles.addcol1}>
                {/* <h2 className={styles.mainheadingdis}>Additional </h2>
                <h2 className={styles.sec_headingdis}>Services </h2> */}
                <h2 className={styles.mainheadingdis}>Additional <br></br><span className={styles.sec_headingdis}>Services</span></h2>
                
                <p className={styles.adesc}>
                We understand that every brand has unique needs. That's why we offer a comprehensive suite of add-on services to complement your end-to-end brand solution.
                </p>
                <div className={styles.arr}>
                <Arrows />
                </div>
                
                </div>
                <div className={styles.addcol2}>
                    <div className={styles.numlist}>
                        <div className={styles.innnum} data-aos="fade-up">
                            <h4 className={styles.numtext}> <span className={styles.numm}>01</span> Digital Asset Creation</h4>
                            <div className={styles.borderbot}></div>
                        </div>
                        <div className={styles.innnum} data-aos="fade-up">
                            <h4 className={styles.numtext}> <span className={styles.numm}>02</span> Merch Design</h4>
                            <div className={styles.borderbot}></div>
                        </div>
                        <div className={styles.innnum} data-aos="fade-up">
                            <h4 className={styles.numtext}> <span className={styles.numm}>03</span> Content creation</h4>
                            <div className={styles.borderbot}></div>
                        </div>
                        <div className={styles.innnum} data-aos="fade-up">
                            <h4 className={styles.numtext}> <span className={styles.numm}>04</span> Social Media Design</h4>
                            <div className={styles.borderbot}></div>
                        </div>
                        <div className={styles.innnum} data-aos="fade-up">
                            <h4 className={styles.numtext}> <span className={styles.numm}>05</span> Social Media Management</h4>
                            <div className={styles.borderbot}></div>
                        </div>
                        <div className={styles.innnum} data-aos="fade-up">
                            <h4 className={styles.numtext}> <span className={styles.numm}>06</span> Wall & Mural Graffiti</h4>
                            <div className={styles.borderbot}></div>
                        </div>
                        <div className={styles.innnum} data-aos="fade-up">
                            <h4 className={styles.numtext}> <span className={styles.numm}>07</span> Illustrations & mascots</h4>
                            <div className={styles.borderbot}></div>
                        </div>
                        <div className={styles.innnum} data-aos="fade-up">
                            <h4 className={styles.numtext}> <span className={styles.numm}>08</span> Editorial & Book Design</h4>
                            <div className={styles.borderbot}></div>
                        </div>
                        <div className={styles.innnum} data-aos="fade-up">
                            <h4 className={styles.numtext}> <span className={styles.numm}>09</span> Motion Design</h4>
                            <div className={styles.borderbot}></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {/* Additional Service section end */}

         </div>
         {/* Process */}
         <div className={styles.prosec}>
        <div className={styles.desktopv}>
        <Process />
        </div>
        <div className={styles.mobilev}>
        <OurProcess />
        </div>
         
        
         </div>
         {/* Process */}
         {/* Lets Discuss section */}
       <div data-aos="fade-up" className={`${styles.pointer}`}>
        <div className={styles.discuss_row}>
        <h2 className={styles.mainheadingdiss}>Ready to Take Your</h2>
          <h2 className={styles.sec_headingdiss}>Brand to the Next Level?</h2>
          <p className={styles.disdesc}>Contact Doodlo Design Studio today for your brand consultation!</p>
          <Link href="/reach-us/#calendly" className="boton_elegante mtbtn">Schedule a Free Consultation</Link>
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
      <style global jsx>{`
        body {
           overflow-x: auto !important;
        }
      `}</style>
        </div>
    );
};

export default Ourstory;
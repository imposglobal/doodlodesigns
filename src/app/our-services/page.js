"use client";
import Link from "next/link"
import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../Images/logo";
import Menu from "../Component/Menu";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';

const Ourstory = () => {

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
              <div id="wrapper">
                <div className={`menuwrap ${inactive ? 'inactive' : ''} doodbg`}>
                    <h1>Content</h1>
                </div>
                </div>
       
        <div className={styles.row}>
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

        <div className={styles.storyhero}>
            <div className={styles.row}>
                <div className={styles.columnst1}>
                <h2 data-aos="fade-up" className={styles.text_stroke_hover}>Build Brands that</h2>
                <h2 data-aos="fade-up" className={styles.text_title}>scale businesses</h2>
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
                <div className={styles.imgcol}>
                     <Image data-aos="fade-up"
                                    className={styles.ourimg1}
                                    src="/home/ourstory/our1.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                </div>
                <div className={styles.imgcol}>
                     <Image data-aos="fade-up"
                                    className={styles.ourimg2}
                                    src="/home/ourstory/our2.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                </div>
                <div className={styles.imgcol}>
                     <Image data-aos="fade-up"
                                    className={styles.ourimg1}
                                    src="/home/ourstory/our3.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                </div>
                <div className={styles.imgcol}>
                     <Image data-aos="fade-up"
                                    className={styles.ourimg2}
                                    src="/home/ourstory/our4.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                </div>
            </div>        
        </div>


        <div className={styles.servicesec}>

            {/* Branding experience 1*/}
            <div className={styles.serviceinner}>
                <div className={styles.row}>
                    <div className={styles.sertcol1}>
                    <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Branding </h2>
                    <h2 data-aos="fade-up" className={styles.stext_title}>Experience</h2>
                    </div>
                    <div className={styles.sertcol2}>
                    <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>01 </h2>
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
                        <h4  className={styles.sbtitle}><span className={styles.num}> 01.</span> Research & Brand Strategy</h4>
                        <p className={styles.sbdesc1}>Comprehensive research and strategic planning to position your brand effectively.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><span className={styles.num}> 02.</span> Brand Identity</h4>
                        <p className={styles.sbdesc}>Creating a unique and memorable identity that resonates with your audience.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div data-aos="fade-up" className={styles.sercol1}>
                        <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><span className={styles.num}> 03.</span> Brand Guidelines</h4>
                        <p className={styles.sbdesc}>Establish cohesive guidelines to ensure consistency across all your brand touchpoints.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><span className={styles.num}> 04.</span> Naming & Domain</h4>
                        <p className={styles.sbdesc4}>Create a powerful name and secure a domain that aligns with your brand’s vision.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.process}>
                <div className="process-container">
                        <div className="process-title">Our Process</div>
                        <div className="process-steps">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>

                            <div className="step">
                                <div className="step-title">Discovery & Strategy</div>
                                <div className="step-description">Understand your goals & develop a strategic plan.</div>
                            </div>
                            <div className="step">
                                <div className="step-title">Design & Prototype</div>
                                <div className="step-description">Create wireframes & prototypes to visualize your website.</div>
                            </div>
                            <div className="step">
                                <div className="step-title">Development</div>
                                <div className="step-description">Build a custom website using the latest technologies & wireframes.</div>
                            </div>
                            <div className="step">
                                <div className="step-title">Testing & Launch</div>
                                <div className="step-description">Conduct thorough testing to ensure flawless performance.</div>
                            </div>
                            <div className="step">
                                <div className="step-title">Optimization & Maintenance</div>
                                <div className="step-description">Continuously optimize and maintain your website for peak performance.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Branding experience 1*/}
             {/* Branding experience 1*/}
             <div className={styles.serviceinner}>
                <div className={styles.row}>
                    <div className={styles.sertcol1}>
                    <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>Branding </h2>
                    <h2 data-aos="fade-up" className={styles.stext_title}>Experience</h2>
                    </div>
                    <div className={styles.sertcol2}>
                    <h2 data-aos="fade-up" className={styles.stext_stroke_hover}>01 </h2>
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
                        <h4  className={styles.sbtitle}><span className={styles.num}> 01.</span> Research & Brand Strategy</h4>
                        <p className={styles.sbdesc1}>Comprehensive research and strategic planning to position your brand effectively.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><span className={styles.num}> 02.</span> Brand Identity</h4>
                        <p className={styles.sbdesc}>Creating a unique and memorable identity that resonates with your audience.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div data-aos="fade-up" className={styles.sercol1}>
                        <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><span className={styles.num}> 03.</span> Brand Guidelines</h4>
                        <p className={styles.sbdesc}>Establish cohesive guidelines to ensure consistency across all your brand touchpoints.</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className={styles.sercol2}>
                    <div className={styles.serbox}>
                        <h4 className={styles.sbtitle}><span className={styles.num}> 04.</span> Naming & Domain</h4>
                        <p className={styles.sbdesc4}>Create a powerful name and secure a domain that aligns with your brand’s vision.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.process}>
                <div className="process-container">
                        <div className="process-title">Our Process</div>
                        <div className="process-steps">
                            <div className="line"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>

                            <div className="step">
                                <div className="step-title">Discovery & Strategy</div>
                                <div className="step-description">Understand your goals & develop a strategic plan.</div>
                            </div>
                            <div className="step">
                                <div className="step-title">Design & Prototype</div>
                                <div className="step-description">Create wireframes & prototypes to visualize your website.</div>
                            </div>
                            <div className="step">
                                <div className="step-title">Development</div>
                                <div className="step-description">Build a custom website using the latest technologies & wireframes.</div>
                            </div>
                            <div className="step">
                                <div className="step-title">Testing & Launch</div>
                                <div className="step-description">Conduct thorough testing to ensure flawless performance.</div>
                            </div>
                            <div className="step">
                                <div className="step-title">Optimization & Maintenance</div>
                                <div className="step-description">Continuously optimize and maintain your website for peak performance.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Branding experience 1*/}

         </div>
        </div>
    );
};

export default Ourstory;
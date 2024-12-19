"use client();"
import Link from 'next/link';
import styles from './component.module.css';
import Image from "next/image";
// import { useState } from 'react';

const Footer = () => {
   
    return(
        <footer>
            <div className={`${styles.footerwrap} ${styles.desktopv}`}>
                <div className={styles.footerrow}>
                    <div className={styles.footercol1}>
                        <Image
                        className={styles.footlogo}
                        src="/home/footlogo.png"
                        alt="Next.js Logo"
                        layout="responsive"
                        width={100}
                        height={37}
                        priority
                        />
                        
                         <div className={styles.footerrow}>
                         <div className={styles.footercol1}>
                            <h3 className={styles.countrytitle}>IND</h3>
                            <p className={styles.addr}>
                            911-914, Clover Hills Plaza, Pune, 411048
                            </p>

                         </div>
                         <div className={styles.footercol2}>
                            <h3 className={styles.countrytitle}>UK</h3>
                            <p className={styles.addr}>
                            7 Bell Yard, London, England, WC2A 2JR
                            </p>

                         </div>
                         </div>
                    </div>
                    {/* col2 */}
                    <div className={styles.footercol2}>
                       <div className={styles.footinn}>
                       <p className={styles.footdesc}>
                            <b>Big Dreams, Small Deadlines? We Got You Covered?</b><br/>
                            We're your go-to design studio for everything from logo makeovers to websites that wow and packaging that screams "pick me!" Our team of design superheroes is here to turn your ideas into reality, no matter the project size or deadline.
                        </p>
                        <div className={styles.footerrow}>
                         <div className={styles.footercol1}>
                            <h3 className={styles.ftitle}>Our Studio</h3>
                            <p className={styles.plink}><Link href='/services' className={styles.flinks}>Services</Link></p>
                            <p className={styles.plink}><Link href='/portfolio' className={styles.flinks}>Portfolio</Link></p>
                            <p className={styles.plink}><Link href='our-story' className={styles.flinks}>Our Story</Link></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Career</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='/blog'>Blog</a></p>
                            <p className={styles.plink}><Link className={styles.flinks} href='https://doodlocomics.com'>Shop</Link></p>
                            <p className={styles.plink}><Link href='faqs' className={styles.flinks}>FAQ</Link></p>
                         </div>
                         <div className={styles.footercol2}>
                         <h3 className={styles.ftitle}>What we do </h3>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Branding Design  </a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Digital Experience </a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Packaging Design</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Web Design & Development</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Social Media</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Publication</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>E-commerce Experience</a></p>
                         </div>
                        </div>
                       </div>
                    </div>

                    {/* col3 */}
                    <div className={styles.footercol3}>
                        <div className={styles.corsec}>
                        <a className={styles.corbtn} href='https://doodlocomics.com/pages/giftings'>
                         Corporate Gifting - Order Now
                        </a> 
                        </div>
                    
                    </div>
                    {/* end */}

                </div>
                <div className={`${styles.footerrow} ${styles.footerrowss}`}>
                    <div className={styles.footercol1}>
                    <h3 className={`${styles.updatet} ${styles.mtop}`}>Business Queries:</h3>
                    <p className={styles.updatep}>contact@doodlodesigns.com</p>

                    <h3 className={styles.updatet}>Job Updates:</h3>
                    <p className={styles.updatep}>careers@doodlodesigns.com</p>
                    </div>
                    <div className={styles.footercol2}>
                        {/* <div className={styles.footinn}> */}
                          <div className={styles.footerp}>
                            <h3 className={styles.substext}>
                            Subscribe to our Newsletter 
                            </h3>
                            <div className={styles.subswrap}>
                                <input
                                type="email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                placeholder="Your Email Address"
                                />
                                <button className={styles.subsbtn}>
                                    <Image
                                    className={styles.subbtni}
                                    src="/home/subsarrow.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.footerrow} ${styles.footerrowss}`}>
                    <div className={styles.footercol1}>
                        <div className={styles.gtint}>
                            <span className={styles.gtintitle}>Follow us on </span>
                                    <Link href="https://in.linkedin.com/company/doodlodesign">
                                    <Image
                                    className={styles.subbtnisc}
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
                                    className={styles.subbtnisc}
                                    src="/home/social/finsta.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    </Link>
                                    <Link href="https://www.facebook.com/DoodloDesign">
                                    <Image
                                    className={styles.subbtnisc}
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
                    <div className={styles.footercol2}>
                        {/* <div className={styles.footinn}> */}
                        <div className={styles.footerp}>
                        
                            <span className={styles.gtintitle}>@2024 Doodlo | All Rights Reserved | Terms of Use | Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile View */}
            <div className= {`${styles.footerwrap} ${styles.mobilev}`}>
                <div className={styles.footerrows}>
                    <div className={styles.footercol1}>
                        <Image
                        className={styles.footlogo}
                        src="/home/footlogo.png"
                        alt="Next.js Logo"
                        layout="responsive"
                        width={100}
                        height={37}
                        priority
                        />
                         <p className={styles.footdesc}>
                            <b>Big Dreams, Small Deadlines? We Got You Covered?</b><br/>
                            We're your go-to design studio for everything from logo makeovers to websites that wow and packaging that screams "pick me!" Our team of design superheroes is here to turn your ideas into reality, no matter the project size or deadline.
                        </p>
                        {/* add button here */}
                    <div className={styles.corressec}>
                        <a className={styles.corresbtn} href='https://doodlocomics.com/pages/giftings'>
                         Corporate Gifting - Order Now
                        </a> 
                    </div>
                    {/* end add button here */}
                        
                         <div className={styles.footerrow}>
                         <div className={styles.footercol1}>
                            <h3 className={styles.countrytitle}>IND</h3>
                            <p className={styles.addr}>
                            911-914, Clover Hills Plaza, Pune, 411048
                            </p>

                         </div>
                         <div className={styles.footercol2}>
                            <h3 className={styles.countrytitle}>UK</h3>
                            <p className={styles.addr}>
                            7 Bell Yard, London, England, WC2A 2JR
                            </p>

                         </div>
                         </div>
                          
                         <div className={`${styles.footercol1}`}>
                    <h3 className={styles.updatet}>Business Queries:</h3>
                    <p className={styles.updatep}>contact@doodlodesigns.com</p>

                    <h3 className={styles.updatet}>Job Updates:</h3>
                    <p className={styles.updatep}>careers@doodlodesigns.com</p>
                    </div>

                   
                    </div>
                    {/* col2 */}
                    <div className={styles.footercol2}>
                       <div className={styles.footinn}>
                      
                        <div className={styles.footerrow}>
                         <div className={styles.footercol1}>
                            <h3 className={styles.ftitle}>Our Studio</h3>
                            <p className={styles.plink}><Link href='/services' className={styles.flinks}>Services</Link></p>
                            <p className={styles.plink}><Link href='/portfolio' className={styles.flinks}>Portfolio</Link></p>
                            <p className={styles.plink}><Link href='our-story' className={styles.flinks}>Our Story</Link></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Career</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='/blog'>Blog</a></p>
                            <p className={styles.plink}><Link className={styles.flinks} href='https://doodlocomics.com'>Shop</Link></p>
                            <p className={styles.plink}><Link href='faqs' className={styles.flinks}>FAQ</Link></p>
                         </div>
                         <div className={styles.footercol2}>
                         <h3 className={styles.ftitle}>What we do </h3>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Branding Design  </a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Digital Experience </a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Packaging Design</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Web Design & Development</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Social Media</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Publication</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>E-commerce Experience</a></p>
                         </div>
                        </div>
                       </div>
                    </div>
                </div>
                <div className={`${styles.footerrow} ${styles.footerrowss}`}>
                  
                    <div className={styles.footercol2}>
                        <div className={`${styles.footinn} ${styles.footinnm}`}>
                            <h3 className={styles.substext}>
                            Subscribe to our Newsletter 
                            </h3>
                            <div className={styles.subswrap}>
                                <input
                                type="email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                placeholder="Your Email Address"
                                />
                                <button className={styles.subsbtn}>
                                    <Image
                                    className={styles.subbtni}
                                    src="/home/subsarrow.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.footerrow} ${styles.footerrowss} ${styles.socialrow}`}>
                    <div className={styles.footercol1}>
                        <div className={styles.gtint}>
                            <span className={styles.gtintitle}>Follow us on </span>
                                    <Link href="https://in.linkedin.com/company/doodlodesign">
                                    <Image
                                    className={styles.subbtnisc}
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
                                    className={styles.subbtnisc}
                                    src="/home/social/finsta.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    </Link>
                                    <Link href="https://www.facebook.com/DoodloDesign">
                                    <Image
                                    className={styles.subbtnisc}
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
                    <div className={styles.footercol2}>
                        <div className={styles.footinn}>
                            <span className={styles.gtintitle}>@2024 Doodlo | All Rights Reserved |<br/> Terms of Use | Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;
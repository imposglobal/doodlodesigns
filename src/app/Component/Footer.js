"use client();"
import styles from './component.module.css';
import Image from "next/image";
// import { useState } from 'react';

const Footer = () => {
   
    return(
        <footer>
            <div className={styles.footerwrap}>
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
                            911-914, Clover Hills Plaza, Pune, Maharashra 411048
                            </p>

                            <p className={styles.cphone}>
                            +91 3484 958 432
                            </p>
                         </div>
                         <div className={styles.footercol2}>
                            <h3 className={styles.countrytitle}>UK</h3>
                            <p className={styles.addr}>
                            7 Bell Yard, London, England, WC2A <br/>2JR
                            </p>

                            <p className={styles.cphone}>
                            +91 3484 958 432
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
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Services</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Portfolio</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Our Story </a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Career</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Blog</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>Shop</a></p>
                            <p className={styles.plink}><a className={styles.flinks} href='#'>FAQ</a></p>
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
                    <div className={styles.footercol1}>
                    <h3 className={styles.updatet}>Job Updates:</h3>
                    <p className={styles.updatep}>careers@doodlodesigns.com</p>
                    
                    <h3 className={styles.updatet}>Business Queries:</h3>
                    <p className={styles.updatep}>careers@doodlodesigns.com</p>
                    </div>
                    <div className={styles.footercol2}>
                        <div className={styles.footinn}>
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
                            <span className={styles.gtintitle}>Get in touch </span>
                                    <a href="#">
                                    <Image
                                    className={styles.subbtnisc}
                                    src="/home/social/flinked.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    </a>
                                    <a href="#">
                                    <Image
                                    className={styles.subbtnisc}
                                    src="/home/social/finsta.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    </a>
                                    <a href="#">
                                    <Image
                                    className={styles.subbtnisc}
                                    src="/home/social/ffb.svg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    </a>
                        </div>
                    </div>
                    <div className={styles.footercol2}>
                        <div className={styles.footinn}>
                            <span className={styles.gtintitle}>© 2023 Doodlo | All Rights Reserved | Terms of Use | Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
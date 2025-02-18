"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./terms.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";

const terms = () => {

    const [inactive, setInactive] = useState(true);
    const toggleClass = () => {
        setInactive(!inactive);
      };
  return (
    <div>
{/* Sidebar Menu */}
<div id="wrapper">
        <div className={`menuwrap ${inactive ? "inactive" : ""} doodbg`}>
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
                  <p className="gtt">Get in touch</p>
                  <Link href="https://in.linkedin.com/company/doodlodesign">
                    <Image
                      className="msocial"
                      src="/home/social/flinked.svg"
                      alt="LinkedIn"
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
                      alt="Instagram"
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
                      alt="Facebook"
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
            <p>© 2024 Doodlo | All Rights Reserved | Terms of Use | Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* Header */}
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

      <div className={styles.mainsec}>
        <h1 className={styles.mainhead}>Terms of Use</h1>

        <p className={styles.desc}>Welcome to Doodlo Design Studio’s website. By accessing or using our website, you agree to comply with the following terms of use. If you do not agree with these terms, please do not use our website.</p>

        <ol className={styles.ol}>

        <li className={styles.litext}><b>Intellectual Property Rights: </b>All content on our website, including but not limited to text, images, graphics, logos, and software, is the property of Doodlo Design Studio or its content providers and is protected by intellectual property laws. You may not reproduce, modify, distribute, or display any content from our website without our prior written consent.
        </li>


            <li className={styles.litext}><b>Use of Website: </b>You may only use our website for lawful purposes and in a manner that does not infringe on the rights of others. You may not use our website to transmit any malicious or harmful code, conduct fraudulent activities, or engage in any activities that could damage our website or its users.

            </li>

            <li className={styles.litext}><b>User Content: </b> Any content that you upload or submit to our website, including but not limited to comments, reviews, and testimonials, is your responsibility. You grant Doodlo Design Studio a non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, distribute, and display your content on our website and in our marketing materials.

</li>

            <li className={styles.litext}><b> Links to Third-Party Websites: </b> Our website may contain links to third-party websites that are not under our control. We are not responsible for the content or privacy practices of these websites and provide these links for your convenience only.

            </li>

            <li className={styles.litext}><b>Disclaimer of Warranties: </b> We make no representations or warranties about the accuracy, completeness, reliability, or suitability of the content on our website. We provide our website "as is" and without any warranty or condition, express or implied.

            </li>


            <li className={styles.litext}><b>Limitation of Liability:</b> We will not be liable for any damages arising out of or in connection with the use or inability to use our website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.


            </li>


            <li className={styles.litext}><b>Indemnification:</b> You agree to indemnify and hold Doodlo Design Studio, its employees, officers, directors, agents, and affiliates harmless from any claims, damages, and expenses, including attorneys' fees, arising out of or in connection with your use of our website or violation of these terms of use.


            </li>


            <li className={styles.litext}><b>Changes to Terms of Use: </b> We may update or modify these terms of use at any time without prior notice. Your continued use of our website after any changes to these terms of use constitutes your acceptance of the modified terms.

            </li>


            <li className={styles.litext}><b>Governing Law:</b> These terms of use shall be governed by and construed in accordance with the laws of United of Kingdom & India, without giving effect to any principles of conflicts of law.

            </li>


            <li className={styles.litext}><b>Entire Agreement: </b> These terms of use constitute the entire agreement between you and Doodlo Design Studio regarding your use of our website.

            </li>
        </ol>

        <p className={styles.endtext}>If you have any questions or concerns about these terms of use, please contact us at <b>contact@doodlodesigns.com</b></p>
      </div>
    </div>
  )
}

export default terms
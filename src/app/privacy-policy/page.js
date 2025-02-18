"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./privacy.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";

const privacy = () => {

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
        <h1 className={styles.mainhead}>Privacy Policy</h1>

        <p className={styles.desc}>Doodlo Design Studio is committed to protecting your privacy. This privacy policy describes how we collect, use, and disclose information about you when you use our website.</p>

        <ol className={styles.ol}>

        <li className={styles.litext}><b>Information We Collect: </b>We may collect personal information from you when you use our website, including but not limited to your name, email address, phone number, and mailing address. We may also collect information about your device, browser, and internet connection.
        </li>


            <li className={styles.litext}><b>How We Use Your Information: </b>We use your personal information to provide you with the services you have requested, to communicate with you about our services, and to improve our website. We may also use your information to send you marketing communications about our services.
            </li>

            <li className={styles.litext}><b>Sharing Your Information: </b> We do not sell, rent, or trade your personal information to third parties. We may share your information with our service providers who assist us in providing our services. We may also share your information to comply with legal obligations or in connection with a merger, acquisition, or sale of our business.

            </li>

            <li className={styles.litext}><b>Cookies: </b> We use cookies and similar technologies to collect information about your use of our website, such as your browsing history and preferences. You can disable cookies in your browser settings, but this may limit your ability to use some features of our website.

            </li>


            <li className={styles.litext}><b>Third-Party Links:</b> Our website may contain links to third-party websites that are not under our control. We are not responsible for the content or privacy practices of these websites and provide these links for your convenience only.

            </li>


            <li className={styles.litext}><b>Security:</b> We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.

            </li>


            <li className={styles.litext}><b>Children's Privacy:</b> Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.

            </li>


            <li className={styles.litext}><b>Your Choices:</b> You may opt-out of receiving marketing communications from us at any time by following the instructions in the communication. You may also request access to, correction of, or deletion of your personal information by contacting us at [contact email].

            </li>


            <li className={styles.litext}><b>Changes to Privacy Policy:</b> We may update or modify this privacy policy at any time without prior notice. Your continued use of our website after any changes to this privacy policy constitutes your acceptance of the modified policy.

            </li>


            <li className={styles.litext}><b>Governing Law:</b> This privacy policy shall be governed by and construed in accordance with the laws of [State/Country], without giving effect to any principles of conflicts of law.
            </li>
        </ol>

        <p className={styles.endtext}>If you have any questions or concerns about these terms of use, please contact us at <b>contact@doodlodesigns.com</b></p>
      </div>
    </div>
  )
}

export default privacy
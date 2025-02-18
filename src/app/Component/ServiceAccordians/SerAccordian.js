"use client";
import React, { useEffect, useRef,useState } from 'react';
import styles from "./seraccordian.module.css";
import Image from "next/image";

const SerAccordian = () => {

     // comprehensive solutions box toggle 
      const [openBox, setOpenBox] = useState(null); // this line Tracks which box is open
    
      const toggleBox = (boxNumber) => {
        setOpenBox(openBox === boxNumber ? null : boxNumber); // toggleBox Closes if already open, else open the selected box
      };
  return (
    <div className={styles.comprow}>
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
            {/* Arrow indicator: down (↓) when closed, up (↑) when opened */}
            {openBox === 1 ? '↑' : '↓'}
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
                  width={320}
                  height={200}
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
            {/* Arrow indicator: down (↓) when closed, up (↑) when opened */}
            {openBox === 2 ? '↑' : '↓'}
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
                  width={320}
                  height={200}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  </div>
  )
}

export default SerAccordian
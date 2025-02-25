"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import styles from './backtotop.module.css'; 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll back to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          // className="stickyButton"
          className={styles.stickyButton}
        >
           <Image
            onClick={scrollToTop}
            src="/home/dwn.svg"
            alt="Scroll to top"
            layout="responsive"
            width={100}
            height={37}
            className={styles.rotatedImage}
            priority
           
          />
        </button>
      )}
    </>
  );
};



export default BackToTopButton;

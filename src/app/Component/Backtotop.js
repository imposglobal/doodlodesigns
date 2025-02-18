"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";

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
          style={styles.stickyButton}
        >
          <Image
            onClick={scrollToTop}
            src="/home/dwn.svg"
            alt="Scroll to top"
            layout="responsive"
            width={100}
            height={37}
            className='arrowd'
            priority
            style={styles.rotatedImage} // Apply rotation here
          />
        </button>
      )}
    </>
  );
};

const styles = {
  stickyButton: {
    position: 'fixed',
    bottom: '10px',
    right: '20px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1000,
    backgroundColor: 'transparent',
    padding: '0',
    background: 'transparent',
    
  },
  
  rotatedImage: {
    transform: 'rotate(-180deg)', // Rotate image by -180 degrees
    transition: 'transform 0.3s ease', // Smooth transition for rotation
  },

  // Media query for mobile view
  'media only screen and (max-width: 600px)': {
    stickyButton: {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      width: '70px',
      height: '70px',
    },
  },
};

export default BackToTopButton;

"use client";
// components/WorkAnimated.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './WorkAnimated.module.css';

const BrandAnimated = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;

    gsap.to(textRef.current, {
      x: `-${textWidth}px`,
      duration: 80,
      repeat: -100,
      ease: 'linear',
      modifiers: {
        x: (x) => {
          return (parseFloat(x) % textWidth) + 'px';
        }
      }
    });
  }, []);

  return (
    <div className={styles.wokeani} ref={containerRef}>
      <div className={styles.scrollingText} ref={textRef}>
        <span className='brandspan'>
        # Struggles with CRMs? We'll streamline your systems.
        </span>

        <span className='brandspan'>
        # Packaging Panic? We'll design boxes that beg to be opened.
        </span>

        <span className='brandspan'>
        #  Website Woes? We'll build a user-friendly UI
        </span>

        <span className='brandspan'>
        # BRAND A MESS? WE’LL MAKE A MASTERPIECE
        </span>

        <span className='brandspan'>
        # Struggles with CRMs? We'll streamline your systems.
        </span>

        <span className='brandspan'>
        # Packaging Panic? We'll design boxes that beg to be opened.
        </span>

        <span className='brandspan'>
        #  Website Woes? We'll build a user-friendly UI
        </span>

        <span className='brandspan'>
        # BRAND A MESS? WE’LL MAKE A MASTERPIECE
        </span>
      </div>
    </div>
  );
};

export default BrandAnimated;

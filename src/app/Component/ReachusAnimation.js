"use client";
// components/WorkAnimated.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './WorkAnimated.module.css';

const ReachusAnimated = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;

    gsap.to(textRef.current, {
      x: `-${textWidth}px`,
      duration: 200,
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
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
        <span>Reach Us</span>
        <span>*</span>
      </div>
    </div>
  );
};

export default ReachusAnimated;

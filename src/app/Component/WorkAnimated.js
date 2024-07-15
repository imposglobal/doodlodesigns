"use client";
// components/WorkAnimated.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './WorkAnimated.module.css';

const WorkAnimated = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;

    gsap.to(textRef.current, {
      x: `-${textWidth}px`,
      duration: 120,
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
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
        <span>work</span>
        <span>*</span>
      </div>
    </div>
  );
};

export default WorkAnimated;

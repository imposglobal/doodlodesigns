import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './WorkAnimated.module.css'; // Adjust the import based on your actual stylesheet

const WorkAnimationlr = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const animation = gsap.timeline({ repeat: -1 });

    animation.to(container, {
      x: '-100%', // Move left instead of right to achieve the desired effect
      duration: 50,
      ease: 'linear',
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 100), // Ensure smooth looping
      },
    });

    return () => {
      animation.kill(); // Clean up the animation on component unmount
    };
  }, []);

  return (
    <div className={styles.wokeanilr}>
      <div ref={containerRef} className={styles.animationContainer}>
        {Array(200).fill(0).map((_, index) => (
          <span key={index}>work *</span>
        ))}
      </div>
    </div>
  );
};

export default WorkAnimationlr;

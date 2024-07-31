// components/GSAPScrollSmoother.js
"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const GSAPScrollSmoother = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1.35,
      effects: true,
      smoothTouch: false,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });

    // Cleanup function to destroy smoother instance on component unmount
    return () => {
      smoother.kill();
    };
  }, []);

  return null; // This component does not render anything
};

export default GSAPScrollSmoother;

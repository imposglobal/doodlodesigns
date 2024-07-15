// components/SmoothScroll.js
"use client";
// components/ScrollAnimation.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ScrollAnimation = () => {
  const scroller = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const ease = 0.05; // scroll speed
    let endY = 0;
    let y = 0;
    let resizeRequest = 1;
    let scrollRequest = 0;
    let requestId = null;

    gsap.set(scroller.current, {
      rotation: 0.01,
      force3D: true
    });

    const onLoad = () => {
      updateScroller();
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("scroll", onScroll);
    };

    const updateScroller = () => {
      const resized = resizeRequest > 0;

      if (resized) {
        const height = scroller.current.clientHeight;
        body.style.height = `${height}px`;
        resizeRequest = 0;
      }

      const scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      endY = scrollY;
      y += (scrollY - y) * ease;

      if (Math.abs(scrollY - y) < 0.05 || resized) {
        y = scrollY;
        scrollRequest = 0;
      }

      gsap.set(scroller.current, {
        y: -y
      });

      requestId = scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
    };

    const onScroll = () => {
      scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    };

    const onResize = () => {
      resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    };

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div id="scroll-container" ref={scroller}>
      {/* Your content here */}
    </div>
  );
};

export default ScrollAnimation;

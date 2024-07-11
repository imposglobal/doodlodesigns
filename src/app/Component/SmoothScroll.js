// components/SmoothScroll.js
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const wrapperRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    const scrollTween = gsap.to(content, {
      y: () => -(content.scrollHeight - document.documentElement.clientHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.scrollerProxy(wrapper, {
      scrollTop(value) {
        return arguments.length ? (wrapper.scrollTop = value) : wrapper.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: wrapper.style.transform ? 'transform' : 'fixed',
    });

    const refresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', refresh);

    return () => {
      window.removeEventListener('resize', refresh);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      scrollTween.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ overflow: 'hidden', height: '100vh' }}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;

// components/VideoComponent.js
"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let videoElement = videoRef.current;

    if (videoElement) {
      ScrollTrigger.create({
        trigger: videoElement,
        start: 'top center', // Adjust these as needed
        onEnter: () => {
          videoElement.play();
        },
        onLeave: () => {
          videoElement.pause();
          videoElement.currentTime = 0; // Reset to the start if needed
        },
        onEnterBack: () => {
          videoElement.play();
        },
        onLeaveBack: () => {
          videoElement.pause();
        },
      });
    }

    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <video
        className="videoint"
        ref={videoRef}
        src="/home/video/dds_intro.webm" // Replace with your video source
        controls={false}
      />
    </div>
  );
};

export default VideoComponent;

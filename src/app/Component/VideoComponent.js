"use client";
import React, { useRef, useEffect } from 'react';

const VideoComponent = ({ videoSrc }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let videoElement = videoRef.current;

    // Callback function to handle intersection changes
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
          videoElement.currentTime = 0; // Reset to the start if needed
        }
      });
    };

    // Options for the observer (adjust as needed)
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5, // Play when 50% of the video is in view
    };

    // Create the observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the video element
    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
      videoElement.pause();
      videoElement.currentTime = 0; // Reset to the start if needed
    };
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <video
        className="videoint"
        ref={videoRef}
        src={videoSrc} // Dynamic video source
        controls
        muted // Ensure muted for autoplay compliance
      />
    </div>
  );
};

export default VideoComponent;

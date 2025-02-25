"use client";
import { useState, useEffect } from 'react';
import styles from './component.module.css'; // Import CSS module

const ImageSwitcher = () => {
  // Two arrays of images
  const imagesSet1 = [
    '/home/ourstory/gallery/1.png',
    '/home/ourstory/gallery/2.png',
    '/home/ourstory/gallery/3.png',
    '/home/ourstory/gallery/4.png',
    '/home/ourstory/gallery/5.png',
    '/home/ourstory/gallery/6.webp',
  ];

  const imagesSet2 = [
    '/home/ourstory/gallery/11.webp',
    '/home/ourstory/gallery/22.png',
    '/home/ourstory/gallery/33.png',
    '/home/ourstory/gallery/44.png',
    '/home/ourstory/gallery/55.png',
    '/home/ourstory/gallery/66.webp',
  ];

  // State to track which set of images to show
  const [currentImages, setCurrentImages] = useState(imagesSet1);
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [fade, setFade] = useState(false); // State for fade-in effect

  // Switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade-out
      setTimeout(() => {
        setShowFirstSet((prev) => !prev);
        setFade(false); // Trigger fade-in
      }, 500); // Delay image switch to match the fade-out duration
    }, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  // Update current images when `showFirstSet` changes
  useEffect(() => {
    setCurrentImages(showFirstSet ? imagesSet1 : imagesSet2);
  }, [showFirstSet]);

  return (
    <div className={styles.simageContainer}>
      {currentImages.map((image, index) => (
        <div key={index} className={`${styles.simageBox} ${fade ? styles.fadeOut : styles.fadeIn}`}>
          <img id={`Image ${index + 1}`} src={image} alt={`Image${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSwitcher;

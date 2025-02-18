"use client()";
import { useState } from 'react';
import styles from './serprocess.module.css'; // Import the CSS module

const SerProcess = () => {
  // const [currentImage, setCurrentImage] = useState('/home/services/process/spro1.png');

  // const steps = [
  //   { title: 'Custom-Tailored Branding Solutions', image: '/home/services/process/spro1.png' },
  //   { title: 'Data-Driven & Market-Researched Designs', image: '/home/services/process/spro2.png' },
  //   { title: 'Unique, Creative & Timeless Visual Identity', image: '/home/services/process/spro3.png' },
  //   { title: 'End-to-End Support from Concept to Execution', image: '/home/services/process/spro4.png' },
  // ];

  // const handleMouseOver = (image) => {
  //   setCurrentImage(image);
  // };


  const [currentImage, setCurrentImage] = useState('/home/services/process/spro1.png');
  const [hoveredStep, setHoveredStep] = useState(null); // Track hovered step index

  const steps = [
    { title: 'Custom-Tailored Branding Solutions', image: '/home/services/process/spro1.png' },
    { title: 'Data-Driven & Market-Researched Designs', image: '/home/services/process/spro2.png' },
    { title: 'Unique, Creative & Timeless Visual Identity', image: '/home/services/process/spro3.png' },
    { title: 'End-to-End Support from Concept to Execution', image: '/home/services/process/spro4.png' },
  ];

  const handleMouseOver = (image, index) => {
    setCurrentImage(image);
    setHoveredStep(index);  // Set the hovered step
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);  // Reset hovered step when mouse leaves
  };


  return (
    <div>
      <div className={styles.processContainer}>
        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={styles.step}
              onMouseEnter={() => handleMouseOver(step.image, index)}
              onMouseLeave={handleMouseLeave}
              style={{
                borderLeft: index === 0 ? '2px solid yellow' : hoveredStep === index ? '2px solid yellow' : '', // Only apply border to hovered step or first step
              }}
            >
              <h3
                className={styles.pptitle}
                style={{
                  color: hoveredStep === index || index === 0 ? '#fff' : '#C9C9C9', // White text for hovered or first step
                  fontWeight: hoveredStep === index || index === 0 ? '600' : '300', // Bold text for hovered or first step
                }}
              >
                {step.title}
              </h3>
            </div>
          ))}
        </div>
        <div className={styles.processImage}>
          <img src={currentImage} alt="Process Image" />
        </div>
      </div>


      {/* <div className={styles.processContainer}>
      <div className={styles.processSteps}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={styles.step}
            onMouseOver={() => handleMouseOver(step.image)}
          >
            <h3 className={styles.pptitle}>{step.title}</h3>
            
           
          </div>
        ))}
      </div>
      <div className={styles.processImage}>
        <img src={currentImage} alt="Process Image" />
      </div>
    </div> */}
      
    </div>
  );
};

export default SerProcess;

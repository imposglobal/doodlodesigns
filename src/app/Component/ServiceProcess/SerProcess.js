"use client()";
import { useState } from 'react';
import styles from './serprocess.module.css'; // Import the CSS module

const SerProcess = ({ steps }) => {
 
  const [currentImage, setCurrentImage] = useState(steps[0].image);
  const [hoveredStep, setHoveredStep] = useState(null); // Track hovered step index


  const handleMouseOver = (image, index) => {
    setCurrentImage(image);
    setHoveredStep(index);  // Set the hovered step
  };

  const handleMouseLeave = () => {
    setHoveredStep(null);  // Reset hovered step when mouse leaves
  };


  return (
    <div>
      {/* <div className={styles.processContainer}>
        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div
              key={index}
              className={styles.step}
              onMouseEnter={() => handleMouseOver(step.image, index)}
              onMouseLeave={handleMouseLeave}
              style={{
                borderLeft: index === 0 ? '2px solid yellow' : hoveredStep === index ? '2px solid yellow' : '', 
              }}
            >
              <h3
                className={styles.pptitle}
                style={{
                  color: hoveredStep === index || index === 0 ? '#fff' : '#C9C9C9', 
                  fontWeight: hoveredStep === index || index === 0 ? '600' : '300', 
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
      </div> */}


      <div className={styles.processContainer}>
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
    </div>
      
    </div>
  );
};

export default SerProcess;

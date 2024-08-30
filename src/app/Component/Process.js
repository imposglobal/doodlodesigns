"use client()";
import { useState } from 'react';
import styles from './Process.module.css'; // Import the CSS module

const Process = () => {
  const [currentImage, setCurrentImage] = useState('/home/process/pr1.png');

  const steps = [
    { title: 'Discovery', description: 'Understanding your brand, goals, & audience.', image: '/home/process/pr1.png' },
    { title: 'Research', description: 'Conducting thorough market research.', image: '/home/process/pr2.png' },
    { title: 'Strategy', description: 'Developing a comprehensive strategy.', image: '/home/process/pr3.png' },
    { title: 'Design', description: 'Creating a unique and compelling design.', image: '/home/process/pr4.png' },
    { title: 'Implementation', description: 'Executing the plan effectively.', image: '/home/process/pr5.png' },
  ];

  const handleMouseOver = (image) => {
    setCurrentImage(image);
  };

  return (
    <div>
        <div className={styles.textt}>
        <h2 className={styles.mainheadingdis}>OUR </h2>
        <h2 className={styles.sec_headingdis}>PROCESS </h2>
        </div>
    <div className={styles.processContainer}>
      <div className={styles.processSteps}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={styles.step}
            onMouseOver={() => handleMouseOver(step.image)}
          >
            <h3 className={styles.pptitle}>{step.title}</h3>
            {step.description && (
              <p className={styles.description}>{step.description}</p>
            )}
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

export default Process;

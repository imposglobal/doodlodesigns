import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './resprocess.module.css';

const slides = [
  {
    id: 1,
    image: '/home/services/process/spro1.png', // replace with your image path
    title: 'Custom-Tailored Branding Solutions',
    
  },
  {
    id: 2,
    image: '/home/services/process/spro2.png', // replace with your image path
    title: 'Data-Driven & Market-Researched Designs',
    
  },
  {
    id: 3,
    image: '/home/services/process/spro3.png', // replace with your image path
    title: 'Unique, Creative & Timeless Visual Identity',
   
  },
  {
    id: 4,
    image: '/home/services/process/spro4.png', // replace with your image path
    title: 'End-to-End Support from Concept to Execution',
    
  },
  
  // Add more slides as needed
];

const ResProcess = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000,  // Set the speed for autoplay (in milliseconds)
  };

  return (
    <div className={styles.slideser}>
        
    <Slider id="slicckk" {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <div className={styles.slide_content}>
            <Image
              src={slide.image}
              alt={slide.title}
              width={200}
              height={200}
              className={styles.slider_image}
            />
            <h3 className={styles.optitle} >{slide.title}</h3>
            <p className={styles.opdesc} >{slide.description}</p>
          </div>
        </div>
      ))}
    </Slider>
    <style jsx>{`
        ul.slick-dots {
    left: -29px !important;
    bottom: 41px !important;
}
    `}</style>
    </div>
  );
};

export default ResProcess;

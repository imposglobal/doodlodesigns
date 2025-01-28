import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './ourpro.module.css'

const slides = [
  {
    id: 1,
    image: '/home/process/pr1.png', // replace with your image path
    title: 'Discovery',
    description: 'Understanding your brand, goals, & audience.',
  },
  {
    id: 2,
    image: '/home/process/pr2.png', // replace with your image path
    title: 'Research',
    description: 'Conducting market analysis & identifying opportunities.',
  },
  {
    id: 3,
    image: '/home/process/pr2.png', // replace with your image path
    title: 'Strategy',
    description: 'Developing a tailored brand strategy.',
  },
  {
    id: 4,
    image: '/home/process/pr2.png', // replace with your image path
    title: 'Design',
    description: 'Creating unique & cohesive brand elements.',
  },
  {
    id: 5,
    image: '/home/process/pr2.png', // replace with your image path
    title: 'Implementation',
    description: 'Applying your new brand identity across all channels.',
  },
  // Add more slides as needed
];

const OurProcess = () => {
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
        <div className={styles.textt}>
        {/* <h2 className={styles.mainheadingdis}>OUR </h2>
        <h2 className={styles.sec_headingdis}>PROCESS </h2> */}
        <h2 className={styles.mainheadingdis}>OUR <br></br><span className={styles.sec_headingdis}>PROCESS</span></h2>
        </div>
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

export default OurProcess;

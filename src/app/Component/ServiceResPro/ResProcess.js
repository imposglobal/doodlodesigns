import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './resprocess.module.css';



const ResProcess = ({slides}) => {
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

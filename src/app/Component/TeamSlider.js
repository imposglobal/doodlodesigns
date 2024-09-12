// components/Slider.js
import React from 'react';
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  return (
    <div data-aos="fade-up" className={styles['slider-container']}>
      <Slider {...settings}>
      <div className={styles['slide']}>
          <div className={styles['founder-slide']}>
            <div className={styles['founder-image']}>
            <Image   
                    className=""
                    src="/home/team/hitesh.png"
                    alt="Next.js Logo"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
            </div>
            <div className={styles['founder-info']}>
              
            <div className={styles.quote}>
            <Image   
                    className={styles.quoteimgs}
                    src="/home/quote.png"
                    alt="Next.js Logo"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
                <p  className={styles.whodesc}>
                Our organizational guru who provides the structure needed to make our creatives widespread. He brings his expertise to Business operations, and marketing. Our consistent delivery and results are a testament to his analytical and technical skills. Hitesh unleashes his creative power through logical reasoning, transforming complex designs into reality while managing the numbers behind the scenes.
                </p>
          </div>
          <div className={styles.row}>
                    <div className={styles.dcol1}>
                        <h4 className={styles.dtitle}>
                        Hitesh Nainani
                        </h4>
                        <p className={styles.desg}>
                        Managing Director
                        </p>
                    </div>
                    <div className={styles.dcol2}>
                    <a href="">
                        <Image   
                        className={styles.linked}
                        src="/home/linked.svg"
                        alt="Next.js Logo"
                        layout="responsive"
                        width={100}
                        height={37}
                        priority
                        />    
                    </a>
                    </div>
                </div>
              
            </div>
          </div>
        </div>
        <div className={styles['slide']}>
          <div className={styles['founder-slide']}>
            <div className={styles['founder-image']}>
            <Image   
                    className=""
                    src="/home/team/payal.png"
                    alt="Next.js Logo"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
            
            </div>
            <div className={styles['founder-info']}>
              
            <div className={styles.quote}>
            <Image   
                    className={styles.quoteimgs}
                    src="/home/quote.png"
                    alt="Next.js Logo"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
                <p  className={styles.whodesc}>
                Weaving Brand Stories Through Design. Payal, Doodlo’s Head, translates brands' stories into timeless visuals with her design expertise and strategic thinking. Her focus on continuity, resilience, and simplicity results in elegant, long-lasting designs. A true artisan, when not in front of her laptop, Payal can be found doodling at meetings, planting saplings in her yard, seeking inspiration by antique stores or conversations during chai hour.
                </p>
          </div>
          <div className={styles.row}>
                    <div className={styles.dcol1}>
                        <h4 className={styles.dtitle}>
                        Payal Thubrikar
                        </h4>
                        <p className={styles.desg}>
                        Creative Head
                        </p>
                    </div>
                    <div className={styles.dcol2}>
                    <a href="">
                        <Image   
                        className={styles.linked}
                        src="/home/linked.svg"
                        alt="Next.js Logo"
                        layout="responsive"
                        width={100}
                        height={37}
                        priority
                        />    
                    </a>
                    </div>
                </div>
              
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;

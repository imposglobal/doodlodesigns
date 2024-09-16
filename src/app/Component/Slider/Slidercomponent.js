// SwiperSlider.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import modules

import styles from './slider.module.css';

const SwiperSlider = ({ images, settings }) => {
  const defaultSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: { clickable: true },
    navigation: true,
    autoplay: { delay: 3000 },
  };

  const finalSettings = { ...defaultSettings, ...settings };

  return (
    <div className={styles['swiper-container']}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Pass modules here
        {...finalSettings}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles['slide-item']}>
              <img src={image.src} alt={image.alt} />
              {image.caption && <p className={styles.caption}>{image.caption}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

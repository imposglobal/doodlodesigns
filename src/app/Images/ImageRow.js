import Image from 'next/image';
import styles from './images.module.css';

const ImageRow = ({ images }) => {
  return (
    <>
     <div className='imageup'  style={{ width: '100%'}}>
      {images.map((image, index) => (
          <Image
            key={index}
            className={styles.hero_up_img}
            src={image}
            alt="Next.js Logo"
            layout="responsive"
            width={0}
            height={0}
            priority
          />
       
      ))}
       </div>
    </>
  );
};

export default ImageRow;

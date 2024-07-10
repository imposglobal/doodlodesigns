
import Image from 'next/image';
import styles from './images.module.css';

const ImageRow = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index} style={{ width: '100%', height: '56%' }}>
          <Image
            className={styles.hero_up_img}
            src={image}
            alt="Next.js Logo"
             layout="responsive"
            width={0}
            height={0}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ImageRow;

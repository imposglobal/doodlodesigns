"use client();"
import { useState, useEffect } from 'react';
import styles from "./gallery.module.css";

const ImageFlip = () => {
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFlip(prevFlip => !prevFlip);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.imageContainer}>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf1.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb1.png"
                className={styles.back}
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf2.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb2.png"
                className={styles.back}
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf3.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb3.png"
                className={styles.back}
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf4.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb4.png"
                className={styles.back}
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf5.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb5.png"
                className={styles.back}
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf6.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb6.png"
                className={styles.back}
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf7.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb7.png"
                className={styles.back}
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf8.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb8.png"
                className={styles.back}
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf9.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb9.png"
                className={styles.back}
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf10.png"
                className={styles.front}
              />
              <img  
                src="/home/clients/clientb10.png"
                className={styles.back}
              />
            </div>
        </div>
        
        
    );
};

export default ImageFlip;

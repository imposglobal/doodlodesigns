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
                alt="City Bank Logo Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb1.png"
                className={styles.back}
                alt="Paytm Logo Featured On Doodle Designs Homepage"
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf2.png"
                className={styles.front}
                alt="Laqshaya Logo Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb2.png"
                className={styles.back}
                alt="Coinsafe Logo Featured On Doodle Designs Homepage"
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf3.png"
                className={styles.front}
                alt="Wurth Logo Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb3.png"
                className={styles.back}
                alt="Cliniapps Logo Featured On Doodle Designs Homepage"
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf4.png"
                className={styles.front}
                alt="Brand Logo Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb4.png"
                className={styles.back}
                alt="Interactives Logo Featured On Doodle Designs Homepage"
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf5.png"
                className={styles.front}
                alt="Client Logo Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb5.png"
                className={styles.back}
                alt="Tarabai Logo Featured On Doodle Designs Homepage"
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf6.png"
                className={styles.front}
                alt="Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb6.png"
                className={styles.back}
                alt="Click R&D Logo Featured On Doodle Designs Homepage"
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf7.png"
                className={styles.front}
                alt="Imposglobal Logo Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb7.png"
                className={styles.back}
                alt="Urban Meadow Logo Featured On Doodle Designs Homepage"
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf8.png"
                className={styles.front}
                alt="Yolomart Logo Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb8.png"
                className={styles.back}
                alt="Nutribee Logo Featured On Doodle Designs Homepage"
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf9.png"
                className={styles.front}
                alt="Solugenix Logo Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb9.png"
                className={styles.back}
                alt="Raw Essentials Logo Featured On Doodle Designs Homepage"
              />
            </div>
            <div className={`${styles.imageFlipper} ${flip ? styles.flip : ''}`}>
              <img  
                src="/home/clients/clientf10.png"
                className={styles.front}
                alt="Marmeto Logo Featured On Doodle Designs Homepage"
              />
              <img  
                src="/home/clients/clientb10.png"
                className={styles.back}
                alt="Client Logo Featured On Doodle Designs Homepage"
              />
            </div>
        </div>
        
        
    );
};

export default ImageFlip;

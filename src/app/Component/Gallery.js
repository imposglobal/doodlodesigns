"use client";
import { useState } from 'react';
import styles from "./gallery.module.css";
import Link from 'next/link';
import Image from "next/image";

const Gallery = ({ items = [] }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (event) => {
    setActiveFilter(event.target.value);
  };

  const filteredItems = activeFilter === 'all' ? items : items.filter(item => item.category === activeFilter);

  return (
    <div>
      <div className={styles.rowfilter}>
        <div className={styles.fcolumn1}>
          <h4 className={styles.fhead}>Curious how we can turn your brand into a game-changer?</h4>
          <p className={styles.fdesc}>Discover the impact of our work. Check out our case studies and portfolio to see how we’ve transformed brands across various industries.</p>
        </div>
        <div className={styles.fcolumn2}>
          <select className={styles.filterdrop} onChange={handleFilterChange} value={activeFilter}>
            <option value="all">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="gallery">
        {filteredItems.map(item => (
          <div id={item.ids}  key={item.id} className={`gallery-item ${activeFilter !== 'all' ? 'imgauto' : ''}`}
>
            <img 
              
              src={item.image} 
              alt={item.name} 
              className={activeFilter !== 'all' ? 'imgauto' : ''}
            />
            {/* <p>{item.name}</p> */}
              <div className="pover">
                <h4 className="imgtitle">{item.ptitle} </h4>
                <p className="portdesc">{item.pdesc} </p>
                <div className={styles.plink}>
                  <Link href="#">
                  <Image
                    className={styles.plinks}
                    src="/home/plink.svg"
                    alt="Next.js Logo"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
                  </Link>
                </div>
              </div>
          </div>
        ))}
      </div>
      <div className={styles.btn_center}>
      <a className="boton_elegante">EXPLORE MORE</a>
      </div>
      
      <style jsx>{`
        // .gallery {
        //   display: grid;
        //   padding: 10px 50px;
        //   grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
        //   gap: 20px;
        // }
        // .gallery-item {
        //   text-align: center;
        // }
        // .gallery-item img {
        //   width: 100%;
        //   height: auto;
        //   display: block;
        //   margin: auto !important;
        // }
        .imgauto {
          margin-top :0px !important;
          border: 2px solid #000; /* Example style, change as needed */
          /* Example style, change as needed */
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Gallery;

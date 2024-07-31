"use client";
import { useState } from 'react';
import styles from "./gallery.module.css";

const Portfolio = ({ items = [] }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (event) => {
    setActiveFilter(event.target.value);
  };

  const filteredItems = activeFilter === 'all' ? items : items.filter(item => item.category === activeFilter);

  return (
    <div>
        <div className={styles.port}>
        <h2 data-aos="fade-up" className={styles.text_stroke_hovers}>FEATURED</h2>
        <h2 data-aos="fade-up" className={styles.text_titles}>Works</h2>
        </div>
      <div className={styles.rowfilterp}>
        <div className={styles.fcolumn1}>
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
          <div key={item.id} className="gallery-item">
            <img 
              id={item.ids} 
              src={item.image} 
              alt={item.name} 
              className={activeFilter !== 'all' ? 'imgauto' : ''}
            />
            {/* <p>{item.name}</p> */}
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

export default Portfolio;

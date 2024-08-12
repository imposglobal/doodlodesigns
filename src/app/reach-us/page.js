"use client";
import Link from "next/link"
import Image from "next/image";
import Head from 'next/head'
import styles from "./page.module.css";
import Logobw from "../Images/logobw";
import Menu from "../Component/Menu";
import ImageFlip from "../Component/FlipImage";
import Gallery from "../Component/Gallery";
import Portfolio from "../Component/Portfolio";
import AccordionOne from "../Component/Accordions/AccordianOne";
import BrandAnimated from "../Component/Brandlineanimation";
import Calendly from "../Component/Calendly";
import React, { useEffect, useRef,useState } from 'react';
import gsap from 'gsap';

const Reachus = () => {
    const [hoverText, setHoverText] = useState('PROJECTS THAT MAKE A DIFFERENCE');

  const handleMouseEnter = (text) => {
    setHoverText(text);
  };

  const handleMouseLeave = () => {
    setHoverText('PROJECTS THAT MAKE A DIFFERENCE');
  };
  const [inactive, setInactive] = useState(true); // Set initial state to true

  const toggleClass = () => {
    setInactive(!inactive);
  };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };


    //gallery
    const items = [
        { id: 1, ids: 'fimg1', name: 'Item 1', image: '/home/gallery/gal1.png', category: 'category1' },
        { id: 2, ids: 'fimg2', name: 'Item 2', image: '/home/gallery/gal2.png', category: 'category2' },
        { id: 3, ids: 'fimg3', name: 'Item 3', image: '/home/gallery/gal3.png', category: 'category2' },
        { id: 4, ids: 'fimg4', name: 'Item 4', image: '/home/gallery/gal4.png', category: 'category1' },
        { id: 5, ids: 'fimg5', name: 'Item 5', image: '/home/gallery/gal5.png', category: 'category2' },
        { id: 6, ids: 'fimg6', name: 'Item 6', image: '/home/gallery/gal6.png', category: 'category1' },
        { id: 7, ids: 'fimg7', name: 'Item 7', image: '/home/gallery/gal7.png', category: 'category1' },
        { id: 8, ids: 'fimg8', name: 'Item 8', image: '/home/gallery/gal8.png', category: 'category1' },
        { id: 9, ids: 'fimg9', name: 'Item 9', image: '/home/gallery/gal9.png', category: 'category2' },
        { id: 10, ids: 'fimg10', name: 'Item 10', image: '/home/gallery/gal10.png', category: 'category2' },
        // Add more items with appropriate categories
      ];



      const textRefs = useRef([]);

      useEffect(() => {
        gsap.fromTo(
          textRefs.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 1.5,
            repeat: -1,
            repeatDelay: 1,
            yoyo: true,
            ease: 'power3.inOut',
          }
        );
      }, []);
    
   
    return(
        <section>
            <div id="wrapper">
                <div className={`menuwrap ${inactive ? 'inactive' : ''} doodbg`}>
                    <h1>Content</h1>
                </div>
                </div>
        <div className={styles.reachhero}>
            
            <div className={styles.row}>
                <div className={styles.column1}>
                    <div className={styles.logosec}>
                    <Logobw />
                    </div>
                    <div className={styles.innersec}>
                    <div>
                </div>
                    <h2 data-aos="fade-up" className={styles.text_stroke_hover}>LET’S BUILD </h2>
                    <h2 data-aos="fade-up" className={styles.text_title}>YOUR brand</h2>
                    <div className={styles.row}>
                        <div className={styles.innercolumn1}>
                            <div className={styles.rowimg}>
                                
                                    <Image data-aos="fade-up"
                                    className={styles.reachimg1}
                                    src="/home/reach/reach1.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                
                                    <Image data-aos="fade-up"
                                    className={styles.reachimg2}
                                    src="/home/reach/reach2.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                            </div>
                            <div className={styles.rowimg}>
                            <Image data-aos="fade-up"
                                    className={styles.reachimg3}
                                    src="/home/reach/reach3.jpg"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                            </div>
                        </div>
                        <div className={styles.innercolumn2}>
                        <div className={styles.rowimg}>
                                
                                <Image data-aos="fade-up"
                                className={styles.reachimg}
                                src="/home/reach/reach5.png"
                                alt="Next.js Logo"
                                layout="responsive"
                                width={100}
                                height={37}
                                priority
                                />
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={styles.column2}>
                  <Menu onClick={toggleClass} />
                
                  <div className={styles.formcontainer}>
                    <h3 className={styles.formhead}>Get A Free Design Audit</h3>
                    <p className={styles.formdesc}>
                    Fill in the details to know more
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formInput}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Hi, I am"
                        />
                        </div>
                        <div className={styles.formInput}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="My Email Is"
                        />
                        </div>
                        <div className={styles.formInput}>
                        <input
                            type="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="& My Mobile Number is"
                        />
                        </div>
                        <div className={styles.formcheck}>
                            <h4 className={styles.checktitle}>I am looking for</h4>
                            <div className={styles.chekinput}>
                                <input type="checkbox" value="" />
                                <label>Branding</label>
                                <input type="checkbox" value="" />
                                <label>Packaging</label>
                                <input type="checkbox" value="" />
                                <label>Website</label>
                            </div>
                            <div className={styles.chekinputt}>
                                <input type="checkbox" value="" />
                                <label>Publication</label>
                                <input type="checkbox" value="" />
                                <label>Social Media</label>
                                
                            </div>

                        </div>
                        <div className={styles.formInput}>
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Hi, I am"
                        />
                        </div>
                        <button type="submit" className={styles.subsbtn}>Submit</button>
                        </form>
                </div>
                </div>
            </div>
        </div>
        <div className={styles.clientle}>
            <h2 className={styles.mainheading}>OUR</h2>
            <h2 className={styles.sec_heading}>clientele</h2>
            <ImageFlip />
       </div>
       <div data-aos="fade-up" className={styles.filtergal}>
        <Portfolio items={items} />
        </div>


        <div className={`${styles.services} ${styles.srv_scroller}`}>
    <div className={styles.service_hight}>
    <h2 className={styles.mainheading}>OUR</h2>
    <h2 className={styles.sec_heading}>SERVICES</h2>
    <div className="accordion">
    <AccordionOne />  
    </div>
    </div>
   </div>


   <div className={styles.brandanim}>
        <BrandAnimated />
      </div>


     {/* Project Diffrence */}
     <div className={styles.prodiff} data-aos="fade-up">
      <div className={styles.rowstory}>
        <div className={styles.columnpdiff1}>
        <h2>{hoverText}</h2>
        </div>
        <div className={styles.columnpdiff2}>
          <h3 className={styles.prtitle}>260+</h3>
          <p className={styles.prdesc}>260+ Project Delivered & Counting</p>
        </div>
      </div>
      <div className={styles.rowstory} id={styles.proj}>
        <div className={styles.columnpdiff3} onMouseEnter={() => handleMouseEnter('6 Years of Design Operations')} onMouseLeave={handleMouseLeave}>
        <h3 className={styles.prtitle}>6</h3>
          <p className={styles.prdesc}>Years of Design Operations </p>
        </div>
        <div className={styles.columnpdiff4} onMouseEnter={() => handleMouseEnter('56+ Happy Clients')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle}>56+</h3>
          <p className={styles.prdesc}>Happy Clients </p>
        </div>
        <div className={styles.columnpdiff5} onMouseEnter={() => handleMouseEnter('7+ Professional Designers')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle}>7+</h3>
          <p className={styles.prdesc}>Professional Designers</p>
        </div>
        <div className={styles.columnpdiff6} onMouseEnter={() => handleMouseEnter('14+ Industries Served')} onMouseLeave={handleMouseLeave}>
          <h3 className={styles.prtitle}>14+</h3>
          <p className={styles.prdesc}>Industries served</p>
        </div>
      </div>
    </div>
      {/* calendly sec */}
      <Calendly />
        </section>
    );
};

export default Reachus;
"use client();"
import Image from "next/image";
import styles from './component.module.css';
import { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  useEffect(() =>{
    AOS.init({
      duration: 1000, // Customize the duration of the animations
      once: false,     // Whether animation should happen only once - while scrolling down
    });
  }, []);
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

    return (
       <div data-aos="fade-up" className={styles.formsec}>
        <div className={styles.controw}>
            <div className={styles.contcolumn1}>
            <Image data-aos="fade-up"
                  className={styles.caas}
                  src="/home/caas.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <p data-aos="fade-up" className={styles.fdesc}>
                <b>Got an exciting project in mind?</b><br/>
                Reach out to us today and let's bring your ideas to life! Whether it's a new brand identity, a stunning website, eye-catching packaging, or eCommerce solution, we're here to help.
                </p>

                <h3 data-aos="fade-up" className={styles.conhead}>Don’t  be afraid Say hellooo!</h3>
                <p data-aos="fade-up" className={styles.fdesc}>
                You can connect us directly on our social media. 
                </p>
                <div data-aos="fade-up" className={styles.socialmedia}>
                    <a href="">
                        <Image data-aos="fade-up"
                        className={styles.scicon}
                        src="/home/social/linkedin.svg"
                        alt="Next.js Logo"
                        layout="responsive"
                        width={100}
                        height={37}
                        priority
                        />
                    </a>
                    <a href="">
                        <Image data-aos="fade-up"
                        className={styles.scicon}
                        src="/home/social/insta.svg"
                        alt="Next.js Logo"
                        layout="responsive"
                        width={100}
                        height={37}
                        priority
                        />
                    </a>
                    <a href="">
                        <Image data-aos="fade-up"
                        className={styles.scicon}
                        src="/home/social/fb.svg"
                        alt="Next.js Logo"
                        layout="responsive"
                        width={100}
                        height={37}
                        priority
                        />
                    </a>
                </div>
            </div>
            <div className={styles.contcolumn2}>
                <div className={styles.formcontainer}>
                    <h3 data-aos="fade-up" className={styles.formhead}>Get a Free Design Audit</h3>
                    <p data-aos="fade-up" className={styles.formdesc}>
                    Fill in the details to know more
                    </p>
                    <form data-aos="fade-up" onSubmit={handleSubmit} netlify>
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
                                <input type="checkbox" value="Branding" />
                                <label>Branding</label>
                                <input type="checkbox" value="Packaging" />
                                <label>Packaging</label>
                                <input type="checkbox" value="Website" />
                                <label>Website</label>
                            </div>
                            <div className={styles.chekinputt}>
                                <input type="checkbox" value="Publication" />
                                <label>Publication</label>
                                <input type="checkbox" value="Social Media" />
                                <label>Social Media</label>
                                <input type="checkbox" value="Ecommerce" />
                                <label>Ecommerce</label>
                                
                            </div>

                        </div>
                        <div className={styles.formInput}>
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Brief about the Project"
                        />
                        </div>
                        <button type="submit" className={styles.subsbtns}>Submit</button>
                        </form>
                </div>
            </div>
        </div>
       </div>
    );
};

export default ContactForm;
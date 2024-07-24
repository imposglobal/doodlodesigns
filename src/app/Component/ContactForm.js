"use client();"
import Image from "next/image";
import styles from './component.module.css';
import { useState } from 'react';

const ContactForm = () => {
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
       <div className={styles.formsec}>
        <div className={styles.controw}>
            <div className={styles.contcolumn1}>
            <Image
                  className={styles.caas}
                  src="/home/caas.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <p className={styles.fdesc}>
                <b>Got an exciting project in mind?</b><br/>
                Reach out to us today and let's bring your ideas to life! Whether it's a new brand identity, a stunning website, eye-catching packaging, or eCommerce solution, we're here to help.
                </p>

                <h3 className={styles.conhead}>Don’t  be afraid Say hellooo!</h3>
                <p className={styles.fdesc}>
                You can connect us directly on our social media. 
                </p>
                <div className={styles.socialmedia}>
                    <a href="">
                        <Image
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
                        <Image
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
                        <Image
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
    );
};

export default ContactForm;
"use client";
import Image from "next/image";
import styles from './component.module.css';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useFetchCountries from "./useFetchCountries";

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const { countries, loading, error } = useFetchCountries();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    code: "",
    phone: "", // Add phone field
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { id: 'branding', label: 'Branding' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'website', label: 'Website' },
    { id: 'publication', label: 'Publication' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'ecommerce', label: 'Ecommerce' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedOptions(prev =>
      checked
        ? [...prev, value]
        : prev.filter(option => option !== value)
    );
  };

  return (
    <div data-aos="fade-up" className={styles.formsec}>
      <div className={styles.controw}>
        <div className={styles.contcolumn1}>
          <Image
            data-aos="fade-up"
            className={styles.caas}
            src="/home/caas.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
          <p data-aos="fade-up" className={styles.fdesc}>
            <b>Got an exciting project in mind?</b><br />
            Reach out to us today and let's bring your ideas to life! Whether it's a new brand identity, a stunning website, eye-catching packaging, or eCommerce solution, we're here to help.
          </p>

          <h3 data-aos="fade-up" className={styles.conhead}>Don’t be afraid Say hellooo!</h3>
          <p data-aos="fade-up" className={styles.fdesc}>
            You can connect us directly on our social media.
          </p>
          <div data-aos="fade-up" className={styles.socialmedia}>
            <a href="">
              <Image
                data-aos="fade-up"
                className={styles.scicon}
                src="/home/social/linkedin.svg"
                alt="LinkedIn"
                layout="responsive"
                width={100}
                height={37}
                priority
              />
            </a>
            <a href="">
              <Image
                data-aos="fade-up"
                className={styles.scicon}
                src="/home/social/insta.svg"
                alt="Instagram"
                layout="responsive"
                width={100}
                height={37}
                priority
              />
            </a>
            <a href="">
              <Image
                data-aos="fade-up"
                className={styles.scicon}
                src="/home/social/fb.svg"
                alt="Facebook"
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
              <div className={`${styles.formInput} ${styles.flexs}`}>
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <select
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    id="country-code-select"
                    className={styles.dropdown}
                  >
                    <option>Country</option>
                    {countries.map((country) => (
                      <option
                        key={country.cca2}
                        value={country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "")}
                      >
                        {country.name.common} ({country.idd.root}
                        {country.idd.suffixes ? country.idd.suffixes[0] : ""})
                      </option>
                    ))}
                  </select>
                )}
                <input
                  className={styles.phone}
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="& My Mobile Number is"
                />
              </div>
              <div className={`${styles.formInput} ${styles.flexs}`}>
                <button type="button" className={styles.dropdownButton} onClick={toggleDropdown}>
                I am looking for
                </button>
                {isOpen && (
                  <div className={styles.dropdownContent}>
                    {options.map(option => (
                      <label key={option.id} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          value={option.id}
                          checked={selectedOptions.includes(option.id)}
                          onChange={handleCheckboxChange}
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                )}
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

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

  const { countries, loading: countriesLoading, error: countriesError } = useFetchCountries();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    code: "",
    phone: "",
    services: []
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(false);  // Loading state
  const [successMessage, setSuccessMessage] = useState("");  // Success message state
  const [errorMessage, setErrorMessage] = useState("");  // Error message state
  const [formError, setFormError] = useState("");  // Form validation error state

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
    setFormError("");  // Reset form error
    setLoading(true);  // Set loading to true

    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.code || !formData.phone) {
      setFormError("Please fill in all required fields.");
      setLoading(false);  // Set loading to false
      return;
    }

    // Add selected options to formData
    setFormData(prevData => ({
      ...prevData,
      services: selectedOptions
    }));

    try {
        const response = await fetch("https://dds.doodlo.in/API/doodloapi.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }

        const result = await response.json();
        setSuccessMessage("<b>Inbox Adventure!</b> <br/> Your message is on a journey to our team. We’ll be in touch before the adventure ends!");
        setFormData({
          name: "",
          email: "",
          message: "",
          code: "",
          phone: "",
          services: []
        }); // Clear form data
        setSelectedOptions([]); // Clear selected options

        // Show success message in alert
        //alert(`Success: ${JSON.stringify(result)}`);
        
    } catch (error) {
        console.error('Error submitting form:', error);
        setErrorMessage(`Error submitting form: ${error.message}`);
        alert(`Error submitting form: ${error.message}`); // Show error message in alert
    } finally {
        setLoading(false);  // Set loading to false
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

  useEffect(() => {
    // Sync selectedOptions with formData.services
    setFormData(prevData => ({
      ...prevData,
      services: selectedOptions
    }));
  }, [selectedOptions]);

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
            {formError && <p className={styles.formError}>{formError}</p>}
            {loading && <div className={styles.loading}>Loading...</div>}
            {successMessage && <p className={styles.successMessage} dangerouslySetInnerHTML={{ __html: successMessage }} />}
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            <form data-aos="fade-up" onSubmit={handleSubmit}>
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
                {countriesLoading ? (
                  <p>Loading countries...</p>
                ) : countriesError ? (
                  <p>{countriesError}</p>
                ) : (
                  <select
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    id="country-code-select"
                    className={styles.dropdown}
                  >
                    <option value="">Country</option>
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
              <button type="submit" className={styles.subsbtns}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

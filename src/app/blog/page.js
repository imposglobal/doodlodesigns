"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/Images/logo";
import Menu from "@/app/Component/Menu";


const Blog = () => {
  useEffect(() => {
    document.title = "Doodlo Design Blog | Insights on Branding, Design & More";

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Get insights on the Doodlo Design blog for expert advice on branding, design trends, creative solutions, and tips to elevate your business and digital presence."
      );
    }

    
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute("content", " ");
    }

     // Add the canonical tag 
     const canonicalTag = document.querySelector('link[rel="canonical"]');
     if (canonicalTag) {
       canonicalTag.setAttribute("href", "https://doodlodesigns.com/blog"); 
     } 

    
  }, []);


 

  const [inactive, setInactive] = useState(true);
  const [userdata, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(true);

  const toggleClass = () => {
    setInactive(!inactive);
  };

  useEffect(() => {
    axios
      .get("https://doodlodesign.com/wp-json/wp/v2/posts?_embed&per_page=100")
      .then((response) => {
        // Reverse the data array to show posts in reverse order
        const reversedData = response.data.reverse();
        setData(reversedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
        setLoading(false);
      });
  }, []);

  // const getCategoryFromClassList = (classList) => {
  //   if (Array.isArray(classList)) {
  //     const categoryClass = classList.find((className) =>
  //       className.startsWith("category-")
  //     );
  //     return categoryClass ? categoryClass.replace("category-", "") : "No Category";
  //   }
  //   return "No Category";
  // };


  const getCategoryFromClassList = (classList) => {
    if (Array.isArray(classList)) {
      const categoryClass = classList.find((className) =>
        className.startsWith("category-")
      );
      return categoryClass
        ? categoryClass.replace("category-", "")[0].toUpperCase() + categoryClass.replace("category-", "").slice(1).toLowerCase()
        : "No category";
    }
    return "No category";
  };
  



  // Handle scroll event to trigger loading more posts
  const handleScroll = () => {
    const bottom = document.documentElement.scrollHeight === document.documentElement.scrollTop + window.innerHeight;
    if (bottom && !loading) {
      setLoading(true);
      setPage((prevPage) => prevPage + 1); // Increment page number to fetch more posts
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  

  return (
    <div>
      {/* Sidebar Menu */}
      <div id="wrapper">
        <div className={`menuwrap ${inactive ? "inactive" : ""} doodbg`}>
          <div className="menusec">
            <div className="menurow">
              <div className="mcol1">
                <div className="menuitem">
                  <Link href="/" className="mitem">
                    Home
                  </Link>
                </div>
                <div className="menuitem">
                  <Link href="/portfolio" className="mitem">
                    Portfolio
                  </Link>
                </div>
                <div className="menuitem">
                  <Link href="/services" className="mitem">
                    Our Services
                  </Link>
                </div>
                <div className="menuitem">
                  <Link href="/our-story" className="mitem">
                    Our Story
                  </Link>
                </div>
                <div className="menuitem">
                  <Link href="/reach-us" className="mitem">
                    Reach us
                  </Link>
                </div>
                <div className="menuitem">
                  <Link href="https://doodlocomics.com/" className="mitem">
                    Shop
                  </Link>
                </div>
              </div>
              <div className="mcol2">
                <div className="socialsec">
                  <p className="gtt">Get in touch</p>
                  <Link href="https://in.linkedin.com/company/doodlodesign">
                    <Image
                      className="msocial"
                      src="/home/social/flinked.svg"
                      alt="LinkedIn"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                  </Link>
                  <Link href="https://www.instagram.com/doodlo_design/">
                    <Image
                      className="msocial"
                      src="/home/social/finsta.svg"
                      alt="Instagram"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/company/13436743">
                    <Image
                      className="msocial"
                      src="/home/social/ffb.svg"
                      alt="Facebook"
                      layout="responsive"
                      width={100}
                      height={37}
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mcopy">
            <p>© 2024 Doodlo | All Rights Reserved | Terms of Use | Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className={`${styles.row} ${styles.mobrow}`}>
        <div className={styles.column1}>
          <div className={`${styles.logosec} ${styles.mlsec}`}>
            <Logo />
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.logosec}>
            <Menu className={styles.menuicon} onClick={toggleClass} />
          </div>
        </div>
      </div>

     {/* Main Section */}
     <div className={styles.mainsec}>
        <div className={styles.titlesec}>
        <h1 className={styles.mainheading}>OUR <br></br><span className={styles.sec_heading}>BLOGS</span></h1>
        </div>

        <div className={styles.blogsec}>
          {loading ? (
            // Skeleton Loader
            Array.from({ length: 6 }).map((_, index) => (
              <div className={styles.skeletonCard} key={index}>
                <div className={styles.skeletonImage}></div>
                <div className={styles.skeletonTitle}></div>
                <div className={styles.skeletonDate}></div>
              </div>
            ))
          ) : (
            userdata.map((data) => (
              <a
                className={styles.link}
                href={`/blog/${data.slug}`}
                key={data.id}
              >
                <div className={styles.blogrow}>
                  {data._embedded &&
                    data._embedded["wp:featuredmedia"] &&
                    data._embedded["wp:featuredmedia"][0] && (
                      <Image
                        src={data._embedded["wp:featuredmedia"][0].source_url}
                        alt={data.title.rendered}
                        layout="responsive"
                        width={100}
                        height={100}
                        priority
                        className={styles.bimg}
                      />
                    )}
                  <h2 className={styles.btitle}>{data.title.rendered}</h2>
                  <h3 className={styles.date}>
                    {new Date(data.date).toLocaleDateString('en-US', {
                      month: 'long', day: 'numeric', year: 'numeric',})} |{" "} {getCategoryFromClassList(data.class_list)}
                  </h3>
                </div>
              </a>
            ))
          )}
        </div>
      </div>

    </div>
  );
};

export default Blog;



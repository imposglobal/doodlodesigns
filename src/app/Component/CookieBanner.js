"use client";
import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from './cookiebanner.module.css'; 

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="OK" 
      cookieName="userAcceptedCookies"
      className={styles.cookieConsentWrapper}
      style={{
        backgroundImage: "linear-gradient(50deg, hsl(0deg 0% 16%) 0%, hsl(0deg 0% 16%) 29%, hsl(0deg 0% 16%) 43%, hsl(0deg 0% 17%) 57%, hsl(0deg 0% 22%) 71%, hsl(0deg 0% 31%) 100%)", 
        fontFamily:"poppins",
        alignItems: "center",
        margin:"0px",
      }}
      buttonStyle={{
        backgroundColor: "#F6FA5E",
        color: "#000",
        fontSize: "13px",
        padding: "4px 14px",
        borderRadius: "7px",
        fontFamily:"poppins",
        margin: "10px 70px 10px 20px",
       
      }}
      expires={365}
    >
      
      <div className={styles.contentWrapper}>
        <div className={styles.cookieTextWrapper}>
          <p className={styles.cookietext}>
          Our website uses cookies to continuously improve your experience and display content geared to your interests. By using our website and services you agree to our use of cookies.
          </p>
        </div>
       
      </div>
    
    </CookieConsent>
  );
};

export default CookieBanner;
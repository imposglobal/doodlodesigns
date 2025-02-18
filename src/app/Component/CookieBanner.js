import React from "react";
import CookieConsent from "react-cookie-consent";
import styles from './cookiebanner.module.css'; 
import Link from "next/link"

const CookieBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All" 
      cookieName="userAcceptedCookies"
      style={{
        backgroundImage: "linear-gradient(50deg, hsl(0deg 0% 16%) 0%, hsl(0deg 0% 16%) 29%, hsl(0deg 0% 16%) 43%, hsl(0deg 0% 17%) 57%, hsl(0deg 0% 22%) 71%, hsl(0deg 0% 31%) 100%)", 
        fontFamily:"poppins",
        alignItems: "center",
        
        
      }}
      buttonStyle={{
        backgroundColor: "#F6FA5E",
        color: "#000",
        fontSize: "16px",
        padding: "7px 30px",
        borderRadius: "10px",
        marginRight: "170px",
        fontFamily:"poppins",
      }}
      expires={365}
    >
      
      <div className={styles.contentWrapper}>
        <div className={styles.cookieTextWrapper}>
          <p className={styles.cookietext}>
            We use cookies to enhance your experience, analyze traffic, and improve our services. Some are essential, while others help us personalize content. Read our <Link href="/privacy-policy" className={styles.linktext}>Privacy Policy</Link> to learn more.
          </p>
        </div>
       
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;

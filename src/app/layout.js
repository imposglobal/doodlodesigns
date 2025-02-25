import BackToTopButton from "./Component/Backtotop";
import Footer from "./Component/Footer";
import CookieBanner from "./Component/CookieBanner";
import "./globals.css";




export const metadata = {
  title: "Doodlo design studio",
  description: "-  ",
  keywords: "- ",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>   
      <link rel="canonical" href=" "/>
      <meta name='robots' content="index, follow"/>
      {/* <!-- Google Tag Manager --> */}
      <script 
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MB8JMLP');`
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>

      <body>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MB8JMLP"
height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
        {children}
         {/* Footer Starts */}
        <BackToTopButton />
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

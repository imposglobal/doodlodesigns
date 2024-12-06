import BackToTopButton from "./Component/Backtotop";
import Footer from "./Component/Footer";
import "./globals.css";

export const metadata = {
  title: "Doodlo Designs Studio",
  description: "-  ",
  keywords: "- " 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body>{children}
         {/* Footer Starts */}
         <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}

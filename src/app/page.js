import Image from "next/image";
import Logo from "./Images/logo";
import styles from "./page.module.css";
import ImageRow from './Images/ImageRow';


const Home = () => {
  const imagesRow1 = [
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
  ];

  const imagesRow2 = [
   "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
    "/home/row1img1.jpg",
  ];

  const imagesRow3 = [
     "/home/row3img1.jpg",
     "/home/row3img2.jpg",
     "/home/row3img3.jpg",
     "/home/row3img4.jpg",
     "/home/row3img1.jpg",
     "/home/row3img2.jpg",
     "/home/row3img3.jpg",
     "/home/row3img4.jpg",
   ];

  return (
    <section className={styles.home_bg}>
      <div className={styles.logo_col}>
        <Logo />
      </div>

      {/* First row of images */}
      <div className={styles.img_row_col}>
      <ImageRow images={imagesRow1} />
      </div>
      {/* Second row of images */}
      <div className={styles.img_row_col2}>
        <ImageRow images={imagesRow2} />
      </div>
       {/* Third row of images */}
       <div className={styles.img_row_col}>
      <ImageRow images={imagesRow3} />
      </div>

     <div className={styles.home_hero_content}> 
     <Image
            className={styles.homestar}
            src="/home/homestar.png"
            alt="Next.js Logo"
            layout="responsive"
            width={100}
            height={37}
            priority
          />
      <h2 data-text="We're your go-to" className={styles.text_stroke_hover}>We're your go-to</h2>
      <h2 data-text="We're your go-to" className={styles.text_title}>Creative Studio</h2>
      <p className={styles.home_hero_desc}>Of course we're into Branding, Web<br/> Design, Packaging, Illustrations,<br/> publication, social media & what not!</p>
      <a className="boton_elegante">EXPLORE MORE</a>
     </div>
    </section>
  );
};

export default Home;
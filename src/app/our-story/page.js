"use client";
import Accordion from "../Component/Faq/Accordion";
import Menu from "../Component/Menu";
import Logo from "../Images/logo";
import Image from "next/image";
import styles from "./page.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import SliderComponent from "../Component/TeamSlider";
import Process from "../Component/Process";
import OurProcess from "../Component/Ourprocess";
import Link from "next/link";
import ImageSwitcher from "../Component/Storyimg";

const OurStory = () => {
  useEffect(() => {
    document.title = "Leading Design Agency in India & UK | Doodlo Design Studio";

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute(
        "content",
        "Doodlo Design is a leading global branding and design agency, specializing in innovative solutions to elevate brand identity, digital presence, and customer experience."
      );
    }

    // Update the meta keywords dynamically
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute("content", " ");
    }

    const metaTitleTag = document.querySelector('meta[name="title"]');
    if (metaTitleTag) {
      metaTitleTag.setAttribute("content", "Leading Design Agency in India & UK | Doodlo Design Studio");
    }
  }, []);


    useEffect(() =>{
        AOS.init({
          duration: 1000, // Customize the duration of the animations
          once: false,     // Whether animation should happen only once - while scrolling down
        });
      }, []);
   
    const [inactive, setInactive] = useState(true); // Set initial state to true
  
    const toggleClass = () => {
      setInactive(!inactive);
    };
  
    
   
    return(
        <section>
              {/* Menu start */}
              <div id="wrapper">
      <div className={`menuwrap ${inactive ? 'inactive' : ''} doodbg`}>
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
              <Link href="/our-story" className="mitem active">
                Our Story
              </Link>
              <div className="border-bottom"></div>
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
                <p className="gtt">Get in touch </p>
                <Link href="https://in.linkedin.com/company/doodlodesign">
                                    <Image
                                    className="msocial"
                                    src="/home/social/flinked.svg"
                                    alt="Next.js Logo"
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
                                    alt="Next.js Logo"
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
                                    alt="Next.js Logo"
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
        <p>© 2024 Doodlo | All Rights Reserved | Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </div>
    {/* Menu end */}
       
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

            <div className={styles.ourstorysec}>
            {/* <h2 data-aos="fade-up" className={styles.text_stroke_hover}>We ‘re Doodlers & 
                                    <Image data-aos="fade-up"
                                    className={styles.starimg}
                                    src="/home/homestar.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
            </h2> */}


            <h1 data-aos="fade-up" className={styles.text_stroke_hover}>We ‘re Doodlers & 
                                    <Image data-aos="fade-up"
                                    className={styles.starimg}
                                    src="/home/homestar.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
                                    <br></br>
            <span data-aos="fade-up" className={styles.text_title}>digital creators</span>
            </h1>
            {/* <h2 data-aos="fade-up" className={styles.text_title}>digital creators </h2> */}
            <p data-aos="fade-up" className={styles.desc}>Creative Professionals with Business Brains. (yes, it's a thing!), obsessed with bringing fresh ideas and strategic thinking to everything we do.</p>
            <p data-aos="fade-up" className={styles.desc}>Think of us as your <b>design dream team, fueled by caffine and crazy strategic ideas.</b> We're a tight-knit crew, but with the firepower of a big agency. We tackle a wide range of design challenges, from crafting killer logos and packaging that pops to building websites that wow and branding that sticks.
            </p>
            <Image data-aos="fade-up"
                                    className={styles.starimgs}
                                    src="home/ourstory/ourstory.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
            </div>

            {/* Our Story section start */}
      <div className={styles.story}>
        <div className={styles.rowstory}>
          <div className={styles.columnst1}>
          {/* <h2 className={styles.mainheading}>We Speak</h2>
          <h2 className={styles.sec_heading}>Strategy Too </h2> */}
      <h2 className={styles.mainheading}>We Speak <br></br> <span className={styles.sec_heading}>Strategy Too</span></h2>
          <p className={styles.storydesc}>
          We’re quirky, dedicated, and obsessed with making your brand shine with strategic process, loads of passion & ultimate thrill with results.<br/><br/>

         Fueled by caffeine and crazy strategic ideas. We're a tight-knit crew, but with the firepower of a big agency. We tackle a wide range of design challenges, from crafting killer logos and packaging that pops to building websites that wow and branding that sticks.
          </p>
          </div>
          <div className={styles.columnst2}>
            <div className={styles.stimg}>
            <Image
                  className={styles.ppimg}
                  src="/home/storyimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            </div>
          </div>
        </div>
      </div>
      {/* Our Story section end */}
    {/* Tool Kit */}
    <div className={styles.ourstorysec}>
    <h2 data-aos="fade-up" className={styles.text_stroke_hover}>Our Team <br></br> <span data-aos="fade-up" className={styles.text_title}>Toolkit looks like</span></h2>
            <div className={styles.toolsec} data-aos="fade-up">
                <Image
                  className={styles.toolimg}
                  src="/home/tool/figma.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/ai.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/id.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/ps.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/xd.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/ae.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                {/* row 2*/}
                <Image
                  className={styles.toolimg}
                  src="/home/tool/lara.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/react.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/star.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/notion.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/wp.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/shopify.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/php.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/ci.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                {/* row 3*/}
               
               
                <Image
                  className={styles.toolimg}
                  src="/home/tool/css.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                <Image
                  className={styles.toolimg}
                  src="/home/tool/js.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                
            </div>
           <p className={styles.tooltext}>More tools like our sketch books, pens, pencils, and we love our stationary utterly!</p>
    </div>
    {/* Tool kit end */}

    {/* who we are section */}
    <div className={styles.whowesec}>
      <div className={styles.row}>
        <div className={styles.whocol1}>
        <h2 data-aos="fade-up" className={styles.text_stroke_hover}>WHO <br></br><span data-aos="fade-up" className={styles.text_title}>we are</span></h2>
        </div>
        <div className={styles.whocol2}>
          <div className={styles.quote}>
            <Image  data-aos="fade-up" 
                    className={styles.quoteimg}
                    src="/home/quote.png"
                    alt="Next.js Logo"
                    layout="responsive"
                    width={100}
                    height={37}
                    priority
                  />
            <p data-aos="fade-up" className={styles.whodesc}>
            We’re a proactive group of creative personalities , we love to think outside of the box. Experimenting, dreaming, working on our love for colors, life & possibilities.
            </p>
          </div>
          <div>
          <p data-aos="fade-up" className={styles.storydescs}>
            To become an Elite Design professional, in providing meaningful, memorable and magnetic design solutions in the competitive global marketplace.<br></br><br></br>
            Our vision is to Empowering businesses to thrive with cutting-edge design and branding, transforming digital landscapes.
            <br></br><br></br>
            Our mission is to create powerful digital assets that tell compelling stories, shape brand identities, and leave a lasting impact on your audience.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* who we are section */}
       {/* Process */}
       <div className={styles.prosec}>
        <div className={styles.desktopv}>
        <Process />
        </div>
        <div className={styles.mobilev}>
        <OurProcess />
        </div>
          </div>
         {/* Process */}
      {/* our founder  */}
      <div className={styles.whowesecs}>
      <div className={styles.fsec}>
      <h2 className={styles.mainheadings} data-aos="fade-up">oUR</h2>
      <h2 className={styles.sec_headings} data-aos="fade-up">Founders</h2>
      </div>
      <SliderComponent />
      </div>
      {/* our founder  */}

      {/* Our team */}
      <div className={styles.teamsec}>
      <h2 className={styles.mainheading} data-aos="fade-up">meet<br></br><span className={styles.sec_heading}>Our team</span></h2>
      <div className={styles.rows}>
       {/* team inner */}
       <div className={styles.tcol}>
          <div className={styles.teaminner}>
          <Image data-aos="fade-up"
                  className={styles.ppimgss}
                  src="/home/team/rushi.webp"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={`${styles.row} ${styles.mobrow}`}>
                <div className={styles.teamcol1}>
                <h4 className={styles.teamtitle} data-aos="fade-up">Rushikesh K</h4>
                <p className={styles.ttitle} data-aos="fade-up">Team lead | Sr. web developer</p>
                </div>
                <div className={styles.teamcol2}>
                <Image data-aos="fade-up"
                  className={styles.linked}
                  src="/home/linked.svg"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                </div>
              </div>
              <div className={styles.tdetail}>
                <p className={styles.tdesc}>
                Our team lead and senior full-stack developer is a coding wizard who takes his craft seriously. He’s a master of jugaad, finding creative solutions for any challenge that comes his way. Plus, he's a fun-loving, jolly guy who keeps the workplace light and makes the impossible doable.
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* team Inner End */}
       {/* team inner */}
       <div className={styles.tcol}>
          <div className={styles.teaminner}>
          <Image data-aos="fade-up"
                  className={styles.ppimgss}
                  src="/home/team/aastha.webp"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={`${styles.row} ${styles.mobrow}`}>
                <div className={styles.teamcol1}>
                <h4 className={styles.teamtitle} data-aos="fade-up">Aastha Dave</h4>
                <p className={styles.ttitle} data-aos="fade-up">Visual Designer</p>
                </div>
                <div className={styles.teamcol2}>
                <Image data-aos="fade-up"
                  className={styles.linked}
                  src="/home/linked.svg"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                </div>
              </div>
              <div className={styles.tdetail}>
                <p className={styles.tdesc}>
                Our creative powerhouse, effortlessly multitasking her way through design challenges with amazing skill. When she's not crafting stunning visuals, you can find her munching on pulse candy & savoring her favorite Vada pav. In her free time, Aastha lets her creativity flow through her incredible doodles.
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* team Inner End */}
       {/* team inner */}
       <div className={styles.tcol}>
          <div className={styles.teaminner}>
          <Image data-aos="fade-up"
                  className={styles.ppimgss}
                  src="/home/team/krushna.webp"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={`${styles.row} ${styles.mobrow}`}>
                <div className={styles.teamcol1}>
                <h4 className={styles.teamtitle} data-aos="fade-up">Krushna Phad</h4>
                <p className={styles.ttitle} data-aos="fade-up">Jr. web developer</p>
                </div>
                <div className={styles.teamcol2}>
                <Image data-aos="fade-up"
                  className={styles.linked}
                  src="/home/linked.svg"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                </div>
              </div>
              <div className={styles.tdetail}>
                <p className={styles.tdesc}>
                Wise owl of our team, bringing depth and insight to every project. A back end expert by day, he's also a talented musician, often found playing various instruments. As a natural teacher, he enjoys sharing his knowledge & guiding others. Off the clock, Krishna sharpens his strategic skills as a formidable chess player.
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* team Inner End */}
      </div>
      <div className={styles.rows}>
       {/* team inner */} 
       <div className={styles.tcol}>
          <div className={styles.teaminner}>
          <Image data-aos="fade-up"
                  className={styles.ppimgss}
                  src="/home/team/vipul.webp"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={`${styles.row} ${styles.mobrow}`}>
                <div className={styles.teamcol1}>
                <h4 className={styles.teamtitle} data-aos="fade-up">Vipul Punaskar </h4>
                <p className={styles.ttitle} data-aos="fade-up">Illustrator, Designer</p>
                </div>
                <div className={styles.teamcol2}>
                <Image data-aos="fade-up"
                  className={styles.linked}
                  src="/home/linked.svg"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                </div>
              </div>
              <div className={styles.tdetail}>
                <p className={styles.tdesc}>
                Our amazing illustrator & designer who doubles as the office DJ, filling our workspace with great vibes. An active & extroverted soul, he's always welcoming & ready to engage. Despite his love for naps, he's always active & amazing at his work. When he's not crafting stunning designs, you'll find him riding his bike or trekking through nature, constantly seeking new adventures.
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* team Inner End */}
       {/* team inner */}
       <div className={styles.tcol}>
          <div className={styles.teaminner}>
          <Image data-aos="fade-up"
                  className={styles.ppimgss}
                  src="/home/team/shraddha.webp"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={`${styles.row} ${styles.mobrow}`}>
                <div className={styles.teamcol1}>
                <h4 className={styles.teamtitle} data-aos="fade-up">Shraddha Bokade</h4>
                <p className={styles.ttitle} data-aos="fade-up">Jr. full-stack Developer</p>
                </div>
                <div className={styles.teamcol2}>
                <Image data-aos="fade-up"
                  className={styles.linked}
                  src="/home/linked.svg"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                </div>
              </div>
              <div className={styles.tdetail}>
                <p className={styles.tdesc}>
                Our disciplined and focused junior fullstack developer. A dedicated chai lover with the longest hair in the office, Shaddha is known for her hard-working nature and attention to detail. Just be careful not to catch her on a bad day—she's easily annoyed!
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* team Inner End */}
       {/* team inner */}
       <div className={styles.tcol}>
          <div className={styles.teaminner}>
          <Image data-aos="fade-up"
                  className={styles.ppimgss}
                  src="/home/team/yashasvi.webp"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={`${styles.row} ${styles.mobrow}`}>
                <div className={styles.teamcol1}>
                <h4 className={styles.teamtitle} data-aos="fade-up">Yashasvi Satodiya</h4>
                <p className={styles.ttitle} data-aos="fade-up">Jr. Graphic Designer</p>
                </div>
                <div className={styles.teamcol2}>
               <Image data-aos="fade-up"
                  className={styles.linked}
                  src="/home/linked.svg"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                </div>
              </div>
              <div className={styles.tdetail}>
                <p data-aos="fade-up" className={styles.tdesc}>
                Meet Yashsvi, or as we like to call her, Jiggu! This talented designer has a passion for animation and doodling, which she turns into delightful designs that brighten our day. Whether she's adding a splash of creativity or a touch of fun to our projects, Jiggu’s playful spirit and artistic flair make her a key part of our team.
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* team Inner End */}
      </div>
      <div className={styles.rows}>
        {/* team inner */}
       <div className={styles.tcol}>
          <div className={styles.teaminner}>
          <Image data-aos="fade-up"
                  className={styles.ppimgss}
                  src="/home/team/hanuman.webp"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={`${styles.row} ${styles.mobrow}`}>
                <div className={styles.teamcol1}>
                <h4 className={styles.teamtitle} d>Hanuman T</h4>
                <p className={styles.ttitle} d>Office Assistant</p>
                </div>
                <div className={styles.teamcol2}>
               <Image d
                  className={styles.linked}
                  src="/home/linked.svg"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
                </div>
              </div>
              <div className={styles.tdetail}>
                <p d className={styles.tdesc}>
                Our youngest office assistant, is a hands-on worker known for his honesty and curiosity to learn. Responsible and always eager to help, he's also a big fan of the office AC, making sure everyone stays cool and comfortable.
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* team Inner End */}
       <div className={styles.tcol}></div>
       <div className={styles.tcol}></div>

      </div>
      </div>
      {/* Our team */}
      {/* Our Office Life */}
      <div className={styles.whowesec}>
      <div className={styles.row}>
        <div className={styles.whocol1}>
        <h2 data-aos="fade-up" className={styles.text_stroke_hover}>Our <br></br><span data-aos="fade-up" className={styles.text_title}>office life</span></h2>
        <p data-aos="fade-up" className={styles.odesc}>
        A glimpse into life at Doodlo.
        </p>
        </div>
      </div>
      <div data-aos="fade-up">
      <ImageSwitcher />
      </div>

      </div>
      
        </section>
    );
};
export default OurStory;
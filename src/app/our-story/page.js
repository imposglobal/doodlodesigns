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

const OurStory = () => {

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
            <div id="wrapper">
                <div className={`menuwrap ${inactive ? 'inactive' : ''} doodbg`}>
                    <h1>Content</h1>
                </div>
                </div>
                <div className={styles.faqsecs}>
                <div className={styles.row}>
                    <div className={styles.column1}>
                        <div className={styles.logosec}>
                        <Logo />
                        </div>
                    </div>
                    <div className={styles.column2}>
                        <div className={styles.logosec}>
                        <Menu className={styles.menuicon} onClick={toggleClass} />
                        </div>
                    </div>
                </div>
                </div>

            <div className={styles.ourstorysec}>
            <h2 data-aos="fade-up" className={styles.text_stroke_hover}>We ‘re Doodlers & 
                                    <Image data-aos="fade-up"
                                    className={styles.starimg}
                                    src="/home/homestar.png"
                                    alt="Next.js Logo"
                                    layout="responsive"
                                    width={100}
                                    height={37}
                                    priority
                                    />
            </h2>
            <h2 data-aos="fade-up" className={styles.text_title}>digital creators </h2>
            <p data-aos="fade-up" className={styles.desc}>creative professionals with Business brains.(yes, it's a thing!), obsessed with bringing fresh ideas and strategic thinking to everything we do.</p>
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
          <h2 className={styles.mainheading}>We Speak</h2>
          <h2 className={styles.sec_heading}>Strategy Too </h2>
          <p className={styles.storydesc}>
          We’re quirky, dedicated, and obsessed with making your brand shine with strategic process, loads of passion & ultimate thrill with results.<br/><br/>

          <span className={styles.white}>Think of us as your design dream team,</span> fueled by caffine and crazy strategic ideas. We're a tight-knit crew, but with the firepower of a big agency. We tackle a wide range of design challenges, from crafting killer logos and packaging that pops to building websites that wow and branding that sticks.
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
            <h2 data-aos="fade-up" className={styles.text_stroke_hover}>Our Team   </h2>
            <h2 data-aos="fade-up" className={styles.text_title}>Toolkit looks like</h2>
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
                  src="/home/tool/html.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
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
                <Image
                  className={styles.toolimg}
                  src="/home/tool/dds.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            </div>
            <p data-aos="fade-up" className={styles.toottext}>More tools like our sketch books, pens, pencils, and we love our stationary utterly!</p>
    </div>
    {/* Tool kit end */}

    {/* who we are section */}
    <div className={styles.whowesec}>
      <div className={styles.row}>
        <div className={styles.whocol1}>
        <h2 data-aos="fade-up" className={styles.text_stroke_hover}>WHO</h2>
        <h2 data-aos="fade-up" className={styles.text_title}>we are</h2>
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
        </div>
      </div>
    </div>

    {/* who we are section */}
      {/* Our Story section start */}
      <div className={styles.story}>
        <div className={styles.rowstory}>
        <div className={styles.columnst2}>
            <div className={styles.stimg1}>
            <Image data-aos="fade-up"
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
          <div className={styles.columnst1} >
          <h2 className={styles.mainheading} data-aos="fade-up">OUR Value</h2>
          <h2 className={styles.sec_heading} data-aos="fade-up">proposition</h2>
          <p className={styles.storydesc} data-aos="fade-up">
          To become an Elite Design professional, in providing meaningful, memorable and magnetic design solutions in the competitive global marketplace.<br/><br/>
          Our vision is to Empowering businesses to thrive with cutting-edge design and branding, transforming digital landscapes.<br/><br/>

          Our mission is to create powerful digital assets that tell compelling stories, shape brand identities, and leave a lasting impact on your audience.
          </p>
          </div>
          
        </div>
      </div>
      {/* Our Story section end */}
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
      <h2 className={styles.mainheading} data-aos="fade-up">meet </h2>
      <h2 className={styles.sec_heading} data-aos="fade-up">Our team</h2>
      <div className={styles.rows}>
       {/* team inner */}
       <div className={styles.tcol}>
          <div className={styles.teaminner}>
          <Image data-aos="fade-up"
                  className={styles.ppimgss}
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={styles.row}>
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
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={styles.row}>
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
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={styles.row}>
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
      </div>
      <div className={styles.rows}>
       {/* team inner */} 
       <div className={styles.tcol}>
          <div className={styles.teaminner}>
          <Image data-aos="fade-up"
                  className={styles.ppimgss}
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={styles.row}>
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
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={styles.row}>
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
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
            <div className={styles.descinner}>
              <div className={styles.row}>
                <div className={styles.teamcol1}>
                <h4 className={styles.teamtitle} data-aos="fade-up">Rushikesh K</h4>
                <p className={styles.ttitle} data-aos="fade-up">Team lead | Sr. web developer</p>
                </div>
                <div className={styles.teamcol2}>
               `` <Image data-aos="fade-up"
                  className={styles.linked}
                  src="/home/linked.svg"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />``
                </div>
              </div>
              <div className={styles.tdetail}>
                <p data-aos="fade-up" className={styles.tdesc}>
                Our team lead and senior full-stack developer is a coding wizard who takes his craft seriously. He’s a master of jugaad, finding creative solutions for any challenge that comes his way. Plus, he's a fun-loving, jolly guy who keeps the workplace light and makes the impossible doable.
                </p>
              </div>
            </div>
          </div>
        </div>
       {/* team Inner End */}
      </div>
      </div>
      {/* Our team */}
      {/* Our Office Life */}
      <div className={styles.whowesec}>
      <div className={styles.row}>
        <div className={styles.whocol1}>
        <h2 data-aos="fade-up" className={styles.text_stroke_hover}>Our</h2>
        <h2 data-aos="fade-up" className={styles.text_title}>office life</h2>
        <p data-aos="fade-up" className={styles.odesc}>
        A glimpse into life at Doodlo.
        </p>
        </div>
      </div>
      <div className={styles.row}>
      <div className={styles.tcol}>
      <Image data-aos="fade-up"
                  className={styles.ppimgs}
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
      </div>
      <div className={styles.tcol}>
      <Image data-aos="fade-up"
                  className={styles.ppimgs}
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
      </div>
      <div className={styles.tcol}>
      <Image data-aos="fade-up"
                  className={styles.ppimgs}
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
      </div>
      </div>
      <div className={styles.row}>
      <div className={styles.tcol}>
      <Image data-aos="fade-up"
                  className={styles.ppimgs}
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
      </div>
      <div className={styles.tcol}>
      <Image data-aos="fade-up"
                  className={styles.ppimgs}
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
      </div>
      <div className={styles.tcol}>
      <Image data-aos="fade-up"
                  className={styles.ppimgs}
                  src="/home/team/teamimg.png"
                  alt="Next.js Logo"
                  layout="responsive"
                  width={100}
                  height={37}
                  priority
                />
      </div>
      </div>
      </div>
      
        </section>
    );
};
export default OurStory;
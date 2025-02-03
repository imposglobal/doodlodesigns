"use client()";
// components/Carousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import '../lib/fontawesome'; // Import the configuration

const Carousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    // const handleResize = () => {
    //   if (window.innerWidth < 768) {
    //     setSlidesToShow(1);
    //   } else {
    //     setSlidesToShow(4);
    //   }
    // };


      const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1); // Mobile view, show 1 slide
      } else if (width >= 768 && width <= 1024) {
        setSlidesToShow(2); // Tablet view, show 2 slides
      } else {
        setSlidesToShow(4); // Desktop view, show 4 slides
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Decrease scrolling time
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Time between each scroll (2 seconds)
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };


  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="card">
          <div className="card_inner">
            <p className="client_h2">Saurav K</p> 
            <p className="client_desg">Founder | Marmeto</p>
            <div className="starsicon">
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className="client_review">They are really good in their work and the best part is that there are passionates behind the services. So when there are passionate people behind the work then you will get nothing less than amazing.</p>
          </div>
        </div>
        <div className="card">
          <div className="card_inner">
            <p className="client_h2">Dan Gabreil</p>
            <p className="client_desg">Marketing Head | Coinsafe VPN</p>
            <div className="starsicon">
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStarHalfStroke} />
              
            </div>
            <p className="client_review">Working with Doodlo was a Game changer for us. They revamped our brand and website with unmatched creativity & precision. Their team's dedication and attention to detail is truly impressive. Highly recommended for design services.</p>
          </div>
        </div>
        <div className="card">
          <div className="card_inner">
            <p className="client_h2">Charu Jain</p>
            <p className="client_desg">Marketing Head | Rishabh Industries Pvt.Ltd</p>
            <div className="starsicon">
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className="client_review">Doodlo Guys hyped our packaging design! Their creativity and attention to detail brought our product to life in ways we never imagined. couldn't be more pleased with the outcome!</p>
          </div>
        </div>
        <div className="card">
          <div className="card_inner">
            <p className="client_h2">Norman Dental</p>
            <p className="client_desg">CEO |  Wurth Industries</p>
            <div className="starsicon">
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStarHalfStroke} />
            </div>
            <p className="client_review">Doodlo is definitely the right choice for our coffee table Project. The team came up with unique set of ideas that clearly sets us apart from being normal. We are very happy with the final book importantly very constructive and flexible collab. Good work team!</p>
          </div>
        </div>

        <div className="card">
          <div className="card_inner">
            <p className="client_h2">Monika K</p>
            <p className="client_desg">Founder  |  K99 Solutions</p>
            <div className="starsicon">
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className="client_review">You guys nailed it! Their work on our brand and website was absolutely top- notch. It was so good to check the final results. From content to design everything exceeded our expectations.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_inner">
            <p className="client_h2">Along Molier</p>
            <p className="client_desg">Operations Head |  Impos Global</p>
            <div className="starsicon">
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStarHalfStroke} />
            </div>
            <p className="client_review">If you're seeking something truly Out of the world, Doodlo Design is the place to be. Their work is nothing short of inspiring, I've personally experienced that leaves a lasting impact. Keep up the excellent work, Doodlo, your designs truly make a difference!
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card_inner">
            <p className="client_h2">Gayatri Pataskar</p>
            <p className="client_desg">Founder |  Mahatee Interactives </p>
            <div className="starsicon">
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className="client_review">We approached Payal for illustrations for our venture Mahatee Interactives, where we wanted our pictures to be full of Attractive pictures with vivid colours. And Payal delivered just that. We also trusted them with our branding...and again they gave us an identity!
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card_inner">
            <p className="client_h2">Dev Aditya</p>
            <p className="client_desg">Founder |  Mahatee Interactives </p>
            <div className="starsicon">
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className="client_review">We had some change requirements for our existing packaging designs to make new variants and they had done a wonderful job at a very competitive rate. We were happy with their work.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card_inner">
            <p className="client_h2">Njoki Faith</p>
            <p className="client_desg">Manager |  Yolomart </p>
            <div className="starsicon">
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className="client_review">We had some change requirements for our existing packaging designs to make new variants and they had done a wonderful job at a very competitive rate. We were happy with their work.
            </p>
          </div>
        </div>

        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-prev" onClick={onClick}>
      Prev
    </button>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-next" onClick={onClick}>
      Next
    </button>
  );
};

export default Carousel;

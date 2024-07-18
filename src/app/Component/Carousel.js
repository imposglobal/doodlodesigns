"use client();"
// components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../lib/fontawesome'; // Import the configuration


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev">Prev</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="card">
          <div className='card_inner'>
          <h2 className="client_h2">Saurav K</h2>
          <p className='client_desg'>Founder | Marmeto</p>
            <div className='startsicon'>
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className='client_review'>They are really good in their work and the best part is that there are passionates behind the services. So when there are passionate people behind the work then you will get nothing less than amazing.</p>
          </div>
        </div>
        <div className="card">
          <div className='card_inner'>
          <h2 className="client_h2">Dan Gabreil</h2>
          <p className='client_desg'>Marketing Head | Coinsafe VPN</p>
            <div className='startsicon'>
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className='client_review'>Working with Doodlo was a Game changer for us. They revamped our brand and website with unmatched creativity & precision. Their team's dedication and attention to detail is truly impressive. Highly recommended for design services.</p>
          </div>
        </div>
        <div className="card">
          <div className='card_inner'>
          <h2 className="client_h2">Charu Jain </h2>
          <p className='client_desg'>Marketing Head | Rishabh Industries Pvt.Ltd</p>
            <div className='startsicon'>
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className='client_review'>Doodlo Guys hyped our packaging design! Their creativity and attention to detail brought our product to life in ways we never imagined. couldn't be more pleased with the outcome!</p>
          </div>
        </div>
        <div className="card">
          <div className='card_inner'>
          <h2 className="client_h2">Norman Dental</h2>
          <p className='client_desg'>Operations Manager  |  Impos Global</p>
            <div className='startsicon'>
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
              <FontAwesomeIcon className="stars" icon={faStar} />
            </div>
            <p className='client_review'>Doodlo is definitely the right choice for our coffee table Project. The team came up with unique set of ideas that clearly sets us apart from being normal. We are very happy with the final book importantly very constructive and flexible collab. Good work team!</p>
          </div>
        </div>
        
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;

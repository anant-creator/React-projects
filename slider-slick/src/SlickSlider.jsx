import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {list, longList} from './data';
import {FaQuoteRight} from 'react-icons/fa';

import React, { useState } from "react";
import Slider from "react-slick";

const SlickCarousel = () => {
  const [people, setPeople] = useState(list);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
       <section className="slick-container">
        <Slider {...settings}>
        {people.map((person) => {
            const {id, name, image, title, quote} = person;
            console.log(id, name, image, title, quote);
            return <article key={person.id}>
                <img className='person-img' src={image} alt={name} />
                <h5 className='name'>{name}</h5>
                <h6 className='title'>{title}</h6>
                <p className='text'>{quote}</p>
                <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
        })}
        </Slider>
      </section>
  );
};

export default SlickCarousel;

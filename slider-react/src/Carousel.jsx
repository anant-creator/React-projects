import React, {useEffect, useState} from 'react';
import {shortList, list, longList} from './data';
import {FaQuoteRight} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';
import {FiChevronLeft} from 'react-icons/fi';

export default function Carousel() {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(1); 
  const prevSlide = () => {
    setCurrentPerson((oldValue) => {
        const result = (oldValue - 1 +  people.length) % people.length;
        return result;
    });
  };
  const nextSlide = (oldValue) => {
    setCurrentPerson((oldValue) => {
        const result = (oldValue + 1 +  people.length) % people.length;
        return result;
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
        nextSlide();
    }, 2000)
    return () => {
      clearInterval(interval);
    }
  },[currentPerson]);
  return (
    <section className="slider-container">
        {people.map((person, personIndex) => {
            const {id, name, image, title, quote} = person;
            return <article className='slide' style={{transform: `translateX(${100 * (personIndex - currentPerson)}%)`, opacity: personIndex === currentPerson? 1: 0, visibility: personIndex === currentPerson? 'visible': 'hidden' }} key={person.id}>
                <img className='person-img' src={image} alt={name} />
                <h5 className='name'>{name}</h5>
                <h6 className='title'>{title}</h6>
                <p className='text'>{quote}</p>
                <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
        })}
        <button type="button" className='prev' onClick={prevSlide}>
            <FiChevronLeft></FiChevronLeft>
        </button>
        <button type="button" className='next' onClick={nextSlide}>
            <FiChevronRight></FiChevronRight>
        </button>
    </section>
  )
}

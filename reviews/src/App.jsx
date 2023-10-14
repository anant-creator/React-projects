import reviews from './data';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaEarlybirds } from 'react-icons/fa';


const App = () => {
  const [allData, setAllData] = useState(reviews);
  const [current, setCurrent] = useState(0);
  const {image, job, name, text} = allData[current];

  const prevPerson = () => {
    if (allData[current - 1]) {
      setCurrent(current - 1);
    } else {
      setCurrent(allData.length - 1);
    }
  };

  const nextPerson = () => {
    if (allData[current + 1]) {
    setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  }

  const randomPerson = () => {
    const index = Math.floor(Math.random() * allData.length);
    if (allData[index]) {
      setCurrent(index);
    } else {
      setCurrent(index + 1);
    }
  }
  
  return <main>
    <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </article>
  </main>;
};
export default App;

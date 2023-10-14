import React, { useState } from 'react'

export default function Tour({id, image, info, name, price, removeTour}) {
  const [readMore, setReadMore] = useState(false);
  const information = readMore ? info : `${info.substring(0, 300)}...`;
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className="tour-price">
        ${price}
      </span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{ information } <span style={{color: 'red'}} onClick={() => {setReadMore(!readMore);}}>{readMore ? 'Read Less' : 'Read More'}</span> </p>
        <button type="button" className='btn btn-block delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
      </div>
    </article>
  )
}

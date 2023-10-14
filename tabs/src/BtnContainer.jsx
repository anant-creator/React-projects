import React from 'react';

export default function BtnContainer({data, currentItem, setCurrentItem}) {
    console.log("btn", data);
  return (
    <div className='btn-container'>
    {data.map((item, index) => {
      return (
        <button
          key={item.id}
          onClick={() => setCurrentItem(index)}
          className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
        >
          {item.title}
        </button>
      );
    })}
  </div>
  )
}

import React from 'react';
import Duties from './Duties';

export default function JobInfo({data, currentItem}) {
    const {title, company, dates, duties} = data[currentItem];
    console.log("jobs", title, company, dates, duties);
  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <Duties duties={duties} />
    </article>
  )
}

import React from 'react';
import spinner from './assets/spinner.gif';

export default function Loading() {
  return (
    <div className='loading-overlay'>
        <img src={spinner} alt="" />
    </div>
  )
}

import React from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import {FaAngleDoubleRight} from 'react-icons/fa';

export default function Duties({duties}) {
    console.log('duties', duties);
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuidv4();
        // console.log(id);
        return (
          <div key={id} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  )
}

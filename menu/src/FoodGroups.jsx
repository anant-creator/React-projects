import React from 'react';

export default function FoodGroups({categories, catPrinter}) {
    
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            key={category}
            onClick={() => catPrinter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  )
}

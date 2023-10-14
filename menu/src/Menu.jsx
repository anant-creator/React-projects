import React from 'react';
import MenuItem from './menuItem';

export default function Menu({items}) {
    console.log(items);
  return (
    <div className='section-center'>
      {items.map((menuDish) => {
        return <MenuItem key={menuDish.id} {...menuDish} />;
      })}
    </div>
  )
}

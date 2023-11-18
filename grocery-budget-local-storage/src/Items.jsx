import { useState } from 'react';
import { formMethods } from './App';
import SingleItem from './SingleItem';


const Items = () => {
  const {listItems} = formMethods();
  console.log(listItems, "listItems");
  
  return (
    <div className='items'>
      {listItems?.map((item) => {
          const {id, name, completed} = item;
          console.log(id, name, completed);
          return <SingleItem key={item.id} name={item.name} completed={item.completed} id={id} />
      })}
    </div>
  );
};
export default Items;

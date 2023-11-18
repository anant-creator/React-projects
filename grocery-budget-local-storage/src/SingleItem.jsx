import { useState } from "react";
import { formMethods } from "./App";

const SingleItem = (props) => {
  const {removeItem, editItem} = formMethods();
  const {id, name, completed} = props;
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p style={{textTransform: 'capitalize', textDecoration: completed ? 'line-through' : ''}}>
        {name}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;

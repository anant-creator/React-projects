import data from './data';
import React, {useState} from 'react';
import {nanoid} from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = data.filter((pera, index) => index <= count - 1);
    setText(newList);
  }
  
  return <section className='section-center'>
  <h4>tired of boring lorem ipsum?</h4>
  <form className='lorem-form' onSubmit={handleSubmit}>
    <label htmlFor='amount'>paragraphs:</label>
    <input
      type='number'
      name='amount'
      id='amount'
      min='1'
      step='1'
      max='8'
      value={count}
      onChange={(e) => setCount(e.target.value)}
    />
    <button className='btn' type='submit'>
      generate
    </button>
  </form>
  <article className='lorem-text'>
    {text.map((item) => {
      return <p key={nanoid()}>{item}</p>;
    })}
  </article>
</section>;
};
export default App;

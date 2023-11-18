import React, { useState } from 'react'
import Items from './Items';
import { formMethods } from './App';
import {toast} from 'react-toastify';


export default function MyForm() {
  const [newItemName, setNewItemName] = useState('');
  const {addItem} = formMethods();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) return toast.error('Empty Input Field');
    addItem(newItemName);
    setNewItemName('');
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input type="text" className='form-input' value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
        <button type="submit" className='btn'>Add Item</button>
      </div>
    </form>
    <Items/>
    </>
  )
}

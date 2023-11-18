import { createContext, useContext, useState } from "react";
import MyForm from "./MyForm";
import {nanoid} from 'nanoid';
import {ToastContainer, toast} from 'react-toastify';

const FormContext = createContext();

export const formMethods = () => useContext(FormContext);

const setLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
}

const getLocalData = () => {
  let list = localStorage.getItem('items');
  if (list) {
    JSON.parse(list);
  } else {
    list = [];
  }
  return list
}

const defaultList = JSON.parse(localStorage.getItem('items')) || [];

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id:nanoid(), 
    }
    setLocalStorage([...items, newItem]);
    setItems([...items, newItem]);
    toast.success('New item added to the list');
  }

  const removeItem = (id) => {
    const newData = items.filter((item) => item.id !== id);
    setItems(newData);
    setLocalStorage(newData);
    toast.success('Item deleted')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = {...item, completed: !item.completed}
        return newItem
      }
      return item
    });
    setItems(newItems);
    setLocalStorage(newItems);
  }
  return <div className="section-center">
    <FormContext.Provider value={{addItem, listItems:items, removeItem, getLocalData, editItem}}>
      <ToastContainer position="top-center"/>
      <MyForm/>
    </FormContext.Provider>
  </div>;
};

export default App;

import Form from "./Form";
import ColorList from "./ColorList";
import Values from 'values.js'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  
  const addColor = (color) => {
    try {
      setColors(new Values(color).all(10))
      toast.success("color added");
    } catch (error) {
      toast.error("Invalid Color");
    }
  }

   return <main>
    <Form addColor={addColor} />
    <ColorList colors={colors} />
    <ToastContainer position='top-center' />
  </main>;
};
export default App;

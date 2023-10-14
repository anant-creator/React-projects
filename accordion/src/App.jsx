import React, {useState} from "react";
import data from './data';
import Questions from "./Questions";


const App = () => {
  const [questions, setQuestions] = useState(data);
  return <Questions questions={questions} />;
};
export default App;

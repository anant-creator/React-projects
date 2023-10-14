import React, {useState} from "react";
import data from './data';
import Questions from "./Questions";


const App = () => {
  const [allQuestions, setAllQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleActive = (id) => {
    setActiveId(id);
  };

  return <Questions allQuestions={allQuestions} activeId={activeId} toggleActive={toggleActive} />;
};
export default App;

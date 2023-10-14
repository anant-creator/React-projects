import React from 'react';
import Question from './Question';

const Questions = ({allQuestions, activeId, toggleActive}) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {allQuestions.map((question) => {
        return (
          <Question key={question.id} {...question} activeId={activeId} toggleActive={toggleActive}></Question>
        );
      })}
    </section>
  )
}

export default Questions;
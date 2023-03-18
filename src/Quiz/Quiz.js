import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const quiz = useLoaderData();
  //console.log(quiz);
  return (
    <div className='grid grid-cols-1'>
      {
        <Question ques={quiz.data}></Question>
      }
    </div>
  );
};

export default Quiz;
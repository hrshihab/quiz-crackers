import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
  const quiz = useLoaderData();
  const {id,questions} = quiz.data;
  //console.log(quiz.data);
  return (
    <div className='grid grid-cols-1'>
      {
        questions.map(ques=> <Question
        ques={ques}
        ></Question>)
      }
    </div>
  );
};

export default Quiz;
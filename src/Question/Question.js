import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Question = ({ques}) => {
  const {questions} = ques;
  //console.log(questions[0]);

  const [score,setScore] = useState(0);
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [showScore,setShowScore] = useState(false);

  const handleAnsCheck = (id,index) => {
      const check = questions[currentQuestion].options[index]
      console.log( );
      if(questions[currentQuestion].correctAnswer === check){
        setScore(score+1);
      }
      const nextQuestion = currentQuestion + 1;
      if(nextQuestion<questions.length)
      {
        setCurrentQuestion(nextQuestion);
      }
      else{
        setShowScore(true);
        
      }
  }
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  }
  
  return (
    <div >
      {
        showScore ? (
          <div className='grid grid-cols-1 p-20 font-bold text-2xl'>
            You have score {score} out of {questions.length}
            <button onClick={()=> resetQuiz()} className='mt-16 w-24 mx-auto border-2 border-gray-600 px-4 py-2 rounded-2xl font-bold bg-sky-600 text-white' type="submit"><Link to='/'>Reset</Link>
            </button>
          </div>
        ):
        <>
        <div>
          
          <div>
                <div className='mt-8'>
                  <span>{currentQuestion+1}</span>/{questions.length}
                </div>
                <div className=' font-bold text-4xl p-6'>
                  {
                    questions[currentQuestion].question
                  }
                </div>

          </div>
         
          <div>
            {
            
              questions[currentQuestion].options.map((opt,index) => (
                <button  onClick={()=>handleAnsCheck(opt,index) } className='border-purple-600 border-4 bg-gray-600 text-white p-5
                grid grid-cols-1 gap-5 my-4 rounded-full mx-auto font-medium drop-shadow-lg cursor-pointer  hover:bg-purple-700 hover:opacity-85 justify-center '> {opt}</button>)
              )
            }
          </div>




        </div>
        
        </>
      }

     
      
    </div>
  );
};

export default Question;
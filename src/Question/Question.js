import React from 'react';

const Question = ({ques}) => {
  const {options,id,question,correctAnswer} = ques;
  console.log(ques);
  return (
    <div className='border-2 w-1/2 mx-auto'>
      <h2 className='text-xl py-4 font-semibold'>{question}</h2>
      
      <div className="text-md  flex-wrap grid grid-cols-2 items-end justify-center border-2 gap-2 px-2 py-4">
    <div class="flex  items-center mr-4">
        <input id={id+1} type="radio" value="" name="colored-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for={id+1} class="ml-2  font-medium text-gray-900">{options[0]}</label>
    </div>
    <div class="flex items-center mr-4">
        <input id={id+2} type="radio" value="" name="colored-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for={id+2} class="ml-2  font-medium text-gray-900 ">{options[1]}</label>
    </div>
    <div class="flex items-center mr-4">
        <input checked id={id+3} type="radio" value="" name="colored-radio" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for={id+3} class="ml-2  font-medium text-gray-900 ">{options[2]}</label>
    </div>
    <div class="flex items-center mr-4">
        <input id={id+4} type="radio" value="" name="colored-radio" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for={id+4} class="ml-2  font-medium text-gray-900 ">{options[3]}</label>
    </div>
   

      </div>


     
      
    </div>
  );
};

export default Question;
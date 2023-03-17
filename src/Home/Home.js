import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const topics = () => {
     navigate('/topics');

  }
  return (
    <div className='p-20 '>
     <div >
          <div class=" rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2">
            <div class=" rounded-full bg-gray-50 back py-8 md:py-20">
              <h2 className=' text-6xl  drop-shadow-xl text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  md:text-9xl font-extrabold pb-10'>Quiz Crackers</h2>
              <h5 className=' text-2xl  md:text-4xl drop-shadow-2xl text-transparent bg-clip-text  bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-bold'>Boost Up Your Brain Muscle</h5>
            
             </div>
          </div>
      </div>
       <button type="button" onClick={topics} className="mt-20 text-xl px-36 py-3 text-white font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  rounded-full">
            Go
          </button>
    </div>
  );
};

export default Home;<h2>This is Home</h2>
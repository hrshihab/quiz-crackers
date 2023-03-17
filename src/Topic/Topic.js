import React from 'react';
import { Link } from 'react-router-dom';
const Topic = ({topic}) => {
  const {id,name,logo,total} = topic;
  return (
    <div className='border-2 rounded-lg my-10 mx-4'>
      
      <img className='object-contain mb-5' src={logo} alt="" />
      <h2>Name : {name}</h2>
      <h3>Total Quiz : {total}</h3>
      <Link to={`quiz/${id}`}>
      <button className=' bg-blue-600 text-white border-2 px-4 rounded-md my-3'>Go</button>
      </Link>
     
      
    </div>
  );
};

export default Topic;
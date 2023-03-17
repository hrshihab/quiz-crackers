import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
  const topics = useLoaderData();
  const {data} = topics;
  //console.log(data);
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 '>
      {
        data.map(topic=><Topic
        topic={topic}
        ></Topic>)
      }
    </div>
  );
};

export default Topics;
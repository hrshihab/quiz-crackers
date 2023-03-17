import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
   <nav className=' border-2 border-red-600   flex  py-4 justify-between px-2 md:px-12'>
    <div>
      <Link to='/' className=' text-3xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 '>Quiz-Crackers</Link>
    </div>
    <div className=' border-2 border-red-600 font-medium  flex md:justify-evenly justify-between w-1/2 text-xl '>
      <Link to='/topics'>Topics</Link>
      <Link to={'/blogs'}>Blogs</Link>
      <Link to={'/about'}>About</Link>
    </div>
   </nav>
  );
};

export default Header;
import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 ml-8 mr-10">
      <h1>
        <span className='text-2xl font-bold'>Hello </span>
        <br />
        <span className="font-extrabold text-3xl ">Rajkumar 👋</span>
      </h1>
      <button 
      className="text-lg bg-red-600  px-2 py-1 font-bold rounded-lg hover:bg-red-700"
      >
        Log In
      </button>
    </div>
  );
}

export default Header

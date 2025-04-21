import React, { useState } from 'react';

const ColorChanger = () => {
  const [Color, setColor] = useState('#ffffff'); 

  return (
    <div className="fixed w-full h-screen" style={{ backgroundColor: Color }}>
      <div className=' flex justify-center '>
      <div className=" fixed w-fit bottom-12 flex flex-wrap justify-center bg-black gap-2.5 p-4 shadow-lg rounded-4xl ">
        <button
          className="px-4 py-2  bg-red-500 text-white hover:bg-red-600 transition rounded-4xl"
          onClick={ () =>setColor('#ef4444')}
        >
          red
        </button>
        <button
          className="px-4 py-2  bg-green-500 text-white hover:bg-green-600 transition rounded-4xl"
          onClick={ () =>setColor('#10b981')}
        >
          green
        </button>
        <button
          className="px-4 py-2  bg-blue-500 text-white hover:bg-blue-600 transition rounded-4xl"
          onClick={() => setColor('#3b82f6')}
        >
          blue
        </button>
        <button
          className="px-4 py-2  bg-amber-950 text-white hover:bg-amber-950 transition rounded-4xl"
          onClick={() => setColor("brown")}
        >
          brown
        </button>
        <button
          className="px-4 py-2  bg-pink-500 text-white hover:bg-pink-500 transition rounded-4xl"
          onClick={() => setColor("pink")}
        >
          pink
        </button>
      </div>
      </div>
    </div>
  );
};

export default ColorChanger;

import React from 'react';
import { useState } from 'react';
import { FaHammer } from 'react-icons/fa';
import myImg from '../assets/myimg.jpg';

function GlassBreak() {

    const [count, setCount] = useState(0);
    const [isTapping, setIsTapping] = useState(false);

    const hammerClick = ()=>{
        if (count < 3){
            setIsTapping(true);
            setTimeout (()=> {
                setIsTapping(false);
            },300);
        setCount( count +1);
        }
    }
  return (
    <div className='relative w-80 h-80 mx-auto mt-10'>
        <img
        src={myImg}
        alt='myimg'
        className='w-full h-full object-cover rounded-full'
        />

        {count < 3 && (
            <div className='absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm rounded-full z-10 transition-all duration-500'>
                {count > 0 && (
                    <img
                    src = {`/Crack${count}.png`}
                    alt='crack'
                    className='w-full h-full object-cover'
                    />
                )}
                </div>
        )}

        {count < 3 && (
            <button
            onClick={hammerClick}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl text-gray-700 z-20 transform transition-transform duration-300 ${
            isTapping ? 'animate-tap' : ''
          }`}
            >
                <FaHammer />
            </button>
        )}
    </div>
  );
};

export default GlassBreak;
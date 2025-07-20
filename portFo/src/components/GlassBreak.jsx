import React from 'react';
import { useState } from 'react';
import { FaHammer } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
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
    <motion.div 
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className='relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto mt-6 sm:mt-10'
    >
        <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        src={myImg}
        alt='myimg'
        className='w-full h-full object-cover rounded-full shadow-2xl border-4 border-white cursor-hover'
        />

        {count < 3 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm rounded-full z-9 transition-all duration-500'
            >
                {count > 0 && (
                    <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src = {`/Crack${count}.png`}
                    alt='crack'
                    className='w-full h-full object-cover'
                    />
                )}
            </motion.div>
        )}

        {count < 3 && (
        <>
          <AnimatePresence>
            {count === 0 && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-12 sm:bottom-14 left-1/2 -translate-x-1/2 text-xs sm:text-sm text-gray-800 font-semibold z-20 text-center px-2 bg-white/80 rounded-lg py-1"
              >
              Hit the hammer symbol 3 times
              </motion.p>
            )}
          </AnimatePresence>
          
            <motion.button
            onClick={hammerClick}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.8, rotate: -10 }}
            animate={{ 
              y: isTapping ? -10 : 0,
              rotate: isTapping ? 15 : 0
            }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl lg:text-4xl text-gray-700 z-20 cursor-hover bg-white/80 rounded-full p-2 shadow-lg hover:shadow-xl"
            >
                <FaHammer />
            </motion.button>
        </>
        )}
    </motion.div>
  );
};

export default GlassBreak;
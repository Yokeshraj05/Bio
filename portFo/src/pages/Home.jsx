import React from 'react'
import GlassBreak from '../components/GlassBreak'

function Home() {
  return (
    <>
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300'>
    <GlassBreak />
        <h1 className='text-5xl font-bold font-serif mt-16'>Hi, I'm Yokesh</h1>
        <p className='text-xl mt-4'>Frontend Developer | React Enthusiast</p>
        </div>
    </>
  )
}

export default Home
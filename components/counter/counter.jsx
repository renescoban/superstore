'use client'

import {useState} from 'react';

const page = () => {

  

  const [count, setCount] =useState(0);
  return (
    <div className=" my-5 py-5 border shadow flex justify-center">
        
        <div className=" text-center py-2 my-5 w- max-w-screen-sm rounded border relative bg-white ">
{/*  Shadow Gradient */}
        <div  class="absolute -inset-2 z-[-1] rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur" ></div>

          <h1 className='my-2 py-1 text-4xl '>Counter</h1>
          <div className=' mt-5 px-8'>
            <h2 className='my-5 text-5xl font-bold'>{count}</h2>
            <button className='counter_btn hover:text-white hover:bg-black' 
            onClick={() => setCount(count + 1)} >Increment</button>
            <button
              className='counter_btn hover:text-white hover:bg-black'
              onClick={() => setCount(count - 1)}
              disabled={count === 0}>
              Decrement
            </button>
            <button
              className='counter_btn hover:text-white hover:bg-black'
              onClick={() => setCount(0)}
              disabled={count === 0}>
              Reset
            </button>
          </div>
        </div>
    </div>
  )
}

export default page
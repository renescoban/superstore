'use client'
import { useState } from "react";
import Square from "@components/rdm/square";

const Squares = () => {
    

    const SQUARES_NR = 120;

    const threeHeaders = Array.from({length: SQUARES_NR}, (_, index) => {
        return <Square key={index} />;
      });




  return (
    <div className='flex flex-wrap w-[233px] p-4 rounded-md bg-neutral-700'>
        {threeHeaders}
    </div>
  )
}






export default Squares
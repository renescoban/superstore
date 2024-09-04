'use client'
import { useState, useEffect } from "react"

const page = () => {
const [label, setLabel]=useState('122')

useEffect(() => {
  const interval = setInterval(() => {
    setLabel(prevLabel => {
      const newValue = parseInt(prevLabel) + 1;
      return newValue.toString();
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <div className="container mt-8 ml-5">
        <p className="text-7xl ">{label}</p>
    </div>
  )
}

export default page
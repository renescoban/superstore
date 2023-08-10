'use client'
import { useState } from "react"

const page = () => {
const [label, setLabel]=useState('122')




  return (
    <div className="container mt-8 ml-5">
        <p className="text-7xl ">{label}</p>
    </div>
  )
}

export default page
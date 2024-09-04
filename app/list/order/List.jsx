'use client'
import { useState, useEffect } from "react"

const List = () => {
  const [items, setItems] = useState(["D item", "G item", "A item", "C item", "B item"])
  const [numbers, setNumbers] = useState([3, 5, 15, 1, 84, 7, 4, 43, 40])

  function sortListA(){
    const sortedNumber = [...numbers].sort((a, b) => a - b)

    setNumbers( sortedNumber )
  }

  function sortListB(){
    const sortedItem = [...items].sort()

    setItems( sortedItem )
  }



  return (
    <div className='container flex gap-5 '>
      <ul>
        {numbers.map((number, index) => (<li key={index}>{number}</li>))}
      </ul>
      <ul>
        {items.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
      <div className="flex flex-col gap-2">
        <button className="outline_btn"  onClick={sortListA}>sort 1</button>
        <button className="outline_btn" onClick={sortListB}>sort 2</button>
      </div>
    </div>
  )
}

export default List
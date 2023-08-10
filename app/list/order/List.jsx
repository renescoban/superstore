'use client'
import { useState } from "react"

const List = () => {
    const [items, setItems]= useState(["D item", "G item", "A item", "C item", "B item"])
const [numbers, setNumbers]= useState([3,5,15,1,84,7,4,43,40])


let printItems = items.sort()
let printnumbers = numbers.sort((a, b) => a - b)

const listItems =printItems.map((item, index) => (  <li key={index}>{item}</li>  ))
const listNumbers = printnumbers.map((number,index) => (  <li key={index}>{number}</li>  ))
  return (
    <div className='container flex gap-5 '>
        <ul>
          { listNumbers}
        </ul>
        <ul>
          { listItems}
        </ul>
        <div className="flex flex-col gap-2">
          <button className="outline_btn" >sort 1</button>
          <button className="outline_btn">sort 2</button>
        </div>
    </div>
  )
}

export default List
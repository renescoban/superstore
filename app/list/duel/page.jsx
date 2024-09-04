"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Duel() {
  const [round, setRound] = useState("1");
  const [items, setItems] = useState([]);
  const [roundItems, setRaoundItems] = useState([]);
  const [winner, setWinner] = useState(null);

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  useEffect(() => {
    router.push(pathname + '?' + createQueryString('round', round))
  }, ["", round])

  const handleChange = (e) => {
    const newItem = e.target.value;
    setItems([...items, newItem]);

  };



  const chooseWinner = () => {
    const firstIndex = Math.floor(Math.random() * items.length);
    let secondIndex = Math.floor(Math.random() * items.length);
    // Ensure secondIndex is different from firstIndex
    while (secondIndex === firstIndex) {
      secondIndex = Math.floor(Math.random() * items.length);
    }
    const winnerIndex = Math.random() < 0.5 ? firstIndex : secondIndex;
    setWinner(items[winnerIndex]);
  };



  return (
    <div className='container'>
      <h1>Duel Winner</h1>
      <input className='bg-slate-300 border' type="text" onChange={handleChange} />
      <button onClick={chooseWinner}>Duel!</button>
      {winner && <h2>The winner is: {winner}</h2>}

      {winner ? (
        <div className="w-full flex ">
          <Wrapper choice={""} />
        </div>
      ) : (
        <div className='flex items-center justify-center gap-5 bg-slate-200'>
          <Wrapper name={"Choice 1"} choice={""} />
          <span className='fixed bg-yellow-300'>VS</span>
          <Wrapper name={"Choice 2"} choice={""} />
        </div>
      )}
      {

      }

      <div className='flex divide-x-2'>
        <ul className='flex-1'>
          {items.sort(() => Math.random() - 0.5).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <ListFilter />

      </div>
    </div>
  );
};



function Wrapper({ name, choice, img }) {

  return (
    <button id='choice-2' className='flex-1 '>{name}</button>
  )
}

function ListFilter() {
  const [list, setList] = useState([
    { id: 1, name: "Kei" },
    { id: 2, name: "Shau" },
    { id: 3, name: "Chi" },
    { id: 4, name: "Lmiu" },
  ])

  function removeList(id) {
    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  }


  return (
    <ul className='flex-1'>
      {
        list.map((todo) => {
          return <li key={todo.id}> {todo.name}
            <button onClick={() => removeList(todo.id)} className='ml-3 font-mono'>X</button>
          </li>
        })
      }

    </ul>
  )
}
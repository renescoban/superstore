"use client"
import React from 'react'
import { useState } from 'react'

export default function page() {
    const [totalMoney, setTotalMoney] = useState(2000)
    const [products, setProducts] = useState([{ name: 'Luxury Yacht', cost: 10, amount: 0 }, { name: 'Private Island', cost: 50, amount: 0 }, { name: 'Mansion', cost: 20, amount: 0 },])
    let moneyT = "$"

    const [amount, setAmount] = useState(1)


    const handleBuy = (index, amountToBuy) => {
        const product = products[index];
        const totalCost = product.cost * amountToBuy;

        if (totalMoney >= totalCost) {
            setTotalMoney(totalMoney - totalCost);
            setProducts(products.map((item, i) => {
                if (i === index) {
                    return { ...item, amount: item.amount + amountToBuy };
                }
                return item;
            }));
        } else {
            alert('Not enough money!');
        }
    };
    const handleSell = (index, amountToSell) => {
        const product = products[index];
        if (product.amount >= amountToSell) {
            setTotalMoney(totalMoney + product.cost * amountToSell);
            setProducts(products.map((item, i) => {
                if (i === index) {
                    return { ...item, amount: item.amount - amountToSell };
                }
                return item;
            }));
        } else {
            alert('Not enough items to sell!');
        }
    };

    return (
        <div className='mt-16 w-full md:w-8/12 flex flex-col gap-9 justify-center items-center'>

            <img className=' rounded-full' width={100} height={100} />
            <h4 className='text-2xl font-semibold'>Spend { }'s Money</h4>
            <p className='bg-pink-600 text-white text-4xl font-semibold  text-center w-full p-4'>{moneyT}{totalMoney}</p>

            <div className='w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>




                {products.map((item, index) => (
                    <div key={index} className=' p-5 text-center  block'>
                        <div className='wrapper'>
                            <img className='m-auto my-4' src="" alt="product" />
                            <h5 className='text-xl font-bold text-neutral-900'>{item.name}</h5>
                            <h6 className='text-xl font-semibold text-neutral-900'> {moneyT}{item.cost}</h6>
                            <span>Amount: {item.amount}</span>
                            <div className='grid grid-cols-3 gap-3 mt-6'>
                                <button className='bg-emerald-300 rounded font-semibold py-2 hover:bg-emerald-500      disabled:bg-slate-300'
                                    onClick={() => handleSell(index, parseInt(event.target.nextSibling.value))} 
                                >Sell</button>
                                <input className='text-center border rounded font-semibold border-green-950 '
                                   type="number" min="0" defaultValue="0" /> 
                                   {/* onChange={() => handleBuy(index, parseInt(event.target.value))}  */}
                                <button className='rounded font-semibold bg-violet-400 hover:bg-violet-600'
                                    onClick={() => handleBuy(index, parseInt(event.target.previousSibling.value))}
                                >Buy</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

"use client"

import { useState, useEffect } from "react";
const randQuote = () => {


    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
    let items = ["asd", "aasdawdd", "asdaw", "asdGa", "fhjawes"];

    const [item, setItem] = useState({
        quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur nisi pariatur qui porro non, magnam amet sunt quam in quibusdam aspernatur repellat, obcaecati dolores nostrum aliquid optio nihil voluptatem!",
        author: "Author",
        color: "#BDBB99"
    });

    function handleClick() {
        let rando = Math.floor(Math.random() * quotes.length)
        let randomAuthor = quotes[rando].author;
        let randomColor = quotes[rando].color;
        let randomQuote = quotes[rando].quote;


        setItem({
            author: randomAuthor,
            color: randomColor,
            quote: randomQuote
        })
    }

    
    useEffect(() => {
        document.body.style.backgroundColor = item.color
    }, [item.color]);

    let asd = { backgroundColor: item.color }
    let quotes = [
        {
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            color: getRandomColor()
        },
        {
            quote: "Be yourself; everyone else is already taken.",
            author: "Oscar Wilde",
            color: getRandomColor()
        },
        {
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
            color: getRandomColor()
        },
        {
            quote: "In three words I can sum up everything I've learned about life: it goes on.",
            author: "Robert Frost",
            color: getRandomColor()
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill",
            color: getRandomColor()
        },
        {
            quote: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt",
            color: getRandomColor()
        },
        {
            quote: "You miss 100% of the shots you don't take.",
            author: "Wayne Gretzky",
            color: getRandomColor()
        },
        {
            quote: "The best way to predict the future is to create it.",
            author: "Peter Drucker",
            color: getRandomColor()
        },
        {
            quote: "Life is what happens when you're busy making other plans.",
            author: "John Lennon",
            color: getRandomColor()
        },
        {
            quote: "The only thing we have to fear is fear itself.",
            author: "Franklin D. Roosevelt",
            color: getRandomColor()
        },
        {
            quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
            author: "Ralph Waldo Emerson",
            color: getRandomColor()
        },
        {
            quote: "Success usually comes to those who are too busy to be looking for it.",
            author: "Henry David Thoreau",
            color: getRandomColor()
        },
        {
            quote: "You can't use up creativity. The more you use, the more you have.",
            author: "Maya Angelou",
            color: getRandomColor()
        },
        {
            quote: "It does not matter how slowly you go as long as you do not stop.",
            author: "Confucius",
            color: getRandomColor()
        },
        {
            quote: "The only source of knowledge is experience.",
            author: "Albert Einstein",
            color: getRandomColor()
        },
        {
            quote: "The best revenge is massive success.",
            author: "Frank Sinatra",
            color: getRandomColor()
        },
        {
            quote: "I have not failed. I've just found 10,000 ways that won't work.",
            author: "Thomas A. Edison",
            color: getRandomColor()
        },
        {
            quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
            author: "Jordan Belfort",
            color: getRandomColor()
        },
        {
            quote: "If you can't explain it simply, you don't understand it well enough.",
            author: "Albert Einstein",
            color: getRandomColor()
        },
        {
            quote: "You are never too old to set another goal or to dream a new dream.",
            author: "C.S. Lewis",
            color: getRandomColor()
        }
    ];

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div>
            <div className="flex justify-center text-center mb-12 px-8" ><div className="p-3 rounded-md" style={asd}><button className='bg-white rounded-xl  px-5 border' onClick={handleClick}>New Quote</button></div></div>

            <div className="min-w-screen rounded-lg  flex flex-col items-center justify-center px-5 py-5 max-w-screen-sm" style={asd}>
                <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800" >
                    <div className="w-full pt-1 pb-5">
                        <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                            <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
                        </div>
                    </div>
                    <div className="w-full mb-10">
                        <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
                        <p className="text-sm text-gray-600 text-center px-5">{item.quote}</p>
                        <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                    </div>
                    <div className="w-full" >
                        <p className="text-md text-indigo-500 font-bold text-center">{item.author}</p>
                        <p className="text-xs text-gray-500 text-center">{item.smal}</p>
                    </div>

                </div>

                <p className="text-xs text-gray-500 text-center mt-3">@scott.windon</p>
            </div>
        </div>

    )




}

export default randQuote
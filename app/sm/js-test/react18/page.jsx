"use client";
import { useState } from "react";
export default function Home() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const handleClick = () => {
        setA(Math.random() * 100);
        setB(Math.random() * 100);
        setC(Math.random() * 100);
    };
    return (

        <main className="flex h-96 flex-col items-center justify-between p-24">
            A: {a}, B: {b}, C: {c}, <button onClick={handleClick}>Click</button> 
        </main>
    );
}

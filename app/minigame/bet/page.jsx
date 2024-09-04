"use client"
import { useEffect, useState } from "react"
import React from 'react'
import BetSide from "./betSide"

export default function page() {
    const [blueSide, setBlueSide] = useState({ side: "blue", totalValue: 0, totalCommit: 0, maxBet: 0 })
    const [redSide, setRedSide] = useState({ side: "red", totalValue: 0, totalCommit: 0, maxBet: 0 })
    const [selectedSide, setSelectedSide] = useState('');
    const [betAmount, setBetAmount] = useState(0);
    const [userPoints, setUserPoints] = useState(1000);
    
    const [timerSeconds, setTimerSeconds] = useState(3);
    const [timerRunning, setTimerRunning] = useState(false);
    const [winner, setWinner] = useState('');

    const handleBetChange = (event) => {
        const amount = parseInt(event.target.value);
        setBetAmount(amount);
    };
    const handleSideChange = (event) => {
        setSelectedSide(event.target.value);
        console.log(selectedSide)
    };

    const handlePlaceBet = () => {

        if (betAmount > 0 && betAmount <= userPoints && selectedSide) {
            let newMaxBet;
            switch (selectedSide) {
                case "blue":
                    newMaxBet = Math.max(blueSide.maxBet, betAmount);
                    setBlueSide(prev => ({
                        ...prev, totalValue: prev.totalValue + betAmount, totalCommit: prev.totalCommit + 1, maxBet: newMaxBet
                    }))
                    break
                case "red":
                    newMaxBet = Math.max(redSide.maxBet, betAmount);
                    setRedSide(prev => ({
                        ...prev, totalValue: prev.totalValue + betAmount, totalCommit: prev.totalCommit + 1, maxBet: newMaxBet
                    }))
                    break
            }
            //setBetAmount(0);
        }
    };

    const handleStartTimer = () => {
        setTimerRunning(true);
    };

    const handleEndTimer = () => {
        setTimerRunning(false);
        setWinner('');
    };

    useEffect(() => {
        let timer;
        if (timerRunning) {
            if (timerSeconds > 0 && winner === '') {
                timer = setTimeout(() => {
                    // Decide the winner here
                    const randomWinner = Math.random() < 0.5 ? 'blue' : 'red';
                    setWinner(randomWinner);
                }, timerSeconds * 1000);
            }
        }
        return () => clearTimeout(timer);
    }, [timerSeconds, winner, timerRunning]);

    return (

        <div className='my-7'>
            <div className="flex gap-1 ">
                <div className="text-right">blue side
                    <BetSide side={blueSide} />
                </div>

                <div>divider</div>

                <div className="">red side
                    <BetSide side={redSide} />
                </div>
            </div>
            <div className="my-5 text-center">
                <h1>Bet System</h1>
                <p>Your Points: {userPoints}</p>
                <input type="number" min="1" value={betAmount} onChange={handleBetChange} />
                <div className="my-3">
                    <input type="radio" id="blue" name="side" value="blue" checked={selectedSide === 'blue'} onChange={handleSideChange} />
                    <label className="p-2 mr-2" htmlFor="blue">Blue</label>
                    <input type="radio" id="red" name="side" value="red" checked={selectedSide === 'red'} onChange={handleSideChange} />
                    <label className="p-2" htmlFor="red">Red</label>
                </div>
                <button onClick={handlePlaceBet}>Place Bet</button>
            </div>
            {winner && <p>The winner is: {winner}</p>}
            <div>
                <button onClick={handleStartTimer} disabled={timerRunning}>Start Timer</button>
                <button onClick={handleEndTimer} disabled={!timerRunning}>End Timer</button>
            </div>
        </div>
    )
}

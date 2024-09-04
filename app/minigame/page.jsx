"use client"

import { useState, useEffect } from "react"
import * as Progress from '@radix-ui/react-progress'
import { StarFilledIcon } from "@radix-ui/react-icons"

const page = () => {
    const identity = {
        id: 1,
        name: "Juan",
        gender: "fade",
        pp: "",
        exp: 88,
        level: 1,
        class: "Technical Writer",
        skills: ["photography", "baseball", "birdwatchingaasds", "Kekksdlis", "Asda sae"],
        rarity: 3,
        baseHealth: 25,
        baseAttack: 13,
        baseDefense: 11,
        health: 22,
        max_health: 25,
        Attack: 7,
        Defense: 5,
    };
    let enemy = {
        type: "orc",
        damage: 3,
        heal: 4,
        Health: 11,
        Attack: 3,
        Defense: 2,
        expOnDeath:4
    }
    const multiplier = 1.13;
    const baselevelHold = [50, 78, 111, 135, 157, 188, 225, 300, 400, 520, 660];


    const [character, setCharacter] = useState(  JSON.parse(localStorage.getItem('fChar'))  )
    const [progress, setProgress] = useState(healthPercentage(character.health, character.max_health));
    const [levelProgress, setlevelProgress] = useState(33);

    
    function updateStatsOnLevelUp() {
        var maxHealthX = parseInt(character.baseHealth * multiplier * (character.level / 10 + 1))
        var AttackX = parseInt(character.baseAttack * multiplier * (character.level / 10 + 1))
        var DefenseX = parseInt(character.baseDefense * multiplier * (character.level / 10 + 1))
        setCharacter(prevState => ({ ...prevState, max_health: maxHealthX, Attack: AttackX, Defense: DefenseX}))
    }

    function setInitialLevel() {
        let levelX = 0
        baselevelHold.forEach((base, i) => {
            if (baselevelHold[i] <= character.exp) {
                levelX = i + 1;
            }
        });
        setCharacter(prevState => ({ ...prevState, level: levelX }))
    }
    function setupCharacterInitialStatsBasedOnLevel() {
        setInitialLevel();
        updateStatsOnLevelUp();
    }

    function renderStars( x ){
        let renderedStars = [];
        for (let i = 0; i < x; i++){
            renderedStars.push(<StarFilledIcon width={18} />)
        }
   
        return renderedStars
    }

    const handleEnemyKill = (addExp) => {
        var updatedExp = character.exp + addExp;
        setCharacter(prevState => ({ ...prevState, exp: updatedExp }))
    }
    const handleHit = () => {
        var updatedHealth = Math.max(Math.floor(character.health - enemy.damage), 0)
        if (updatedHealth <= 0) kill();
        setCharacter(prevState => ({ ...prevState, health: updatedHealth }))
    }
    const handleHeal = ( healAmount ) => {
        var updatedHealth = Math.min(Math.floor(character.health + healAmount), character.max_health)
        setCharacter(prevState => ({ ...prevState, health: updatedHealth }))
    }
    function healthPercentage(health, maxHealth) {
        return parseInt((health / maxHealth) * 100)
    }

    function checkIfLevelsUp() {
        if (character.exp >= baselevelHold[character.level]) {
            character.level++
            return true
        } else false
    }

    useEffect(() => {
        renderStars( )
    }, [character.rarity]);
    useEffect(() => {
        setProgress(healthPercentage(character.health, character.max_health))
    }, [character.health, character.max_health]);
    useEffect(() => {
        if (checkIfLevelsUp()) {
            updateStatsOnLevelUp();
        }
        setlevelProgress(healthPercentage(character.exp - baselevelHold[character.level - 1], baselevelHold[character.level] - baselevelHold[character.level - 1]))
        console.log(character.exp + " X " + baselevelHold[character.level]);
    }, [character.exp, character.level]);


    useEffect(() => {
        //localStorage.setItem("fChar", JSON.stringify(identity))

        var retrievedObject = JSON.parse(localStorage.getItem('fChar'));
        //setCharacter(retrievedObject)

        setInitialLevel();
        // setupCharacterInitialStatsBasedOnLevel()
    }, [])


    function updateCharacter(cha) {
        localStorage.setItem("fChar", JSON.stringify(cha))
    }

    function kill() {
        console.log("KILKILKLIKLIILKLILKIKLKKILLLLL");
    }

    return (
        <div className="container bg-white">

            <div className="space-y-3">
                <p className="font-semibold text-2xl py-1 ">
                    {identity.name} <span className="font-serif text-sm pl-3">{identity.class}</span>
                </p>

                <div className="flex gap-4 items-end">
                    <img
                        src="https://via.assets.so/img.jpg?w=150&h=150&tc=black&bg=#cecece"
                        alt="placeholder image"
                    />
                    <div className="space-y-3  w-36 ">
                        <span className="flex mb-8 text-yellow-600"> { renderStars( character.rarity ) } </span>
                        <p className="flex justify-between font-medium">Health: <span>{character.health}</span></p>
                        <p className="flex justify-between font-medium">Attack: <span>{character.Attack}</span></p>
                        <p className="flex justify-between font-medium">Defense: <span>{character.Defense}</span></p>
                    </div>

                    <div className="bg-slate-600 w-1/2 ml-auto self-start">
                        <Rightside />
                    </div>
                </div>

                <div className="leading-none block ">
                    <label htmlFor="Health_Status" className="font-medium ">Health:  </label> <span> {character.health + "/" + character.max_health} </span>
                    <Bar key={1} value={progress} />
                    <button onClick={handleHit} className='PGButton'>Hit</button>
                    <button onClick={ ()=> handleHeal(2) } className='PGButton'>Heal</button>
                </div>
                <div className="leading-none block ">
                    <label htmlFor="Level_Progress_Status" className="font-medium ">Level {character.level}:  </label> <span> {character.exp + "/" + baselevelHold[character.level]} </span>
                    <ExpBar key={2} value={levelProgress} />
                </div>

                <ul className="flex justify-center items-center flex-wrap w-80 gap-2 text-sm select-auto">
                    {identity.skills.map((skill, i) => <li key={i} className="dark:bg-slate-500 bg-slate-300 px-1 rounded-md">{skill}</li>)}
                </ul>

            </div>

            <hr />

            <Enemy enemy={enemy} func={handleEnemyKill} />


        </div>
    )
}


function Bar({ value }) {
    return (
        <Progress.Root
            className='overflow-hidden bg-black rounded-lg h-1 w-80'
            value={value}     >
            <Progress.Indicator className='bg-red-600 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]'
                style={{ transform: `translateX(-${100 - value}%)` }} />
        </Progress.Root>
    )
}
function ExpBar({ value }) {

    return (
        <Progress.Root key={3321}
            className='overflow-hidden bg-black rounded-lg h-1 w-80'
            value={value}    >
            <Progress.Indicator className='bg-green-600 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]'
                style={{ transform: `translateX(-${100 - value}%)` }} />
        </Progress.Root>
    )
}


function Enemy({ enemy, func }) {
    return (
        <div><h2>Enemies</h2>
            <div class="flex gap-3 justify-end ">
                <div class="p-2 max-w-56 border border-slate-900">
                    <img id="enemy-img"
                        src="https://via.assets.so/img.jpg?w=120&h=120&tc=black&bg=#cecece"
                        alt="placeholder image"
                    />
                    <h4 id="enemy-name" class="font-semibold  py-1">Name <span> orc</span></h4>
                    <p id="enemy-health" class="flex justify-between text-sm font-medium leading-none">Health: <span id="enemy-health">{enemy.Health}</span></p>
                    <p id="enemy-attack" class="flex justify-between text-sm font-medium leading-none">Attack: <span id="enemy-attack">{enemy.Attack}</span></p>
                    <p id="enemy-defense" class="flex justify-between text-sm font-medium leading-none">Defense: <span id="enemy-defense">{enemy.Defense}</span></p>

                    <button id="characterAttack" class="px-2 py-1 mt-2 bg-red-600 hover:bg-red-500 rounded-lg"
                        onClick={() => func(enemy.expOnDeath)}
                    >Attack</button>

                </div>

            </div>
        </div>
    )
}

function Rightside() {
    return (
        <div>time</div>
    )
}
export default page
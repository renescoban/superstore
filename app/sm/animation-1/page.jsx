'use client'
import '/styles/main.scss'
import { gsap } from "gsap";
import React from "react";
import SplitType from 'split-type'

const { useEffect, useState } = React;


const page = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 })
    }
    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
    };


 
    useEffect(() => {
        gsap.to(".ani2", {
            duration: 1.4,
            y: 0, stagger: 0.1,
            ease: "power2"
        })

        const textLines = document.querySelectorAll(".text3, .text4")
        textLines.forEach(textline => {
            const split = new SplitType(textline, {
                types: "chars"
            })
        })
            gsap.to('.char',{
               
            y: 20, stagger: 0.01,
            
            })
            console.log(textLines);
        

       
    }, []);





    return (
        <>
            <header className=' p-3 my-5 bg-slate-100'>                <h1>BBB</h1>            </header>
            <div className="container flex flex-col bg-slate-100">
                <div className='flex bg-slate-200 justify-between'>
                    <div className='flex flex-col'>
                        <div className='mask'>
                            <h1 className='ani1'>title</h1>
                        </div>
                        <div className='mask  '>
                            <p className='ani2'>Lorem ipsum dolor sit amet consectetur</p></div>
                        <div className='mask '>
                            <p className='ani2 text2' on>adipisicing elit. Magni doloribus delectus</p></div>
                        <div className='mask '>
                            <p className='ani2'>distinctio sint, quos quo nihil sunt adipisci!</p> </div>
                    </div>
                    <div className='self-end'>
                        <div className='overflow-hidden'> 
                        <p className='text3 text'>Lorem it consectetur adipisicing.</p></div>
                        <div className='overflow-hidden '> 
                        <p className='text4 text'>Lorem ipsum dolor sit.</p></div>
                    </div>
                </div>


                <div className='flex'>
                    <div className='box1 p-2 my-2 rounded-md' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        Hover Me
                    </div>
                </div>



            </div>
        </>
    )
}

export default page
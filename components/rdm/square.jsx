'use client'
import { useState } from "react"

const Square = () => {
    
    const [ bgColor, setbgColor ] = useState("#1d1d1d")
    const [styles, setStyles] =useState({
        backgroundColor: "#1d1d1d",
        boxShadow: "0 0 2px #000",
})
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

    let randomColor

    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const squareStyle = {
        backgroundColor: bgColor,
        boxShadow: "0 0 2px #000",
        
    }

   
    function onEnter() {
        randomColor =getRandomColor()
      setbgColor(getRandomColor)
      setStyles({
        backgroundColor: randomColor,
        boxShadow: `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`})

       // console.log("rand clor: " + randomColor);
       // console.log("func clor: " + getRandomColor());
    }
    function onLeave() {
        setbgColor("#1d1d1d")
        setStyles({
            backgroundColor: "#1d1d1d",
            boxShadow: "0 0 2px #000"})
    }



    return (  
        <button className="m-0.5 w-4 h-4 cursor-default shadow transition ease-in-out duration-[2s] hover:duration-0"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={styles} >
    </button>)
}


export default Square
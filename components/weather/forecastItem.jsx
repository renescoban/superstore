import React from 'react'

const forecastItem = () => {
    return (
        <div className="flex items-center justify-between bg-slate-200">
            <div className="flex flex-col text-center ">
                <p className=" " >{DateD + " " + months[DateM]}</p>
                <p className=" " >{new Date().toLocaleTimeString("tr-Tr", { hour: "2-digit", minute: "2-digit", hourCycle: "h24" })}</p></div>
            <div className="flex  items-center">
                <h1 className=" ">{(data.list[0].main.temp).toFixed()}°C</h1>
                <p>{data.list[0].weather[0].main}</p>
                <div>
                    <img id="wicon" className="" width="60" src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`} alt="weather icon">
                    </img>
                </div>
            </div>
        </div>
    )
}

export default forecastItem
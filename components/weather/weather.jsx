'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react';


const weather = () => {
    useEffect(() => {
        const api = 'https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=bd03b30b1ee77b9196f09703dae84c5a'
        axios.get(api).then((response) => {
            const weatherData = response.data;
            setData(weatherData)
            console.log(weatherData)
        }).catch(error => {
            console.error('Error fetching weather data:', error);
        })
    }, []);

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')


    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bd03b30b1ee77b9196f09703dae84c5a`

    // for entering location
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(apiurl).then((response) => {
                const weatherData = response.data;
                setData(weatherData)
                console.log(weatherData)
            }).catch(error => {
                console.error('Error fetching weather data:', error);
            })
            setLocation('')    //setting location to empty after entering location
        }
    }
    return (
        <>
            <div className="search mb-4">
                <input className='border bg-white   px-2 rounded  overflow-hidden box-border text-[14px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] '
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyDown={searchLocation}
                    placeholder='Enter Location'
                    type="text" />
            </div>
            <div className='container flex flex-col items-center '>
                <div className='border bg-slate-100 bg-opacity-50  shadow w-3/4 h-[55vh]  px-5   flex flex-col content-between'>
                    <div className="top flex justify-center gap-10 mt-3">
                        <div className="location ">
                            <p>{data.name}</p>
                        </div>
                        <div className="temp">
                            {data.main ? <h1>{(data.main.temp).toFixed()}°C</h1> : null}
                        </div>
                        <div className="description">
                            {data.weather ? <p>{data.weather[0].main}</p> : null}
                        </div>
                    </div>

                    {data.name !== undefined &&
                    // delete flex 
                        <div className="bottom  justify-around  text-center grid grid-cols-3 divide-x-2 mt-auto mb-3">
                            <div className="feels block ">
                                {data.main ? <p className=''>{data.main.feels_like.toFixed()}°C</p> : null}
                                <p>Feels Like</p>
                            </div>
                            <div className="humidity">
                                {data.main ? <p className=''>{data.main.humidity}%</p> : null}
                                <p>Humidity</p>
                            </div>
                            <div className="wind">
                                {data.wind ? <p className=''>{data.wind.speed * 1.60934.toFixed()} KPH</p> : null}
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default weather